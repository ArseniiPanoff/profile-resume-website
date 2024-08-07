// src/components/ExperienceItem.tsx
import React, { ReactNode } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ListItemIcon,
  ListItemText,
  ListItem,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WorkHistory from '@mui/icons-material/WorkHistory';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import { JobType } from '../../../data/jobs';

interface ExperienceItemProps {
  jobType: JobType;
  title: string;
  description: string;
  children?: ReactNode; // Placeholder for additional content
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  jobType,
  title,
  description,
  children,
}) => (
  <Accordion sx={{ mb: 2 }}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <ListItem>
        <ListItemIcon>
          {jobType == 'freelance' || jobType == 'part-time' ? (
            <WorkHistory />
          ) : jobType == 'full-time' ? (
            <WorkIcon />
          ) : (
            <SchoolIcon />
          )}
        </ListItemIcon>
        <ListItemText
          primaryTypographyProps={{ variant: 'h6' }}
          secondaryTypographyProps={{ variant: 'body1' }}
          primary={title}
          secondary={<Typography>{description}</Typography>}
        />
      </ListItem>
    </AccordionSummary>
    <AccordionDetails>{children}</AccordionDetails>
  </Accordion>
);

export default ExperienceItem;
