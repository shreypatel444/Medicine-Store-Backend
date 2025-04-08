const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, address } = req.body;

    if (!name || !email || !password || !address) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, email, password: hashedPassword, address });

    await newUser.save();
    
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET || "fallback_secret", { expiresIn: "1h" });
    
    res.status(201).json({
      message: "User registered successfully",
      user: { id: newUser._id, name, email, address },
      token,   
    });
    
  } catch (error) {
    res.status(500).json({ message: "Error signing up", error: error.message });
  }
};


// User Login
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = generateToken(user._id);

    res.status(200).json({
      user: { id: user._id, name: user.name, email: user.email },
      token,  // Send the token in the response body
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};



// User Authentication (Check Valid Session)
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(401).json({ message: "Unauthorized" });

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};


exports.deleteUser = async (req, res) => {  
  try {
    await User.findByIdAndDelete(req.user.id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });  
  }  
};


