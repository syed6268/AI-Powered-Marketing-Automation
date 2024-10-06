// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import instaa from "../assets/instaa.jpg";

// // Initial Data Object
// const initialData = {
//   Influencers: [
//     { name: "Jane Doe", location: "New York, USA", social: "https://www.instagram.com/janedoe" },
//     { name: "John Smith", location: "Los Angeles, USA", social: "https://www.instagram.com/johnsmith" },
//     { name: "Sara Lee", location: "San Francisco, USA", social: "https://www.instagram.com/saralee" }
//   ],
//   Blogs: [
//     { name: "Tech Blog", url: "https://techblog.com", contact: "contact@techblog.com" },
//     { name: "Marketing Insights", url: "https://marketinginsights.com", contact: "info@marketinginsights.com" },
//     { name: "Business Growth", url: "https://businessgrowth.com", contact: "support@businessgrowth.com" }
//   ],
//   Platformads: [
//     { name: "Google Ads", url: "https://ads.google.com", description: "Target potential customers through Google search." },
//     { name: "Facebook Ads", url: "https://facebook.com/ads", description: "Run ads to reach a wide audience on Facebook." },
//     { name: "LinkedIn Ads", url: "https://linkedin.com/ads", description: "Target professionals on LinkedIn with ads tailored to businesses." }
//   ],
//   Operationalsupport: [
//     { name: "Zapier", url: "https://zapier.com", description: "Automate workflows by connecting apps and services." },
//     { name: "Trello", url: "https://trello.com", description: "Organize projects and track progress with this project management tool." },
//     { name: "Slack", url: "https://slack.com", description: "Communicate and collaborate with team members in real time." }
//   ],
//   Marketingtips: [
//     { tip: "Leverage Social Media", description: "Use social media platforms to engage with your audience and build brand awareness." },
//     { tip: "Focus on SEO", description: "Optimize your website content for search engines to improve visibility." },
//     { tip: "Run A/B Testing", description: "Experiment with different marketing strategies and measure results to refine your approach." }
//   ]
// };

// const Template = () => {
//   const location = useLocation(); // Use location to access passed state
//   const [data, setData] = useState(initialData); // Use initialData as default

//   // Company-specific data
//   const [companyData, setCompanyData] = useState({
//     name: "Company XYZ",
//     url: "https://company-xyz.com",
//     valuation: "50 million USD",
//     industry: "Technology",
//   });

//   // When the component mounts, check if location.state has formattedData, and if so, update the state
//   useEffect(() => {
//     if (location.state && location.state.formattedData) {
//       setData(location.state.formattedData); // Update with data passed from FormPage.js
//     }

//     // Optionally, you could fetch the company data here
//     // fetchCompanyData().then(data => setCompanyData(data));
//   }, [location]);

//   return (
//     <div className="template bg-white p-6 rounded-lg shadow-md text-black flex flex-col gap-6 w-full">
      
//       {/* Company Info Section */}
//       <div className="bg-gradient-to-r from-purple-200 to-purple-300 p-6 rounded-lg shadow-md mb-6">
//         <h2 className="text-3xl font-bold mb-4">{companyData.name} Overview</h2>
//         <p>
//           <strong>Website:</strong>{" "}
//           <a
//             href={companyData.url}
//             className="text-teal-500"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             {companyData.url}
//           </a>
//         </p>
//         <p>
//           <strong>Business Valuation:</strong> {companyData.valuation}
//         </p>
//         <p>
//           <strong>Industry:</strong> {companyData.industry}
//         </p>
//       </div>

