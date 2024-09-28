// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import FormPage from './pages/FormPage';
import ResultsPage from './pages/ResultsPage';
import Sidebar from './components/Sidebar';
// import Sidebar from './components/Sidebar.js'
function App() {
  return (
    <Router>
      
      <div className="flex">
        {/* <Sidebar/> */}
        <div className="App-content flex-1">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/get-started" element={<FormPage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;