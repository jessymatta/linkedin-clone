const mongoose = require('mongoose');
const { companySchema } = require("./Company");

const userSchema = new mongoose.Schema({
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
    profile_url: {
        type: String,
        default:""
    },
    banner_url: {
        type: String,
        default:""
    },
    occupation: {
        type: String,
        default:""
    },
    location: {
        type: String,
        default:""
    },
    about: {
        type: String,
        default:""
    },
    experiences: [{
        position_title: String,
        company_name: String,
        start_date: String,
        end_date: String,
        location: String,
    }],
    education: [{
        school: String,
        degree: String,
        field_of_study: String,
        start_date: String,
        end_date: String,
        grade: String
    }],
    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
    }],
    jobs_applied_to: [{
        // type: mongoose.Schema.Types.ObjectId,
        // ref: "Company",
    }]

})

const User = mongoose.model('User', userSchema);

module.exports = User;