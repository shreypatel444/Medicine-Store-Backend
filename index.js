const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./connection/connection");
const cookieParser = require("cookie-parser");

// Import Routes
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
// const orderRoutes = require("./routes/orderRoutes");
const contactRoutes = require("./routes/contactRoutes");
const profileRoutes = require("./routes/profileRoutes");
const adminRoutes = require("./routes/adminRoutes");

// Load Environment Variables
dotenv.config();

// Connect to Database
connectDB();

// Initialize Express App
const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173/", // Allow frontend to connect
    methods: "POST, GET, PUT, PATCH, DELETE, HEAD", // Allowed methods
    credentials: true, // Allow cookies to be sent
  })
);

// Define Routes
app.use("/auth", authRoutes);
app.use("/products", productRoutes);
app.use("/admin", adminRoutes)
// app.use("/orders", orderRoutes);
app.use("/contacts", contactRoutes);
app.use("/api", profileRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("PharmaNet eCommerce API is running...");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
