const User = require('../models/User');

const getAllJobs = async (req, res) => {
    // res.json({ "jobs": "jobs" });
    res.json(req.user);
}

module.exports = {
    getAllJobs,
}