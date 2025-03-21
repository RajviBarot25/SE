// "use client"

// import { useState } from "react"
// import Sidebar from "./Sidebar"
// import Header from "./Header"
// import RoomModal from "./RoomModal"
// import "./Hospitals.css"

// const Hospitals = () => {
//   // Sample data - in a real app, this would come from an API or database
//   const [hospitals, setHospitals] = useState([
//     {
//       id: 1,
//       name: "Central Hospital",
//       address: "123 Main St, New York, NY",
//       phone: "(212) 555-1234",
//       rooms: [
//         { id: 101, name: "Operating Room 1", floor: "1st Floor", type: "Surgery" },
//         { id: 102, name: "Operating Room 2", floor: "1st Floor", type: "Surgery" },
//         { id: 201, name: "Recovery Room 1", floor: "2nd Floor", type: "Recovery" },
//       ],
//     },
//     {
//       id: 2,
//       name: "Memorial Medical Center",
//       address: "456 Park Ave, Boston, MA",
//       phone: "(617) 555-5678",
//       rooms: [
//         { id: 101, name: "Operating Room A", floor: "3rd Floor", type: "Surgery" },
//         { id: 102, name: "ICU Room 1", floor: "4th Floor", type: "Intensive Care" },
//       ],
//     },
//     {
//       id: 3,
//       name: "City General Hospital",
//       address: "789 Oak St, Chicago, IL",
//       phone: "(312) 555-9012",
//       rooms: [
//         { id: 101, name: "Surgery Suite 1", floor: "Ground Floor", type: "Surgery" },
//         { id: 102, name: "Surgery Suite 2", floor: "Ground Floor", type: "Surgery" },
//         { id: 103, name: "Recovery Bay A", floor: "1st Floor", type: "Recovery" },
//         { id: 104, name: "Recovery Bay B", floor: "1st Floor", type: "Recovery" },
//       ],
//     },
//     {
//       id: 4,
//       name: "University Hospital",
//       address: "321 College Rd, San Francisco, CA",
//       phone: "(415) 555-3456",
//       rooms: [
//         { id: 101, name: "Teaching OR 1", floor: "5th Floor", type: "Surgery/Teaching" },
//         { id: 102, name: "Research Lab", floor: "6th Floor", type: "Research" },
//       ],
//     },
//   ])

//   const [searchTerm, setSearchTerm] = useState("")
//   const [selectedHospital, setSelectedHospital] = useState(null)
//   const [selectedRoom, setSelectedRoom] = useState(null)
//   const [modalType, setModalType] = useState(null) // 'view', 'edit', 'delete', or null
//   const [isModalOpen, setIsModalOpen] = useState(false)

//   // Filter hospitals based on search term
//   const filteredHospitals = hospitals.filter(
//     (hospital) =>
//       hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       hospital.address.toLowerCase().includes(searchTerm.toLowerCase()),
//   )

//   // Handle opening the modal for different actions
//   const handleRoomAction = (hospital, room, type) => {
//     setSelectedHospital(hospital)
//     setSelectedRoom(room)
//     setModalType(type)
//     setIsModalOpen(true)
//   }

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

//   return (
//     <div className="dashboard-container">
//       <Sidebar />
//       <div className="main-content">
//         <Header />
//         <div className="hospitals-content">
//           <div className="hospitals-header">
//             <h1>Hospitals</h1>
//             <div className="hospitals-search">
//               <input
//                 type="text"
//                 placeholder="Search hospitals..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>
//           </div>

//           <div className="hospitals-list">
//             {filteredHospitals.map((hospital) => (
//               <div key={hospital.id} className="hospital-card">
//                 <div className="hospital-info">
//                   <h2>{hospital.name}</h2>
//                   <p>
//                     <strong>Address:</strong> {hospital.address}
//                   </p>
//                   <p>
//                     <strong>Phone:</strong> {hospital.phone}
//                   </p>
//                   <p>
//                     <strong>Total Rooms:</strong> {hospital.rooms.length}
//                   </p>
//                 </div>

//                 <div className="hospital-rooms">
//                   <h3>Rooms</h3>
//                   <div className="rooms-table-container">
//                     <table className="rooms-table">
//                       <thead>
//                         <tr>
//                           <th>Room Name</th>
//                           <th>Floor</th>
//                           <th>Type</th>
//                           <th>Actions</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {hospital.rooms.map((room) => (
//                           <tr key={room.id}>
//                             <td>{room.name}</td>
//                             <td>{room.floor}</td>
//                             <td>{room.type}</td>
//                             <td className="room-actions">
//                               <button className="view-btn" onClick={() => handleRoomAction(hospital, room, "view")}>
//                                 View
//                               </button>
//                               <button className="edit-btn" onClick={() => handleRoomAction(hospital, room, "edit")}>
//                                 Edit
//                               </button>
//                               <button className="delete-btn" onClick={() => handleRoomAction(hospital, room, "delete")}>
//                                 Delete
//                               </button>
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               </div>
//             ))}

