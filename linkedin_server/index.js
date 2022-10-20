const express = require('express');
require('dotenv').config();
const app = express();
app.use(express.json());
require('./config/db.config');
// const { path } = require('path');
// const { join } = require('path');
// app.use('/public',express.static('public'));
// app.use(express.static(path.join(__dirname, 'public')));

var bodyParser = require("body-parser");
app.use(bodyParser.json({limit: '300kb'}));

const cors = require('cors');
app.use(
    cors({
        credentials: true,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        allowedHeaders: ['Content-Type', 'Authorization'],
        origin: ['http://localhost:8000', 'http://localhost:3000'],
    })
);


const authRoutes = require('./routes/auth.routes');
app.use('/auth', authRoutes);

const userRoutes = require('./routes/user.routes');
app.use('/users', userRoutes);

const companyRoutes = require('./routes/company.routes');
app.use('/companies', companyRoutes);

app.listen(process.env.PORT, (err) => {
    if (err) throw err;
    console.log(`server running on port ${process.env.PORT}`);
})