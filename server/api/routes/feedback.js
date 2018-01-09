const express = require('express');
const router = express.Router();

const mailer = require('nodemailer');


router.post('/', (req, res, next) => {

        console.log(req.body);
    var smtpTransport = mailer.createTransport({
        host: "smtp.ukr.net",
        port: 465,
        secure: true,
        auth: {
            user: "karapysh15@ukr.net",
            pass: "151596"
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    var mail = {
        from: `${req.body.name} <karapysh15@ukr.net>`,
        to: "karapysh15@gmail.com",
        subject: `NuttyNut | feedback - ${req.body.subject}`,
        text: `text: ${req.body.message}`,
        html: `
            <table bgcolor="#cccccc" style="width:100%;">
                <tr>
                    <th colspan="2"><h2><b>${req.body.subject}</b></h2></th>
                </tr>
                <tr>
                    <th colspan="2" align="left"><b>Contact information:</b></th>
                </tr>
                <tr>
                    <td style="padding-top:10px; padding-bottom:10px; font-weight:500;">Name:</td>
                    <td style="padding-top:10px; padding-bottom:10px; font-weight:500;">${req.body.name}</td>
                </tr>
                <tr>
                    <td style="padding-top:10px; padding-bottom:10px; font-weight:500;">Email:</td>
                    <td style="padding-top:10px; padding-bottom:10px; font-weight:500;">${req.body.email}</td>
                </tr>
                <tr>
                    <th colspan="2" align="left"><b>Message:</b></th>
                </tr>
                <tr>
                    <td colspan="2" align="left" style="font-weight:500;"><pre>${req.body.message}</pre></td>
                </tr>
            </table>
        `
    }

    smtpTransport.sendMail(mail, function (error, response) {
        if (error) {
            console.log(error);
        } else {
            console.log("Message sent: " + response);
        }

        smtpTransport.close();
    });

});

module.exports = router;



// var smtpTransport = mailer.createTransport({
//     host: "smtp.ukr.net",
//     secure: false,
//     port: 578,
//     auth: {
//         user: "karapysh15@ukr.net",
//         pass: "151596"
//     },
//     tls: {
//         rejectUnauthorized: false
//     }
// });
