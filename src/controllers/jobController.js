const Job = require("../models/jobModel");
const mongoose = require("mongoose");

exports.getJobs = async (req, res) => {
  try {
    console.log("📦 DB:", mongoose.connection.name);
    console.log("📁 Collection:", Job.collection.name);

    const count = await Job.countDocuments();
    console.log("📊 Total jobs in DB:", count);

    const jobs = await Job.find();

    res.json(jobs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};