const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
});

/**
 * Hashes the password before saving the user model
 */
userSchema.pre('save', async function (next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
});

/**
 * Compares a plain text password with the hashed version in the database
 * @param {string} password
 * @returns true or false
 */
UserSchema.methods.isPasswordValid = async function (password) {
    const compare = await bcrypt.compare(password, this.password);
    return compare;
}

module.exports = mongoose.model("User", userSchema);