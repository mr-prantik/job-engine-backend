const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  userId: String,
  jobId: String,
  applied: Boolean,
  status: {
    type: String,
    enum: ["Applied", "OA", "Interview", "Rejected", "Offer"],
    default: "Applied"
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Application", applicationSchema);