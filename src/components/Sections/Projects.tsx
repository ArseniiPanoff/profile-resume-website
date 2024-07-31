import React from 'react';
import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';
import Section from './Section';

function Projects() {
  return (
    <Section id="projects" title="Projects">
      <List>
        <ListItem>
          <ListItemText
            primary="Web Service for ADMSS, Inc"
            secondary="Developed a web service for managing internal functions using TypeScript, React, and Axios. [Details](#)"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Aavistus App"
            secondary="Full-stack project focusing on user data collection and analysis, developed with React, Node.js, Firebase, and MongoDB. [Website](https://aavistus.app)"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Cops and Robbers"
            secondary="An educational game for children, developed with Unity and C#. [Google Play Store](https://play.google.com/store/apps/details?id=com.XamkGamePortfolio.CopsAndRobbers)"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Coding Game"
            secondary="A demo educational game for teaching coding and logic to children. [Details](#)"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="GameStorm"
            secondary="A mobile app featuring a set of simple games, developed in Kotlin. [GitHub Repository](https://github.com/SVDouble/android-practice-18-app)"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="AI for Starcraft II"
            secondary="Developed a data clustering algorithm for an AI project in StarCraft II, in collaboration with the University of Bielefeld. [Details](#)"
          />
        </ListItem>
      </List>
    </Section>
  );
}

export default Projects;

