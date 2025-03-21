import React, { useEffect, useState } from "react";
import axios from "axios";
// import { AllRooms } from ".";

const AllRooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/allrooms", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setRooms(response.data.rooms);
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  };

  return (
    <div>
      <h2>Available Rooms</h2>
      <ul>
        {rooms.length > 0 ? (
          rooms.map((room) => (
            <li key={room._id}>
              <strong>Room {room.roomNumber} - {room.type}</strong> 
              <br />
              🏥 <strong>Hospital:</strong> {room.hospital?.hosp_name || "Unknown"}
              <br />
              📍 <strong>Address:</strong> {room.hospital?.address || "Not Available"}
              <br />
              ✅ <strong>Availability:</strong> {room.isAvailable ? "Available" : "Occupied"}
              <hr />
            </li>
          ))
        ) : (
          <p>No rooms available.</p>
        )}
      </ul>
    </div>
  );
};

export default AllRooms;