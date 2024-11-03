import { CosmosClient } from "@azure/cosmos";

// Access environment variables
const COSMOS_DB_CONNECTION_STRING = import.meta.env.COSMOS_CONNECTION_STRING;
const DATABASE_ID = import.meta.env.COSMOS_DB; // Your Cosmos DB database ID
const CONTAINER_ID = import.meta.env.COSMOS_CONTNAME; // Your desired Cosmos DB container name

// Initialize Cosmos Client with the connection string
const cosmosClient = new CosmosClient(COSMOS_DB_CONNECTION_STRING);
const container = cosmosClient.database(DATABASE_ID).container(CONTAINER_ID);

export async function logUserData(headers, location = '/') {
  const ip = headers.get('x-forwarded-for') || 'Unknown IP';
  const userAgent = headers.get("user-agent") || "Unknown";

  const logData = {
    ip,
    userAgent,
    location,
    ipInfoLink: `https://whatismyipaddress.com/ip/${ip}`,
    timestamp: new Date().toISOString(),
  };

  // Log to Azure Cosmos DB
  try {
    await container.items.create(logData);
    console.log("User data logged successfully to Cosmos DB.");
  } catch (error) {
    console.error("Failed to log data to Cosmos DB:", error);
  }
}
