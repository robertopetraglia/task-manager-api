const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'robertopetraglia1983@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'robertpetraglia1983@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodby, ${name}. I hope to see you back sometime soon`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}