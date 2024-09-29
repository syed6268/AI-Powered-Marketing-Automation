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

import React from "react";
import Sidebar from "../components/Sidebar";
import Template from "../components/Template";

const ResultsPage = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Template Dashboard */}
      <div className="flex-1 bg-gray-100 p-4 overflow-auto">
        <Template />
      </div>
    </div>
  );
};

export default ResultsPage;
