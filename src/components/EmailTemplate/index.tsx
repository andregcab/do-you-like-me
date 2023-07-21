import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface EmailTemplateProps {
  response: string;
  responder: string;
  senderName: string;
}

const responseTemlate = (response: string) => {
  return {
    yes: <span>I like you (｡◕‿◕｡)</span>,
    no: <span>I dont like you (° ͜ʖ͡°)╭∩╮</span>,
    maybe: (
      <span>
        I like you, idk <span>&#x00AF;\_(ツ)_/&#x00AF;</span>
      </span>
    ),
  }[response];
};

export const EmailTemplate = ({
  response,
  responder,
  senderName,
}: EmailTemplateProps) => (
  <Html>
    <Head />
    <Preview>You have a response from {responder}!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section>
          <Text style={paragraph}>Hi {senderName},</Text>
          <Text style={paragraph}>
            {responder} said
            <strong>{` ${response}, `}</strong>
            {responseTemlate(response)}
          </Text>
          <Text style={paragraph}>
            Cheers,
            <br />
            Do-u-like-me Bot
          </Text>
        </Section>
        <Section style={btnContainer}>
          <Button
            pX={10}
            pY={10}
            style={button}
            href="https://doulikeme.online/"
          >
            Send your own note
          </Button>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>
          Have feedback? Respond to this email and let us know
          &#40;email responses will be handled by the Do-u-like-me Bot
          and will not be delivered to the original sender&#41;
        </Text>
      </Container>
    </Body>
  </Html>
);

export default EmailTemplate;

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
};

const logo = {
  margin: '0 auto',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
};

const btnContainer = {
  marginTop: '10px',
  textAlign: 'center' as const,
};

const button = {
  backgroundColor: '#319795',
  borderRadius: '3px',
  color: '#fff',
  fontSize: '16px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
};

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
};
