import React from 'react';
import { Box, Link, List, ListItem, Typography } from '@mui/material';

const JetBrainsJob: React.FC = () => (
  <Box>
    <Typography sx={{ textAlign: 'left' }} variant="body1" gutterBottom>
      My tasks included:
      <List>
        <ListItem>• Development and planning of a game app logic</ListItem>
        <ListItem>• Creation of code in Kotlin</ListItem>
      </List>
      Completed projects: 1. “GameStorm” A mobile app with a set of simple games
      on Kotlin.
      <br />
      Available at GitHub:
      <Link>https://github.com/SVDouble/android-practice-18-app</Link>
    </Typography>
  </Box>
);

export default JetBrainsJob;
