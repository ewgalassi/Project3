const express = require('express');
const router = express.Router();
// const db = require('../models');
const passport = require('../passport');
const userController = require("../controllers/userController");

// Register (create account)
router.post('/register', userController.register);

// Login
router.post('/login', function (req, res, next) {
  console.log('routes/user.js, login, req.body: ');
  console.log(req.body);
  next();
},
  passport.authenticate('local'),
  (req, res) => {
    res.send(req.user);
  }
);

// Get user data (see who is logged in, profile data)
router.get('/', userController.getUserData);

// Update profile data
router.put("/profile", userController.updateProfile);

// Logout
router.get('/logout', userController.logout);

module.exports = router;
