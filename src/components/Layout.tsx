import React from 'react';
import { Grid, Box } from '@mui/material';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ border: '', flexGrow: 1 }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item md={9}>
          {children}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Layout;
