// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
import sendgrid from '@sendgrid/mail';
import { render } from '@react-email/render';
import EmailTemplate from '../../components/EmailTemplate';

sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

const emailTemplate = (body) =>
  render(<EmailTemplate {...body} />, {
    pretty: true,
  });

const sendEmail = async (req, res) => {
  const responder = req.body.responder.length
    ? req.body.responder
    : 'anon';

  try {
    await sendgrid.send({
      to: `${req.body.to}`,
      from: 'doulikeme@proton.me',
      subject: `You have a response from ${responder}!`,
      html: emailTemplate(req.body),
    });
  } catch (error) {
    return res
      .status(error.statusCode || 500)
      .json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
};

export default sendEmail;
