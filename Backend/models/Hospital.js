const mongoose = require("mongoose");

const hospitalSchema = new mongoose.Schema({
  hosp_name: { type: String, required: true },
  address: { type: String, required: true },
  dateCreated: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("Hospital", hospitalSchema);