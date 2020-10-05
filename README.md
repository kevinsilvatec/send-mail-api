# send-mail-api

API for send emails

# Dependencies

- Dotenv: To implement .env file for manage environment variables;
- Express: For create routes and receive http requests;
- Nodemailer: For send emails;
- Winston: For logs.

# Endpoints

The application has two accessible routes: _/_ e _/sendEmail_

## /
- Method: GET;
- Function: Application test;
- Request's body: -
- Return: 

{
    message: "This API is working!"
}

## /sendEmail
- Method: POST;
- Function: Send email;
- Request's body: 

		{
			"from": "kevinsilvatec@gmail.com",

			"to": "kevin.silva@mundiale.com.br",

			"subject": "Teste",

			"text": "Teste API"
		}

- Alternative Request's body _The attachment key can be passed_:

		{
			from: string,

			to: string,

			subject: string,

			text: string,

			attachments: [{
				filename: string
				path: string
			}]
   		}

- Return: In case of error, the _Status code_ will be 500. In case of success 200. In both cases there's a jSON return like the following:

		{
			message: string
		}

# Observations
The application has a .env-example with the envinronment's variables. Rename this file to .env and fill the values before executing the _npm install_ command. The application can be started with _node server.js_ in root directory.