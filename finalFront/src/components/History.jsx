// "use client"

// import { useState, useEffect } from "react"
// import Sidebar from "./Sidebar"
// import Header from "./Header"
// import "./History.css"

// const History = () => {
//   // Sample data - in a real app, this would come from an API or database
//   const [historyData, setHistoryData] = useState([
//     {
//       id: 1,
//       action: "Item Transfer",
//       details: "Transferred 50 Surgical Gloves from Central Hospital to Memorial Medical Center",
//       date: "2025-03-16",
//       user: "Dr. John Smith",
//       category: "Transfer",
//     },
//     {
//       id: 2,
//       action: "New Purchase",
//       details: "Purchased 500 Surgical Gloves",
//       date: "2025-03-15",
//       user: "Dr. Sarah Johnson",
//       category: "Purchase",
//     },
//     {
//       id: 3,
//       action: "Item Used",
//       details: "Used 5 Scalpel Sets at Central Hospital",
//       date: "2025-03-14",
//       user: "Dr. Michael Brown",
//       category: "Usage",
//     },
//     {
//       id: 4,
//       action: "Inventory Check",
//       details: "Completed inventory check at City General Hospital",
//       date: "2025-03-13",
//       user: "Dr. Emily Davis",
//       category: "Audit",
//     },
//     {
//       id: 5,
//       action: "Item Restocked",
//       details: "Restocked 200 Surgical Masks at University Hospital",
//       date: "2025-03-10",
//       user: "Dr. Robert Wilson",
//       category: "Restock",
//     },
//     {
//       id: 6,
//       action: "Equipment Maintenance",
//       details: "Performed maintenance on Surgical Equipment in OR 1",
//       date: "2025-03-08",
//       user: "Tech. James Miller",
//       category: "Maintenance",
//     },
//     {
//       id: 7,
//       action: "New Purchase",
//       details: "Purchased 20 Suture Kits",
//       date: "2025-03-05",
//       user: "Dr. Sarah Johnson",
//       category: "Purchase",
//     },
//     {
//       id: 8,
//       action: "Item Transfer",
//       details: "Transferred 10 IV Sets from Memorial Medical Center to Central Hospital",
//       date: "2025-03-03",
//       user: "Dr. John Smith",
//       category: "Transfer",
//     },
//     {
//       id: 9,
//       action: "Inventory Check",
//       details: "Completed quarterly inventory audit at all locations",
//       date: "2025-02-28",
//       user: "Dr. Emily Davis",
//       category: "Audit",
//     },
//     {
//       id: 10,
//       action: "New Purchase",
//       details: "Purchased 30 Surgical Gowns",
//       date: "2025-02-25",
//       user: "Dr. Sarah Johnson",
//       category: "Purchase",
//     },
//     {
//       id: 11,
//       action: "Item Used",
//       details: "Used 15 IV Sets at Memorial Medical Center",
//       date: "2025-02-20",
//       user: "Dr. Michael Brown",
//       category: "Usage",
//     },
//     {
//       id: 12,
//       action: "Equipment Maintenance",
//       details: "Calibrated monitoring equipment in ICU rooms",
//       date: "2025-02-15",
//       user: "Tech. James Miller",
//       category: "Maintenance",
//     },
//     {
//       id: 13,
//       action: "Item Restocked",
//       details: "Restocked 100 Surgical Gloves at City General Hospital",
//       date: "2025-02-10",
//       user: "Dr. Robert Wilson",
//       category: "Restock",
//     },
//     {
//       id: 14,
//       action: "New Purchase",
//       details: "Purchased 5 Surgical Instrument Sets",
//       date: "2025-02-05",
//       user: "Dr. Sarah Johnson",
//       category: "Purchase",
//     },
//     {
//       id: 15,
//       action: "Item Transfer",
//       details: "Transferred 25 Surgical Masks from University Hospital to City General Hospital",
//       date: "2025-01-30",
//       user: "Dr. John Smith",
//       category: "Transfer",
//     },
//     {
//       id: 16,
//       action: "Inventory Check",
//       details: "Completed inventory check at Memorial Medical Center",
//       date: "2025-01-25",
//       user: "Dr. Emily Davis",
//       category: "Audit",
//     },
//     {
//       id: 17,
//       action: "New Purchase",
//       details: "Purchased 10 Blood Pressure Monitors",
//       date: "2025-01-20",
//       user: "Dr. Sarah Johnson",
//       category: "Purchase",
//     },
//     {
//       id: 18,
//       action: "Item Used",
//       details: "Used 8 Surgical Instrument Sets at Central Hospital",
//       date: "2025-01-15",
//       user: "Dr. Michael Brown",
//       category: "Usage",
//     },
//     {
//       id: 19,
//       action: "Equipment Maintenance",
//       details: "Performed maintenance on Ventilators",
//       date: "2025-01-10",
//       user: "Tech. James Miller",
//       category: "Maintenance",
//     },
//     {
//       id: 20,
//       action: "Item Restocked",
//       details: "Restocked 50 IV Sets at University Hospital",
//       date: "2025-01-05",
//       user: "Dr. Robert Wilson",
//       category: "Restock",
//     },
//   ])

