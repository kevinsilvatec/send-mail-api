const mailer = require('nodemailer')
const mailConfig = require('../config/smtp-config')
const Log = require('../services/log-service')
const { promisify } = require('util');

class sendEmailService {
    async sendEmail(infoEmail){
        const sender = mailer.createTransport(mailConfig)
        
        sender.sendMailSync = promisify(sender.sendMail)
        
        try {            
            await sender.sendMailSync(infoEmail);
            return {
                code: 200,
                message: `The email was successfully sent to ${infoEmail.to}`
            }
        } catch (err) {
            Log.err(`Failed to sent email | ${err.message}`);
            return {
                code: 500,
                message: err.message
            }
        }
    }
}

module.exports = new sendEmailService()