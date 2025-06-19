const express = require('express');
const { addUser, fetchAllUsers, fetchUserByEmail, loginUser } = require('../Controllers/UserController');
const authenticateToken = require('../Utils/jwt');

const router = express.Router();

router.post('/add', addUser);

router.post('/login', loginUser);

router.get('/getall', authenticateToken, fetchAllUsers);

router.get('/getbyemail/:email', authenticateToken, fetchUserByEmail);

module.exports = router;