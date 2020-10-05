const Log = require('../services/log-service')
const sendEmailService = require('../services/send-email-service')

exports.send = async (req, res) => {
    const {code, message} = await sendEmailService.sendEmail(req.body)
    return res.status(code).json({message})
}