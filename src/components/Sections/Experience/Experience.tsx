import React, { useEffect, useState } from 'react';
import { List } from '@mui/material';
import Section from '../Section';
import JobDetails from './JobDetails';
import ExperienceItem from './ExperienceItem';
import { JobService } from '../../../services/JobService'; // Adjust the import path as needed
import { Job } from '../../../data/jobs';

const Experience: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const fetchedJobs = await JobService.fetchJobs();
        setJobs(fetchedJobs);
      } catch (error) {
        console.error(error);
        setError('Failed to fetch jobs');
      }
    };

    loadJobs();
  }, []);

  return (
    <Section id="experience" title="Experience">
      {error && <p>{error}</p>}
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
