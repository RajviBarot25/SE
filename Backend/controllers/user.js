const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Hospital = require("../models/Hospital");
const Room = require("../models/Rooms");
const Bin = require("../models/Bin");

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      msg: "Bad request. Please add email and password in the request body",
    });
  }

  let foundUser = await User.findOne({ email: req.body.email });
  if (foundUser) {
    const isMatch = await foundUser.comparePassword(password);

    if (isMatch) {
      const token = jwt.sign(
        { id: foundUser._id, name: foundUser.name },
        process.env.JWT_SECRET,
        {
          expiresIn: "30d",
        }
      );

      return res.status(200).json({ msg: "user logged in", token });
    } else {
      return res.status(400).json({ msg: "Bad password" });
    }
  } else {
    return res.status(400).json({ msg: "Bad credentails" });
  }
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);

  res.status(200).json({
    msg: `${req.user.name}`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};

const getAllUsers = async (req, res) => {
  let users = await User.find({});

  return res.status(200).json({ users });
};

const getAllHospitals = async (req, res) => {
  let hospitals = await Hospital.find({});

  return res.status(200).json({ hospitals });
};

const addHospital = async (req, res) => {
  try {
    const { hosp_name, address } = req.body; // ✅ Match schema field names

    if (!hosp_name || !address) {
      return res.status(400).json({ success: false, error: "All fields are required" });
    }

    const newHosp = new Hospital({
      hosp_name,
      address,
      user: req.user.id // Assigning logged-in user
    });

    await newHosp.save();

    return res.status(200).json({ success: true, message: "Hospital added successfully", hospital: newHosp });
  } catch (err) {
    console.error("Error adding hospital:", err);
    return res.status(500).json({ success: false, error: "Add Hospital failed" });
  }
};

const register = async (req, res) => {
  let foundUser = await User.findOne({ email: req.body.email });
  if (foundUser === null) {
    let { username, email, password } = req.body;
    if (username.length && email.length && password.length) {
      const person = new User({
        name: username,
        email: email,
        password: password,
      });
      await person.save();
      return res.status(201).json({ person });
    }else{
        return res.status(400).json({msg: "Please add all values in the request body"});
    }
  } else {
    return res.status(400).json({ msg: "Email already in use" });
  }
};

// ✅ Get a Single Hospital
const getHospitalById = async (req, res) => {
  try {
    const hospital = await Hospital.findById(req.params.id);
    if (!hospital) {
      return res.status(404).json({ success: false, error: "Hospital not found" });
    }
    res.json({ success: true, hospital });
  } catch (error) {
    console.error("Fetch Error:", error);
    res.status(500).json({ success: false, error: "Failed to fetch hospital" });
  }
};

// ✅ Update Hospital
const updateHospital = async (req, res) => {
  try {
    const updatedHospital = await Hospital.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, message: "Hospital updated successfully", updatedHospital });
  } catch (error) {
    console.error("Update Error:", error);
    res.status(500).json({ success: false, error: "Failed to update hospital" });
  }
};

// ✅ Delete Hospital
const deleteHospital = async (req, res) => {
  try {
    await Hospital.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Hospital deleted successfully" });
  } catch (error) {
    console.error("Delete Error:", error);
    res.status(500).json({ success: false, error: "Failed to delete hospital" });
  }
};

const getAllRooms = async (req, res) => {  
  try {
    const rooms = await Room.find().populate("hospital", "hosp_name address"); // Fetch hospital name
    res.json({ success: true, rooms });
  } catch (error) {
    console.error("Error fetching rooms:", error);
    res.status(500).json({ success: false, error: "Failed to fetch rooms" });
  }
};

const getHospitalsWithID = async (req, res) => {
  try {
    const hospital = await Hospital.findById(req.params.hospitalId);
    if (!hospital) {
      return res.status(404).json({ success: false, error: "Hospital not found" });
    }

    res.json({ success: true, hospital });
  } catch (error) {
    console.error("Error fetching hospital:", error);
    res.status(500).json({ success: false, error: "Failed to fetch hospital" });
  }
}

const getRoomsForHospital = async (req, res) => {
  try {
    const rooms = await Room.find({ hospital: req.params.hospitalId });

    res.json({ success: true, rooms });
  } catch (error) {
    console.error("Error fetching rooms:", error);
    res.status(500).json({ success: false, error: "Failed to fetch rooms" });
  }
}


const addBin = async (req, res) => {
  try {
    const { binNumber, color, items } = req.body;
    const room = await Room.findById(req.params.roomId);

    if (!room) return res.status(404).json({ success: false, error: "Room not found" });

    if (!["blue", "black", "green"].includes(color)) {
      return res.status(400).json({ success: false, error: "Invalid bin color" });
    }

    const newBin = new Bin({ binNumber, color, items, room: req.params.roomId });
    await newBin.save();

    res.status(201).json({ success: true, message: "Bin added successfully", bin: newBin });
  } catch (error) {
    console.error("Error adding bin:", error);
    res.status(500).json({ success: false, error: "Failed to add bin" });
  }
};

// ✅ Delete a Bin
const deleteBin = async (req, res) => {
  try {
    const bin = await Bin.findByIdAndDelete(req.params.binId);
    if (!bin) return res.status(404).json({ success: false, error: "Bin not found" });

    res.json({ success: true, message: "Bin deleted successfully" });
  } catch (error) {
    console.error("Error deleting bin:", error);
    res.status(500).json({ success: false, error: "Failed to delete bin" });
  }
};

const getAllBins = async (req, res) => {
  try {
    let bins;

    if (req.params.roomId) {
      bins = await Bin.find({ room: req.params.roomId }).populate("room", "roomNumber type");
    } else {
      bins = await Bin.find().populate("room", "roomNumber type hospital");
    }

    res.json({ success: true, bins });
  } catch (error) {
    console.error("Error fetching bins:", error);
    res.status(500).json({ success: false, error: "Failed to fetch bins" });
  }
};

module.exports = {
  login,
  register,
  dashboard,
  getAllUsers,
  getAllHospitals,
  addHospital,
  getHospitalById,
  updateHospital,
  deleteHospital,
  getAllRooms,
  getHospitalsWithID,
  getRoomsForHospital,
  getAllBins,
  addBin,
  deleteBin,
};
