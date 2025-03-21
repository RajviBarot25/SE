// "use client"

// import { useState, useEffect } from "react"
// import Sidebar from "./Sidebar"
// import Header from "./Header"
// import RoomEditModal from "./RoomEditModal"
// import "./Rooms.css"

// const Rooms = () => {
//   // Sample data - in a real app, this would come from an API or database
//   const [hospitals, setHospitals] = useState([
//     {
//       id: 1,
//       name: "Central Hospital",
//       rooms: [
//         {
//           id: 101,
//           name: "Operating Room 1",
//           floor: "1st Floor",
//           type: "Surgery",
//           status: "Available",
//           lastCleaned: "2025-03-15",
//           equipment: 12,
//           notes: "Primary operating room for general surgery.",
//         },
//         {
//           id: 102,
//           name: "Operating Room 2",
//           floor: "1st Floor",
//           type: "Surgery",
//           status: "In Use",
//           lastCleaned: "2025-03-14",
//           equipment: 15,
//           notes: "Equipped with robotic surgical system.",
//         },
//         {
//           id: 103,
//           name: "Recovery Room 1",
//           floor: "2nd Floor",
//           type: "Recovery",
//           status: "Available",
//           lastCleaned: "2025-03-16",
//           equipment: 8,
//           notes: "Post-operative recovery for up to 4 patients.",
//         },
//         {
//           id: 104,
//           name: "ICU Room 1",
//           floor: "3rd Floor",
//           type: "Intensive Care",
//           status: "In Use",
//           lastCleaned: "2025-03-13",
//           equipment: 20,
//           notes: "Fully equipped ICU room with ventilator support.",
//         },
//       ],
//     },
//     {
//       id: 2,
//       name: "Memorial Medical Center",
//       rooms: [
//         {
//           id: 201,
//           name: "Operating Room A",
//           floor: "3rd Floor",
//           type: "Surgery",
//           status: "Available",
//           lastCleaned: "2025-03-15",
//           equipment: 14,
//           notes: "Specialized for orthopedic procedures.",
//         },
//         {
//           id: 202,
//           name: "ICU Room 1",
//           floor: "4th Floor",
//           type: "Intensive Care",
//           status: "In Use",
//           lastCleaned: "2025-03-12",
//           equipment: 18,
//           notes: "Isolation room with negative pressure.",
//         },
//         {
//           id: 203,
//           name: "Recovery Bay 1",
//           floor: "3rd Floor",
//           type: "Recovery",
//           status: "Available",
//           lastCleaned: "2025-03-16",
//           equipment: 6,
//           notes: "Standard recovery bay for post-op patients.",
//         },
//       ],
//     },
//     {
//       id: 3,
//       name: "City General Hospital",
//       rooms: [
//         {
//           id: 301,
//           name: "Surgery Suite 1",
//           floor: "Ground Floor",
//           type: "Surgery",
//           status: "Maintenance",
//           lastCleaned: "2025-03-10",
//           equipment: 16,
//           notes: "Under maintenance for equipment upgrades.",
//         },
//         {
//           id: 302,
//           name: "Surgery Suite 2",
//           floor: "Ground Floor",
//           type: "Surgery",
//           status: "Available",
//           lastCleaned: "2025-03-15",
//           equipment: 14,
//           notes: "General surgery suite with advanced imaging.",
//         },
//         {
//           id: 303,
//           name: "Recovery Bay A",
//           floor: "1st Floor",
//           type: "Recovery",
//           status: "Available",
//           lastCleaned: "2025-03-16",
//           equipment: 7,
//           notes: "Recovery bay for ambulatory procedures.",
//         },
//         {
//           id: 304,
//           name: "Recovery Bay B",
//           floor: "1st Floor",
//           type: "Recovery",
//           status: "In Use",
//           lastCleaned: "2025-03-14",
//           equipment: 7,
//           notes: "Recovery bay with cardiac monitoring.",
//         },
//         {
//           id: 305,
//           name: "ICU Room 1",
//           floor: "2nd Floor",
//           type: "Intensive Care",
//           status: "Available",
//           lastCleaned: "2025-03-15",
//           equipment: 22,
//           notes: "Pediatric ICU room with specialized equipment.",
//         },
//       ],
//     },
//     {
//       id: 4,
//       name: "University Hospital",
//       rooms: [
//         {
//           id: 401,
//           name: "Teaching OR 1",
//           floor: "5th Floor",
//           type: "Surgery/Teaching",
//           status: "In Use",
//           lastCleaned: "2025-03-13",
//           equipment: 25,
//           notes: "Operating room with observation gallery for students.",
//         },
//         {
//           id: 402,
//           name: "Research Lab",
//           floor: "6th Floor",
//           type: "Research",
//           status: "Available",
//           lastCleaned: "2025-03-16",
//           equipment: 30,
//           notes: "Research laboratory for surgical innovations.",
//         },
//         {
//           id: 403,
//           name: "Recovery Room 1",
//           floor: "5th Floor",
//           type: "Recovery",
//           status: "Available",
//           lastCleaned: "2025-03-15",
//           equipment: 10,
//           notes: "Recovery room with 6 beds for post-op patients.",
//         },
//       ],
//     },
//   ])

