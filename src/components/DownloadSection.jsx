import React, { useEffect, useState } from 'react';

const DownloadSection = () => {
  const [sasToken, setSasToken] = useState('');
  const accountName = import.meta.env.VITE_AZURE_STORAGE_ACCOUNT_NAME;
  const containerName = import.meta.env.VITE_AZURE_STORAGE_CONTAINER_NAME;

  useEffect(() => {
    async function fetchSasToken() {
      try {
        const response = await fetch('/api/generateSasToken');
        if (response.ok) {
          const data = await response.json();
          setSasToken(data.sasToken);
        } else {
          console.error('Failed to fetch SAS token');
        }
      } catch (error) {
        console.error('Error fetching SAS token:', error);
      }
    }
    fetchSasToken();
  }, []);

  const downloads = [
    { name: 'HuskyNZ Brand Pack (Logos and stuff)', path: 'default.png' },
    { name: 'Dignation S1', path: 'app-windows.exe' }
  ];

  return (
    <section className="relative bg-white dark:bg-black py-16">
      <div className="mx-auto max-w-screen-md p-5 space-y-6">
        <h2 className="text-2xl font-semibold text-black dark:text-white">Available Downloads</h2>
        <ul className="space-y-4">
          {downloads.map((download) => (
            <li key={download.path} className="animate bg-gray-100 dark:bg-gray-800 p-4 rounded-md shadow flex justify-between items-center">
              <span className="text-black dark:text-white font-medium">{download.name}</span>
              <a href={`https://${accountName}.blob.core.windows.net/${containerName}/${download.path}?${sasToken}`} className="py-2 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded">Download</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DownloadSection;
