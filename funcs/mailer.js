require('dotenv').config()
const nodemailer = require('nodemailer')

exports.handler = (event, context, callback) => {
  const body = JSON.parse(event.body)

  const transporter = nodemailer.createTransport({
    service: 'SendGrid',
    auth: {
      user: process.env.SENDGRID_USERNAME,
      pass: process.env.SENDGRID_PASSWORD
    }
  })

  transporter.sendMail(
    {
      from: `"${body.name}" <${body.email}>`,
      to: process.env.CONTACT_EMAIL,
      subject: '🚀 Someone asked for help to MM Devs',
      text: body.text
    },
    (error, info) => {
      if (error) {
        callback(error)
      } else {
        callback(null, {
          statusCode: 200,
          body: info
        })
      }
    }
  )
}
