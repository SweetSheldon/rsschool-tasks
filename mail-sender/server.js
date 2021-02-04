const nodemailer = require("nodemailer");
const express = require('express')
const app = express()
const bodyParser= require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.sendFile('/Users/tenbit/Desktop/lab1_new' + '/index.html')
    // Note: __dirname is the current directory you're in. Try logging it and see what you get!
    // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
})

app.post('/quotes', (req, res) => {
    mail(req.body)
    console.log(req.body)
    res.redirect('/')
})



app.listen(3000, function() {
    console.log('listening on 3000')
})


async function mail(body) {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: mail, // generated ethereal user
            pass: password, // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: `"Alex" <${mail}>`, // sender address
        to: "alex2000korsak@gmail.com", // list of receivers
        subject: "Пользователь просил вам перезвонить", // Subject line
        text: "Пользователь просил вам перезвонить", // plain text body
        html: `<div>Новый запрос вызова</div>
<div>Пользователь ${body.name} просил вас перезвонить по телефону ${body.phone}</div>
<div>${new Date().toLocaleString()}</div>`, // html body

    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