//   const [searchTerm, setSearchTerm] = useState("")
//   const [filterType, setFilterType] = useState("all")
//   const [filterStatus, setFilterStatus] = useState("all")
//   const [expandedHospital, setExpandedHospital] = useState(null)
//   const [selectedRoom, setSelectedRoom] = useState(null)
//   const [selectedHospital, setSelectedHospital] = useState(null)
//   const [modalType, setModalType] = useState(null) // 'view', 'edit', 'delete', or null
//   const [isModalOpen, setIsModalOpen] = useState(false)


//   // Handle room action (view, edit, delete)
//   const handleRoomAction = (hospital, room, type) => {
//     setSelectedHospital(hospital);
//     setSelectedRoom(room);
//     setModalType(type);
//     setIsModalOpen(true);
//   };
  

//   // Expand the first hospital by default
//   useEffect(() => {
//     if (hospitals.length > 0 && expandedHospital === null) {
//       setExpandedHospital(hospitals[0].id)
//     }
//   }, [hospitals, expandedHospital])

//   // Filter hospitals and rooms based on search term and filters
//   const filteredHospitals = hospitals
//     .map((hospital) => {
//       const filteredRooms = hospital.rooms.filter((room) => {
//         const matchesSearch =
//           room.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           room.floor.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           room.type.toLowerCase().includes(searchTerm.toLowerCase())

//         const matchesType = filterType === "all" || room.type.includes(filterType)
//         const matchesStatus = filterStatus === "all" || room.status === filterStatus

//         return matchesSearch && matchesType && matchesStatus
//       })

//       return {
//         ...hospital,
//         rooms: filteredRooms,
//         hasMatchingRooms: filteredRooms.length > 0,
//       }
//     })
//     .filter((hospital) => hospital.hasMatchingRooms)

//   // Toggle hospital expansion
//   const toggleHospital = (hospitalId) => {
//     setExpandedHospital(expandedHospital === hospitalId ? null : hospitalId)
//   }

//   // // Handle room action (view, edit, delete)
//   // const handleRoomAction = (hospital, room, type) => {
//   //   setSelectedHospital(hospital)
//   //   setSelectedRoom(room)
//   //   setModalType(type)
//   //   setIsModalOpen(true)
//   // }

//   // Handle closing the modal
//   const handleCloseModal = () => {
//     setIsModalOpen(false)
//     setSelectedHospital(null)
//     setSelectedRoom(null)
//     setModalType(null)
//   }

