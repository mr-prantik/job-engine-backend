const Job = require("../models/jobModel");

// GET /api/jobs
exports.getJobs = async (req, res) => {
  try {
    const { search, location, limit = 50 } = req.query;

    let query = {};

    if (search) {
      query.title = { $regex: search, $options: "i" };
    }

    if (location) {
      query.location = { $regex: location, $options: "i" };
    }

    const jobs = await Job.find(query)
      .sort({ created_at: -1 })
      .limit(Number(limit));

    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// GET /api/jobs/:id
exports.getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    res.json(job);
  } catch (err) {
    res.status(404).json({ error: "Job not found" });
  }
};