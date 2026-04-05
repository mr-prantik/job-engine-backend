const Application = require("../models/applicationModel");

exports.getStats = async (req, res) => {
  const stats = await Application.aggregate([
    {
      $group: {
        _id: "$status",
        count: { $sum: 1 }
      }
    }
  ]);

  res.json(stats);
};


