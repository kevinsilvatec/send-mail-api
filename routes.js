const express = require('express')
const emailController = require('./src/controllers/email-controller');
 
const routes = express.Router()

routes.get("/", (req, res) => {
    return res.json({message: "This API is working!"});
});

routes.post('/sendEmail', emailController.send);

module.exports = routes;