import React from 'react';
import { Button } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import Section from './Section';
import ImageTextSection from './ImageTextSection';

function Home() {
  return (
    <Section id="home" title="">
      <div style={{ paddingTop: '70px' }}>
        <ImageTextSection
          imageSrc="/arsenii.jpg"
          title="Hello, I'm Arsenii!"
          text="Welcome to my profile website!
         I'm excited to share my professional journey and skills with you through this site.
          Here, you'll find detailed information about my background, experiences, and the projects I've been involved in."
        />
      </div>
      <div style={{ padding: '15px' }}>
        <ScrollLink to="experience" smooth={true} duration={500} offset={-64}>
          <Button variant="contained" color="primary">
            See My Work Experience
          </Button>
        </ScrollLink>
      </div>
    </Section>
  );
}

export default Home;
