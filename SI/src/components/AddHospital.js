import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddHospital = ({ addHospital }) => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addHospital({ ...formData, id: Date.now() });
    navigate('/');
  };

  return (
    <div className="form-container">
      <h2>Add Hospital</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        <label>Location:</label>
        <input type="text" name="location" value={formData.location} onChange={handleChange} required />
      </form>
    </div>
  );
};

export default AddHospital;
