import React from 'react';
import {
  Box,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
} from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const iconStyle = { fontSize: 24, color: 'primary.main' };

const ContactInfo: React.FC = () => (
  <Box>
    <Typography variant="body1" paragraph>
      Feel free to get in touch with me via email, connect on LinkedIn, or visit
      my GitHub profile.
    </Typography>
    <List sx={{ width: '100%', maxWidth: 600, marginTop: '20px' }}>
      <ListItem sx={{ padding: 0 }}>
        <ListItemIcon>
          <MailOutlineIcon sx={iconStyle} />
        </ListItemIcon>
        <ListItemText
          primary="Email"
          secondary={
            <Link href="mailto:arsenii.panoff@gmail.com">
              arsenii.panoff@gmail.com
            </Link>
          }
        />
      </ListItem>
      <Divider />
      <ListItem sx={{ padding: 0 }}>
        <ListItemIcon>
          <LinkedInIcon sx={iconStyle} />
        </ListItemIcon>
        <ListItemText
          primary="LinkedIn"
          secondary={
            <Link
              href="https://www.linkedin.com/in/arsenii-panov/"
              target="_blank"
              rel="noopener"
            >
              My LinkedIn profile
            </Link>
          }
        />
      </ListItem>
      <Divider />
      <ListItem sx={{ padding: 0 }}>
        <ListItemIcon>
          <GitHubIcon sx={iconStyle} />
        </ListItemIcon>
        <ListItemText
          primary="GitHub"
          secondary={
            <Link
              href="https://github.com/ArseniiPanoff"
              target="_blank"
              rel="noopener"
            >
              My GitHub profile
            </Link>
          }
        />
      </ListItem>
    </List>
  </Box>
);

export default ContactInfo;
