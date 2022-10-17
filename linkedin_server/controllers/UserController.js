const User = require('../models/User');
const Company = require('../models/Company');

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
    try {
        const jobs = await Company.find();
        res.status(200).send(jobs)
    } catch (error) {
        res.status(400).send(err);
    }
}

const addEducation = async (req, res) => {
    const { id, school, degree, field_of_study, start_date, end_date, grade } = req.body;
    try {
        const user = await User.findById(id);
        user.education.push({ school, degree, field_of_study, start_date, end_date, grade });
        await user.save();
        res.status(200).send("Education added successfuly")
    } catch (error) {
        res.status(400).send(err);
    }
}

module.exports = {
    getAllJobs,
    getProfile,
    addEducation
}