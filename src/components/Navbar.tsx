import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link as ScrollLink, scrollSpy } from 'react-scroll';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    // Update scrollSpy to make sure it works
    scrollSpy.update();

    return () => {
      // Cleanup if necessary
    };
  }, []);

  return (
    <AppBar position="fixed">
      <Toolbar
        sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
      >
        {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map(
          (section) => (
            <ScrollLink
              key={section}
              to={section}
              smooth={true}
              duration={800}
              offset={-70}
              spy={true}
              onSetActive={() => setActiveSection(section)}
            >
              <Button
                sx={{
                  mx: 1,
                  color:
                    activeSection === section
                      ? 'secondary.main'
                      : 'text.primary',
                  borderBottom:
                    activeSection === section ? '2px solid' : 'none',
                  borderColor: 'secondary.main',
                  '&:hover': {
                    color: 'secondary.main',
                  },
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Button>
            </ScrollLink>
          )
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
