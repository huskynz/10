import mermaid from 'mermaid';

// Initialize Mermaid configuration specifically for timelines
mermaid.initialize({
  theme: 'dark',
  themeVariables: {
    fontSize: '20px', // Larger font size for text
    timeline: {
      lineWidth: '5px',      // Thicker lines for better visibility
      nodePadding: '40px',   // Increase padding inside timeline nodes
      nodeSpacing: '100px',  // Space between nodes in the timeline
      nodeWidth: '300px',    // Set a fixed width for the nodes
      textMargin: '10px',    // Margin for text within nodes
    },
  },
});

// Define your Mermaid diagram code
const code = `
timeline
    2018 : Deployed first Ubuntu 18.04 VM in Hyper-V
    2019 : Moved to New Zealand
    2020 : Started learning VMware Workstation Pro
           : Deployed first Azure Web App
           : Created www.husky.nz
           : Created my Github account
           : Started learning Linux
           : Developed skills with Azure
    2021 : Earned AZ-900 Certification 
           : Learned more HTML and the web
           : Deployed my first Active Directory domain on an Azure VM
           : Configured Azure AD Connect to synchronize on-premises Active Directory with Azure Active Directory
           : Remote Desktop Deployment with web access and MFA in Azure
           : Contributed to development of a Azure Site to site vpn and Azure multi-network WAN
           : Developed skills with the Microsoft 365 suite
           : Developed skills with Intune and Windows Autopilot
    2022 : Expanded knowledge of Git and GitHub
           : Studied .NET and .NET websites
           : Began learning AWS
           : Migrated AD Domain from Azure to AWS 
    2023 : Earned MS-900 Certification
           : Gained work experience at Inde Technology (5 weeks)
           : Began experimenting with Sophos Firewalls
           : Started learning Node.js and TypeScript
           : Began to learn more about Cloudflare
    2024 : Used Azure migrate to move AD domain from AWS to Azure
           : New Zealand Certificate in Information Technology Essentials (Level 4) at Ara
           : Started streaming on Twitch
           : Deployed a new version of www.husky.nz using TypeScript and Astro.js
`;

// Function to render the Mermaid diagram
export function renderMermaid() {
  const targetElement = document.getElementById('mermaid-container');
  if (targetElement) {
    targetElement.innerHTML = code; // Set the diagram code directly
    mermaid.init(undefined, targetElement); // Render the diagram in the target element
  }
}
