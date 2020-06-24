const sgMail = require('@sendgrid/mail');

export default async function (req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { name, email, message } = req.body;

  const content = {
    to: 'hello@markvincent.dev',
    from: email,
    subject: `New Message From - ${name}`,
    text: message,
    html: `<p>${message}</p>`
  };

  try {
    await sgMail.send(content);
    res.status(200).send('Nice! All set.');
  } catch (error) {
    console.log('ERROR', error);
    res.status(400).send('Oops. Try Again.');
  }
}