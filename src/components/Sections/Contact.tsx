import React from 'react';
import {
  Box,
  Typography,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Button,
} from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Section from './Section';

const iconStyle = { fontSize: 24, color: 'primary.main' };

function Contact() {
  return (
    <Section id="contact" title="Contact Me">
      <Typography variant="body1" paragraph>
        Feel free to get in touch with me via email, connect on LinkedIn, or
        visit my GitHub profile.
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
      <Box mt={2}>
        <Button
          variant="contained"
          color="primary"
          href="mailto:arsenii.panoff@gmail.com"
        >
          Send Me a Message
        </Button>
      </Box>
    </Section>
  );
}

export default Contact;
