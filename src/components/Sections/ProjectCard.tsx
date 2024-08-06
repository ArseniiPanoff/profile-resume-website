import React, { useState } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Modal,
  Box,
  List,
  ListItem,
  Link,
  Button,
} from '@mui/material';
import { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card onClick={handleOpen}>
        <CardActionArea>
          {project.image && (
            <CardMedia
              component="img"
              alt={project.title}
              height="140"
              image={project.image}
            />
          )}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {project.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {project.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 600,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          {project.image && (
            <CardMedia
              component="img"
              alt={project.title}
              height="250"
              image={project.image}
            />
          )}
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ mt: 2 }}
          >
            {project.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {project.description}
          </Typography>
          {project.tasksCompleted && (
            <>
              <Typography sx={{ mt: 2 }}>Tasks Completed:</Typography>
              <List>
                {project.tasksCompleted.map((task, index) => (
                  <ListItem key={index}>• {task}</ListItem>
                ))}
              </List>
            </>
          )}
          {project.contacts && (
            <>
              <Typography sx={{ mt: 2 }}>Contacts:</Typography>
              <List>
                {project.contacts.map((contact, index) => (
                  <ListItem key={index}>
                    <Link href={contact.link}>{contact.name}</Link>
                  </ListItem>
                ))}
              </List>
            </>
          )}
          {project.pdf && (
            <List>
              {project.pdf.map((pdf, index) => (
                <ListItem key={index}>
                  <Button
                    sx={{ mt: 2 }}
                    variant="contained"
                    href={pdf.pdfLink}
                    target="_blank"
                  >
                    {pdf.buttonDesc}
                  </Button>
                </ListItem>
              ))}
            </List>
          )}
          {project.projectLink && (
            <Button
              sx={{ mt: 2 }}
              variant="contained"
              href={project.projectLink}
              target="_blank"
            >
              View Project
            </Button>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default ProjectCard;
