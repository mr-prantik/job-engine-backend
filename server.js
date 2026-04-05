// require("dotenv").config();

// const app = require("./src/app");
// const connectDB = require("./src/config/db");
// const mongoose = require("mongoose"); 

// // connectDB();


// mongoose.connection.on("connected", () => {
//   console.log("Connected DB:", mongoose.connection.name);
// });


// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });

require("dotenv").config();

const app = require("./src/app");
const connectDB = require("./src/config/db");
const mongoose = require("mongoose");

const startServer = async () => {
  try {
    await connectDB();

    console.log("DB Name:", mongoose.connection.name);

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });

  } catch (err) {
    console.error("❌ Failed to start server:", err);
  }
};

startServer();