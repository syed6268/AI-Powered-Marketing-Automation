// import React from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   ChartBarIcon,
//   ShieldCheckIcon,
//   LightningBoltIcon,
// } from "@heroicons/react/solid";
// import logo from "../assets/agents.jpg";

// const LandingPage = () => {
//   const navigate = useNavigate();

//   const handleGetStarted = () => {
//     navigate("/get-started");
//   };

//   return (
//     <div className="bg-gradient-to-r from-gray-800 to-gray-900 min-h-screen text-white">
//       <header className="flex items-center justify-between p-6">
//         <img src={logo} alt="Logo" className="h-20 w-auto" />
//       </header>

//       <div className="flex items-center justify-center">
//         <div className="max-w-4xl p-8">
//           <h1 className="text-5xl font-bold mb-4">
//             AI-Powered Marketing Agent for Lead Generation
//           </h1>
//           <p className="text-lg text-gray-400 mb-8">
//             Automate and optimize your marketing strategies with our AI-driven
//             solution for discovering and analyzing potential leads, helping you
//             to focus on high-value opportunities.
//           </p>

//           <div className="mb-12">
//             <button
//               onClick={handleGetStarted}
//               className="bg-teal-400 hover:bg-teal-500 text-gray-900 px-6 py-3 rounded-full font-bold text-lg"
//             >
//               Get Started
//             </button>
//           </div>

//           <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
//             <div className="flex items-start space-x-4">
//               <div className="bg-teal-500 p-2 rounded-full">
//                 <ChartBarIcon className="h-6 w-6 text-white" />
//               </div>
//               <div>
//                 <h3 className="font-semibold text-lg">Lead Analysis</h3>
//                 <p className="text-gray-400">
//                   Our AI evaluates potential leads, providing insights and
//                   predictive analysis to improve your outreach.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start space-x-4">
//               <div className="bg-teal-500 p-2 rounded-full">
//                 <ShieldCheckIcon className="h-6 w-6 text-white" />
//               </div>
//               <div>
//                 <h3 className="font-semibold text-lg">Risk Assessment</h3>
//                 <p className="text-gray-400">
//                   Automatically assess the risks associated with each lead,
//                   helping you to make informed decisions.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start space-x-4">
//               <div className="bg-teal-500 p-2 rounded-full">
//                 <LightningBoltIcon className="h-6 w-6 text-white" />
//               </div>
//               <div>
//                 <h3 className="font-semibold text-lg">Real-time Reports</h3>
//                 <p className="text-gray-400">
//                   Get real-time updates on your lead generation efforts, with
//                   detailed reports on the effectiveness of your campaigns.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;

import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ChartBarIcon,
  ShieldCheckIcon,
  LightningBoltIcon,
} from "@heroicons/react/solid";
import logo from "../assets/agents.jpg";

const LandingPage = () => {
  const navigate = useNavigate();

  // Handle navigation to the Form Page
  const handleGetStarted = () => {
    navigate("/get-started");
  };

  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 min-h-screen text-white flex flex-col items-center">
      {/* Header */}
      <header className="flex items-center justify-between p-6 w-full max-w-7xl">
        <img src={logo} alt="Logo" className="h-16 w-auto" />
        <button
          onClick={handleGetStarted}
          className="bg-teal-400 hover:bg-teal-500 text-gray-900 px-4 py-2 rounded-full font-bold text-lg"
        >
          Get Started
        </button>
      </header>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-1 w-full max-w-4xl text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          AI-Powered Marketing Agent for Lead Generation
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-10">
          Automate and optimize your marketing strategies with our AI-driven
          solution for discovering and analyzing potential leads, helping you to
          focus on high-value opportunities.
        </p>

        {/* Benefits Section */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3 w-full">
          <div className="flex items-start space-x-4">
            <div className="bg-teal-500 p-3 rounded-full">
              <ChartBarIcon className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Lead Analysis</h3>
              <p className="text-gray-400">
                Our AI evaluates potential leads, providing insights and
                predictive analysis to improve your outreach.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-teal-500 p-3 rounded-full">
              <ShieldCheckIcon className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Risk Assessment</h3>
              <p className="text-gray-400">
                Automatically assess the risks associated with each lead,
                helping you to make informed decisions.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-teal-500 p-3 rounded-full">
              <LightningBoltIcon className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Real-time Reports</h3>
              <p className="text-gray-400">
                Get real-time updates on your lead generation efforts, with
                detailed reports on the effectiveness of your campaigns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
