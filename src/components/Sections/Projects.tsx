import React from 'react';
import { Grid } from '@mui/material';
import Section from './Section';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/projects';

function Projects() {
  return (
    <Section id="projects" title="Projects">
      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item key={project.id} xs={12} sm={6} md={4}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}

export default Projects;