//       {/* Top 3 Influencers Section */}
//       <div
//         className="p-6 rounded-lg shadow-md mb-6"
//         style={{ backgroundColor: "rgba(210, 180, 222, 0.5)" }}
//       >
//         <h2 className="text-2xl font-bold mb-4">Top 3 Influencers</h2>
//         <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
//           {data.Influencers.map((influencer, index) => (
//             <div
//               key={index}
//               className="p-4 border rounded-lg shadow-md flex items-center"
//               style={{
//                 backgroundColor:
//                   index === 0
//                     ? "rgba(192, 235, 207, 0.8)"
//                     : index === 1
//                     ? "rgba(248, 196, 155, 0.8)"
//                     : "rgba(135, 206, 235, 0.5)"
//               }}
//             >
//               <img
//                 src={instaa}
//                 alt={influencer.name}
//                 className="w-20 h-20 rounded-full object-cover mr-4"
//               />
//               <div>
//                 <h3 className="text-lg font-semibold">
//                   <a
//                     href={influencer.social}
//                     className="text-black-800"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     {influencer.name}
//                   </a>
//                 </h3>
//                 <p className="text-sm text-gray-800">{influencer.location}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* 4 Resource Sections in 2x2 Grid */}
//       <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
//         {/* Blogs Section */}
//         <div
//           className="p-6 rounded-lg shadow-md"
//           style={{ backgroundColor: "rgba(240, 230, 140, 0.5)" }}
//         >
//           <h2 className="text-2xl font-bold mb-4">Blog Resources</h2>
//           <ul>
//             {data.Blogs.map((resource, index) => (
//               <li key={index} className="mb-2">
//                 <strong>{resource.name}:</strong>{" "}
//                 <a href={resource.url} target="_blank" rel="noopener noreferrer">
//                   {resource.url}
//                 </a>{" "}
//                 (Contact: {resource.contact})
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Platform Ads Section */}
//         <div
//           className="p-6 rounded-lg shadow-md"
//           style={{ backgroundColor: "rgba(173, 216, 230, 0.5)" }}
//         >
//           <h2 className="text-2xl font-bold mb-4">Platform Ads</h2>
//           <ul>
//             {data.Platformads.map((platform, index) => (
//               <li key={index} className="mb-2">
//                 <strong>{platform.name}:</strong> {platform.description}{" "}
//                 <a href={platform.url} target="_blank" rel="noopener noreferrer">
//                   {platform.url}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Operational Support Section */}
//         <div
//           className="p-6 rounded-lg shadow-md"
//           style={{ backgroundColor: "rgba(255, 192, 203, 0.5)" }}
//         >
//           <h2 className="text-2xl font-bold mb-4">Operational Support</h2>
//           <ul>
//             {data.Operationalsupport.map((support, index) => (
//               <li key={index} className="mb-2">
//                 <strong>{support.name}:</strong> {support.description}{" "}
//                 <a href={support.url} target="_blank" rel="noopener noreferrer">
//                   {support.url}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Marketing Tips Section */}
//         <div
//           className="p-6 rounded-lg shadow-md"
//           style={{ backgroundColor: "rgba(152, 251, 152, 0.5)" }}
//         >
//           <h2 className="text-2xl font-bold mb-4">Marketing Tips</h2>
//           <ul>
//             {data.Marketingtips.map((tip, index) => (
//               <li key={index} className="mb-2">
//                 <strong>{tip.tip}:</strong> {tip.description}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Template;

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import instaa from "../assets/instaa.jpg";

// Initial Data Object
const initialData = {
  Influencers: [],
  Blogs: [],
  Platformads: [],
  Operationalsupport: [],
  Marketingtips: []
};

