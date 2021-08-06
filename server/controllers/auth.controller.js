const passport = require('passport');
const jwt = require('jsonwebtoken');

const config = require('../config');

/**
 * Sends the confirmation that a user signed up successfully
 * @param req
 * @param res
 * @returns void
 */
postSignUp = (req, res) => {
    res.status(200).end();
}

/**
 * Handles the user login
 * @param req
 * @param res
 * @param next
 * @returns void
 */
postLogin = async (req, res, next) => {
    passport.authenticate('login', async (err, user) => {
        try {
            if (err) {
                return next(err);
            }

            req.login(user, { session: false }, async (loginError) => {
                if (loginError) {
                    return next(loginError);
                }

                try {
                    const body = { _id: user._id, email: user.email };
                    const token = jwt.sign({ user: body }, config.bcryptSecret);

                    return res.json({ token });
                } catch (error) {
                    return next(error);
                }
            });
        } catch (error) {
            return next(error);
        }
    })(req, res, next);
}

module.exports = {
    postSignUp,
    postLogin
};