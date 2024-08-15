import React from 'react';
import { Box, Link, List, ListItem, Typography } from '@mui/material';
import PDFLink from '../PDFLink';

interface JobDetailsProps {
  tasks: string[];
  completedProjects?: string[];
  contacts?: { [key: string]: string }; // Changed to an object with name-link pairs
  pdf?: string;
  projectLink?: string;
}

// Helper function to convert the object to an array
const convertContactsToArray = (contactsObj?: { [key: string]: string }) => {
  return contactsObj
    ? Object.entries(contactsObj).map(([name, link]) => ({ name, link }))
    : [];
};

const JobDetails: React.FC<JobDetailsProps> = ({
  tasks,
  completedProjects = [],
  contacts,
  pdf,
  projectLink,
}) => {
  const contactsArray = convertContactsToArray(contacts);

  return (
    <Box>
      <Typography sx={{ textAlign: 'left' }} variant="body1" gutterBottom>
        My tasks included:
        <List>
          {tasks.map((task, index) => (
            <ListItem key={index}>• {task}</ListItem>
          ))}
        </List>
        {completedProjects.length > 0 && (
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
        {contactsArray.length > 0 && (
          <>
            Contacts:
            <List>
              {contactsArray.map((contact, index) => (
                <ListItem key={index}>
                  <Link href={contact.link}>{contact.name}</Link>
                </ListItem>
              ))}
            </List>
          </>
        )}
        {pdf && (
          <>
            <PDFLink file={JSON.parse(pdf).pdfLink}>
              {JSON.parse(pdf).buttonDesc}
            </PDFLink>
          </>
        )}
      </Typography>
    </Box>
  );
};

export default JobDetails;
