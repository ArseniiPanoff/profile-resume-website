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

interface ExperienceItemProps {
  icon: ReactNode;
  title: string;
  description: string;
  children?: ReactNode; // Placeholder for additional content
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  icon,
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
        <ListItemIcon>{icon}</ListItemIcon>
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
