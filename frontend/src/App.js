// // // import React from "react";
// // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // // import LandingPage from "./pages/LandingPage";
// // // import FormPage from "./pages/FormPage";
// // // import ResultsPage from "./pages/ResultsPage";

// // // function App() {
// // //   return (
// // //     <Router>
// // //       <div className="flex">
// // //         {/* Render the sidebar and template on the ResultsPage, not here */}
// // //         <div className="App-content flex-1">
// // //           <Routes>
// // //             <Route path="/" element={<LandingPage />} />
// // //             <Route path="/get-started" element={<FormPage />} />
// // //             <Route path="/results" element={<ResultsPage />} />
// // //           </Routes>
// // //         </div>
// // //       </div>
// // //     </Router>
// // //   );
// // // }

// // // export default App;

// // import React from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import LandingPage from "./pages/LandingPage";
// // import FormPage from "./pages/FormPage";
// // import ResultsPage from "./pages/ResultsPage";
// // import Template from "./components/Template";

// // function App() {
// //   return (
// //     <Router>
// //       <div className="flex">
// //         <div className="App-content flex-1">
// //           <Routes>
// //             <Route path="/" element={<LandingPage />} />
// //             <Route path="/get-started" element={<FormPage />} />
// //             <Route path="/results" element={<ResultsPage />} />
// //           </Routes>
// //         </div>
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LandingPage from "./pages/LandingPage";
// import FormPage from "./pages/FormPage";
// import ResultsPage from "./pages/ResultsPage";
// import Sidebar from "./components/Sidebar"; // Import Sidebar

// function App() {
//   return (
//     <Router>
//       <div className="flex">
//         {/* Define routes with conditional rendering for sidebar */}
//         <Routes>
//           {/* Landing Page Route */}
//           <Route path="/" element={<LandingPage />} />

//           {/* Form Page Route */}
//           <Route path="/get-started" element={<FormPage />} />

//           {/* Results Page with Sidebar */}
//           <Route
//             path="/results"
//             element={
//               <div className="flex w-full">
//                 <Sidebar /> {/* Sidebar visible only on ResultsPage */}
//                 <div className="flex-1">
//                   <ResultsPage />
//                 </div>
//               </div>
//             }
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FormPage from "./pages/FormPage";
import ResultsPage from "./pages/ResultsPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page Route */}
        <Route path="/" element={<LandingPage />} />

        {/* Form Page Route */}
        <Route path="/get-started" element={<FormPage />} />

        {/* Results Page with Sidebar */}
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
