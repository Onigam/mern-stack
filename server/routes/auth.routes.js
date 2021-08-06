const express = require('express');
const passport = require('passport');
const { body } = require('express-validator');

const handledInputErrors = require('../utils/validator');
const AuthController = require('../controllers/auth.controller');

const router = express.Router();

const authValidation = [
    body('email', 'email is required').exists().isEmail().withMessage('email has an invalid format'),
    body('password', 'password is required').exists()
];

const preSignupCheck = (req, res, next) => {
    if (handledInputErrors(req, res)) {
        return;
    }

    next();
}

// Signup a new user account
router.route('/signup').post(authValidation, preSignupCheck, passport.authenticate('signup', { session: false }), AuthController.postSignUp);

// logins the current user and returns a token
router.route('/login').post(authValidation, AuthController.postLogin);

module.exports = router;