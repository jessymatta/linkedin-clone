const jwt = require('jsonwebtoken');
const Company = require('../models/Company');

const AuthMiddlewareCompany = async (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const company = await Company.findOne({email: decoded.email}).lean()
        req.company=company;
        next();

    } catch (err) {
        console.log(err.message);
        return res.status(401).json({ message: "Unauthorized" })
    }
    
}


module.exports = AuthMiddlewareCompany;