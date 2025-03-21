// "use client"

// import { useState, useEffect, useRef } from "react"
// import "./RoomEditModal.css"

// const RoomEditModal = ({ hospital, room, modalType, onClose, onSave, handleRoomAction }) => {
//   const [formData, setFormData] = useState({
//     id: "",
//     name: "",
//     floor: "",
//     type: "",
//     status: "",
//     lastCleaned: "",
//     equipment: 0,
//     notes: "",
//   })

//   // Reference to the modal content for scrolling
//   const modalContentRef = useRef(null)

//   useEffect(() => {
//     if (room) {
//       setFormData({
//         id: room.id,
//         name: room.name,
//         floor: room.floor,
//         type: room.type,
//         status: room.status,
//         lastCleaned: room.lastCleaned,
//         equipment: room.equipment,
//         notes: room.notes || "",
//       })
//     }

//     // Reset scroll position when modal opens
//     if (modalContentRef.current) {
//       modalContentRef.current.scrollTop = 0
//     }
//   }, [room])

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }))
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     onSave(formData)
//   }

//   const getModalTitle = () => {
//     return modalType === "view"
//       ? `Room Details: ${room.name}`
//       : modalType === "edit"
//         ? `Edit Room: ${room.name}`
//         : `Delete Room: ${room.name}`
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

//   // Format date for display
//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     })
//   }

//   // Scroll to a specific field
//   const scrollToField = (fieldId) => {
//     const element = document.getElementById(fieldId)
//     if (element && modalContentRef.current) {
//       const fieldPosition = element.offsetTop
//       const modalScrollPosition = modalContentRef.current.scrollTop
//       const modalHeight = modalContentRef.current.clientHeight

//       // If field is not visible in the current scroll position
//       if (fieldPosition < modalScrollPosition || fieldPosition > modalScrollPosition + modalHeight) {
//         modalContentRef.current.scrollTo({
//           top: fieldPosition - 20, // Scroll to position with some padding
//           behavior: "smooth",
//         })
//       }
//     }
//   }

//   return (
//     <div className="modal-overlay">
//       <div className="room-edit-modal">
//         <div className="modal-header" style={{ backgroundColor: getStatusColor(room.status) }}>
//           <h2>{getModalTitle()}</h2>
//           <button className="close-btn" onClick={onClose}>
//             ×
//           </button>
//         </div>

//         <div className="modal-content-wrapper">
//           <div className="modal-content" ref={modalContentRef}>
//             {modalType === "delete" ? (
//               <div className="delete-confirmation">
//                 <p>Are you sure you want to delete this room?</p>
//                 <div className="room-summary">
//                   <div className="summary-item">
//                     <span className="summary-label">Hospital:</span>
//                     <span className="summary-value">{hospital.name}</span>
//                   </div>
//                   <div className="summary-item">
//                     <span className="summary-label">Room:</span>
//                     <span className="summary-value">{room.name}</span>
//                   </div>
//                   <div className="summary-item">
//                     <span className="summary-label">Floor:</span>
//                     <span className="summary-value">{room.floor}</span>
//                   </div>
//                   <div className="summary-item">
//                     <span className="summary-label">Type:</span>
//                     <span className="summary-value">{room.type}</span>
//                   </div>
//                   <div className="summary-item">
//                     <span className="summary-label">Status:</span>
//                     <span
//                       className="summary-value status-badge"
//                       style={{ backgroundColor: getStatusColor(room.status) }}
//                     >
//                       {room.status}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="delete-warning">
//                   <p>
//                     This action cannot be undone. All inventory and records associated with this room will be
//                     permanently removed.
//                   </p>
//                 </div>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit}>
//                 <div className="form-row">
//                   <div className="form-group">
//                     <label htmlFor="name">Room Name</label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       disabled={modalType === "view"}
//                       required
//                       onClick={() => scrollToField("name")}
//                     />
//                   </div>

//                   <div className="form-group">
//                     <label htmlFor="floor">Floor</label>
//                     <input
//                       type="text"
//                       id="floor"
//                       name="floor"
//                       value={formData.floor}
//                       onChange={handleChange}
//                       disabled={modalType === "view"}
//                       required
//                       onClick={() => scrollToField("floor")}
//                     />
//                   </div>
//                 </div>

//                 <div className="form-row">
//                   <div className="form-group">
//                     <label htmlFor="type">Room Type</label>
//                     <select
//                       id="type"
//                       name="type"
//                       value={formData.type}
//                       onChange={handleChange}
//                       disabled={modalType === "view"}
//                       required
//                       onClick={() => scrollToField("type")}
//                     >
//                       <option value="">Select a type</option>
//                       <option value="Surgery">Surgery</option>
//                       <option value="Recovery">Recovery</option>
//                       <option value="Intensive Care">Intensive Care</option>
//                       <option value="Research">Research</option>
//                       <option value="Surgery/Teaching">Surgery/Teaching</option>
//                       <option value="Storage">Storage</option>
//                     </select>
//                   </div>

