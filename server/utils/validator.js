const { validationResult } = require('express-validator');

/**
 * Handles express validator errors
 * @param req request object
 * @param res response object
 * @returns true if the errors were handled, false otherwise
 */
const handledInputErrors = (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return true;
    }

    return false;
}

module.exports = handledInputErrors;