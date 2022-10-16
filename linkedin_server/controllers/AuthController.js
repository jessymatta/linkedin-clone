const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Company = require('../models/Company');
const { path } = require('path');
const { join } = require('path');
const {saveLogo} = require ("../helper/helper_functions");

const loginPersonal = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) return res.status(404).json({ message: "Invalid Credentials" });

    const isMatch = bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(404).json({ message: "Invalid Credentials" });

    const token = jwt.sign({ email: user.email, name: user.name }, process.env.JWT_SECRET_KEY, {
        expiresIn: '1h'
    });
    res.status(200).json(token)
}

const signupPersonal = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = new User();
        user.name = name;
        user.email = email;
        user.password = await bcrypt.hash(password, 10);

        await user.save();
        res.json(user);
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}

const signupCompany = async (req, res) => {
    const { name, email, password, size, type, location, tagline, logo_url } = req.body;
    try {
        const company = new Company();
        company.name = name;
        company.email = email;
        company.password = await bcrypt.hash(password, 10);
        company.size = size;
        company.type = type;
        company.tagline = tagline;
        company.logo_url = await saveLogo(logo_url,email);

        await company.save();
        res.json(company);
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}

const loginCompany = async (req, res) => {
    const { email, password } = req.body;

    const company = await Company.findOne({ email }).select("+password");

    if (!company) return res.status(404).json({ message: "Invalid Credentials" });

    const isMatch = bcrypt.compare(password, company.password);
    if (!isMatch) return res.status(404).json({ message: "Invalid Credentials" });

    const token = jwt.sign({ email: company.email, name: company.name }, process.env.JWT_SECRET_KEY, {
        expiresIn: '1h'
    });
    res.status(200).json(token)
}

module.exports = {
    loginPersonal,
    signupPersonal,
    signupCompany,
    loginCompany
}