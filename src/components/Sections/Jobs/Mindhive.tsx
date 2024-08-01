import React from 'react';
import { Box, Link, List, ListItem, Typography } from '@mui/material';

const Mindhive: React.FC = () => (
  <Box>
    <Typography sx={{ textAlign: 'left' }} variant="body1" gutterBottom>
      My tasks included:
      <List>
        <ListItem>
          • Full stack development on TypeScript using React, Node.js, Firebase,
          MongoDB
        </ListItem>
        <ListItem>
          • Creating UI elements and setting up their behavior on the web page
          and interaction with back-end
        </ListItem>
        <ListItem>• Design of project structure</ListItem>
        <ListItem>• Project building and testing</ListItem>
        <ListItem>• Task management</ListItem>
      </List>
      I have been involved in many projects, but mainly in one large and private
      project focused on collecting user data with various types of questions
      with further analysis. Link to the official website of the project:
      <Link> https://aavistus.app </Link>.
    </Typography>
  </Box>
);

export default Mindhive;
