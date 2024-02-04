require('dotenv').config();
module.exports = {
    JWT_SECRET: process.env.JWT_SECRET,
    MONGOURI: process.env.MONGOURI,
}