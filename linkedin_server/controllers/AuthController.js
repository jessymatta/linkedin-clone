const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const loginPersonal = (req, res) => {
    res.send("Login Personal");
}

const signupPersonal = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = new User();
        user.name = name;
        user.email = email;
        user.password = await bcrypt.hash(password, 10);

        await user.save();
        res.json(user)
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }

    res.send("SignUp Personal");
}

module.exports = {
    loginPersonal,
    signupPersonal
}