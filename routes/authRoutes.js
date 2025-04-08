const express = require("express");
const { registerUser, loginUser, getUser, deleteUser } = require("../controllers/authController");
const {authMiddleware } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser); 
router.get("/user", authMiddleware, getUser);
router.delete("/user",  deleteUser);

module.exports = router;
