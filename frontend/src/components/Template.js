// // // components/Template.js
// // import React from "react";

// // const Template = () => {
// //   return (
// //     <div className="template bg-white p-6 rounded-lg shadow-md text-black">
// //       <h2 className="text-2xl font-bold mb-4">Generated Template</h2>
// //       <p>This is your generated template content.</p>
// //     </div>
// //   );
// // };

// // export default Template;
// // components/Template.js
// import React, { useState, useEffect } from "react";

// const Template = () => {
//   // Assume this data is fetched from the backend
//   const [leads, setLeads] = useState([]);

//   useEffect(() => {
//     // For now, let's assume this data is fetched from the backend.
//     const fetchedLeads = [
//       {
//         name: "Company A",
//         website: "https://company-a.com",
//         industry: "Finance",
//         rating: "A+",
//       },
//       {
//         name: "Company B",
//         website: "https://company-b.com",
//         industry: "Technology",
//         rating: "B+",
//       },
//       {
//         name: "Company C",
//         website: "https://company-c.com",
//         industry: "Healthcare",
//         rating: "A",
//       },
//     ];
//     setLeads(fetchedLeads);
//   }, []);

//   return (
//     <div className="template bg-white p-6 rounded-lg shadow-md text-black">
//       <h2 className="text-2xl font-bold mb-4">Lead Dashboard</h2>
//       <table className="min-w-full bg-white border">
//         <thead>
//           <tr>
//             <th className="py-2 px-4 border-b text-left">Company Name</th>
//             <th className="py-2 px-4 border-b text-left">Website</th>
//             <th className="py-2 px-4 border-b text-left">Industry</th>
//             <th className="py-2 px-4 border-b text-left">Rating</th>
//           </tr>
//         </thead>
//         <tbody>
//           {leads.map((lead, index) => (
//             <tr key={index} className="hover:bg-gray-100">
//               <td className="py-2 px-4 border-b">{lead.name}</td>
//               <td className="py-2 px-4 border-b">
//                 <a
//                   href={lead.website}
//                   className="text-teal-500"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   {lead.website}
//                 </a>
//               </td>
//               <td className="py-2 px-4 border-b">{lead.industry}</td>
//               <td className="py-2 px-4 border-b">{lead.rating}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Template;

// import React, { useState, useEffect } from "react";

// // Mock data for resources and influencers
// const marketResearch = [
//   { name: "Industry Report 2024", link: "#" },
//   { name: "Competitor Analysis", link: "#" },
//   { name: "Customer Insights", link: "#" },
// ];

// const marketingStrategy = [
//   { name: "Social Media Strategy Guide", link: "#" },
//   { name: "Email Marketing Templates", link: "#" },
//   { name: "Campaign Case Studies", link: "#" },
// ];

// const digitalMarketing = [
//   { name: "SEO Best Practices", link: "#" },
//   { name: "Google Ads Guide", link: "#" },
//   { name: "Social Media Advertising Tips", link: "#" },
// ];

// const financialResources = [
//   { name: "Funding Opportunities", link: "#" },
//   { name: "ROI Calculator", link: "#" },
//   { name: "Budget Planning Template", link: "#" },
// ];

// const operationalResources = [
//   { name: "Project Management Tools", link: "#" },
//   { name: "CRM Solutions", link: "#" },
//   { name: "Automation Tools", link: "#" },
// ];

// const influencers = [
//   {
//     name: "Influencer A",
//     link: "https://instagram.com/influencera",
//     location: "New York",
//     relevance: "High",
//     image: "https://example.com/imageA.jpg",
//   },
//   {
//     name: "Influencer B",
//     link: "https://instagram.com/influencerb",
//     location: "San Francisco",
//     relevance: "Medium",
//     image: "https://example.com/imageB.jpg",
//   },
//   {
//     name: "Influencer C",
//     link: "https://instagram.com/influencerc",
//     location: "Los Angeles",
//     relevance: "High",
//     image: "https://example.com/imageC.jpg",
//   },
// ];

// const Template = () => {
//   const [leads, setLeads] = useState([]);

