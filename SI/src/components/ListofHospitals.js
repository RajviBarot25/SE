import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './App.css';

const ListOfHospitals = () => {
  const [hospitals, setHospitals] = useState([
    { id: 1, name: 'City General Hospital', location: '123 Main St, New York'},
    { id: 2, name: 'Sunrise Medical Center', location: '456 Broadway Ave, Los Angeles'},
    { id: 3, name: 'Green Valley Hospital', location: '789 Maple Rd, Chicago'},
  ]);

  const navigate = useNavigate();

  const handleDelete = (id) => {
    setHospitals(hospitals.filter(hospital => hospital.id !== id));
  };

  const handleEdit = (id) => {
    navigate(`/edit-hospital/${id}`);
  };

  const handleViewRooms = (id) => {
    navigate(`/view-rooms/${id}`);
  };

  return (
    <div className="hospital-list-container">
      <h1>LIST OF HOSPITALS</h1>
      <div className="navigation">
        <span onClick={() => navigate('/')}>Home</span>
        <span onClick={() => navigate('/add-hospital')}>Add Hospital</span>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {hospitals.map((hospital) => (
            <tr key={hospital.id}>
              <td>{hospital.name}</td>
              <td>{hospital.location}</td>
              <td>
                <button onClick={() => handleEdit(hospital.id)}>Edit</button>
                <button onClick={() => handleDelete(hospital.id)}>Delete</button>
                <button onClick={() => handleViewRooms(hospital.id)}>View Rooms</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListOfHospitals;
