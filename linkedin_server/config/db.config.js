const mongoose = require("mongoose")

mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log("Database Connected")
    })
    .catch(err => {
        console.log("Database Error: ", err)
    })