//             {filteredHospitals.length === 0 && (
//               <div className="no-results">
//                 <p>No hospitals found matching your search.</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {isModalOpen && (
//         <RoomModal
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

// export default Hospitals



import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import RoomModal from "./RoomModal";
import "./Hospitals.css";

const Hospitals = () => {
  // Sample data - in a real app, this would come from an API or database
  const [hospitals, setHospitals] = useState([
    {
      id: 1,
      name: "Central Hospital",
      address: "123 Main St, New York, NY",
      phone: "(212) 555-1234",
      rooms: [
        { id: 101, name: "Operating Room 1", floor: "1st Floor", type: "Surgery" },
        { id: 102, name: "Operating Room 2", floor: "1st Floor", type: "Surgery" },
        { id: 201, name: "Recovery Room 1", floor: "2nd Floor", type: "Recovery" },
      ],
    },
    {
      id: 2,
      name: "Memorial Medical Center",
      address: "456 Park Ave, Boston, MA",
      phone: "(617) 555-5678",
      rooms: [
        { id: 101, name: "Operating Room A", floor: "3rd Floor", type: "Surgery" },
        { id: 102, name: "ICU Room 1", floor: "4th Floor", type: "Intensive Care" },
      ],
    },
    {
      id: 3,
      name: "City General Hospital",
      address: "789 Oak St, Chicago, IL",
      phone: "(312) 555-9012",
      rooms: [
        { id: 101, name: "Surgery Suite 1", floor: "Ground Floor", type: "Surgery" },
        { id: 102, name: "Surgery Suite 2", floor: "Ground Floor", type: "Surgery" },
        { id: 103, name: "Recovery Bay A", floor: "1st Floor", type: "Recovery" },
        { id: 104, name: "Recovery Bay B", floor: "1st Floor", type: "Recovery" },
      ],
    },
    {
      id: 4,
      name: "University Hospital",
      address: "321 College Rd, San Francisco, CA",
      phone: "(415) 555-3456",
      rooms: [
        { id: 101, name: "Teaching OR 1", floor: "5th Floor", type: "Surgery/Teaching" },
        { id: 102, name: "Research Lab", floor: "6th Floor", type: "Research" },
      ],
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [modalType, setModalType] = useState(null); // 'view', 'edit', 'delete', or null
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter hospitals based on search term
  const filteredHospitals = hospitals.filter(
    (hospital) =>
      hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hospital.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle opening the modal for different actions
  const handleRoomAction = (hospital, room, type) => {
    setSelectedHospital(hospital);
    setSelectedRoom(room);
    setModalType(type);
    setIsModalOpen(true);
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

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="hospitals-content">
          <div className="hospitals-header">
            <h1>Hospitals</h1>
            <div className="hospitals-search">
              <input
                type="text"
                placeholder="Search hospitals..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="hospitals-list">
            {filteredHospitals.map((hospital) => (
              <div key={hospital.id} className="hospital-card">
                <div className="hospital-info">
                  <h2>{hospital.name}</h2>
                  <p>
                    <strong>Address:</strong> {hospital.address}
                  </p>
                  <p>
                    <strong>Phone:</strong> {hospital.phone}
                  </p>
                  <p>
                    <strong>Total Rooms:</strong> {hospital.rooms.length}
                  </p>
                </div>

                <div className="hospital-rooms">
                  <h3>Rooms</h3>
                  <div className="rooms-table-container">
                    <table className="rooms-table">
                      <thead>
                        <tr>
                          <th>Room Name</th>
                          <th>Floor</th>
                          <th>Type</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {hospital.rooms.map((room) => (
                          <tr key={room.id}>
                            <td>{room.name}</td>
                            <td>{room.floor}</td>
                            <td>{room.type}</td>
                            <td className="room-actions">
                              <button className="view-btn" onClick={() => handleRoomAction(hospital, room, "view")}>
                                View
                              </button>
                              <button className="edit-btn" onClick={() => handleRoomAction(hospital, room, "edit")}>
                                Edit
                              </button>
                              <button className="delete-btn" onClick={() => handleRoomAction(hospital, room, "delete")}>
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ))}

            {filteredHospitals.length === 0 && (
              <div className="no-results">
                <p>No hospitals found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <RoomModal
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

export default Hospitals;