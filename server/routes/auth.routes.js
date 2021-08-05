const express = require('express');
const passport = require('passport');

const router = express.Router();
const AuthController = require('../controllers/auth.controller');

// Signup a new user account
router.route('/signup').post(passport.authenticate('signup', { session: false }), AuthController.postSignUp);

// logins the current user and returns a token
router.route('/login').post(AuthController.postLogin);

module.exports = router;