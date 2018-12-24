var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'farkalit.usman76@gmail.com',
      pass: 'xxxx'
    }
  });

  var mailOptions = {
    from: 'farkalit.usman76@gmail.com',
    to: 'fusman@xebia.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });