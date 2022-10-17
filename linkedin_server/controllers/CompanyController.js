const Company = require('../models/Company');
const User = require('../models/User');

const addJobOpening = async (req, res) => {
    const { id, position_title, position_description } = req.body;
    try {
        const company = await Company.findById(id);
        company.job_openings.push({ position_title, position_description });
        await company.save();
        res.status(200).send("Job added successfuly")
    } catch (error) {
        res.status(400).send(err);
    }
}

const getAllPostedJobs = async (req, res) => {
    const { id } = req.body;
    try {
        const jobs = await Company.findById(id).select('job_openings');
        res.status(200).json(jobs);
    } catch (error) {
        res.status(400).send(err);
    }
}

const getCompanyProfile = async (req, res) => {
    const { id } = req.params;
    try {
        const company = await Company.findById(id).select('-job_openings');
        res.status(200).send(company);
    } catch (error) {
        res.status(400).send(err);
    }
}

const getApplicantProfile = async (req, res) => {
    const { id } = req.body;
    try {
        const company = await User.findById(id).select({following:0, jobs_applied_to:0});
        res.status(200).send(company);
    } catch (error) {
        res.status(400).send(err);
    }
}

module.exports = {
    getAllPostedJobs,
    addJobOpening,
    getCompanyProfile,
    getApplicantProfile
}