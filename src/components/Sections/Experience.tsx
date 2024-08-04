// src/components/Sections/Experience.tsx
import React from 'react';
import { List } from '@mui/material';
import Section from './Section';
import { jobs } from '../../data/jobs';
import ExperienceItem from './ExperienceItem';
import JobDetails from './Jobs/JobDetails';

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Experience">
      <List>
        {jobs.map((job) => (
          <ExperienceItem
            jobType={job.jobType}
            key={job.id}
            title={job.title}
            description={job.description}
          >
            <JobDetails
              tasks={job.tasks}
              completedProjects={job.completedProjects}
              contacts={job.contacts}
              pdf={job.pdf}
              projectLink={job.projectLink}
            />
          </ExperienceItem>
        ))}
      </List>
    </Section>
  );
};

export default Experience;
