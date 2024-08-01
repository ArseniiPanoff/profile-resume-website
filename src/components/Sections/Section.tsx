import React from 'react';
import { Box, Typography } from '@mui/material';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => (
  <Box
    id={id}
    sx={{
      border: '',
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'top',
      padding: 2,
      boxSizing: 'border-box', // Ensures padding and border are included in the element's total width and height
      margin: 0,
    }}
  >
    <Typography sx={{ textAlign: 'center' }} variant="h2" gutterBottom>
      {title}
    </Typography>
    {children}
  </Box>
);

export default Section;
