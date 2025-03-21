import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Bins = () => {
  const { roomId } = useParams();
  const [bins, setBins] = useState([]);

  useEffect(() => {
    fetchBins();
  }, []);

  const fetchBins = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/rooms/${roomId}/bins`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      setBins(response.data.bins);
    } catch (error) {
      console.error("Error fetching bins:", error);
    }
  };

  return (
    <div>
      <h2>Bins in This Room</h2>
      <ul>
        {bins.length > 0 ? (
          bins.map((bin) => (
            <li key={bin._id} style={{ backgroundColor: bin.color, padding: "10px", margin: "5px", color: "white" }}>
              <strong>Bin {bin.binNumber}</strong>
              <br />
              🎨 <strong>Color:</strong> {bin.color.toUpperCase()}
              <br />
              📦 <strong>Items:</strong> {bin.items.length > 0 ? bin.items.join(", ") : "No items"}
              <hr />
            </li>
          ))
        ) : (
          <p>No bins available in this room.</p>
        )}
      </ul>
    </div>
  );
};

export default Bins;