const Company = require('../models/Company');

const addJobOpening = async (req, res) => {
    res.send("works")
}

const getAllPostedJobs = async (req, res) => {
    res.json(req.company);
}

module.exports = {
    getAllPostedJobs,
    addJobOpening
}