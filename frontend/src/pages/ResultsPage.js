// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import Sidebar from "../components/Sidebar";
// import Template from "../components/Template"; // Correctly import with matching case

// const ResultsPage = () => {
//   const location = useLocation();
//   const { showTemplate, companyName } = location.state || {};

//   const companies = ["Company A", "Company B", "Company C"];
//   const [selectedCompany, setSelectedCompany] = useState(
//     companyName || "R&L Plumbing"
//   );
//   const [selectedMessage, setSelectedMessage] = useState(
//     "Here is the default message."
//   );

//   const handleCompanyClick = (company) => {
//     setSelectedCompany(company);
//     setSelectedMessage(
//       `Here is the sentiment and profile data for ${company}. This is just a placeholder.`
//     );
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <Sidebar companies={companies} onCompanyClick={handleCompanyClick} />

//       {/* Main Content Area */}
//       <div className="flex-1 bg-gray-100 p-8 overflow-auto">
//         <h2 className="text-3xl font-bold mb-8 text-center">
//           {selectedCompany} Profile and Sentiment
//         </h2>

//         <div className="bg-white shadow-md p-8 rounded-lg text-black">
//           <div
//             className="html-content"
//             dangerouslySetInnerHTML={{ __html: selectedMessage }}
//           />
//         </div>
//       </div>

//       {/* Conditionally render the Template component */}
//       {showTemplate && (
//         <div className="w-1/3 p-4">
//           <Template companyName={companyName} />{" "}
//           {/* Pass the company name as a prop */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ResultsPage;

// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import Template from '../components/Template';

// const ResultsPage = () => {
//   const location = useLocation();
//   const { responses, companyName, valuation } = location.state || {};  // Extract data from location.state
//   console.log({responses})
//   return (
//     <div className="flex h-screen p-4 bg-gray-100">
//       <div className="w-full">
//         {/* Display the company name and valuation */}
//         <h1 className="text-2xl font-bold mb-4">Results for {companyName}</h1>
//         <p className="text-lg mb-4">Valuation: {valuation} USD</p>

//         {/* Pass the responses data to the Template component */}
       
//         <Template responses={responses.data} />

//       </div>
//     </div>
//   );
// };

// export default ResultsPage;




import React from 'react';
import { useLocation } from 'react-router-dom';
import Template from '../components/Template';

const ResultsPage = () => {
  const location = useLocation();
  const { responses, companyName, valuation } = location.state || {};  // Extract data from location.state

  // Check if responses exist and log just the 'data' field
  const responseData = responses?.data || {};  // Extract the 'data' part from responses
  console.log('Response Data:', responseData);

  return (
    <div className="flex h-screen p-4 bg-gray-100">
      <div className="w-full">
        {/* Display the company name and valuation */}
        <h1 className="text-2xl font-bold mb-4">Results for {companyName}</h1>
        <p className="text-lg mb-4">Valuation: {valuation} USD</p>

        {/* Pass the responseData to the Template component */}
        <Template responses={responseData} />
      </div>
    </div>
  );
};

export default ResultsPage;

