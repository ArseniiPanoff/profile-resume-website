// src/components/JobDetails.tsx
import React from 'react';
import { Box, Link, List, ListItem, Typography } from '@mui/material';
import PDFLink from '../PDFLink';

interface JobDetailsProps {
  tasks: string[];
  completedProjects?: string[];
  contacts?: { name: string; link: string }[];
  pdf?: { buttonDesc: string; pdfLink: string };
  projectLink?: string;
}

const JobDetails: React.FC<JobDetailsProps> = ({
  tasks,
  completedProjects,
  contacts,
  pdf,
  projectLink,
}) => (
  <Box>
    <Typography sx={{ textAlign: 'left' }} variant="body1" gutterBottom>
      My tasks included:
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index}>• {task}</ListItem>
        ))}
      </List>
      {completedProjects && (
        <>
          Completed projects:
          <List>
            {completedProjects.map((project, index) => (
              <ListItem key={index}>{project}</ListItem>
            ))}
          </List>
        </>
      )}
      {projectLink && (
        <>
          Link to the project: <Link href={projectLink}>{projectLink}</Link>
          <br />
          <br />
        </>
      )}
      {contacts && (
        <>
          Contacts:
          <List>
            {contacts.map((contact, index) => (
              <ListItem key={index}>
                <Link href={contact.link}>{contact.name}</Link>
              </ListItem>
            ))}
          </List>
        </>
      )}
      {pdf && (
        <>
          <PDFLink file={pdf.pdfLink}>{pdf.buttonDesc}</PDFLink>
        </>
      )}
    </Typography>
  </Box>
);

export default JobDetails;
