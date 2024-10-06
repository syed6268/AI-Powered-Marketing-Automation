// ResultsLayout.js
import React from "react";
import Sidebar from "../components/Sidebar"; // Adjust import path based on where your Sidebar is located
import Template from "../components/Template"; // Adjust import path

const ResultsLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 h-full fixed">
        <Sidebar />
      </div>

      {/* Main Content - Template */}
      <div className="flex-1 ml-64 p-6 overflow-auto">
        <Template />
      </div>
    </div>
  );
};

export default ResultsLayout;

// import React from "react";
// import Sidebar from "../components/Sidebar"; // Adjust import path based on where your Sidebar is located
// import Template from "../components/Template"; // Adjust import path

// const ResultsLayout = () => {
//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar: Fixed width, full height, fixed on the left */}
//       <div className="w-1/4 bg-gray-900 min-h-screen p-6 fixed">
//         <Sidebar />
//       </div>

//       {/* Main Content - Template: Takes the remaining width */}
//       <div className="ml-1/4 p-6 w-3/4 bg-gray-100">
//         <Template />
//       </div>
//     </div>
//   );
// };

// export default ResultsLayout;
