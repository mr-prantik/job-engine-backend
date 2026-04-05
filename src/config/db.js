const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      dbName: "job_digest",   // ✅ FORCE DB NAME
    });

    console.log("✅ MongoDB connected");
    console.log("📦 DB Name:", conn.connection.name);

  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;