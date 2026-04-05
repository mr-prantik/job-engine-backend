const Application = require("../models/applicationModel");

exports.applyToJob = async (req, res) => {
  try {
    const { userId, jobId, applied } = req.body;

    const app = new Application({ userId, jobId, applied });

    await app.save();

    res.json(app);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};