import React from 'react';
import { Box, List, ListItem, Typography } from '@mui/material';

const Admss: React.FC = () => (
  <Box>
    <Typography sx={{ textAlign: 'left' }} variant="body1" gutterBottom>
      My tasks included:
      <List>
        <ListItem>
          • Web development using TypeScript, React, and Axios
        </ListItem>
        <ListItem>
          • Designing and implementing UI elements and their behavior
        </ListItem>
        <ListItem>
          • Structuring the project and overseeing project building, testing,
          and presentation
        </ListItem>
      </List>
      Completed project: Implemented a web service capable of managing internal
      functions from the browser to control microservices and users.
    </Typography>
  </Box>
);

export default Admss;
