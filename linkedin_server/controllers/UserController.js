const User = require('../models/User');

const getAllJobs = async (req, res) => {
    res.json({ "jobs": "jobs" });
}

module.exports = {
    getAllJobs,
}