//   useEffect(() => {
//     // Assume data is fetched from the backend
//     const fetchedLeads = [
//       {
//         name: "Company A",
//         website: "https://company-a.com",
//         industry: "Finance",
//         rating: "A+",
//       },
//       {
//         name: "Company B",
//         website: "https://company-b.com",
//         industry: "Technology",
//         rating: "B+",
//       },
//       {
//         name: "Company C",
//         website: "https://company-c.com",
//         industry: "Healthcare",
//         rating: "A",
//       },
//     ];
//     setLeads(fetchedLeads);
//   }, []);

//   return (
//     <div className="template bg-gray-50 p-6 rounded-lg shadow-md text-black flex flex-wrap gap-6">
//       {/* Lead Dashboard */}
//       <div className="w-full bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold mb-4">Lead Dashboard</h2>
//         <table className="min-w-full bg-white border">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 border-b text-left">Company Name</th>
//               <th className="py-2 px-4 border-b text-left">Website</th>
//               <th className="py-2 px-4 border-b text-left">Industry</th>
//               <th className="py-2 px-4 border-b text-left">Rating</th>
//             </tr>
//           </thead>
//           <tbody>
//             {leads.map((lead, index) => (
//               <tr key={index} className="hover:bg-gray-100">
//                 <td className="py-2 px-4 border-b">{lead.name}</td>
//                 <td className="py-2 px-4 border-b">
//                   <a
//                     href={lead.website}
//                     className="text-teal-500"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     {lead.website}
//                   </a>
//                 </td>
//                 <td className="py-2 px-4 border-b">{lead.industry}</td>
//                 <td className="py-2 px-4 border-b">{lead.rating}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Market Research Section */}
//       <div className="w-full bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold mb-4">Market Research Resources</h2>
//         <ul>
//           {marketResearch.map((resource, index) => (
//             <li key={index} className="mb-2">
//               <a
//                 href={resource.link}
//                 className="text-teal-500"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 {resource.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Marketing Strategy Section */}
//       <div className="w-full bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold mb-4">
//           Marketing Strategy Resources
//         </h2>
//         <ul>
//           {marketingStrategy.map((resource, index) => (
//             <li key={index} className="mb-2">
//               <a
//                 href={resource.link}
//                 className="text-teal-500"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 {resource.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Digital Marketing Section */}
//       <div className="w-full bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold mb-4">Digital Marketing Resources</h2>
//         <ul>
//           {digitalMarketing.map((resource, index) => (
//             <li key={index} className="mb-2">
//               <a
//                 href={resource.link}
//                 className="text-teal-500"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 {resource.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Financial Resources Section */}
//       <div className="w-full bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold mb-4">Financial Resources</h2>
//         <ul>
//           {financialResources.map((resource, index) => (
//             <li key={index} className="mb-2">
//               <a
//                 href={resource.link}
//                 className="text-teal-500"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 {resource.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Operational Resources Section */}
//       <div className="w-full bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold mb-4">Operational Resources</h2>
//         <ul>
//           {operationalResources.map((resource, index) => (
//             <li key={index} className="mb-2">
//               <a
//                 href={resource.link}
//                 className="text-teal-500"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 {resource.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Top 3 Influencers Section */}
//       <div className="w-full bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold mb-4">Top 3 Influencers</h2>
//         <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
//           {influencers.map((influencer, index) => (
//             <div
//               key={index}
//               className="p-4 border rounded-lg shadow-md bg-gray-50"
//             >
//               <img
//                 src={influencer.image}
//                 alt={influencer.name}
//                 className="w-20 h-20 rounded-full mx-auto mb-4"
//               />
//               <h3 className="text-lg font-semibold text-center">
//                 <a
//                   href={influencer.link}
//                   className="text-teal-500"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   {influencer.name}
//                 </a>
//               </h3>
//               <p className="text-center text-sm text-gray-600">
//                 {influencer.location}
//               </p>
//               <p className="text-center text-sm text-gray-600">
//                 Relevance: {influencer.relevance}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Template;

// ==============================

// import React, { useState, useEffect } from "react";

// // Mock data for resources and influencers based on specific company input
// const marketResearch = [
//   { name: "Company Industry Report", link: "#" },
//   { name: "Competitor Analysis for Your Market", link: "#" },
//   { name: "Customer Insights", link: "#" },
// ];

