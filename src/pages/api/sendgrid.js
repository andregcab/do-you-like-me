// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

const sendEmail = async (req, res) => {
  const responder = req.body.responder.length
    ? req.body.responder
    : 'anon';

  try {
    console.log('REQ.BODY', req.body);
    await sendgrid.send({
      to: `${req.body.to}`,
      from: 'doulikeme@proton.me',
      subject: `You have a response from ${responder}!`,
      html: '<strong>U CUTE</strong>', // style something here using req.body.repsonse
    });
  } catch (error) {
    return res
      .status(error.statusCode || 500)
      .json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
};

export default sendEmail;
