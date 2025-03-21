import React, { useState, useEffect, useRef } from "react";
import "./BinModal.css";

const BinModal = ({ bin, modalType, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    type: "",
    location: "",
    capacity: "",
    currentItems: 0,
    lastRestocked: "",
    contents: "",
  });

  // Reference to the modal content for scrolling
  const modalContentRef = useRef(null);

  useEffect(() => {
    if (bin) {
      setFormData({
        id: bin.id,
        name: bin.name,
        type: bin.type,
        location: bin.location,
        capacity: bin.capacity,
        currentItems: bin.currentItems,
        lastRestocked: bin.lastRestocked,
        contents: bin.contents,
      });
    }

    // Reset scroll position when modal opens
    if (modalContentRef.current) {
      modalContentRef.current.scrollTop = 0;
    }
  }, [bin]);

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
    return modalType === "edit" ? `Edit Bin: ${bin.name}` : `Delete Bin: ${bin.name}`;
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
      <div className={`bin-modal ${bin.type}-modal`}>
        <div className="modal-header">
          <h2>{getModalTitle()}</h2>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="modal-content-wrapper">
          <div className="modal-content" ref={modalContentRef}>
            {modalType === "delete" ? (
              <div className="delete-confirmation">
                <p>Are you sure you want to delete this bin?</p>
                <p>
                  <strong>Bin Name:</strong> {bin.name}
                </p>
                <p>
                  <strong>Location:</strong> {bin.location}
                </p>
                <p>
                  <strong>Type:</strong> {bin.type === "blue" ? "Blue Bin" : "Black Bin"}
                </p>
                <p>
                  <strong>Contents:</strong> {bin.contents}
                </p>
                <div className="delete-warning">
                  <p>This action cannot be undone.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Bin Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    onClick={() => scrollToField("name")}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="type">Bin Type</label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                    onClick={() => scrollToField("type")}
                  >
                    <option value="">Select a type</option>
                    <option value="blue">Blue Bin</option>
                    <option value="black">Black Bin</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="location">Location</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    onClick={() => scrollToField("location")}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="capacity">Capacity</label>
                  <input
                    type="text"
                    id="capacity"
                    name="capacity"
                    value={formData.capacity}
                    onChange={handleChange}
                    required
                    onClick={() => scrollToField("capacity")}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="currentItems">Current Items</label>
                  <input
                    type="number"
                    id="currentItems"
                    name="currentItems"
                    value={formData.currentItems}
                    onChange={handleChange}
                    required
                    onClick={() => scrollToField("currentItems")}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastRestocked">Last Restocked</label>
                  <input
                    type="date"
                    id="lastRestocked"
                    name="lastRestocked"
                    value={formData.lastRestocked}
                    onChange={handleChange}
                    required
                    onClick={() => scrollToField("lastRestocked")}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contents">Contents</label>
                  <textarea
                    id="contents"
                    name="contents"
                    value={formData.contents}
                    onChange={handleChange}
                    rows="3"
                    required
                    onClick={() => scrollToField("contents")}
                  ></textarea>
                </div>

                {/* Additional fields for demonstration of scrolling */}
                <div className="form-group">
                  <label htmlFor="notes">Notes</label>
                  <textarea
                    id="notes"
                    name="notes"
                    placeholder="Optional notes about this bin"
                    rows="3"
                    onClick={() => scrollToField("notes")}
                  ></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="assignedTo">Assigned To</label>
                  <input
                    type="text"
                    id="assignedTo"
                    name="assignedTo"
                    placeholder="Person responsible for this bin"
                    onClick={() => scrollToField("assignedTo")}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="department">Department</label>
                  <input
                    type="text"
                    id="department"
                    name="department"
                    placeholder="Department this bin belongs to"
                    onClick={() => scrollToField("department")}
                  />
                </div>

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
                <button type="button" className="delete-confirm-btn" onClick={() => onSave(bin)}>
                  Confirm Delete
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

export default BinModal;

// "use client"

// import { useState, useEffect, useRef } from "react"
// import "./BinModal.css"

// const BinModal = ({ bin, modalType, onClose, onSave }) => {
//   const [formData, setFormData] = useState({
//     id: "",
//     name: "",
//     type: "",
//     location: "",
//     capacity: "",
//     currentItems: 0,
//     lastRestocked: "",
//     contents: "",
//   })

//   // Reference to the modal content for scrolling
//   const modalContentRef = useRef(null)

//   useEffect(() => {
//     if (bin) {
//       setFormData({
//         id: bin.id,
//         name: bin.name,
//         type: bin.type,
//         location: bin.location,
//         capacity: bin.capacity,
//         currentItems: bin.currentItems,
//         lastRestocked: bin.lastRestocked,
//         contents: bin.contents,
//       })
//     }

//     // Reset scroll position when modal opens
//     if (modalContentRef.current) {
//       modalContentRef.current.scrollTop = 0
//     }
//   }, [bin])

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
//     return modalType === "edit" ? `Edit Bin: ${bin.name}` : `Delete Bin: ${bin.name}`
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
//       <div className={`bin-modal ${bin.type}-modal`}>
//         <div className="modal-header">
//           <h2>{getModalTitle()}</h2>
//           <button className="close-btn" onClick={onClose}>
//             ×
//           </button>
//         </div>

//         <div className="modal-content-wrapper">
//           <div className="modal-content" ref={modalContentRef}>
//             {modalType === "delete" ? (
//               <div className="delete-confirmation">
//                 <p>Are you sure you want to delete this bin?</p>
//                 <p>
//                   <strong>Bin Name:</strong> {bin.name}
//                 </p>
//                 <p>
//                   <strong>Location:</strong> {bin.location}
//                 </p>
//                 <p>
//                   <strong>Type:</strong> {bin.type === "blue" ? "Blue Bin" : "Black Bin"}
//                 </p>
//                 <p>
//                   <strong>Contents:</strong> {bin.contents}
//                 </p>
//                 <div className="delete-warning">
//                   <p>This action cannot be undone.</p>
//                 </div>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                   <label htmlFor="name">Bin Name</label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     onClick={() => scrollToField("name")}
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="type">Bin Type</label>
//                   <select
//                     id="type"
//                     name="type"
//                     value={formData.type}
//                     onChange={handleChange}
//                     required
//                     onClick={() => scrollToField("type")}
//                   >
//                     <option value="">Select a type</option>
//                     <option value="blue">Blue Bin</option>
//                     <option value="black">Black Bin</option>
//                   </select>
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="location">Location</label>
//                   <input
//                     type="text"
//                     id="location"
//                     name="location"
//                     value={formData.location}
//                     onChange={handleChange}
//                     required
//                     onClick={() => scrollToField("location")}
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="capacity">Capacity</label>
//                   <input
//                     type="text"
//                     id="capacity"
//                     name="capacity"
//                     value={formData.capacity}
//                     onChange={handleChange}
//                     required
//                     onClick={() => scrollToField("capacity")}
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="currentItems">Current Items</label>
//                   <input
//                     type="number"
//                     id="currentItems"
//                     name="currentItems"
//                     value={formData.currentItems}
//                     onChange={handleChange}
//                     required
//                     onClick={() => scrollToField("currentItems")}
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="lastRestocked">Last Restocked</label>
//                   <input
//                     type="date"
//                     id="lastRestocked"
//                     name="lastRestocked"
//                     value={formData.lastRestocked}
//                     onChange={handleChange}
//                     required
//                     onClick={() => scrollToField("lastRestocked")}
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="contents">Contents</label>
//                   <textarea
//                     id="contents"
//                     name="contents"
//                     value={formData.contents}
//                     onChange={handleChange}
//                     rows="3"
//                     required
//                     onClick={() => scrollToField("contents")}
//                   ></textarea>
//                 </div>

//                 {/* Additional fields for demonstration of scrolling */}
//                 <div className="form-group">
//                   <label htmlFor="notes">Notes</label>
//                   <textarea
//                     id="notes"
//                     name="notes"
//                     placeholder="Optional notes about this bin"
//                     rows="3"
//                     onClick={() => scrollToField("notes")}
//                   ></textarea>
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="assignedTo">Assigned To</label>
//                   <input
//                     type="text"
//                     id="assignedTo"
//                     name="assignedTo"
//                     placeholder="Person responsible for this bin"
//                     onClick={() => scrollToField("assignedTo")}
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="department">Department</label>
//                   <input
//                     type="text"
//                     id="department"
//                     name="department"
//                     placeholder="Department this bin belongs to"
//                     onClick={() => scrollToField("department")}
//                   />
//                 </div>

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
//                 <button type="button" className="delete-confirm-btn" onClick={() => onSave(bin)}>
//                   Confirm Delete
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

// export default BinModal

