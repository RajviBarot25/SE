import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditHospital = ({ hospitals, updateHospital }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const hospital = hospitals.find(h => h.id === parseInt(id));

  const [formData, setFormData] = useState({
    name: hospital.name,
    location: hospital.location,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateHospital({ ...formData, id: hospital.id });
    navigate('/');
  };

  return (
    <div className="form-container">
      <h2>Edit Hospital</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        <label>Location:</label>
        <input type="text" name="location" value={formData.location} onChange={handleChange} required />
      </form>
    </div>
  );
};

export default EditHospital;
