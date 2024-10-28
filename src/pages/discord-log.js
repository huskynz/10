import fetch from 'node-fetch';
import { Client, GatewayIntentBits, REST, Routes } from 'discord.js';
import { CosmosClient } from '@azure/cosmos';
import AWS from 'aws-sdk'; // Import AWS SDK for R2

const DISCORD_BOT_TOKEN = import.meta.env.DISCORD_BOT_TOKEN;
const DISCORD_CHANNEL_ID = import.meta.env.DISCORD_CHANNEL_ID;
const DEV_ENV = import.meta.env.DEV_ENV === 'true';
const GUILD_ID = import.meta.env.GUILD_ID;

// Azure Cosmos DB Configuration
const cosmosClient = new CosmosClient(import.meta.env.COSMOS_CONNECTION_STRING);
const databaseName = import.meta.env.COSMOS_DB; // Replace with your database name
const containerName = import.meta.env.COSMOS_CONTNAME; // Replace with your container name
const container = cosmosClient.database(databaseName).container(containerName);

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});
const rest = new REST({ version: '10' }).setToken(DISCORD_BOT_TOKEN);

// Register commands with Discord
async function registerCommands() {
    const commands = [
        {
            name: 'clearlog',
            description: 'Clear all visitor logs from the current channel',
        },
        {
            name: 'traffic',
            description: 'Show traffic summary',
        },
        {
            name: 'logsummary',
            description: 'Show summary of recent visitor logs',
        },
        {
            name: 'exportlog',
            description: 'Export visitor logs as HTML',
        },
        {
            name: 'accesstime',
            description: 'Get the number of accesses for a specific IP address',
            options: [
                {
                    type: 3, // STRING type
                    name: 'ip',
                    description: 'IP address to check',
                    required: true,
                },
            ],
        },
    ];

    try {
        await rest.put(
            Routes.applicationGuildCommands(client.user.id, GUILD_ID),
            { body: commands }
        );
        console.log('Slash commands registered successfully.');
    } catch (error) {
        console.error('Error registering commands:', error);
    }
}

// Set bot presence
async function setBotPresence() {
    if (!client.isReady()) {
        console.error('Discord client is not ready.');
        return;
    }

    await client.user.setPresence({
        status: 'online',
        activities: [{ name: 'Getting Insights', type: 3 }],
    });
}

