const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const config = require('../config');
const User = require('../models/user');

/**
 * Register passport strategies for signup, login and token validation
 */
const registerPassportStrategies = () => {

    /**
     * Passport strategy for user registration
     */
    passport.use('signup', new localStrategy(
        {
            usernameField: 'email',
            passwordField: 'password'
        },
        async (email, password, done) => {
            try {
                const user = await User.create({ email, password });

                return done(null, user);
            } catch (error) {
                done(error);
            }
        }
    ));

    /**
     * Passport strategy for user login
     */
    passport.use('login', new localStrategy(
        {
            usernameField: 'email',
            passwordField: 'password'
        },
        async (email, password, done) => {
            try {
                const errorMessage = 'The email or password are invalid';
                const user = await User.findOne({ email });

                if (!user) {
                    throw new Error(errorMessage);
                }

                const validate = await user.isPasswordValid(password);

                if (!validate) {
                    throw new Error(errorMessage);
                }

                return done(null, user, { message: 'Success' });
            } catch (error) {
                return done(error);
            }
        }
    ));

    /**
     * Passport strategy for token validation
     */
    passport.use(new JWTstrategy(
        {
            secretOrKey: config.bcryptSecret,
            jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
        },
        async (token, done) => {
            try {
                return done(null, token.user);
            } catch (error) {
                done(error);
            }
        }
    ));
}

module.exports = {
    registerPassportStrategies
};