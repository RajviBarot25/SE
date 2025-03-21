const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  roomNumber: { type: String, required: true },
  type: { type: String, required: true }, // e.g., ICU, General Ward
  isAvailable: { type: Boolean, default: true },
  hospital: { type: mongoose.Schema.Types.ObjectId, ref: "Hospital" },
});

module.exports = mongoose.model("Room", roomSchema);