//   const [searchTerm, setSearchTerm] = useState("")
//   const [filteredHistory, setFilteredHistory] = useState([])
//   const [groupedHistory, setGroupedHistory] = useState({})
//   const [selectedMonth, setSelectedMonth] = useState("all")
//   const [availableMonths, setAvailableMonths] = useState([])

//   // Filter and group history data
//   useEffect(() => {
//     // Filter based on search term
//     const filtered = historyData.filter(
//       (item) =>
//         item.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         item.details.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         item.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         formatDate(item.date).toLowerCase().includes(searchTerm.toLowerCase()),
//     )

//     setFilteredHistory(filtered)

//     // Group by month
//     const grouped = {}
//     const months = new Set()

//     filtered.forEach((item) => {
//       const date = new Date(item.date)
//       const monthYear = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`
//       const monthName = date.toLocaleString("default", { month: "long", year: "numeric" })

//       if (!grouped[monthYear]) {
//         grouped[monthYear] = {
//           name: monthName,
//           items: [],
//         }
//       }

//       grouped[monthYear].items.push(item)
//       months.add(monthYear)
//     })

//     // Sort items within each month by date (newest first)
//     Object.keys(grouped).forEach((month) => {
//       grouped[month].items.sort((a, b) => new Date(b.date) - new Date(a.date))
//     })

//     setGroupedHistory(grouped)

//     // Create array of available months for filter
//     const monthsArray = Array.from(months).map((month) => {
//       const [year, monthNum] = month.split("-")
//       return {
//         id: month,
//         name: new Date(Number.parseInt(year), Number.parseInt(monthNum) - 1).toLocaleString("default", {
//           month: "long",
//           year: "numeric",
//         }),
//       }
//     })

//     // Sort months (newest first)
//     monthsArray.sort((a, b) => b.id.localeCompare(a.id))
//     setAvailableMonths(monthsArray)
//   }, [historyData, searchTerm])

//   // Format date to a more readable format
//   const formatDate = (dateString) => {
//     const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" }
//     return new Date(dateString).toLocaleDateString("en-US", options)
//   }

//   // Get activity icon based on category
//   const getActivityIcon = (category) => {
//     switch (category) {
//       case "Purchase":
//         return "🛒"
//       case "Transfer":
//         return "🔄"
//       case "Usage":
//         return "📉"
//       case "Audit":
//         return "📋"
//       case "Restock":
//         return "📦"
//       case "Maintenance":
//         return "🔧"
//       default:
//         return "📝"
//     }
//   }

//   // Get activity color based on category
//   const getActivityColor = (category) => {
//     switch (category) {
//       case "Purchase":
//         return "#3498db" // Blue
//       case "Transfer":
//         return "#9b59b6" // Purple
//       case "Usage":
//         return "#e74c3c" // Red
//       case "Audit":
//         return "#f39c12" // Orange
//       case "Restock":
//         return "#2ecc71" // Green
//       case "Maintenance":
//         return "#1abc9c" // Teal
//       default:
//         return "#7f8c8d" // Gray
//     }
//   }

//   return (
//     <div className="dashboard-container">
//       <Sidebar />
//       <div className="main-content">
//         <Header />
//         <div className="history-content">
//           <div className="history-header">
//             <h1>Activity History</h1>
//             <div className="history-filters">
//               <div className="search-bar">
//                 <input
//                   type="text"
//                   placeholder="Search activities..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//                 {searchTerm && (
//                   <button className="clear-search" onClick={() => setSearchTerm("")}>
//                     ×
//                   </button>
//                 )}
//               </div>
//               <div className="month-filter">
//                 <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
//                   <option value="all">All Months</option>
//                   {availableMonths.map((month) => (
//                     <option key={month.id} value={month.id}>
//                       {month.name}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//           </div>

