const User = require('../models/User');

const getProfile = async (req, res) => {
    const { id } = req.body;
    try {
        const profile = await User.findById(id);
        res.status(200).json(profile);
    } catch (error) {
        res.status(400).send(err);
    }
}

const getAllJobs = async (req, res) => {
    // res.json({ "jobs": "jobs" });
    res.json(req.user);
}

module.exports = {
    getAllJobs,
    getProfile
}