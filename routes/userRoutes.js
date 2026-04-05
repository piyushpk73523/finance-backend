
const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");
const { getUsers, updateUser } = require("../controllers/userController");

router.get("/", protect, authorize("admin"), getUsers);
router.patch("/:id", protect, authorize("admin"), updateUser);

module.exports = router;
