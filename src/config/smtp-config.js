const port = parseInt(process.env.SMTP_PORT, 10)
let secure;
if(process.env.SMTP_SECURE ==  'true'){
    secure = true
}else{
    secure = false
}
module.exports = {
    host: process.env.SMTP_HOST,
    port: port,
    service: process.env.SMTP_SERVICE,
    secure: secure,
    auth :{
        user: process.env.SMTP_AUTH_USER,
        pass: process.env.SMTP_AUTH_PASS
    },
    tls: {
        rejectUnauthorized: secure
    }
}