const express = require("express");
const { getSales } = require("../Controllers/sales");

const router = express.Router();

// Routes
router.get("/sales", getSales);

module.exports = router;
