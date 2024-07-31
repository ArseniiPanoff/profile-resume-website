import React from 'react';
import { Typography, Box } from '@mui/material';
import Section from './Section';

function Contact() {
  return (
    <Section id="contact" title="Contact me">
      <Typography variant="body1" paragraph>
        Feel free to get in touch with me via email or connect on LinkedIn. You can also use the form below to send a direct message.
      </Typography>
    </Section>

  );
}

export default Contact;
