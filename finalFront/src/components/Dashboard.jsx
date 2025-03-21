// "use client"

// import { useState } from "react"
// import Sidebar from "./Sidebar"
// import Header from "./Header"
// import Cards from "./Cards"
// import "./Dashboard.css"

// const Dashboard = () => {
//   // Sample data - in a real app, this would come from an API or database
//   const [lastPurchasedItems, setLastPurchasedItems] = useState([
//     { id: 1, name: "Surgical Gloves", quantity: 500, date: "2025-03-15", hospital: "Central Hospital" },
//     { id: 2, name: "Scalpel Set", quantity: 20, date: "2025-03-14", hospital: "Memorial Medical Center" },
//     { id: 3, name: "Suture Kit", quantity: 100, date: "2025-03-12", hospital: "City General Hospital" },
//     { id: 4, name: "Surgical Masks", quantity: 1000, date: "2025-03-10", hospital: "University Hospital" },
//   ])

//   const [recentHistory, setRecentHistory] = useState([
//     {
//       id: 1,
//       action: "Item Transfer",
//       details: "Transferred 50 Surgical Gloves from Central Hospital to Memorial Medical Center",
//       date: "2025-03-16",
//     },
//     { id: 2, action: "New Purchase", details: "Purchased 500 Surgical Gloves", date: "2025-03-15" },
//     { id: 3, action: "Item Used", details: "Used 5 Scalpel Sets at Central Hospital", date: "2025-03-14" },
//     {
//       id: 4,
//       action: "Inventory Check",
//       details: "Completed inventory check at City General Hospital",
//       date: "2025-03-13",
//     },
//   ])

//   const [stats, setStats] = useState({
//     totalHospitals: 12,
//     totalRooms: 156,
//     totalRacks: 342,
//     totalBins: 1248,
//   })

//   return (
//     <div className="dashboard-container">
//       <Sidebar />
//       <div className="main-content">
//         <Header />
//         <div className="dashboard-content">
//           <h1>Surgical Inventory Dashboard</h1>
//           <div className="stats-container">
//             <div className="stat-card">
//               <h3>Total Hospitals</h3>
//               <p className="stat-number">{stats.totalHospitals}</p>
//             </div>
//             <div className="stat-card">
//               <h3>Total Rooms</h3>
//               <p className="stat-number">{stats.totalRooms}</p>
//             </div>
//             <div className="stat-card">
//               <h3>Total Racks</h3>
//               <p className="stat-number">{stats.totalRacks}</p>
//             </div>
//             <div className="stat-card">
//               <h3>Total Bins</h3>
//               <p className="stat-number">{stats.totalBins}</p>
//             </div>
//           </div>

//           <Cards lastPurchasedItems={lastPurchasedItems} recentHistory={recentHistory} />
//         </div>
//       </div>
//     </div>
//   )
// }


// export default Dashboard









import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Cards from "./Cards";
import "./Dashboard.css";

const Dashboard = () => {
  // Sample data - in a real app, this would come from an API or database
  const [lastPurchasedItems, setLastPurchasedItems] = useState([
    { id: 1, name: "Surgical Gloves", quantity: 500, date: "2025-03-15", hospital: "Central Hospital" },
    { id: 2, name: "Scalpel Set", quantity: 20, date: "2025-03-14", hospital: "Memorial Medical Center" },
    { id: 3, name: "Suture Kit", quantity: 100, date: "2025-03-12", hospital: "City General Hospital" },
    { id: 4, name: "Surgical Masks", quantity: 1000, date: "2025-03-10", hospital: "University Hospital" },
  ]);

  const [recentHistory, setRecentHistory] = useState([
    {
      id: 1,
      action: "Item Transfer",
      details: "Transferred 50 Surgical Gloves from Central Hospital to Memorial Medical Center",
      date: "2025-03-16",
    },
    { id: 2, action: "New Purchase", details: "Purchased 500 Surgical Gloves", date: "2025-03-15" },
    { id: 3, action: "Item Used", details: "Used 5 Scalpel Sets at Central Hospital", date: "2025-03-14" },
    {
      id: 4,
      action: "Inventory Check",
      details: "Completed inventory check at City General Hospital",
      date: "2025-03-13",
    },
  ]);

  const [stats, setStats] = useState({
    totalHospitals: 12,
    totalRooms: 156,
    totalRacks: 342,
    totalBins: 1248,
  });

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="dashboard-content">
          <h1>Surgical Inventory Dashboard</h1>
          <div className="stats-container">
            <div className="stat-card">
              <h3>Total Hospitals</h3>
              <p className="stat-number">{stats.totalHospitals}</p>
            </div>
            <div className="stat-card">
              <h3>Total Rooms</h3>
              <p className="stat-number">{stats.totalRooms}</p>
            </div>
            <div className="stat-card">
              <h3>Total Racks</h3>
              <p className="stat-number">{stats.totalRacks}</p>
            </div>
            <div className="stat-card">
              <h3>Total Bins</h3>
              <p className="stat-number">{stats.totalBins}</p>
            </div>
          </div>

          <Cards lastPurchasedItems={lastPurchasedItems} recentHistory={recentHistory} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
