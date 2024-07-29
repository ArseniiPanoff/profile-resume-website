import React from 'react';
import { Typography, Box } from '@mui/material';

function About() {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h3" align="center" gutterBottom>
        About
      </Typography>
      <Typography variant="body1" align="center">
        I am a passionate software developer with a background in programming and gaming. I love building web applications and learning new technologies.
      </Typography>
    </Box>
  );
}

export default About;
