// const { saveDataToPinata, retrieveDataFromPinata } = require("./pinataService");
const {
  saveDataToPinata,
  retrieveDataFromPinata,
} = require("./pinata/pinataService");

// Example data to save
const companyInfo = {
  name: "Company XYZ",
  url: "https://company-xyz.com",
  networth: "50 million USD",
  additionalInfo: "Industry: Technology",
};

const dashboardTemplate = {
  overview: "Company XYZ Overview",
  influencers: [
    { name: "Influencer A", location: "New York", relevance: "High" },
    { name: "Influencer B", location: "San Francisco", relevance: "Medium" },
    { name: "Influencer C", location: "Los Angeles", relevance: "High" },
  ],
  resources: {
    marketResearch: "Market research resources...",
    marketingStrategy: "Marketing strategy resources...",
    digitalMarketing: "Digital marketing resources...",
    financial: "Financial resources...",
  },
};

// Save data to Pinata
saveDataToPinata(companyInfo, dashboardTemplate)
  .then((ipfsHash) => {
    console.log("Data saved to Pinata with IPFS hash:", ipfsHash);

    // Retrieve data using the IPFS hash
    return retrieveDataFromPinata(ipfsHash);
  })
  .then((retrievedData) => {
    console.log("Retrieved data from Pinata:", retrievedData);
  })
  .catch((error) => console.error("Error:", error));
