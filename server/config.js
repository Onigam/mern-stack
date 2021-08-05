require('dotenv').config();

const config = {
    port: process.env.PORT || '3000',
    dbConnectionString: process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/mern-stack',
    env: process.env.NODE_ENV || "development",
    bcryptSecret: process.env.BCRYPT_SECRET
}

module.exports = config;