//           <div className="history-timeline">
//             {filteredHistory.length === 0 ? (
//               <div className="no-results">
//                 <p>No activities found matching your search.</p>
//               </div>
//             ) : (
//               Object.keys(groupedHistory)
//                 .sort((a, b) => b.localeCompare(a)) // Sort months in descending order
//                 .filter((month) => selectedMonth === "all" || month === selectedMonth)
//                 .map((month) => (
//                   <div key={month} className="month-section">
//                     <div className="month-header">
//                       <h2>{groupedHistory[month].name}</h2>
//                       <span className="activity-count">{groupedHistory[month].items.length} activities</span>
//                     </div>
//                     <div className="month-activities">
//                       {groupedHistory[month].items.map((activity) => (
//                         <div key={activity.id} className="activity-item">
//                           <div
//                             className="activity-icon"
//                             style={{ backgroundColor: getActivityColor(activity.category) }}
//                           >
//                             {getActivityIcon(activity.category)}
//                           </div>
//                           <div className="activity-content">
//                             <div className="activity-header">
//                               <h3>{activity.action}</h3>
//                               <span className="activity-date">{formatDate(activity.date)}</span>
//                             </div>
//                             <p className="activity-details">{activity.details}</p>
//                             <div className="activity-footer">
//                               <span className="activity-user">{activity.user}</span>
//                               <span className="activity-category">{activity.category}</span>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 ))
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default History




import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "./History.css";

