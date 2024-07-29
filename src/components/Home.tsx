import React from 'react';
import { Typography, Box } from '@mui/material';

function Home() {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Home
      </Typography>
      <Typography variant="body1" align="center">
        Welcome to my professional profile! Here you can learn more about my background, projects, experience, skills, and how to get in touch.
      </Typography>
    </Box>
  );
}

export default Home;
