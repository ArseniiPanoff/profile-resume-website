import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';
import Section from './Section';

function Skills() {
  return (
    <Section id="skills" title="Skills">   
      <Typography variant="h5" gutterBottom>
        **Programming Languages:**
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="TypeScript" secondary="Mainly for web development" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Python" secondary="For services development, such as Discord bots and small AI projects" />
        </ListItem>
        <ListItem>
          <ListItemText primary="C#" secondary="For both web and game development" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Kotlin" secondary="For Spring Boot RESTful applications or mobile development" />
        </ListItem>
      </List>
      
      <Typography variant="h5" gutterBottom>
        **Frameworks, Tools, and Environments:**
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="React & Node.js" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Spring Boot & Hibernate" />
        </ListItem>
        <ListItem>
          <ListItemText primary="MySQL, Firebase & MongoDB" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Git & GitHub" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Jupyter Notebook" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Android Studio, Rider, Visual Studio & VS Code" />
        </ListItem>
      </List>

      <Typography variant="h5" gutterBottom>
        **Soft Skills:**
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Emotional Composure" secondary="Maintains a calm and collected presence, facilitating clear decision-making and effective problem-solving in challenging situations." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Critical Thinking" secondary="Adept at questioning assumptions, spotting and correcting errors, enhancing problem-solving abilities." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Adaptability" secondary="Proven ability to adapt swiftly to evolving work environments and diverse projects." />
        </ListItem>
      </List>
    </Section>
  );
}

export default Skills;