// const marketingStrategy = [
//   { name: "Customized Social Media Strategy", link: "#" },
//   { name: "Email Marketing Templates for Your Industry", link: "#" },
//   { name: "Relevant Campaign Case Studies", link: "#" },
// ];

// const digitalMarketing = [
//   { name: "SEO Tips for Your Business", link: "#" },
//   { name: "Google Ads Strategy", link: "#" },
//   { name: "Effective Social Media Ads", link: "#" },
// ];

// const financialResources = [
//   { name: "Funding Opportunities in Your Sector", link: "#" },
//   { name: "ROI Calculator for Marketing Investments", link: "#" },
//   { name: "Business Budget Planning Template", link: "#" },
// ];

// const operationalResources = [
//   { name: "Project Management Tools for Your Business", link: "#" },
//   { name: "CRM Solutions", link: "#" },
//   { name: "Marketing Automation Tools", link: "#" },
// ];

// const influencers = [
//   {
//     name: "Influencer A",
//     link: "https://instagram.com/influencera",
//     location: "New York",
//     relevance: "High",
//     image: "https://example.com/imageA.jpg",
//   },
//   {
//     name: "Influencer B",
//     link: "https://instagram.com/influencerb",
//     location: "San Francisco",
//     relevance: "Medium",
//     image: "https://example.com/imageB.jpg",
//   },
//   {
//     name: "Influencer C",
//     link: "https://instagram.com/influencerc",
//     location: "Los Angeles",
//     relevance: "High",
//     image: "https://example.com/imageC.jpg",
//   },
// ];

// const Template = () => {
//   const [companyData, setCompanyData] = useState({
//     name: "Company XYZ",
//     url: "https://company-xyz.com",
//     valuation: "50 million USD",
//     industry: "Technology",
//   });

//   useEffect(() => {
//     // Fetch company-specific data from backend if needed
//     // For example: fetchCompanyData().then(data => setCompanyData(data));
//   }, []);

//   return (
//     <div className="template bg-white p-6 rounded-lg shadow-md text-black flex flex-col gap-6 w-full">
//       {/* Company Info Section */}
//       <div className="bg-gray-200 p-6 rounded-lg shadow-md">
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

//       {/* Market Research Section */}
//       <div className="bg-gray-200 p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold mb-4">Market Research Resources</h2>
//         <ul>
//           {marketResearch.map((resource, index) => (
//             <li key={index} className="mb-2">
//               <a
//                 href={resource.link}
//                 className="text-teal-500"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 {resource.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Marketing Strategy Section */}
//       <div className="bg-gray-200 p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold mb-4">
//           Marketing Strategy Resources
//         </h2>
//         <ul>
//           {marketingStrategy.map((resource, index) => (
//             <li key={index} className="mb-2">
//               <a
//                 href={resource.link}
//                 className="text-teal-500"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 {resource.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Digital Marketing Section */}
//       <div className="bg-gray-200 p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold mb-4">Digital Marketing Resources</h2>
//         <ul>
//           {digitalMarketing.map((resource, index) => (
//             <li key={index} className="mb-2">
//               <a
//                 href={resource.link}
//                 className="text-teal-500"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 {resource.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Financial Resources Section */}
//       <div className="bg-gray-200 p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold mb-4">Financial Resources</h2>
//         <ul>
//           {financialResources.map((resource, index) => (
//             <li key={index} className="mb-2">
//               <a
//                 href={resource.link}
//                 className="text-teal-500"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 {resource.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Operational Resources Section */}
//       <div className="bg-gray-200 p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold mb-4">Operational Resources</h2>
//         <ul>
//           {operationalResources.map((resource, index) => (
//             <li key={index} className="mb-2">
//               <a
//                 href={resource.link}
//                 className="text-teal-500"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 {resource.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Top 3 Influencers Section */}
//       <div className="bg-gray-200 p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold mb-4">Top 3 Influencers</h2>
//         <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
//           {influencers.map((influencer, index) => (
//             <div
//               key={index}
//               className="p-4 border rounded-lg shadow-md bg-gray-50"
//             >
//               <img
//                 src={influencer.image}
//                 alt={influencer.name}
//                 className="w-20 h-20 rounded-full mx-auto mb-4"
//               />
//               <h3 className="text-lg font-semibold text-center">
//                 <a
//                   href={influencer.link}
//                   className="text-teal-500"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   {influencer.name}
//                 </a>
//               </h3>
//               <p className="text-center text-sm text-gray-600">
//                 {influencer.location}
//               </p>
//               <p className="text-center text-sm text-gray-600">
//                 Relevance: {influencer.relevance}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Template;

