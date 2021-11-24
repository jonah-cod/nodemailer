const mailer = require('nodemailer');
require('dotenv').config();

let PASS = process.env.PASS
const transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'jonatskin@gmail.com',
        pass: PASS
    }
});


function sendmail(message) {
    return new Promise((resolve, reject) => {
        transporter.sendMail(message, (err, info) => {
            if (err)(reject(err.message))
            console.log(info.response);
            resolve(info.response)

        })
    })

}

module.exports = sendmail