//                   <div className="form-group">
//                     <label htmlFor="status">Status</label>
//                     <select
//                       id="status"
//                       name="status"
//                       value={formData.status}
//                       onChange={handleChange}
//                       disabled={modalType === "view"}
//                       required
//                       onClick={() => scrollToField("status")}
//                     >
//                       <option value="">Select a status</option>
//                       <option value="Available">Available</option>
//                       <option value="In Use">In Use</option>
//                       <option value="Maintenance">Maintenance</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="form-row">
//                   <div className="form-group">
//                     <label htmlFor="equipment">Equipment Count</label>
//                     <input
//                       type="number"
//                       id="equipment"
//                       name="equipment"
//                       value={formData.equipment}
//                       onChange={handleChange}
//                       disabled={modalType === "view"}
//                       required
//                       min="0"
//                       onClick={() => scrollToField("equipment")}
//                     />
//                   </div>

//                   <div className="form-group">
//                     <label htmlFor="lastCleaned">Last Cleaned</label>
//                     <input
//                       type="date"
//                       id="lastCleaned"
//                       name="lastCleaned"
//                       value={formData.lastCleaned}
//                       onChange={handleChange}
//                       disabled={modalType === "view"}
//                       required
//                       onClick={() => scrollToField("lastCleaned")}
//                     />
//                   </div>
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="notes">Notes</label>
//                   <textarea
//                     id="notes"
//                     name="notes"
//                     value={formData.notes}
//                     onChange={handleChange}
//                     rows="4"
//                     disabled={modalType === "view"}
//                     onClick={() => scrollToField("notes")}
//                   ></textarea>
//                 </div>

//                 <div className="form-group">
//                   <label>Hospital</label>
//                   <input type="text" value={hospital.name} disabled />
//                 </div>

//                 {modalType === "view" && (
//                   <div className="view-details">
//                     <h3>Additional Information</h3>
//                     <p>
//                       <strong>Last Updated:</strong> {formatDate(new Date().toISOString())}
//                     </p>
//                     <p>
//                       <strong>Created By:</strong> System Administrator
//                     </p>
//                   </div>
//                 )}

//                 {/* Spacer to ensure bottom content is scrollable past the fixed footer */}
//                 <div className="form-footer-spacer"></div>
//               </form>
//             )}
//           </div>

//           <div className="modal-footer">
//             {modalType === "delete" ? (
//               <div className="modal-actions">
//                 <button type="button" className="cancel-btn" onClick={onClose}>
//                   Cancel
//                 </button>
//                 <button type="button" className="delete-confirm-btn" onClick={() => onSave(room)}>
//                   Confirm Delete
//                 </button>
//               </div>
//             ) : modalType === "view" ? (
//               <div className="modal-actions">
//                 <button type="button" className="close-view-btn" onClick={onClose}>
//                   Close
//                 </button>
//                 <button
//                   type="button"
//                   className="edit-from-view-btn"
//                   onClick={() => {
//                     onClose()
//                     setTimeout(() => handleRoomAction(hospital, room, "edit"), 100)
//                   }}
//                 >
//                   Edit Room
//                 </button>
//               </div>
//             ) : (
//               <div className="modal-actions">
//                 <button type="button" className="cancel-btn" onClick={onClose}>
//                   Cancel
//                 </button>
//                 <button type="button" className="save-btn" onClick={handleSubmit}>
//                   Save Changes
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default RoomEditModal



import React, { useState, useEffect, useRef } from "react";
import "./RoomEditModal.css";

