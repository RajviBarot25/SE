import React from 'react';
import { useParams } from 'react-router-dom';

const ViewRooms = ({ hospitals }) => {
  const { id } = useParams();
  const hospital = hospitals.find(h => h.id === parseInt(id));

  return (
    <div className="rooms-container">
      <h2>Rooms in {hospital.name}</h2>
      <ul>
        <li>Room 101</li>
        <li>Room 102</li>
        <li>Room 103</li>
      </ul>
    </div>
  );
};

export default ViewRooms;
