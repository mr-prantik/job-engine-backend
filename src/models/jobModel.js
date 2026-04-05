const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  _id: String, 
  title: String,
  company: String,
  location: String,
  url: String,
  description: String,
  source: String,
  created_at: Date
});

module.exports = mongoose.model("Job", jobSchema, "Jobs");