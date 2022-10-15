const express = require('express');
require('dotenv').config();
const app = express();
app.use(express.json());
require('./config/db.config');

const authRoutes = require('./routes/auth.routes');
app.use('/auth', authRoutes)

app.listen(process.env.PORT, (err)=>{
    if(err) throw err;
    console.log(`server running on port ${process.env.PORT}`);
})