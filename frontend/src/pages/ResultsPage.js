// ResultsLayout.js
import React from "react";
import Sidebar from "../components/Sidebar"; // Adjust import path based on where your Sidebar is located
import Template from "../components/Template"; // Adjust import path
const ResultsLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/6 bg-gray-900 min-h-screen p-6">
        <Sidebar />
      </div>

      {/* Main Content - Template */}
      <div className="w-2/3 p-6 overflow-auto">
        <Template />
      </div>
    </div>
  );
};

export default ResultsLayout;