import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import BinModal from "./BinModal";
import "./Bins.css";

const Bins = () => {
  // Sample data - in a real app, this would come from an API or database
  const [bins, setBins] = useState([
    {
      id: 1,
      name: "Bin A-101",
      type: "blue",
      location: "Central Hospital - Rack 3",
      capacity: "50 items",
      currentItems: 32,
      lastRestocked: "2025-03-10",
      contents: "Surgical Gloves, Masks, Gauze",
    },
    {
      id: 2,
      name: "Bin B-205",
      type: "black",
      location: "Central Hospital - Rack 5",
      capacity: "30 items",
      currentItems: 18,
      lastRestocked: "2025-03-08",
      contents: "Scalpels, Forceps, Clamps",
    },
    {
      id: 3,
      name: "Bin C-310",
      type: "blue",
      location: "Memorial Medical Center - Rack 2",
      capacity: "40 items",
      currentItems: 40,
      lastRestocked: "2025-03-15",
      contents: "Surgical Masks, Face Shields, Caps",
    },
    {
      id: 4,
      name: "Bin D-112",
      type: "black",
      location: "Memorial Medical Center - Rack 4",
      capacity: "25 items",
      currentItems: 10,
      lastRestocked: "2025-03-05",
      contents: "Suture Kits, Needles, Thread",
    },
    {
      id: 5,
      name: "Bin E-201",
      type: "blue",
      location: "City General Hospital - Rack 1",
      capacity: "60 items",
      currentItems: 45,
      lastRestocked: "2025-03-12",
      contents: "Gowns, Drapes, Shoe Covers",
    },
    {
      id: 6,
      name: "Bin F-305",
      type: "black",
      location: "City General Hospital - Rack 6",
      capacity: "20 items",
      currentItems: 15,
      lastRestocked: "2025-03-07",
      contents: "Surgical Scissors, Retractors, Probes",
    },
    {
      id: 7,
      name: "Bin G-118",
      type: "blue",
      location: "University Hospital - Rack 2",
      capacity: "45 items",
      currentItems: 30,
      lastRestocked: "2025-03-14",
      contents: "Gloves, Masks, Sanitizer",
    },
    {
      id: 8,
      name: "Bin H-220",
      type: "black",
      location: "University Hospital - Rack 5",
      capacity: "35 items",
      currentItems: 20,
      lastRestocked: "2025-03-09",
      contents: "Scalpel Blades, Hemostats, Needle Holders",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [selectedBin, setSelectedBin] = useState(null);
  const [modalType, setModalType] = useState(null); // 'edit', 'delete', or null
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter bins based on search term and type
  const filteredBins = bins.filter((bin) => {
    const matchesSearch =
      bin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bin.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bin.contents.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = filterType === "all" || bin.type === filterType;

    return matchesSearch && matchesType;
  });

  // Handle opening the modal for different actions
  const handleBinAction = (bin, type) => {
    setSelectedBin(bin);
    setModalType(type);
    setIsModalOpen(true);
  };

  // Handle closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBin(null);
    setModalType(null);
  };

  // Handle saving changes to a bin
  const handleSaveBin = (updatedBin) => {
    if (modalType === "edit") {
      // Update the bin
      const updatedBins = bins.map((bin) => (bin.id === updatedBin.id ? updatedBin : bin));
      setBins(updatedBins);
    } else if (modalType === "delete") {
      // Remove the bin
      const updatedBins = bins.filter((bin) => bin.id !== selectedBin.id);
      setBins(updatedBins);
    }
    handleCloseModal();
  };

  // Calculate fill percentage for bin capacity visualization
  const calculateFillPercentage = (current, capacity) => {
    const max = Number.parseInt(capacity);
    return (current / max) * 100;
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="bins-content">
          <div className="bins-header">
            <h1>Inventory Bins</h1>
            <div className="bins-filters">
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="Search bins..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button className="clear-search" onClick={() => setSearchTerm("")}>
                    ×
                  </button>
                )}
              </div>
              <div className="type-filter">
                <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
                  <option value="all">All Bins</option>
                  <option value="blue">Blue Bins</option>
                  <option value="black">Black Bins</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bins-grid">
            {filteredBins.map((bin) => (
              <div key={bin.id} className={`bin-card ${bin.type}-bin`}>
                <div className="bin-header">
                  <h2>{bin.name}</h2>
                  <div className="bin-actions">
                    <button className="edit-btn" onClick={() => handleBinAction(bin, "edit")}>
                      Edit
                    </button>
                    <button className="delete-btn" onClick={() => handleBinAction(bin, "delete")}>
                      Delete
                    </button>
                  </div>
                </div>
                <div className="bin-details">
                  <div className="bin-info">
                    <p>
                      <strong>Location:</strong> {bin.location}
                    </p>
                    <p>
                      <strong>Capacity:</strong> {bin.capacity}
                    </p>
                    <p>
                      <strong>Last Restocked:</strong> {new Date(bin.lastRestocked).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="bin-contents">
                    <p>
                      <strong>Contents:</strong> {bin.contents}
                    </p>
                  </div>
                  <div className="bin-capacity">
                    <div className="capacity-label">
                      <span>Capacity Usage</span>
                      <span>
                        {bin.currentItems}/{bin.capacity.split(" ")[0]}
                      </span>
                    </div>
                    <div className="capacity-bar">
                      <div
                        className="capacity-fill"
                        style={{
                          width: `${calculateFillPercentage(bin.currentItems, bin.capacity.split(" ")[0])}%`,
                          backgroundColor:
                            calculateFillPercentage(bin.currentItems, bin.capacity.split(" ")[0]) > 90
                              ? "#e74c3c"
                              : "#2ecc71",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredBins.length === 0 && (
            <div className="no-results">
              <p>No bins found matching your search.</p>
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <BinModal bin={selectedBin} modalType={modalType} onClose={handleCloseModal} onSave={handleSaveBin} />
      )}
    </div>
  );
};

export default Bins;






// "use client"

// import { useState } from "react"
// import Sidebar from "./Sidebar"
// import Header from "./Header"
// import BinModal from "./BinModal"
// import "./Bins.css"

// const Bins = () => {
//   // Sample data - in a real app, this would come from an API or database
//   const [bins, setBins] = useState([
//     {
//       id: 1,
//       name: "Bin A-101",
//       type: "blue",
//       location: "Central Hospital - Rack 3",
//       capacity: "50 items",
//       currentItems: 32,
//       lastRestocked: "2025-03-10",
//       contents: "Surgical Gloves, Masks, Gauze",
//     },
//     {
//       id: 2,
//       name: "Bin B-205",
//       type: "black",
//       location: "Central Hospital - Rack 5",
//       capacity: "30 items",
//       currentItems: 18,
//       lastRestocked: "2025-03-08",
//       contents: "Scalpels, Forceps, Clamps",
//     },
//     {
//       id: 3,
//       name: "Bin C-310",
//       type: "blue",
//       location: "Memorial Medical Center - Rack 2",
//       capacity: "40 items",
//       currentItems: 40,
//       lastRestocked: "2025-03-15",
//       contents: "Surgical Masks, Face Shields, Caps",
//     },
//     {
//       id: 4,
//       name: "Bin D-112",
//       type: "black",
//       location: "Memorial Medical Center - Rack 4",
//       capacity: "25 items",
//       currentItems: 10,
//       lastRestocked: "2025-03-05",
//       contents: "Suture Kits, Needles, Thread",
//     },
//     {
//       id: 5,
//       name: "Bin E-201",
//       type: "blue",
//       location: "City General Hospital - Rack 1",
//       capacity: "60 items",
//       currentItems: 45,
//       lastRestocked: "2025-03-12",
//       contents: "Gowns, Drapes, Shoe Covers",
//     },
//     {
//       id: 6,
//       name: "Bin F-305",
//       type: "black",
//       location: "City General Hospital - Rack 6",
//       capacity: "20 items",
//       currentItems: 15,
//       lastRestocked: "2025-03-07",
//       contents: "Surgical Scissors, Retractors, Probes",
//     },
//     {
//       id: 7,
//       name: "Bin G-118",
//       type: "blue",
//       location: "University Hospital - Rack 2",
//       capacity: "45 items",
//       currentItems: 30,
//       lastRestocked: "2025-03-14",
//       contents: "Gloves, Masks, Sanitizer",
//     },
//     {
//       id: 8,
//       name: "Bin H-220",
//       type: "black",
//       location: "University Hospital - Rack 5",
//       capacity: "35 items",
//       currentItems: 20,
//       lastRestocked: "2025-03-09",
//       contents: "Scalpel Blades, Hemostats, Needle Holders",
//     },
//   ])

//   const [searchTerm, setSearchTerm] = useState("")
//   const [filterType, setFilterType] = useState("all")
//   const [selectedBin, setSelectedBin] = useState(null)
//   const [modalType, setModalType] = useState(null) // 'edit', 'delete', or null
//   const [isModalOpen, setIsModalOpen] = useState(false)

//   // Filter bins based on search term and type
//   const filteredBins = bins.filter((bin) => {
//     const matchesSearch =
//       bin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       bin.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       bin.contents.toLowerCase().includes(searchTerm.toLowerCase())

//     const matchesType = filterType === "all" || bin.type === filterType

//     return matchesSearch && matchesType
//   })

//   // Handle opening the modal for different actions
//   const handleBinAction = (bin, type) => {
//     setSelectedBin(bin)
//     setModalType(type)
//     setIsModalOpen(true)
//   }

//   // Handle closing the modal
//   const handleCloseModal = () => {
//     setIsModalOpen(false)
//     setSelectedBin(null)
//     setModalType(null)
//   }

//   // Handle saving changes to a bin
//   const handleSaveBin = (updatedBin) => {
//     if (modalType === "edit") {
//       // Update the bin
//       const updatedBins = bins.map((bin) => (bin.id === updatedBin.id ? updatedBin : bin))
//       setBins(updatedBins)
//     } else if (modalType === "delete") {
//       // Remove the bin
//       const updatedBins = bins.filter((bin) => bin.id !== selectedBin.id)
//       setBins(updatedBins)
//     }
//     handleCloseModal()
//   }

//   // Calculate fill percentage for bin capacity visualization
//   const calculateFillPercentage = (current, capacity) => {
//     const max = Number.parseInt(capacity)
//     return (current / max) * 100
//   }

//   return (
//     <div className="dashboard-container">
//       <Sidebar />
//       <div className="main-content">
//         <Header />
//         <div className="bins-content">
//           <div className="bins-header">
//             <h1>Inventory Bins</h1>
//             <div className="bins-filters">
//               <div className="search-bar">
//                 <input
//                   type="text"
//                   placeholder="Search bins..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//                 {searchTerm && (
//                   <button className="clear-search" onClick={() => setSearchTerm("")}>
//                     ×
//                   </button>
//                 )}
//               </div>
//               <div className="type-filter">
//                 <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
//                   <option value="all">All Bins</option>
//                   <option value="blue">Blue Bins</option>
//                   <option value="black">Black Bins</option>
//                 </select>
//               </div>
//             </div>
//           </div>

//           <div className="bins-grid">
//             {filteredBins.map((bin) => (
//               <div key={bin.id} className={`bin-card ${bin.type}-bin`}>
//                 <div className="bin-header">
//                   <h2>{bin.name}</h2>
//                   <div className="bin-actions">
//                     <button className="edit-btn" onClick={() => handleBinAction(bin, "edit")}>
//                       Edit
//                     </button>
//                     <button className="delete-btn" onClick={() => handleBinAction(bin, "delete")}>
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//                 <div className="bin-details">
//                   <div className="bin-info">
//                     <p>
//                       <strong>Location:</strong> {bin.location}
//                     </p>
//                     <p>
//                       <strong>Capacity:</strong> {bin.capacity}
//                     </p>
//                     <p>
//                       <strong>Last Restocked:</strong> {new Date(bin.lastRestocked).toLocaleDateString()}
//                     </p>
//                   </div>
//                   <div className="bin-contents">
//                     <p>
//                       <strong>Contents:</strong> {bin.contents}
//                     </p>
//                   </div>
//                   <div className="bin-capacity">
//                     <div className="capacity-label">
//                       <span>Capacity Usage</span>
//                       <span>
//                         {bin.currentItems}/{bin.capacity.split(" ")[0]}
//                       </span>
//                     </div>
//                     <div className="capacity-bar">
//                       <div
//                         className="capacity-fill"
//                         style={{
//                           width: `${calculateFillPercentage(bin.currentItems, bin.capacity.split(" ")[0])}%`,
//                           backgroundColor:
//                             calculateFillPercentage(bin.currentItems, bin.capacity.split(" ")[0]) > 90
//                               ? "#e74c3c"
//                               : "#2ecc71",
//                         }}
//                       ></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {filteredBins.length === 0 && (
//             <div className="no-results">
//               <p>No bins found matching your search.</p>
//             </div>
//           )}
//         </div>
//       </div>

//       {isModalOpen && (
//         <BinModal bin={selectedBin} modalType={modalType} onClose={handleCloseModal} onSave={handleSaveBin} />
//       )}
//     </div>
//   )
// }

// export default Bins

