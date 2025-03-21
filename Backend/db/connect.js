const mongoose = require("mongoose");
const Bin = require("../models/Bin");
const bins = require("../dummyBins.json");

const connectDB = (url) => {

  // const seedDatabase = async () => {
  //   try {
  //     // await Hospital.deleteMany({});
  //     // await Room.deleteMany({});
  //     await Bin.deleteMany({});

  //     await Bin.insertMany(bins);

  //     console.log("✅ Data Seeded Successfully!");
  //     mongoose.connection.close(); // Close DB connection
  //   } catch (error) {
  //     console.error("❌ Error Seeding Database:", error);
  //     mongoose.connection.close();
  //   }
  // };
  // seedDatabase();

  return mongoose.connect(url, {});
};

module.exports = connectDB;