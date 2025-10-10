const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth.route');


const app = express();
//middlewares
app.use(express.json());

app.use(cookieParser());

// CORS: allow Vite dev server to send/receive cookies
app.use(
	cors({
		origin: 'http://localhost:5173',
		credentials: true,
		methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
		allowedHeaders: ['Content-Type', 'Authorization'],
	})
);

//Routes
app.use('/api/auth', authRoutes);



module.exports = app;