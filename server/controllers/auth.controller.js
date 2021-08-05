const passport = require('passport');

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
    passport.authenticate('login', async (err, user, info) => {
        try {
            if (err) {
                const error = new Error('An error occurred.');
                return next(error);
            }

            if (!user) {
                const error = new Error('Not found');
                error.statusCode = 404;
                return next(error);
            }

            req.login(user, { session: false }, async (loginError) => {
                if (loginError) {
                    return next(loginError);
                }

                const body = { _id: user._id, email: user.email };
                const token = jwt.sign({ user: body }, config.bcryptSecret);

                return res.json({ token });
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