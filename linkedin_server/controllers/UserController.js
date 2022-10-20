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

const addExperience = async (req, res) => {
    const { id, position_title, company_name, start_date, end_date, location } = req.body;
    try {
        const user = await User.findById(id);
        user.experiences.push({ position_title, company_name, start_date, end_date, location });
        await user.save();
        res.status(200).send("Experience added successfuly")
    } catch (error) {
        res.status(400).send(err);
    }
}

const addProfile = async (req, res) => {
    const { id, name, profile_url, banner_url, occupation, location, about } = req.body;
    try {
        const data = { name, profile_url, banner_url, occupation, location, about }
        const new_info = await User.findByIdAndUpdate({ _id: id }, data, { new: true })
        res.status(200).send(new_info)
    } catch (error) {
        res.status(400).send(err);
    }
}
const updateEducation = async (req, res) => {
    res.send("test");
}

const followCompany = async (req, res) => {
    const { company_id } = req.body;
    const user_id = req.user._id;

    try {
        const user = await User.findById(user_id);
        user.following.push(company_id);
        await user.save();
        res.status(200).send("success")
    } catch (error) {
        res.status(400).send(err);
    }
}


module.exports = {
    getAllJobs,
    getProfile,
    addEducation,
    addExperience,
    addProfile,
    updateEducation,
    followCompany
}