const express = require('express');
const { getAllUsers, deleteUser } = require('../controllers/adminController');

const router = express.Router();

// Get all users
router.get('/users', getAllUsers);

// Delete a user by ID
router.delete('/users/:id', deleteUser);



module.exports = router;
