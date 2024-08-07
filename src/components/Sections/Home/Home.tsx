import React from 'react';
import { Button, Box, useTheme } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import Section from '../Section';
import ImageTextSection from '../ImageTextSection';

const Home: React.FC = () => {
  const theme = useTheme();

  return (
    <Section id="home" title="">
      <Box sx={{ paddingTop: theme.spacing(8) }}>
        <ImageTextSection
          imageSrc="/arsenii.jpg"
          title="Hello, I'm Arsenii!"
          text="Welcome to my profile website! I'm excited to share my professional journey and skills with you through this site.
           Here, you'll find detailed information about my background, experiences, and the projects I've been involved in."
        />
      </Box>
      <Box sx={{ textAlign: 'center', marginTop: theme.spacing(4) }}>
        <ScrollLink to="experience" smooth={true} duration={500} offset={-64}>
          <Button variant="contained" color="primary">
            See My Work Experience
          </Button>
        </ScrollLink>
      </Box>
    </Section>
  );
};

export default Home;
