// const axios = require("axios");
// require("dotenv").config(); // Load environment variables from .env file

// console.log("JWT Token:", process.env.PINATA_JWT);

// // Load environment variables
// const pinataApiKey = process.env.PINATA_API_KEY;
// const pinataSecretApiKey = process.env.PINATA_SECRET_API_KEY;
// const pinataJWT = process.env.PINATA_JWT;

// // Function to upload data to Pinata using JWT for authorization
// const saveDataToPinata = async (companyInfo, dashboardTemplate) => {
//   const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;

//   // Data to be saved to Pinata
//   const data = {
//     companyInfo,
//     dashboardTemplate,
//   };

//   // Pinata authorization headers using JWT
//   const headers = {
//     Authorization: `Bearer ${pinataJWT}`,
//   };

//   try {
//     // Make a request to save data to Pinata
//     const response = await axios.post(url, data, { headers });
//     // Return the IPFS hash (CID) of the uploaded content
//     return response.data.IpfsHash;
//   } catch (error) {
//     console.error("Error uploading to Pinata:", error);
//     throw error;
//   }
// };

// // Function to retrieve data from Pinata
// const retrieveDataFromPinata = async (ipfsHash) => {
//   const url = `https://gateway.pinata.cloud/ipfs/${ipfsHash}`;

//   try {
//     // Make a request to fetch the data from IPFS
//     const response = await axios.get(url);
//     // Return the retrieved data
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching data from Pinata:", error);
//     throw error;
//   }
// };

// // Export the functions for use in other parts of the application
// module.exports = { saveDataToPinata, retrieveDataFromPinata };

const axios = require("axios");
require("dotenv").config(); // Load environment variables from .env file

// Check if the environment variables are loaded correctly
console.log("JWT Token:", process.env.PINATA_JWT);
console.log("API Key:", process.env.PINATA_API_KEY);
console.log("API Secret:", process.env.PINATA_SECRET_API_KEY);

// Load environment variables
const pinataApiKey = process.env.PINATA_API_KEY;
const pinataSecretApiKey = process.env.PINATA_SECRET_API_KEY;
const pinataJWT = process.env.PINATA_JWT;

// Function to upload data to Pinata using JWT for authorization
const saveDataToPinata = async (companyInfo, dashboardTemplate) => {
  const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;

  // Data to be saved to Pinata
  const data = {
    companyInfo,
    dashboardTemplate,
  };

  // Pinata authorization headers using JWT
  const headers = {
    Authorization: `Bearer ${pinataJWT}`,
  };

  try {
    // Make a request to save data to Pinata
    const response = await axios.post(url, data, { headers });
    // Return the IPFS hash (CID) of the uploaded content
    console.log(
      "Data successfully uploaded to Pinata with IPFS hash:",
      response.data.IpfsHash
    );
    return response.data.IpfsHash;
  } catch (error) {
    console.error(
      "Error uploading to Pinata:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

// Function to retrieve data from Pinata
const retrieveDataFromPinata = async (ipfsHash) => {
  const url = `https://gateway.pinata.cloud/ipfs/${ipfsHash}`;

  try {
    // Make a request to fetch the data from IPFS
    const response = await axios.get(url);
    // Return the retrieved data
    console.log("Data successfully retrieved from Pinata:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching data from Pinata:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

// Export the functions for use in other parts of the application
module.exports = { saveDataToPinata, retrieveDataFromPinata };