// ==============================

// import React, { useState, useEffect } from "react";

// // Mock data for resources and influencers based on specific company input
// const marketResearch = [
//   {
//     name: "Company Industry Report",
//     content: "This report covers the latest industry trends and forecasts...",
//   },
//   {
//     name: "Competitor Analysis for Your Market",
//     content: "Detailed analysis of your main competitors in the market...",
//   },
//   {
//     name: "Customer Insights",
//     content:
//       "Customer demographics and behavior insights for better targeting...",
//   },
// ];

// const marketingStrategy = [
//   {
//     name: "Customized Social Media Strategy",
//     content: "A tailored strategy for boosting social media presence...",
//   },
//   {
//     name: "Email Marketing Templates for Your Industry",
//     content: "Pre-designed templates to optimize your email campaigns...",
//   },
//   {
//     name: "Relevant Campaign Case Studies",
//     content: "Successful case studies to inspire your next campaign...",
//   },
// ];

// const digitalMarketing = [
//   {
//     name: "SEO Tips for Your Business",
//     content: "SEO strategies to improve your website's search rankings...",
//   },
//   {
//     name: "Google Ads Strategy",
//     content:
//       "Effective strategies for running profitable Google Ads campaigns...",
//   },
//   {
//     name: "Effective Social Media Ads",
//     content: "Tips and tricks for creating high-performing social media ads...",
//   },
// ];

// const financialResources = [
//   {
//     name: "Funding Opportunities in Your Sector",
//     content: "Information on potential funding sources for your business...",
//   },
//   {
//     name: "ROI Calculator for Marketing Investments",
//     content:
//       "Calculate the return on investment for various marketing activities...",
//   },
//   {
//     name: "Business Budget Planning Template",
//     content: "Templates and guidelines for effective budget planning...",
//   },
// ];

// const influencers = [
//   {
//     name: "Influencer A",
//     link: "https://instagram.com/influencera",
//     handle: "@influencera",
//     location: "New York",
//     relevance: "High",
//     image: "https://example.com/imageA.jpg",
//   },
//   {
//     name: "Influencer B",
//     link: "https://instagram.com/influencerb",
//     handle: "@influencerb",
//     location: "San Francisco",
//     relevance: "Medium",
//     image: "https://example.com/imageB.jpg",
//   },
//   {
//     name: "Influencer C",
//     link: "https://instagram.com/influencerc",
//     handle: "@influencerc",
//     location: "Los Angeles",
//     relevance: "High",
//     image: "https://example.com/imageC.jpg",
//   },
// ];

// const Template = () => {
//   const [companyData, setCompanyData] = useState({
//     name: "Company XYZ",
//     url: "https://company-xyz.com",
//     valuation: "50 million USD",
//     industry: "Technology",
//   });

//   useEffect(() => {
//     // Fetch company-specific data from backend if needed
//     // For example: fetchCompanyData().then(data => setCompanyData(data));
//   }, []);

