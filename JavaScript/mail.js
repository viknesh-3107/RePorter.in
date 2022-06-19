// // "use strict";
// let nodemailer = require("nodemailer");

// // async..await is not allowed in global scope, must use a wrapper
// async function main() {
//   // Generate test SMTP service account from ethereal.email
//   // Only needed if you don't have a real mail account for testing
//   let nodemailer = await nodemailer.createTestAccount();

//   // create reusable transporter object using the default SMTP transport
//   var transport = nodemailer.createTransport({
//     host: "smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//       user: "beae1ccae81bc0",
//       pass: "411586fb6ad56d"
//     }
//   });

//   // send mail with defined transport object
//   let info = await transport.sendMail({
//     from: '"Fred Foo 👻" <bookskart2001@gmail.com>', // sender address
//     to: "nandhakumaran11@gmail.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }

// main().catch(console.error);
// let transporter = nodemailer.createTransport(options[, defaults])

// var message = {
//   from: "sender@server.com",
//   to: "receiver@sender.com",
//   subject: "Message title",
//   text: "Plaintext version of the message",
//   html: "<p>HTML version of the message</p>"
// };
// transporter.sendMail(data[, callback])
/*
var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "beae1ccae81bc0",
    pass: "411586fb6ad56d"
  },
  debug: true, // show debug output
  logger: true // log information in console
});
// verify connection configuration
transport.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});
let info = transport.sendMail({
  from: "ebookskart2001@gmail.com", // sender address
  to: "arasu.31.07.viknesh.01@gmail.com", // list of receivers
  subject: "Hello ✔", // Subject line
  text: "Hello world?", // plain text body
  html: "<b>Hello world?</b>", // html body
});

console.log("Message sent: %s", info.messageId);
// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

// Preview only available when sending through an Ethereal account
console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
*/
const nodemailer = require('nodemailer');


let mailTransporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'pro23530@gmail.com',
		pass: 'pro123@123'
	}
});

let mailDetails = {
	from: 'pro23530@gmail.com',
	to: 'arasu.31.07.viknesh.01@gmail.com',
	subject: 'Test mail',
	text: 'Node.js testing mail for GeeksforGeeks'
};

mailTransporter.sendMail(mailDetails, function(err, data) {
	if(err) {
		console.log('Error Occurs',err);
	} else {
		console.log('Email sent successfully');
	}
});
