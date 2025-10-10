const express = require('express');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth.route');


const app = express();
//middlewares
app.use(express.json());

app.use(cookieParser());

//Routes
app.use('/api/auth', authRoutes);



module.exports = app;