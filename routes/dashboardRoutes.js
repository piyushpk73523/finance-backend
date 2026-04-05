
const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

const { getSummary } = require("../controllers/dashboardController");

router.get("/summary", protect, authorize("analyst", "admin"), getSummary);

module.exports = router;
