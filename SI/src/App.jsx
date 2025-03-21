import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar.js";
import Dashboard from "./components/Dashboard.js";
import ListOfHospitals from "./components/ListofHospitals.js";
import AddHospital from './components/AddHospital';
import EditHospital from './components/EditHospital';
import ViewRooms from './components/ViewRoom';
import Card from './components/Card';
import { appStyles, headerStyles, headerH1Styles, statsContainerStyles } from './style';
import './App.css';

const App = () => {
  const [hospitals, setHospitals] = useState([
    { id: 1, name: 'City General Hospital', location: '123 Main St, New York'},
    { id: 2, name: 'Sunrise Medical Center', location: '456 Broadway Ave, Los Angeles'},
    { id: 3, name: 'Green Valley Hospital', location: '789 Maple Rd, Chicago'},
  ]);

  const addHospital = (hospital) => {
    setHospitals([...hospitals, hospital]);
  };

  const updateHospital = (updatedHospital) => {
    setHospitals(hospitals.map(h => h.id === updatedHospital.id ? updatedHospital : h));
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={< Dashboard/>} />
          <Route path="/hospital" element={<ListOfHospitals hospitals={hospitals} />} />
          <Route path="/add-hospital" element={<AddHospital addHospital={addHospital} />} />
          <Route path="/edit-hospital/:id" element={<EditHospital hospitals={hospitals} updateHospital={updateHospital} />} />
          <Route path="/view-rooms/:id" element={<ViewRooms hospitals={hospitals} />} />
        </Routes>
      </div>

      {/* <div style={appStyles}>
      <header style={headerStyles}>
        <h1 style={headerH1Styles}>Dashboard</h1>
      </header>

      <div style={statsContainerStyles}>
        <Card value="350K" label="Total revenue from home service" />
        <Card value="1.5K" label="Reward Points redeemed" />
        <Card value="1.2K" label="Top Products/Services" />
        <Card value="50K" label="New Users" />
      </div>
    </div> */}
    </Router>
  );
};

export default App;

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from "./components/Navbar.js";
// import Dashboard from "./components/Dashboard.js";
// import ListOfHospitals from "./components/ListofHospitals.js";
// import AddHospital from './components/AddHospital';
// import EditHospital from './components/EditHospital';
// import ViewRooms from './components/ViewRooms';
// import './App.css';

// const App = () => {
//   const [hospitals, setHospitals] = useState([
//     { id: 1, name: 'City General Hospital', location: '123 Main St, New York'},
//     { id: 2, name: 'Sunrise Medical Center', location: '456 Broadway Ave, Los Angeles'},
//     { id: 3, name: 'Green Valley Hospital', location: '789 Maple Rd, Chicago'},
//   ]);

//   const addHospital = (hospital) => {
//     setHospitals([...hospitals, hospital]);
//   };

//   const updateHospital = (updatedHospital) => {
//     setHospitals(hospitals.map(h => h.id === updatedHospital.id ? updatedHospital : h));
//   };
//   return (
//     <div className="app-container">
//       <Navbar />
//       {/* <Dashboard /> */}
//       <ListOfHospitals />
//       <Router>
//       <Routes>
//         <Route path="/" element={<ListOfHospitals hospitals={hospitals} />} />
//         <Route path="/add-hospital" element={<AddHospital addHospital={addHospital} />} />
//         <Route path="/edit-hospital/:id" element={<EditHospital hospitals={hospitals} updateHospital={updateHospital} />} />
//         <Route path="/view-rooms/:id" element={<ViewRooms hospitals={hospitals} />} />
//       </Routes>
//     </Router>
//     </div>
//   );
// };

// function App() {
//   const [hospitals, setHospitals] = useState([
//     { id: 1, name: 'City General Hospital', location: '123 Main St, New York'},
//     { id: 2, name: 'Sunrise Medical Center', location: '456 Broadway Ave, Los Angeles'},
//     { id: 3, name: 'Green Valley Hospital', location: '789 Maple Rd, Chicago'},
//   ]);

//   const addHospital = (hospital) => {
//     setHospitals([...hospitals, hospital]);
//   };

//   const updateHospital = (updatedHospital) => {
//     setHospitals(hospitals.map(h => h.id === updatedHospital.id ? updatedHospital : h));
//   };

//   return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<ListOfHospitals hospitals={hospitals} />} />
    //     <Route path="/add-hospital" element={<AddHospital addHospital={addHospital} />} />
    //     <Route path="/edit-hospital/:id" element={<EditHospital hospitals={hospitals} updateHospital={updateHospital} />} />
    //     <Route path="/view-rooms/:id" element={<ViewRooms hospitals={hospitals} />} />
    //   </Routes>
    // </Router>
//   );
// }

// export default App;










// import React from 'react';
// import Card from './components/Card';
// import { appStyles, headerStyles, headerH1Styles, statsContainerStyles } from './style';

// function App() {
//   return (
//     <div style={appStyles}>
//       <header style={headerStyles}>
//         <h1 style={headerH1Styles}>Dashboard</h1>
//       </header>

//       <div style={statsContainerStyles}>
//         <Card value="350K" label="Total revenue from home service" />
//         <Card value="1.5K" label="Reward Points redeemed" />
//         <Card value="1.2K" label="Top Products/Services" />
//         <Card value="50K" label="New Users" />
//       </div>
//     </div>
//   );
// }

// export default App;