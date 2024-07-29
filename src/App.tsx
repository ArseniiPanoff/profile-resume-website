import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container, Grid } from '@mui/material';
import { Link as ScrollLink, Element } from 'react-scroll';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';
import Experience from './components/Experience';
import Skills from './components/Skills';

const APP_BAR_HEIGHT = 64; // Adjust this based on your AppBar height

function App() {
  return (
    <Router>
      <div className="App">
        <AppBar position="sticky">
          <Toolbar>
            <Container maxWidth="lg">
              <Grid container justifyContent="center" alignItems="center" spacing={2}>
                <Grid item>
                  <ScrollLink to="home" smooth={true} duration={500} offset={-APP_BAR_HEIGHT}>
                    <Button color="inherit">Home</Button>
                  </ScrollLink>
                </Grid>
                <Grid item>
                  <ScrollLink to="about" smooth={true} duration={500} offset={-APP_BAR_HEIGHT}>
                    <Button color="inherit">About</Button>
                  </ScrollLink>
                </Grid>
                <Grid item>
                  <ScrollLink to="projects" smooth={true} duration={500} offset={-APP_BAR_HEIGHT}>
                    <Button color="inherit">Projects</Button>
                  </ScrollLink>
                </Grid>
                <Grid item>
                  <ScrollLink to="experience" smooth={true} duration={500} offset={-APP_BAR_HEIGHT}>
                    <Button color="inherit">Experience</Button>
                  </ScrollLink>
                </Grid>
                <Grid item>
                  <ScrollLink to="skills" smooth={true} duration={500} offset={-APP_BAR_HEIGHT}>
                    <Button color="inherit">Skills</Button>
                  </ScrollLink>
                </Grid>
                <Grid item>
                  <ScrollLink to="contact" smooth={true} duration={500} offset={-APP_BAR_HEIGHT}>
                    <Button color="inherit">Contact</Button>
                  </ScrollLink>
                </Grid>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
        <Container maxWidth="lg" style={{ marginTop: '2em' }}>
          <Element name="home">
            <Home />
          </Element>
          <Element name="about">
            <About />
          </Element>
          <Element name="projects">
            <Projects />
          </Element>
          <Element name="experience">
            <Experience />
          </Element>
          <Element name="skills">
            <Skills />
          </Element>
          <Element name="contact">
            <Contact />
          </Element>
        </Container>
      </div>
    </Router>
  );
}

export default App;









