const jwt = require('jsonwebtoken');
const User = require('../models/User');

const AuthMiddleware = async (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const user = await User.findOne({email: decoded.email}).lean()
        req.user=user;
        next();

    } catch (err) {
        console.log(err.message);
        return res.status(401).json({ message: "Unauthorized" })
    }
    
}

module.exports = AuthMiddleware;