//   return (
//     <div className="template bg-white p-6 rounded-lg shadow-md text-black flex flex-col gap-6 w-full">
//       {/* Company Info Section */}
//       <div className="bg-gray-200 p-6 rounded-lg shadow-md mb-6">
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
//       <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
//         <h2 className="text-2xl font-bold mb-4">Top 3 Influencers</h2>
//         <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
//           {influencers.map((influencer, index) => (
//             <div
//               key={index}
//               className="p-4 border rounded-lg shadow-md flex items-center"
//               style={{
//                 backgroundColor: index % 2 === 0 ? "#FFD700" : "#ADFF2F",
//               }} // Different colors for each influencer card
//             >
//               <img
//                 src={influencer.image}
//                 alt={influencer.name}
//                 className="w-20 h-20 rounded-full object-cover mr-4"
//               />
//               <div>
//                 <h3 className="text-lg font-semibold">
//                   <a
//                     href={influencer.link}
//                     className="text-teal-500"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     {influencer.name}
//                   </a>
//                 </h3>
//                 <p className="text-sm text-gray-600">{influencer.location}</p>
//                 <p className="text-sm text-gray-600">
//                   Relevance: {influencer.relevance}
//                 </p>
//                 <div className="flex items-center mt-2">
//                   <img
//                     src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" // Instagram logo URL
//                     alt="Instagram"
//                     className="w-4 h-4 mr-1"
//                   />
//                   <a
//                     href={influencer.link}
//                     className="text-teal-500"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     {influencer.handle}
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* 4 Resource Sections in 2x2 Grid */}
//       <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
//         {/* Market Research Section */}
//         <div
//           className="p-6 rounded-lg shadow-md"
//           style={{ backgroundColor: "#F0E68C" }}
//         >
//           <h2 className="text-2xl font-bold mb-4">Market Research Resources</h2>
//           <ul>
//             {marketResearch.map((resource, index) => (
//               <li key={index} className="mb-2">
//                 <strong>{resource.name}:</strong> {resource.content}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Marketing Strategy Section */}
//         <div
//           className="p-6 rounded-lg shadow-md"
//           style={{ backgroundColor: "#ADD8E6" }}
//         >
//           <h2 className="text-2xl font-bold mb-4">
//             Marketing Strategy Resources
//           </h2>
//           <ul>
//             {marketingStrategy.map((resource, index) => (
//               <li key={index} className="mb-2">
//                 <strong>{resource.name}:</strong> {resource.content}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Digital Marketing Section */}
//         <div
//           className="p-6 rounded-lg shadow-md"
//           style={{ backgroundColor: "#FFC0CB" }}
//         >
//           <h2 className="text-2xl font-bold mb-4">
//             Digital Marketing Resources
//           </h2>
//           <ul>
//             {digitalMarketing.map((resource, index) => (
//               <li key={index} className="mb-2">
//                 <strong>{resource.name}:</strong> {resource.content}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Financial Resources Section */}
//         <div
//           className="p-6 rounded-lg shadow-md"
//           style={{ backgroundColor: "#98FB98" }}
//         >
//           <h2 className="text-2xl font-bold mb-4">Financial Resources</h2>
//           <ul>
//             {financialResources.map((resource, index) => (
//               <li key={index} className="mb-2">
//                 <strong>{resource.name}:</strong> {resource.content}
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

// Mock data for resources and influencers based on specific company input
const marketResearch = [
  {
    name: "Company Industry Report",
    content: "This report covers the latest industry trends and forecasts...",
  },
  {
    name: "Competitor Analysis for Your Market",
    content: "Detailed analysis of your main competitors in the market...",
  },
  {
    name: "Customer Insights",
    content:
      "Customer demographics and behavior insights for better targeting...",
  },
];

const marketingStrategy = [
  {
    name: "Customized Social Media Strategy",
    content: "A tailored strategy for boosting social media presence...",
  },
  {
    name: "Email Marketing Templates for Your Industry",
    content: "Pre-designed templates to optimize your email campaigns...",
  },
  {
    name: "Relevant Campaign Case Studies",
    content: "Successful case studies to inspire your next campaign...",
  },
];

const digitalMarketing = [
  {
    name: "SEO Tips for Your Business",
    content: "SEO strategies to improve your website's search rankings...",
  },
  {
    name: "Google Ads Strategy",
    content:
      "Effective strategies for running profitable Google Ads campaigns...",
  },
  {
    name: "Effective Social Media Ads",
    content: "Tips and tricks for creating high-performing social media ads...",
  },
];

const financialResources = [
  {
    name: "Funding Opportunities in Your Sector",
    content: "Information on potential funding sources for your business...",
  },
  {
    name: "ROI Calculator for Marketing Investments",
    content:
      "Calculate the return on investment for various marketing activities...",
  },
  {
    name: "Business Budget Planning Template",
    content: "Templates and guidelines for effective budget planning...",
  },
];

