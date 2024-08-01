import React, { useState, useEffect } from 'react';
import { Button, Box } from '@mui/material';
import { ArrowUpward } from '@mui/icons-material';

const BackToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        display: visible ? 'block' : 'none',
      }}
    >
      <Button
        variant="contained"
        color="primary"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUpward />
      </Button>
    </Box>
  );
};

export default BackToTopButton;
