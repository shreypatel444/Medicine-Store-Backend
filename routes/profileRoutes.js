const express = require("express");
const profileController = require("../controllers/profileController");
const { profileMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/profile", profileMiddleware, profileController.getProfile); // Correct function name
router.put("/profile/update", profileMiddleware, profileController.updateProfile); // Correct function name

module.exports = router;
