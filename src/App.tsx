import React from 'react';
import { Box, Container, CssBaseline,ThemeProvider } from '@mui/material';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import BackToTopButton from './components/BackToTopButton';
import Home from './components/Sections/Home'; 
import About from './components/Sections/About';  
import Projects from './components/Sections/Projects';  
import Experience from './components/Sections/Experience';  
import Skills from './components/Sections/Skills';  
import Contact from './components/Sections/Contact';  
import theme from './theme';

const App: React.FC = () => {
  return (
    <React.Fragment>
       <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            backgroundImage: `url(/ikhlas-rahman-qlW7RwHZVG8-unsplash.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.9, // Adjust opacity to make it slightly visible
          }}
        />
      <Navbar />
      <Container sx={{ border:"", paddingTop: 8, minWidth:"100%" }}>
        <Layout >
          <Home />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </Layout>
      </Container>
      <BackToTopButton />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;










