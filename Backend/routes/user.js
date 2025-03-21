const express = require("express");
const router = express.Router();

const { login, register, dashboard, getAllUsers, getAllHospitals, addHospital, getHospitalById, updateHospital, deleteHospital, getAllRooms, getHospitalsWithID, getRoomsForHospital, getAllBins, addBin, deleteBin } = require("../controllers/user");
const authMiddleware = require('../middleware/auth')

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/dashboard").get(authMiddleware, dashboard);
router.route("/users").get(getAllUsers);
router.route("/hospitals").get(getAllHospitals);
router.get("/hospitals/:id", authMiddleware, getHospitalById); // ✅ Get a single hospital
router.put("/hospitals/:id", authMiddleware, updateHospital); // ✅ Update a hospital
router.delete("/hospitals/:id", authMiddleware, deleteHospital); // ✅ Delete a hospital
// router.route("/posthospitals").post(authMiddleware, postHospitals);
router.post("/hospitals/add", authMiddleware, addHospital);
router.get("/allrooms", authMiddleware, getAllRooms);
router.get("/hospitals/:hospitalId", authMiddleware, getHospitalsWithID);
router.get("/hospitals/:hospitalId/rooms", authMiddleware, getRoomsForHospital);
router.get("/rooms/:roomId/bins", authMiddleware, getAllBins);
router.post("/rooms/:roomId/bins", authMiddleware, addBin);
router.delete("/bins/:binId", authMiddleware, deleteBin);
// router.get("/bins", authMiddleware, getAllBins); 

module.exports = router;