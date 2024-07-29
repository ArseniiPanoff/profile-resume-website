import React from 'react';
import { Typography, Box } from '@mui/material';

function Contact() {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Contact
      </Typography>
      <Typography variant="body1" align="center">
        Feel free to get in touch with me via email or LinkedIn. 
      </Typography>
    </Box>
  );
}

export default Contact;
