const nodemailer = require("nodemailer")

const transport = nodemailer.createTransport(
    {
        service: "hotmail",
        auth: {
            user: 'evannivan@outlook.com',
            pass: '$Qwerty01'
        }
    }
)

const sendEmail = async (message) => {
    return new Promise((resolve, reject) => {
        transport.sendMail(message, (err, info) => {
            if (err) {
                return reject(err)
            }

            console.log(info.response)
            resolve(info.response)
        })
    })
}

module.exports = sendEmail