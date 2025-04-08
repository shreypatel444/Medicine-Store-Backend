


const mongoose = require("mongoose");
require("dotenv").config();

const URL = "mongodb://127.0.0.1:27017/PharmaNet";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || URL);
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ Database Connection Error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;