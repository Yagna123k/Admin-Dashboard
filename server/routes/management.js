const express = require("express");
const { getAdmins, getUserPerformance } = require("../Controllers/management.js");

const router = express.Router();

// Routes
router.get("/admins", getAdmins);
router.get("/performance/:id", getUserPerformance);

module.exports = router;
