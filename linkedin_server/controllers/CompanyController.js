const Company = require('../models/Company');

const getAllPostedJobs = async (req, res) => {
    res.json(req.company);
}

module.exports = {
    getAllPostedJobs,
}