const RoomEditModal = ({ hospital, room, modalType, onClose, onSave, handleRoomAction }) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    floor: "",
    type: "",
    status: "",
    lastCleaned: "",
    equipment: 0,
    notes: "",
  });

  // Reference to the modal content for scrolling
  const modalContentRef = useRef(null);

  useEffect(() => {
    if (room) {
      setFormData({
        id: room.id,
        name: room.name,
        floor: room.floor,
        type: room.type,
        status: room.status,
        lastCleaned: room.lastCleaned,
        equipment: room.equipment,
        notes: room.notes || "",
      });
    }

    // Reset scroll position when modal opens
    if (modalContentRef.current) {
      modalContentRef.current.scrollTop = 0;
    }
  }, [room]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  const getModalTitle = () => {
    return modalType === "view"
      ? `Room Details: ${room.name}`
      : modalType === "edit"
      ? `Edit Room: ${room.name}`
      : `Delete Room: ${room.name}`;
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

  // Format date for display
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Scroll to a specific field
  const scrollToField = (fieldId) => {
    const element = document.getElementById(fieldId);
    if (element && modalContentRef.current) {
      const fieldPosition = element.offsetTop;
      const modalScrollPosition = modalContentRef.current.scrollTop;
      const modalHeight = modalContentRef.current.clientHeight;

      // If field is not visible in the current scroll position
      if (fieldPosition < modalScrollPosition || fieldPosition > modalScrollPosition + modalHeight) {
        modalContentRef.current.scrollTo({
          top: fieldPosition - 20, // Scroll to position with some padding
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="modal-overlay">
      <div className="room-edit-modal">
        <div className="modal-header" style={{ backgroundColor: getStatusColor(room.status) }}>
          <h2>{getModalTitle()}</h2>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="modal-content-wrapper">
          <div className="modal-content" ref={modalContentRef}>
            {modalType === "delete" ? (
              <div className="delete-confirmation">
                <p>Are you sure you want to delete this room?</p>
                <div className="room-summary">
                  <div className="summary-item">
                    <span className="summary-label">Hospital:</span>
                    <span className="summary-value">{hospital.name}</span>
                  </div>
                  <div className="summary-item">
                    <span className="summary-label">Room:</span>
                    <span className="summary-value">{room.name}</span>
                  </div>
                  <div className="summary-item">
                    <span className="summary-label">Floor:</span>
                    <span className="summary-value">{room.floor}</span>
                  </div>
                  <div className="summary-item">
                    <span className="summary-label">Type:</span>
                    <span className="summary-value">{room.type}</span>
                  </div>
                  <div className="summary-item">
                    <span className="summary-label">Status:</span>
                    <span
                      className="summary-value status-badge"
                      style={{ backgroundColor: getStatusColor(room.status) }}
                    >
                      {room.status}
                    </span>
                  </div>
                </div>
                <div className="delete-warning">
                  <p>
                    This action cannot be undone. All inventory and records associated with this room will be
                    permanently removed.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Room Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={modalType === "view"}
                      required
                      onClick={() => scrollToField("name")}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="floor">Floor</label>
                    <input
                      type="text"
                      id="floor"
                      name="floor"
                      value={formData.floor}
                      onChange={handleChange}
                      disabled={modalType === "view"}
                      required
                      onClick={() => scrollToField("floor")}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="type">Room Type</label>
                    <select
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      disabled={modalType === "view"}
                      required
                      onClick={() => scrollToField("type")}
                    >
                      <option value="">Select a type</option>
                      <option value="Surgery">Surgery</option>
                      <option value="Recovery">Recovery</option>
                      <option value="Intensive Care">Intensive Care</option>
                      <option value="Research">Research</option>
                      <option value="Surgery/Teaching">Surgery/Teaching</option>
                      <option value="Storage">Storage</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="status">Status</label>
                    <select
                      id="status"
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      disabled={modalType === "view"}
                      required
                      onClick={() => scrollToField("status")}
                    >
                      <option value="">Select a status</option>
                      <option value="Available">Available</option>
                      <option value="In Use">In Use</option>
                      <option value="Maintenance">Maintenance</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="equipment">Equipment Count</label>
                    <input
                      type="number"
                      id="equipment"
                      name="equipment"
                      value={formData.equipment}
                      onChange={handleChange}
                      disabled={modalType === "view"}
                      required
                      min="0"
                      onClick={() => scrollToField("equipment")}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastCleaned">Last Cleaned</label>
                    <input
                      type="date"
                      id="lastCleaned"
                      name="lastCleaned"
                      value={formData.lastCleaned}
                      onChange={handleChange}
                      disabled={modalType === "view"}
                      required
                      onClick={() => scrollToField("lastCleaned")}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="notes">Notes</label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows="4"
                    disabled={modalType === "view"}
                    onClick={() => scrollToField("notes")}
                  ></textarea>
                </div>

                <div className="form-group">
                  <label>Hospital</label>
                  <input type="text" value={hospital.name} disabled />
                </div>

                {modalType === "view" && (
                  <div className="view-details">
                    <h3>Additional Information</h3>
                    <p>
                      <strong>Last Updated:</strong> {formatDate(new Date().toISOString())}
                    </p>
                    <p>
                      <strong>Created By:</strong> System Administrator
                    </p>
                  </div>
                )}

                {/* Spacer to ensure bottom content is scrollable past the fixed footer */}
                <div className="form-footer-spacer"></div>
              </form>
            )}
          </div>

          <div className="modal-footer">
            {modalType === "delete" ? (
              <div className="modal-actions">
                <button type="button" className="cancel-btn" onClick={onClose}>
                  Cancel
                </button>
                <button type="button" className="delete-confirm-btn" onClick={() => onSave(room)}>
                  Confirm Delete
                </button>
              </div>
            ) : modalType === "view" ? (
              <div className="modal-actions">
                <button type="button" className="close-view-btn" onClick={onClose}>
                  Close
                </button>
                <button
                  type="button"
                  className="edit-from-view-btn"
                  onClick={() => {
                    onClose();
                    setTimeout(() => handleRoomAction(hospital, room, "edit"), 100);
                  }}
                >
                  Edit Room
                </button>
              </div>
            ) : (
              <div className="modal-actions">
                <button type="button" className="cancel-btn" onClick={onClose}>
                  Cancel
                </button>
                <button type="button" className="save-btn" onClick={handleSubmit}>
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomEditModal;