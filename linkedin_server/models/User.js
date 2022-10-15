const mongoose = require('mongoose');

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
    },
    banner_url: {
        type: String,
    },
    occupation: {
        type: String,
    },
    location: {
        type: String,
    },
    about: {
        type: String,
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
        start_date: Date,
        end_date: Date,
        grade: String
    }],
    following: [{
        // TODO after finishing companies model
    }],
    jobd_applied_to: [{
         // TODO after finishing companies model
    }]

})

const User = mongoose.model('User', userSchema);

module.exports = User;