//   // Handle saving changes to a room
//   const handleSaveRoom = (updatedRoom) => {
//     if (modalType === "edit") {
//       // Update the room in the hospital
//       const updatedHospitals = hospitals.map((hospital) => {
//         if (hospital.id === selectedHospital.id) {
//           const updatedRooms = hospital.rooms.map((room) => (room.id === updatedRoom.id ? updatedRoom : room))
//           return { ...hospital, rooms: updatedRooms }
//         }
//         return hospital
//       })
//       setHospitals(updatedHospitals)
//     } else if (modalType === "delete") {
//       // Remove the room from the hospital
//       const updatedHospitals = hospitals.map((hospital) => {
//         if (hospital.id === selectedHospital.id) {
//           const updatedRooms = hospital.rooms.filter((room) => room.id !== selectedRoom.id)
//           return { ...hospital, rooms: updatedRooms }
//         }
//         return hospital
//       })
//       setHospitals(updatedHospitals)
//     }
//     handleCloseModal()
//   }

//   // Get status color
//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Available":
//         return "#2ecc71" // Green
//       case "In Use":
//         return "#3498db" // Blue
//       case "Maintenance":
//         return "#e74c3c" // Red
//       default:
//         return "#7f8c8d" // Gray
//     }
//   }

//   // Format date
//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     })
//   }

//   // Get room type icon
//   const getRoomTypeIcon = (type) => {
//     if (type.includes("Surgery")) return "🔪"
//     if (type.includes("Recovery")) return "🛌"
//     if (type.includes("Intensive Care")) return "💉"
//     if (type.includes("Research")) return "🔬"
//     return "🏥"
//   }

//   return (
//     <div className="dashboard-container">
//       <Sidebar />
//       <div className="main-content">
//         <Header />
//         <div className="rooms-content">
//           <div className="rooms-header">
//             <h1>Hospital Rooms</h1>
//             <div className="rooms-filters">
//               <div className="search-bar">
//                 <input
//                   type="text"
//                   placeholder="Search rooms..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//                 {searchTerm && (
//                   <button className="clear-search" onClick={() => setSearchTerm("")}>
//                     ×
//                   </button>
//                 )}
//               </div>
//               <div className="filter-group">
//                 <select value={filterType} onChange={(e) => setFilterType(e.target.value)} className="filter-select">
//                   <option value="all">All Types</option>
//                   <option value="Surgery">Surgery</option>
//                   <option value="Recovery">Recovery</option>
//                   <option value="Intensive Care">Intensive Care</option>
//                   <option value="Research">Research</option>
//                   <option value="Teaching">Teaching</option>
//                 </select>
//                 <select
//                   value={filterStatus}
//                   onChange={(e) => setFilterStatus(e.target.value)}
//                   className="filter-select"
//                 >
//                   <option value="all">All Statuses</option>
//                   <option value="Available">Available</option>
//                   <option value="In Use">In Use</option>
//                   <option value="Maintenance">Maintenance</option>
//                 </select>
//               </div>
//             </div>
//           </div>

//           <div className="hospitals-list">
//             {filteredHospitals.length === 0 ? (
//               <div className="no-results">
//                 <p>No rooms found matching your search.</p>
//               </div>
//             ) : (
//               filteredHospitals.map((hospital) => (
//                 <div key={hospital.id} className="hospital-section">
//                   <div className="hospital-header" onClick={() => toggleHospital(hospital.id)}>
//                     <h2>{hospital.name}</h2>
//                     <div className="hospital-info">
//                       <span className="room-count">{hospital.rooms.length} rooms</span>
//                       <span className={`expand-icon ${expandedHospital === hospital.id ? "expanded" : ""}`}>▼</span>
//                     </div>
//                   </div>

//                   {expandedHospital === hospital.id && (
//                     <div className="rooms-container">
//                       <div className="rooms-grid">
//                         {hospital.rooms.map((room) => (
//                           <div key={room.id} className="room-card">
//                             <div className="room-header" style={{ backgroundColor: getStatusColor(room.status) }}>
//                               <div className="room-type-icon">{getRoomTypeIcon(room.type)}</div>
//                               <h3>{room.name}</h3>
//                               <span className="room-status">{room.status}</span>
//                             </div>
//                             <div className="room-details">
//                               <div className="room-info">
//                                 <p>
//                                   <strong>Floor:</strong> {room.floor}
//                                 </p>
//                                 <p>
//                                   <strong>Type:</strong> {room.type}
//                                 </p>
//                                 <p>
//                                   <strong>Equipment:</strong> {room.equipment} items
//                                 </p>
//                                 <p>
//                                   <strong>Last Cleaned:</strong> {formatDate(room.lastCleaned)}
//                                 </p>
//                               </div>
//                               <div className="room-actions">
//                               <button className="view-btn" onClick={() => handleRoomAction(hospital, room, "view")}>
//   View
// </button>