// Log visitor data
export async function logUserData(headers) {
    const ip = headers.get('x-forwarded-for') || headers.get('host') || 'Unknown IP';
    const userAgent = headers.get('user-agent') || 'Unknown';

    // Check if the IP already exists in Cosmos DB
    const query = `SELECT * FROM c WHERE c.ip = @ip`;
    const { resources: existingLogs } = await container.items.query({
        query,
        parameters: [{ name: '@ip', value: ip }]
    }).fetchAll();

    let visitorCount = 1;

    if (existingLogs.length > 0) {
        visitorCount = existingLogs[0].accessCount + 1; // Increment access count
        await container.item(existingLogs[0].id, existingLogs[0].id).replace({
            ...existingLogs[0],
            accessCount: visitorCount, // Update access count
        });
    } else {
        const visitorData = {
            id: `${Date.now()}`, // Unique ID based on timestamp
            timestamp: new Date().toISOString(),
            ip,
            userAgent,
            accessCount: 1, // Initialize access count
        };

        await container.items.create(visitorData);
    }

    const content = `
    🚨 New ${DEV_ENV ? "Dev" : "Production"} visitor detected! 🚨
    **This user has accessed the ${DEV_ENV ? "Dev" : "Production"} site**: **${visitorCount}** **times**
    **IP Address**: ${ip}
    **User-Agent**: ${userAgent}
    **IP Info**: https://whatismyipaddress.com/ip/${ip}
    `;

    try {
        if (!client.isReady()) await client.login(DISCORD_BOT_TOKEN);
        await setBotPresence();

        const response = await fetch(`https://discord.com/api/v10/channels/${DISCORD_CHANNEL_ID}/messages`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bot ${DISCORD_BOT_TOKEN}`,
            },
            body: JSON.stringify({ content }),
        });

        if (!response.ok) {
            console.error('Failed to send message to Discord:', response.statusText);
        } else {
            console.log('Message sent to Discord successfully!');
        }
    } catch (error) {
        console.error('Error logging visitor data:', error);
    }
}

// Command interaction handler
client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;

    const { commandName, options } = interaction;

    try {
        if (commandName === 'clearlog') {
            // Clear all logs from Azure Cosmos DB
            const query = 'SELECT * FROM c';
            const { resources: items } = await container.items.query(query).fetchAll();
            const deletePromises = items.map(item => container.item(item.id, item.id).delete());
            await Promise.all(deletePromises);
            await interaction.reply({ content: 'All visitor logs have been cleared!', ephemeral: true });
        } else if (commandName === 'traffic') {
            const query = 'SELECT COUNT(1) AS visitorCount FROM c';
            const { resources: [{ visitorCount }] } = await container.items.query(query).fetchAll();
            const message = `**Traffic Summary**\nTotal visitors logged: ${visitorCount}`;
            await interaction.reply({ content: message, ephemeral: true });
        } else if (commandName === 'logsummary') {
            const query = 'SELECT TOP 5 * FROM c ORDER BY c.timestamp DESC';
            const { resources: logs } = await container.items.query(query).fetchAll();
            const lastVisitors = logs.map(log => {
                return `**IP**: ${log.ip}, **User-Agent**: ${log.userAgent}, **Access Count**: ${log.accessCount}, **Timestamp**: ${log.timestamp}`;
            }).join('\n');
            await interaction.reply({ content: `**Log Summary:**\n${lastVisitors}`, ephemeral: true });
        } else if (commandName === 'exportlog') {
            // Send an immediate response
            await interaction.reply({ content: 'Exporting logs... Please wait.', ephemeral: true });

            const query = 'SELECT * FROM c';
            const { resources: logs } = await container.items.query(query).fetchAll();
            const logDataHtml = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Visitor Logs</title>
                    <style>
                        body { font-family: Arial, sans-serif; }
                        table { width: 100%; border-collapse: collapse; margin: 20px 0; }
                        th, td { padding: 12px; border: 1px solid #ddd; }
                        th { background-color: #f2f2f2; }
                    </style>
                </head>
                <body>
                    <h1>Visitor Logs</h1>
                    <table>
                        <tr>
                            <th>Timestamp</th>
                            <th>IP Address</th>
                            <th>User Agent</th>
                            <th>Access Count</th>
                            <th>IP Address Info</th>
                        </tr>
                        ${logs.map(log => `
                            <tr>
                                <td>${log.timestamp}</td>
                                <td>${log.ip}</td>
                                <td>${log.userAgent}</td>
                                <td>${log.accessCount}</td>
                                <td><a href="https://whatismyipaddress.com/ip/${log.ip}">https://whatismyipaddress.com/ip/${log.ip}</a></td>
                            </tr>
                        `).join('')}
                    </table>
                </body>
                </html>
            `;

            // Define R2 bucket configurations
            const bucketName = 'discordlog'; // Replace with your R2 bucket name
            const fileName = `logs_${Date.now()}.html`; // Unique file name based on timestamp
            const dlogurl = import.meta.env.DLOG_URL; // The base URL for your R2 bucket

            // R2 client configuration
            const s3 = new AWS.S3({
                endpoint: import.meta.env.R2_CFAPIEND, // Your R2 endpoint
                accessKeyId: import.meta.env.R2_ACCESS_KEY_ID, // Your R2 access key
                secretAccessKey: import.meta.env.R2_SECRET_ACCESS_KEY, // Your R2 secret key
                signatureVersion: 'v4', // Use v4 signature
            });

            // Upload HTML content to R2 bucket
            try {
                await s3.putObject({
                    Bucket: bucketName,
                    Key: fileName,
                    Body: logDataHtml,
                    ContentType: 'text/html',
                }).promise();

                const fileUrl = `${dlogurl}/${fileName}`; // Construct the URL for the uploaded file
                await interaction.followUp({ content: `Logs exported successfully! You can view them [here](${fileUrl})`, ephemeral: true });
            } catch (error) {
                console.error('Error uploading log to R2:', error);
                await interaction.followUp({ content: 'Failed to export logs. Please try again later.', ephemeral: true });
            }
        } else if (commandName === 'accesstime') {
            const ip = options.getString('ip');
            const query = `SELECT * FROM c WHERE c.ip = @ip`;
            const { resources: logs } = await container.items.query({
                query,
                parameters: [{ name: '@ip', value: ip }]
            }).fetchAll();

            if (logs.length > 0) {
                const accessCount = logs[0].accessCount;
                await interaction.reply({ content: `The IP address **${ip}** has accessed the site **${accessCount}** times.`, ephemeral: true });
            } else {
                await interaction.reply({ content: `No records found for the IP address **${ip}**.`, ephemeral: true });
            }
        }
    } catch (error) {
        console.error('Error handling command:', error);
        await interaction.reply({ content: 'An error occurred while processing your command.', ephemeral: true });
    }
});

// Start the bot
client.once('ready', async () => {
    console.log(`Logged in as ${client.user.tag}`);
    await registerCommands(); // Register commands only after the bot is ready
});

client.login(DISCORD_BOT_TOKEN);
