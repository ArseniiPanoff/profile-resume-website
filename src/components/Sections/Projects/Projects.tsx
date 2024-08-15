import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import ProjectCard from './ProjectCard';
import Section from '../Section';
import { Project } from '../../../data/projects';
import { ProjectService } from '../../../services/ProjectService';

function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Fetch projects from the backend when the component mounts
    ProjectService.fetchProjects()
      .then((fetchedProjects) => setProjects(fetchedProjects))
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

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