const influencers = [
  {
    name: "Influencer A",
    link: "https://instagram.com/influencera",
    handle: "@influencera",
    location: "New York",
    relevance: "High",
    image: "https://example.com/imageA.jpg",
  },
  {
    name: "Influencer B",
    link: "https://instagram.com/influencerb",
    handle: "@influencerb",
    location: "San Francisco",
    relevance: "Medium",
    image: "https://example.com/imageB.jpg",
  },
  {
    name: "Influencer C",
    link: "https://instagram.com/influencerc",
    handle: "@influencerc",
    location: "Los Angeles",
    relevance: "High",
    image: "https://example.com/imageC.jpg",
  },
];

const Template = () => {
  const [companyData, setCompanyData] = useState({
    name: "Company XYZ",
    url: "https://company-xyz.com",
    valuation: "50 million USD",
    industry: "Technology",
  });

  useEffect(() => {
    // Fetch company-specific data from backend if needed
    // For example: fetchCompanyData().then(data => setCompanyData(data));
  }, []);

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
        <p>
          <strong>Industry:</strong> {companyData.industry}
        </p>
      </div>

      {/* Top 3 Influencers Section */}
      <div
        className="p-6 rounded-lg shadow-md mb-6"
        style={{ backgroundColor: "rgba(210, 180, 222, 0.5)" }} // Set your preferred color for the influencer container box
      >
        <h2 className="text-2xl font-bold mb-4">Top 3 Influencers</h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {influencers.map((influencer, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg shadow-md flex items-center"
              style={{
                backgroundColor:
                  index === 0
                    ? "rgba(192, 235, 207, 0.8)" // First box color
                    : index === 1
                    ? "rgba(248, 196, 155, 0.8)" // Second box color
                    : "rgba(135, 206, 235, 0.5)", // Third box color
              }} // Different translucent colors for each influencer card
            >
              <img
                src={influencer.image}
                alt={influencer.name}
                className="w-20 h-20 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">
                  <a
                    href={influencer.link}
                    className="text-teal-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {influencer.name}
                  </a>
                </h3>
                <p className="text-sm text-gray-600">{influencer.location}</p>
                <p className="text-sm text-gray-600">
                  Relevance: {influencer.relevance}
                </p>
                <div className="flex items-center mt-2">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" // Instagram logo URL
                    alt="Instagram"
                    className="w-4 h-4 mr-1"
                  />
                  <a
                    href={influencer.link}
                    className="text-teal-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {influencer.handle}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4 Resource Sections in 2x2 Grid */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {/* Market Research Section */}
        <div
          className="p-6 rounded-lg shadow-md"
          style={{ backgroundColor: "rgba(240, 230, 140, 0.5)" }}
        >
          <h2 className="text-2xl font-bold mb-4">Market Research Resources</h2>
          <ul>
            {marketResearch.map((resource, index) => (
              <li key={index} className="mb-2">
                <strong>{resource.name}:</strong> {resource.content}
              </li>
            ))}
          </ul>
        </div>

        {/* Marketing Strategy Section */}
        <div
          className="p-6 rounded-lg shadow-md"
          style={{ backgroundColor: "rgba(173, 216, 230, 0.5)" }}
        >
          <h2 className="text-2xl font-bold mb-4">
            Marketing Strategy Resources
          </h2>
          <ul>
            {marketingStrategy.map((resource, index) => (
              <li key={index} className="mb-2">
                <strong>{resource.name}:</strong> {resource.content}
              </li>
            ))}
          </ul>
        </div>

        {/* Digital Marketing Section */}
        <div
          className="p-6 rounded-lg shadow-md"
          style={{ backgroundColor: "rgba(255, 192, 203, 0.5)" }}
        >
          <h2 className="text-2xl font-bold mb-4">
            Digital Marketing Resources
          </h2>
          <ul>
            {digitalMarketing.map((resource, index) => (
              <li key={index} className="mb-2">
                <strong>{resource.name}:</strong> {resource.content}
              </li>
            ))}
          </ul>
        </div>

        {/* Financial Resources Section */}
        <div
          className="p-6 rounded-lg shadow-md"
          style={{ backgroundColor: "rgba(152, 251, 152, 0.5)" }}
        >
          <h2 className="text-2xl font-bold mb-4">Financial Resources</h2>
          <ul>
            {financialResources.map((resource, index) => (
              <li key={index} className="mb-2">
                <strong>{resource.name}:</strong> {resource.content}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Template;