const Template = () => {
  const location = useLocation(); // Use location to access passed state
  const [data, setData] = useState(initialData); // Use initialData as default
  const [companyData, setCompanyData] = useState({
    name: "Company XYZ",
    url: "https://company-xyz.com",
    valuation: "50 million USD",
    industry: "Technology"
  });

  // When the component mounts, check if location.state has formattedData or companyData, and if so, update the state
  useEffect(() => {
    if (location.state && location.state.formattedData) {
      setData(location.state.formattedData); // Update with data passed from FormPage.js
    }

    if (location.state && location.state.companyData) {
      setCompanyData(location.state.companyData); // Update company data from the form
    }
  }, [location]);

  return (
    <div className="template bg-white p-6 rounded-lg shadow-md text-black flex flex-col gap-6 w-full">
      {/* Company Info Section */}
      <div className="bg-gradient-to-r from-purple-200 to-purple-300 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-3xl font-bold mb-4">{companyData.name} Overview</h2>
        <p>
          <strong>Website:</strong>{" "}
          <a
            href={companyData.url}
            className="text-teal-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            {companyData.url}
          </a>
        </p>
        <p>
          <strong>Business Valuation:</strong> {companyData.valuation}
        </p>
      </div>

      {/* Top 3 Influencers Section */}
      <div className="p-6 rounded-lg shadow-md mb-6" style={{ backgroundColor: "rgba(210, 180, 222, 0.5)" }}>
        <h2 className="text-2xl font-bold mb-4">Top 3 Influencers</h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {data.Influencers.map((influencer, index) => (
            <div key={index} className="p-4 border rounded-lg shadow-md flex items-center" style={{ backgroundColor: index === 0 ? "rgba(192, 235, 207, 0.8)" : index === 1 ? "rgba(248, 196, 155, 0.8)" : "rgba(135, 206, 235, 0.5)" }}>
              <img src={instaa} alt={influencer.name} className="w-20 h-20 rounded-full object-cover mr-4" />
              <div>
                <h3 className="text-lg font-semibold">
                  <a href={influencer.social} className="text-black-800" target="_blank" rel="noopener noreferrer">
                    {influencer.name}
                  </a>
                </h3>
                <p className="text-sm text-gray-800">{influencer.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
{/* 4 Resource Sections in 2x2 Grid */}
<div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {/* Blogs Section */}
        <div
          className="p-6 rounded-lg shadow-md"
          style={{ backgroundColor: "rgba(240, 230, 140, 0.5)" }}
        >
          <h2 className="text-2xl font-bold mb-4">Blog Resources</h2>
          <ul>
            {data.Blogs.map((resource, index) => (
              <li key={index} className="mb-2">
                <strong>{resource.name}:</strong>{" "}
                <a href={resource.url} target="_blank" rel="noopener noreferrer">
                  {resource.url}
                </a>{" "}
                (Contact: {resource.contact})
              </li>
            ))}
          </ul>
        </div>

        {/* Platform Ads Section */}
        <div
          className="p-6 rounded-lg shadow-md"
          style={{ backgroundColor: "rgba(173, 216, 230, 0.5)" }}
        >
          <h2 className="text-2xl font-bold mb-4">Platform Ads</h2>
          <ul>
            {data.Platformads.map((platform, index) => (
              <li key={index} className="mb-2">
                <strong>{platform.name}:</strong> {platform.description}{" "}
                <a href={platform.url} target="_blank" rel="noopener noreferrer">
                  {platform.url}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Operational Support Section */}
        <div
          className="p-6 rounded-lg shadow-md"
          style={{ backgroundColor: "rgba(255, 192, 203, 0.5)" }}
        >
          <h2 className="text-2xl font-bold mb-4">Operational Support</h2>
          <ul>
            {data.Operationalsupport.map((support, index) => (
              <li key={index} className="mb-2">
                <strong>{support.name}:</strong> {support.description}{" "}
                <a href={support.url} target="_blank" rel="noopener noreferrer">
                  {support.url}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Marketing Tips Section */}
        <div
          className="p-6 rounded-lg shadow-md"
          style={{ backgroundColor: "rgba(152, 251, 152, 0.5)" }}
        >
          <h2 className="text-2xl font-bold mb-4">Marketing Tips</h2>
          <ul>
            {data.Marketingtips.map((tip, index) => (
              <li key={index} className="mb-2">
                <strong>{tip.tip}:</strong> {tip.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Template;
