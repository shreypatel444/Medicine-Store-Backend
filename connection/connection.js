


const mongoose = require("mongoose");
require("dotenv").config();

const URL = "mongodb+srv://smpatelshreypatel:rMMiF2gc5NeKlEDv@clusterpharmanet.o8erlsw.mongodb.net/?retryWrites=true&w=majority&appName=ClusterPharmaNet";

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
