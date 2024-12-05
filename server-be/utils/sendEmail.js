const dotenv = require('dotenv').config();
const nodemailer = require('nodemailer')



const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER ,
        pass: process.env.EMAIL_PASS ,
    },
    tls: {
        rejectUnauthorized: false, // Disable certificate validation
    },
});



module.exports = {
    transporter
}