// import logo from './logo.svg';
// import'./components/Dashboard';
// import './App.css';
// import Dashboard from './components/Dashboard';

// function App() {
//   return (
//     <Dashboard/>
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//   );
// }

// export default App;




import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Hospitals from './components/Hospitals';
import Rooms from './components/Rooms';
import History from './components/History';
import Bins from './components/Bins';
import Racks from "./components/Racks"

// import  './components/Dashboard.jsx';
// import  './components/Hospitals.jsx';
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Sidebar/> */}
        {/* <Dashboard/>
        <Hospitals/> */}
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/hospitals" element={<Hospitals />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/history" element={<History />} />
          <Route path="/bins" element={<Bins />} />
          <Route path="/racks" element={<Racks />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App