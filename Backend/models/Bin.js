const mongoose = require("mongoose");

const binSchema = new mongoose.Schema({
  binNumber: { type: String, required: true },
  color: {
    type: String,
    enum: ["blue", "black", "green"], // ✅ Bins can only be these colors
    required: true,
  },
  items: [{ type: String }], // Array of items inside the bin
  room: { type: mongoose.Schema.Types.ObjectId, ref: "Room", required: true }, // ✅ Linked to a room
});

module.exports = mongoose.model("Bin", binSchema);