import { Client, GatewayIntentBits } from 'discord.js'; // Ensure discord.js is imported

const DISCORD_BOT_TOKEN = import.meta.env.DISCORD_BOT_TOKEN;
const DISCORD_CHANNEL_ID = import.meta.env.DISCORD_CHANNEL_ID;
const DEV_ENV = import.meta.env.DEV_ENV === 'true';

const trafficLogs = []; // To store visitor logs in memory

// Create a new client instance with necessary intents
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent, // Needed for reading message content
    ],
});

// Function to set the bot's presence
async function setBotPresence() {
    if (!client.isReady()) {
        console.error('Discord client is not ready.');
        return;
    }

    try {
        await client.user.setPresence({
            status: 'online',
            activities: [
                {
                    name: 'Getting Insights',
                    type: 3, // Watching
                    largeImage: 'husky_nz_image',
                    largeText: 'HuskyNZ Insights',
                    partySize: [1, 1],
                    joinSecret: 'MTI4NzM0OjFpMmhuZToxMjMxMjM=',
                },
            ],
        });
        console.log('Presence updated successfully!');
    } catch (error) {
        console.error('Failed to update presence:', error);
    }
}

// Event listener when the bot is ready
client.on('ready', () => {
    console.log(`Bot is online as ${client.user.tag}`);
    setBotPresence(); // Set initial presence when the bot logs in
});

// Function to log user data
export async function logUserData(headers) {
    const ip = headers.get('x-forwarded-for') || headers.get('host') || 'Unknown IP';
    const userAgent = headers.get('user-agent') || 'Unknown';

    const visitorData = {
        timestamp: new Date(),
        ip,
        userAgent,
    };
    trafficLogs.push(visitorData);

    const content = `
    🚨 New ${DEV_ENV ? "Dev" : "Production"} visitor detected!
    **IP Address**: ${ip}
    **User-Agent**: ${userAgent}
    **IP Info**: https://whatismyipaddress.com/ip/${ip}
    **Visit Count**: ${trafficLogs.length}
    `;

    try {
        // Update bot presence based on updated traffic
        await setBotPresence();

        // Send the message to Discord
        await sendMessage(content);
    } catch (error) {
        console.error('Error sending message to Discord:', error);
    }
}

// Command handler for the bot
client.on('messageCreate', async (message) => {
    console.log(`Received message: ${message.content}`);

    // Ignore messages from bots to prevent loops
    if (message.author.bot) return;

    // Check if the message starts with a command prefix (e.g., '/')
    if (message.content.startsWith('/')) {
        console.log('Command detected');
        await handleCommand(message);
    }
});

// Command handler function
async function handleCommand(message) {
    const [cmd] = message.content.slice(1).trim().split(/\s+/); // Remove '/' and split arguments

    switch (cmd.toLowerCase()) { // Convert command to lowercase for case-insensitivity
        case 'clearlog':
            trafficLogs.length = 0; // Clears all logs
            await sendMessage('All visitor logs have been cleared.');
            break;

        case 'traffic':
            await sendTrafficSummary();
            break;

        case 'logsummary':
            await sendLogSummary();
            break;

        case 'exportlog':
            await exportLog();
            break;

        default:
            console.log('Unknown command');
            await sendMessage('Unknown command. Please use `/clearlog`, `/traffic`, `/logsummary`, or `/exportlog`.');
    }

    // Update presence after command execution
    await setBotPresence();
}

// Command helper functions
async function sendTrafficSummary() {
    const message = `**Traffic Summary**\nTotal visitors logged: ${trafficLogs.length}`;
    await sendMessage(message);
}

async function sendLogSummary() {
    const lastVisitors = trafficLogs.slice(-5).map(log => {
        return `**IP**: ${log.ip}, **User-Agent**: ${log.userAgent}, **Timestamp**: ${log.timestamp}`;
    }).join('\n');
    await sendMessage(`**Log Summary:**\n${lastVisitors}`);
}

async function exportLog() {
    const logData = trafficLogs.map(log => `${log.timestamp}, ${log.ip}, ${log.userAgent}`).join('\n');
    await sendMessage(`**Exported Log**\n\`\`\`${logData}\`\`\``);
}

// Utility function to send a message to Discord
async function sendMessage(content) {
    try {
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
        console.error('Error sending message to Discord:', error);
    }
}

// Dynamic status update based on visitor count
setInterval(() => setBotPresence(), 60000); // Refreshes presence every minute

// Log in your bot
client.login(DISCORD_BOT_TOKEN).catch(console.error);