const History = () => {
  // Sample data - in a real app, this would come from an API or database
  const [historyData, setHistoryData] = useState([
    {
      id: 1,
      action: "Item Transfer",
      details: "Transferred 50 Surgical Gloves from Central Hospital to Memorial Medical Center",
      date: "2025-03-16",
      user: "Dr. John Smith",
      category: "Transfer",
    },
    {
      id: 2,
      action: "New Purchase",
      details: "Purchased 500 Surgical Gloves",
      date: "2025-03-15",
      user: "Dr. Sarah Johnson",
      category: "Purchase",
    },
    {
      id: 3,
      action: "Item Used",
      details: "Used 5 Scalpel Sets at Central Hospital",
      date: "2025-03-14",
      user: "Dr. Michael Brown",
      category: "Usage",
    },
    {
      id: 4,
      action: "Inventory Check",
      details: "Completed inventory check at City General Hospital",
      date: "2025-03-13",
      user: "Dr. Emily Davis",
      category: "Audit",
    },
    {
      id: 5,
      action: "Item Restocked",
      details: "Restocked 200 Surgical Masks at University Hospital",
      date: "2025-03-10",
      user: "Dr. Robert Wilson",
      category: "Restock",
    },
    {
      id: 6,
      action: "Equipment Maintenance",
      details: "Performed maintenance on Surgical Equipment in OR 1",
      date: "2025-03-08",
      user: "Tech. James Miller",
      category: "Maintenance",
    },
    {
      id: 7,
      action: "New Purchase",
      details: "Purchased 20 Suture Kits",
      date: "2025-03-05",
      user: "Dr. Sarah Johnson",
      category: "Purchase",
    },
    {
      id: 8,
      action: "Item Transfer",
      details: "Transferred 10 IV Sets from Memorial Medical Center to Central Hospital",
      date: "2025-03-03",
      user: "Dr. John Smith",
      category: "Transfer",
    },
    {
      id: 9,
      action: "Inventory Check",
      details: "Completed quarterly inventory audit at all locations",
      date: "2025-02-28",
      user: "Dr. Emily Davis",
      category: "Audit",
    },
    {
      id: 10,
      action: "New Purchase",
      details: "Purchased 30 Surgical Gowns",
      date: "2025-02-25",
      user: "Dr. Sarah Johnson",
      category: "Purchase",
    },
    {
      id: 11,
      action: "Item Used",
      details: "Used 15 IV Sets at Memorial Medical Center",
      date: "2025-02-20",
      user: "Dr. Michael Brown",
      category: "Usage",
    },
    {
      id: 12,
      action: "Equipment Maintenance",
      details: "Calibrated monitoring equipment in ICU rooms",
      date: "2025-02-15",
      user: "Tech. James Miller",
      category: "Maintenance",
    },
    {
      id: 13,
      action: "Item Restocked",
      details: "Restocked 100 Surgical Gloves at City General Hospital",
      date: "2025-02-10",
      user: "Dr. Robert Wilson",
      category: "Restock",
    },
    {
      id: 14,
      action: "New Purchase",
      details: "Purchased 5 Surgical Instrument Sets",
      date: "2025-02-05",
      user: "Dr. Sarah Johnson",
      category: "Purchase",
    },
    {
      id: 15,
      action: "Item Transfer",
      details: "Transferred 25 Surgical Masks from University Hospital to City General Hospital",
      date: "2025-01-30",
      user: "Dr. John Smith",
      category: "Transfer",
    },
    {
      id: 16,
      action: "Inventory Check",
      details: "Completed inventory check at Memorial Medical Center",
      date: "2025-01-25",
      user: "Dr. Emily Davis",
      category: "Audit",
    },
    {
      id: 17,
      action: "New Purchase",
      details: "Purchased 10 Blood Pressure Monitors",
      date: "2025-01-20",
      user: "Dr. Sarah Johnson",
      category: "Purchase",
    },
    {
      id: 18,
      action: "Item Used",
      details: "Used 8 Surgical Instrument Sets at Central Hospital",
      date: "2025-01-15",
      user: "Dr. Michael Brown",
      category: "Usage",
    },
    {
      id: 19,
      action: "Equipment Maintenance",
      details: "Performed maintenance on Ventilators",
      date: "2025-01-10",
      user: "Tech. James Miller",
      category: "Maintenance",
    },
    {
      id: 20,
      action: "Item Restocked",
      details: "Restocked 50 IV Sets at University Hospital",
      date: "2025-01-05",
      user: "Dr. Robert Wilson",
      category: "Restock",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredHistory, setFilteredHistory] = useState([]);
  const [groupedHistory, setGroupedHistory] = useState({});
  const [selectedMonth, setSelectedMonth] = useState("all");
  const [availableMonths, setAvailableMonths] = useState([]);

  // Filter and group history data
  useEffect(() => {
    // Filter based on search term
    const filtered = historyData.filter(
      (item) =>
        item.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.details.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        formatDate(item.date).toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredHistory(filtered);

    // Group by month
    const grouped = {};
    const months = new Set();

    filtered.forEach((item) => {
      const date = new Date(item.date);
      const monthYear = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
      const monthName = date.toLocaleString("default", { month: "long", year: "numeric" });

      if (!grouped[monthYear]) {
        grouped[monthYear] = {
          name: monthName,
          items: [],
        };
      }

      grouped[monthYear].items.push(item);
      months.add(monthYear);
    });

    // Sort items within each month by date (newest first)
    Object.keys(grouped).forEach((month) => {
      grouped[month].items.sort((a, b) => new Date(b.date) - new Date(a.date));
    });

    setGroupedHistory(grouped);

    // Create array of available months for filter
    const monthsArray = Array.from(months).map((month) => {
      const [year, monthNum] = month.split("-");
      return {
        id: month,
        name: new Date(Number.parseInt(year), Number.parseInt(monthNum) - 1).toLocaleString("default", {
          month: "long",
          year: "numeric",
        }),
      };
    });

    // Sort months (newest first)
    monthsArray.sort((a, b) => b.id.localeCompare(a.id));
    setAvailableMonths(monthsArray);
  }, [historyData, searchTerm]);

  // Format date to a more readable format
  const formatDate = (dateString) => {
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  // Get activity icon based on category
  const getActivityIcon = (category) => {
    switch (category) {
      case "Purchase":
        return "🛒";
      case "Transfer":
        return "🔄";
      case "Usage":
        return "📉";
      case "Audit":
        return "📋";
      case "Restock":
        return "📦";
      case "Maintenance":
        return "🔧";
      default:
        return "📝";
    }
  };

  // Get activity color based on category
  const getActivityColor = (category) => {
    switch (category) {
      case "Purchase":
        return "#3498db"; // Blue
      case "Transfer":
        return "#9b59b6"; // Purple
      case "Usage":
        return "#e74c3c"; // Red
      case "Audit":
        return "#f39c12"; // Orange
      case "Restock":
        return "#2ecc71"; // Green
      case "Maintenance":
        return "#1abc9c"; // Teal
      default:
        return "#7f8c8d"; // Gray
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="history-content">
          <div className="history-header">
            <h1>Activity History</h1>
            <div className="history-filters">
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="Search activities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button className="clear-search" onClick={() => setSearchTerm("")}>
                    ×
                  </button>
                )}
              </div>
              <div className="month-filter">
                <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
                  <option value="all">All Months</option>
                  {availableMonths.map((month) => (
                    <option key={month.id} value={month.id}>
                      {month.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="history-timeline">
            {filteredHistory.length === 0 ? (
              <div className="no-results">
                <p>No activities found matching your search.</p>
              </div>
            ) : (
              Object.keys(groupedHistory)
                .sort((a, b) => b.localeCompare(a)) // Sort months in descending order
                .filter((month) => selectedMonth === "all" || month === selectedMonth)
                .map((month) => (
                  <div key={month} className="month-section">
                    <div className="month-header">
                      <h2>{groupedHistory[month].name}</h2>
                      <span className="activity-count">{groupedHistory[month].items.length} activities</span>
                    </div>
                    <div className="month-activities">
                      {groupedHistory[month].items.map((activity) => (
                        <div key={activity.id} className="activity-item">
                          <div
                            className="activity-icon"
                            style={{ backgroundColor: getActivityColor(activity.category) }}
                          >
                            {getActivityIcon(activity.category)}
                          </div>
                          <div className="activity-content">
                            <div className="activity-header">
                              <h3>{activity.action}</h3>
                              <span className="activity-date">{formatDate(activity.date)}</span>
                            </div>
                            <p className="activity-details">{activity.details}</p>
                            <div className="activity-footer">
                              <span className="activity-user">{activity.user}</span>
                              <span className="activity-category">{activity.category}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;