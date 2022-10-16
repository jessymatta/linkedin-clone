const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        select: false
    },
    logo_url: {
        type: String,
    },
    size: {
        type: String,
    },
    type: {
        type: String,
    },
    location: {
        type: String,
    },
    tagline: {
        type: String,
    },
    /*job_openings:[{
        position_title: String,
        position_description: String,
        applicants:{},
    }],*/
})

const Company = mongoose.model('Company', companySchema);

module.exports = Company;