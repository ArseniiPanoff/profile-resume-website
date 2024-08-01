import React from 'react';
import { Box, Link, List, ListItem, Typography } from '@mui/material';

const XamkGameStudio: React.FC = () => (
  <Box>
    <Typography sx={{ textAlign: 'left' }} variant="body1" gutterBottom>
      My tasks included:
      <List>
        <ListItem>
          • Creation and modification of scripts in C# using Unity
        </ListItem>
        <ListItem>• Testing, debugging and error fixing</ListItem>
        <ListItem>• Creation of elements of user interface</ListItem>
        <ListItem>• Development of game structure</ListItem>
        <ListItem>• Optimization of code</ListItem>
      </List>
      Completed projects:
      <br />
      <br />
      1. “Cops and robbers” A fully completed educational/entertainment game for
      children of ages 6-10.
      <br />
      Available at Google Play store:{' '}
      <Link>
        https://play.google.com/store/apps/details?id=com.XamkGamePortfolio.CopsAndRobbers{' '}
      </Link>
      <br />
      <br />
      2. “Coding game” A demo version of an educational game for children of
      ages 8-12, which teaches them to code and logical thinking.
    </Typography>
  </Box>
);

export default XamkGameStudio;
