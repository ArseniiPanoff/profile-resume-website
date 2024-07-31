import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { Events, Link as ScrollLink, scrollSpy } from 'react-scroll';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register('begin', (to, element) => {
      console.log('begin', to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register('end', (to, element) => {
      console.log('end', to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <AppBar position="fixed">
      <Toolbar sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map((section) => (
          <ScrollLink
            key={section}
            to={section}
            smooth={true}
            duration={500}
            onSetActive={() => setActiveSection(section)}
            offset={-70}
            spy={true}
          >
            <Button
              sx={{ 
                mx: 1,
                color: activeSection === section ? 'secondary.main' : 'text.primary',
                borderBottom: activeSection === section ? '2px solid' : 'none',
                borderColor: 'secondary.main',
                '&:hover': {
                  color: 'secondary.main'
                }
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Button>
          </ScrollLink>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;



