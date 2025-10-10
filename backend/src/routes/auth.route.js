const express = require('express');
const { registerController, loginController } = require('../controllers/auth.controller');

const router = express.Router();

//AUTH ROUTES
router.post("/register", registerController);
router.post("/login", loginController);



module.exports = router;


