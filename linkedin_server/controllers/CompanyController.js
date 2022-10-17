const Company = require('../models/Company');

const addJobOpening = async (req, res) => {
    const {id,position_title,position_description} = req.body;
    try{
    const company = await Company.findById(id); 
    company.job_openings.push({position_title,position_description});
    await company.save();
    res.status(200).send("Job added successfuly")
    }catch(error){
        res.status(400).send(err);
    }
}

const getAllPostedJobs = async (req, res) => {
    res.json(req.company);
}

module.exports = {
    getAllPostedJobs,
    addJobOpening
}