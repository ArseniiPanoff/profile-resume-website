import React from 'react';
import { Box, Typography } from '@mui/material';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <Box
      id={id}
      sx={{
        width: '100%',
        minHeight: 'calc(100vh - 70px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 2,
        boxSizing: 'border-box',
        margin: 0,
      }}
    >
      <Typography sx={{ textAlign: 'center' }} variant="h2" gutterBottom>
        {title}
      </Typography>
      {children}
    </Box>
  );
};

export default Section;