//                                 <button className="edit-btn" onClick={() => handleRoomAction(hospital, room, "edit")}>
//                                   Edit
//                                 </button>
//                                 <button
//                                   className="delete-btn"
//                                   onClick={() => handleRoomAction(hospital, room, "delete")}
//                                 >
//                                   Delete
//                                 </button>
//                               </div>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               ))
//             )}
//           </div>
//         </div>
//       </div>

//       {isModalOpen && (
//         <RoomEditModal
//           hospital={selectedHospital}
//           room={selectedRoom}
//           modalType={modalType}
//           onClose={handleCloseModal}
//           onSave={handleSaveRoom}
//         />
//       )}
//     </div>
//   )
// }

// export default Rooms


import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import RoomEditModal from "./RoomEditModal";
import "./Rooms.css";

const Rooms = () => {
  // Sample data - in a real app, this would come from an API or database
  const [hospitals, setHospitals] = useState([
    {
      id: 1,
      name: "Central Hospital",
      rooms: [
        {
          id: 101,
          name: "Operating Room 1",
          floor: "1st Floor",
          type: "Surgery",
          status: "Available",
          lastCleaned: "2025-03-15",
          equipment: 12,
          notes: "Primary operating room for general surgery.",
        },
        {
          id: 102,
          name: "Operating Room 2",
          floor: "1st Floor",
          type: "Surgery",
          status: "In Use",
          lastCleaned: "2025-03-14",
          equipment: 15,
          notes: "Equipped with robotic surgical system.",
        },
        {
          id: 103,
          name: "Recovery Room 1",
          floor: "2nd Floor",
          type: "Recovery",
          status: "Available",
          lastCleaned: "2025-03-16",
          equipment: 8,
          notes: "Post-operative recovery for up to 4 patients.",
        },
        {
          id: 104,
          name: "ICU Room 1",
          floor: "3rd Floor",
          type: "Intensive Care",
          status: "In Use",
          lastCleaned: "2025-03-13",
          equipment: 20,
          notes: "Fully equipped ICU room with ventilator support.",
        },
      ],
    },
    {
      id: 2,
      name: "Memorial Medical Center",
      rooms: [
        {
          id: 201,
          name: "Operating Room A",
          floor: "3rd Floor",
          type: "Surgery",
          status: "Available",
          lastCleaned: "2025-03-15",
          equipment: 14,
          notes: "Specialized for orthopedic procedures.",
        },
        {
          id: 202,
          name: "ICU Room 1",
          floor: "4th Floor",
          type: "Intensive Care",
          status: "In Use",
          lastCleaned: "2025-03-12",
          equipment: 18,
          notes: "Isolation room with negative pressure.",
        },
        {
          id: 203,
          name: "Recovery Bay 1",
          floor: "3rd Floor",
          type: "Recovery",
          status: "Available",
          lastCleaned: "2025-03-16",
          equipment: 6,
          notes: "Standard recovery bay for post-op patients.",
        },
      ],
    },
    {
      id: 3,
      name: "City General Hospital",
      rooms: [
        {
          id: 301,
          name: "Surgery Suite 1",
          floor: "Ground Floor",
          type: "Surgery",
          status: "Maintenance",
          lastCleaned: "2025-03-10",
          equipment: 16,
          notes: "Under maintenance for equipment upgrades.",
        },
        {
          id: 302,
          name: "Surgery Suite 2",
          floor: "Ground Floor",
          type: "Surgery",
          status: "Available",
          lastCleaned: "2025-03-15",
          equipment: 14,
          notes: "General surgery suite with advanced imaging.",
        },
        {
          id: 303,
          name: "Recovery Bay A",
          floor: "1st Floor",
          type: "Recovery",
          status: "Available",
          lastCleaned: "2025-03-16",
          equipment: 7,
          notes: "Recovery bay for ambulatory procedures.",
        },
        {
          id: 304,
          name: "Recovery Bay B",
          floor: "1st Floor",
          type: "Recovery",
          status: "In Use",
          lastCleaned: "2025-03-14",
          equipment: 7,
          notes: "Recovery bay with cardiac monitoring.",
        },
        {
          id: 305,
          name: "ICU Room 1",
          floor: "2nd Floor",
          type: "Intensive Care",
          status: "Available",
          lastCleaned: "2025-03-15",
          equipment: 22,
          notes: "Pediatric ICU room with specialized equipment.",
        },
      ],
    },
    {
      id: 4,
      name: "University Hospital",
      rooms: [
        {
          id: 401,
          name: "Teaching OR 1",
          floor: "5th Floor",
          type: "Surgery/Teaching",
          status: "In Use",
          lastCleaned: "2025-03-13",
          equipment: 25,
          notes: "Operating room with observation gallery for students.",
        },
        {
          id: 402,
          name: "Research Lab",
          floor: "6th Floor",
          type: "Research",
          status: "Available",
          lastCleaned: "2025-03-16",
          equipment: 30,
          notes: "Research laboratory for surgical innovations.",
        },
        {
          id: 403,
          name: "Recovery Room 1",
          floor: "5th Floor",
          type: "Recovery",
          status: "Available",
          lastCleaned: "2025-03-15",
          equipment: 10,
          notes: "Recovery room with 6 beds for post-op patients.",
        },
      ],
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [expandedHospital, setExpandedHospital] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [modalType, setModalType] = useState(null); // 'view', 'edit', 'delete', or null
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle room action (view, edit, delete)
  const handleRoomAction = (hospital, room, type) => {
    setSelectedHospital(hospital);
    setSelectedRoom(room);
    setModalType(type);
    setIsModalOpen(true);
  };

  // Expand the first hospital by default
  useEffect(() => {
    if (hospitals.length > 0 && expandedHospital === null) {
      setExpandedHospital(hospitals[0].id);
    }
  }, [hospitals, expandedHospital]);

  // Filter hospitals and rooms based on search term and filters
  const filteredHospitals = hospitals
    .map((hospital) => {
      const filteredRooms = hospital.rooms.filter((room) => {
        const matchesSearch =
          room.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          room.floor.toLowerCase().includes(searchTerm.toLowerCase()) ||
          room.type.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesType = filterType === "all" || room.type.includes(filterType);
        const matchesStatus = filterStatus === "all" || room.status === filterStatus;

        return matchesSearch && matchesType && matchesStatus;
      });

      return {
        ...hospital,
        rooms: filteredRooms,
        hasMatchingRooms: filteredRooms.length > 0,
      };
    })
    .filter((hospital) => hospital.hasMatchingRooms);

  // Toggle hospital expansion
  const toggleHospital = (hospitalId) => {
    setExpandedHospital(expandedHospital === hospitalId ? null : hospitalId);
  };

  // Handle closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedHospital(null);
    setSelectedRoom(null);
    setModalType(null);
  };

  // Handle saving changes to a room
  const handleSaveRoom = (updatedRoom) => {
    if (modalType === "edit") {
      // Update the room in the hospital
      const updatedHospitals = hospitals.map((hospital) => {
        if (hospital.id === selectedHospital.id) {
          const updatedRooms = hospital.rooms.map((room) => (room.id === updatedRoom.id ? updatedRoom : room));
          return { ...hospital, rooms: updatedRooms };
        }
        return hospital;
      });
      setHospitals(updatedHospitals);
    } else if (modalType === "delete") {
      // Remove the room from the hospital
      const updatedHospitals = hospitals.map((hospital) => {
        if (hospital.id === selectedHospital.id) {
          const updatedRooms = hospital.rooms.filter((room) => room.id !== selectedRoom.id);
          return { ...hospital, rooms: updatedRooms };
        }
        return hospital;
      });
      setHospitals(updatedHospitals);
    }
    handleCloseModal();
  };

  // Get status color
  const getStatusColor = (status) => {
    switch (status) {
      case "Available":
        return "#2ecc71"; // Green
      case "In Use":
        return "#3498db"; // Blue
      case "Maintenance":
        return "#e74c3c"; // Red
      default:
        return "#7f8c8d"; // Gray
    }
  };

  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Get room type icon
  const getRoomTypeIcon = (type) => {
    if (type.includes("Surgery")) return "🔪";
    if (type.includes("Recovery")) return "🛌";
    if (type.includes("Intensive Care")) return "💉";
    if (type.includes("Research")) return "🔬";
    return "🏥";
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="rooms-content">
          <div className="rooms-header">
            <h1>Hospital Rooms</h1>
            <div className="rooms-filters">
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="Search rooms..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button className="clear-search" onClick={() => setSearchTerm("")}>
                    ×
                  </button>
                )}
              </div>
              <div className="filter-group">
                <select value={filterType} onChange={(e) => setFilterType(e.target.value)} className="filter-select">
                  <option value="all">All Types</option>
                  <option value="Surgery">Surgery</option>
                  <option value="Recovery">Recovery</option>
                  <option value="Intensive Care">Intensive Care</option>
                  <option value="Research">Research</option>
                  <option value="Teaching">Teaching</option>
                </select>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="filter-select"
                >
                  <option value="all">All Statuses</option>
                  <option value="Available">Available</option>
                  <option value="In Use">In Use</option>
                  <option value="Maintenance">Maintenance</option>
                </select>
              </div>
            </div>
          </div>

          <div className="hospitals-list">
            {filteredHospitals.length === 0 ? (
              <div className="no-results">
                <p>No rooms found matching your search.</p>
              </div>
            ) : (
              filteredHospitals.map((hospital) => (
                <div key={hospital.id} className="hospital-section">
                  <div className="hospital-header" onClick={() => toggleHospital(hospital.id)}>
                    <h2>{hospital.name}</h2>
                    <div className="hospital-info">
                      <span className="room-count">{hospital.rooms.length} rooms</span>
                      <span className={`expand-icon ${expandedHospital === hospital.id ? "expanded" : ""}`}>▼</span>
                    </div>
                  </div>

                  {expandedHospital === hospital.id && (
                    <div className="rooms-container">
                      <div className="rooms-grid">
                        {hospital.rooms.map((room) => (
                          <div key={room.id} className="room-card">
                            <div className="room-header" style={{ backgroundColor: getStatusColor(room.status) }}>
                              <div className="room-type-icon">{getRoomTypeIcon(room.type)}</div>
                              <h3>{room.name}</h3>
                              <span className="room-status">{room.status}</span>
                            </div>
                            <div className="room-details">
                              <div className="room-info">
                                <p>
                                  <strong>Floor:</strong> {room.floor}
                                </p>
                                <p>
                                  <strong>Type:</strong> {room.type}
                                </p>
                                <p>
                                  <strong>Equipment:</strong> {room.equipment} items
                                </p>
                                <p>
                                  <strong>Last Cleaned:</strong> {formatDate(room.lastCleaned)}
                                </p>
                              </div>
                              <div className="room-actions">
                                <button className="view-btn" onClick={() => handleRoomAction(hospital, room, "view")}>
                                  View
                                </button>
                                <button className="edit-btn" onClick={() => handleRoomAction(hospital, room, "edit")}>
                                  Edit
                                </button>
                                <button
                                  className="delete-btn"
                                  onClick={() => handleRoomAction(hospital, room, "delete")}
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <RoomEditModal
          hospital={selectedHospital}
          room={selectedRoom}
          modalType={modalType}
          onClose={handleCloseModal}
          onSave={handleSaveRoom}
        />
      )}
    </div>
  );
};

export default Rooms;