import { BlobServiceClient, StorageSharedKeyCredential, generateBlobSASQueryParameters, ContainerSASPermissions } from '@azure/storage-blob';

// Access environment variables
const accountName = import.meta.env.VITE_AZURE_STORAGE_ACCOUNT_NAME;
const accountKey = import.meta.env.VITE_AZURE_STORAGE_ACCOUNT_KEY;
const containerName = import.meta.env.VITE_AZURE_STORAGE_CONTAINER_NAME;

export async function get() {
  // Set up the shared key credential
  const sharedKeyCredential = new StorageSharedKeyCredential(accountName, accountKey);
  
  // Create a BlobServiceClient to interact with the Blob Storage service
  const blobServiceClient = new BlobServiceClient(
    `https://${accountName}.blob.core.windows.net`,
    sharedKeyCredential
  );

  // Set SAS token options
  const sasOptions = {
    containerName,
    permissions: ContainerSASPermissions.parse('r'), // Read permission
    startsOn: new Date(),
    expiresOn: new Date(new Date().valueOf() + 3600 * 1000), // 1 hour from now
  };

  // Generate SAS token
  const sasToken = generateBlobSASQueryParameters(sasOptions, sharedKeyCredential).toString();

  return new Response(JSON.stringify({ sasToken }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
