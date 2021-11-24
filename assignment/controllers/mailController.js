const content = require('../helpers/contentObj')
const sendmail = require('../helpers/mailer')


async function mailController(req, res) {

    const message = {
        from: 'jonatskin@gmail.com',
        //add your email address here on this array to receive the mail
        to: ['caleb.baraka@thejitu.com', 'joan.wanini@thejitu.com', 'joseph.ndengwa@thejitu.com'],
        cc: 'idolearndaily@gmail.com',
        subject: 'All the way!',

        html: `<div>
                <h4 style="text-align: center">Dudes, I really need to test this nodemailer service🤯🤯🤯</h4>
                <p style="text-align: center; color: grey">This is system generated mail. Don\'t reply.</p>
                <p style="text-align: center; color:grey;">Ooh I forgot. This was supposed to be an event invite😤😤😤</p>
                <p style="text-align: center;color:grey">Anyway feel free to bring friends guys</p>
                
       </div>`,
        icalEvent: {
            content: content
        }
    }

    try {
        await sendmail(message)
        res.send('Mail sent!')
    } catch (error) {
        res.send(error.message)
    }
}
module.exports = { mailController }