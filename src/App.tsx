import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container } from '@mui/material';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Container maxWidth="md" style={{ display: 'flex', justifyContent: 'space-around' }}>
              <Button color="inherit" component={Link} to="/">Home</Button>
              <Button color="inherit" component={Link} to="/about">About</Button>
              <Button color="inherit" component={Link} to="/projects">Projects</Button>
              <Button color="inherit" component={Link} to="/contact">Contact</Button>
            </Container>
          </Toolbar>
        </AppBar>
        <Container maxWidth="md" style={{ marginTop: '2em' }}>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;

