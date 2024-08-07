import React from 'react';
import { Box, Typography } from '@mui/material';
import { Element } from 'react-scroll';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section = ({ id, title, children }: SectionProps) => (
  <Element name={id} className="section">
    <Box
      sx={{
        width: '100%',
        minHeight: 'calc(100vh - 120px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 2,
        boxSizing: 'border-box',
        marginTop: '70px', // Space for fixed navbar
        marginBottom: '50px',
      }}
    >
      <Typography sx={{ textAlign: 'center' }} variant="h2" gutterBottom>
        {title}
      </Typography>
      {children}
    </Box>
  </Element>
);

export default Section;
