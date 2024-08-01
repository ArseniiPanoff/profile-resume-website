import React from 'react';
import { List } from '@mui/material';
import Section from './Section';
import WorkIcon from '@mui/icons-material/Work';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import SchoolIcon from '@mui/icons-material/School';
import ExperienceItem from './ExperienceItem';
import JetBrainsJob from './Jobs/JetBrains';
import XamkGameStudio from './Jobs/XamkGameStudio';
import Mindhive from './Jobs/Mindhive';
import Admss from './Jobs/Admss';

const Experience: React.FC = () => (
  <Section id="experience" title="Experience">
    <List>
      <ExperienceItem
        icon={<WorkHistoryIcon />}
        title="Software Developer at ADMSS, Inc ( USA, Freelance work )"
        description="February 2023 – July 2023. Worked on web development with TypeScript, React, and Axios. Designed and implemented UI elements and managed project building and testing."
      >
        <Admss />
      </ExperienceItem>
      <ExperienceItem
        icon={<WorkIcon />}
        title="Software Developer at Mindhive Oy ( Mikkeli, Finland )"
        description="January 2022 – November 2022. Full-stack development using TypeScript, React, Node.js, Firebase, and MongoDB. Managed project structure and testing."
      >
        <Mindhive />
      </ExperienceItem>
      <ExperienceItem
        icon={<SchoolIcon />}
        title="Unity Game Programmer Intern at Xamk Game Studios ( Mikkeli, Finland )"
        description="May 2021 – November 2021. Developed scripts in C# using Unity, tested and debugged, created UI elements, and optimized code."
      >
        <XamkGameStudio />
      </ExperienceItem>
      <ExperienceItem
        icon={<SchoolIcon />}
        title="Android Game Development Intern at JetBrains ( Saint Petersburg, Russia )"
        description="June 2018. Developed game app logic in Kotlin."
      >
        <JetBrainsJob />
      </ExperienceItem>
    </List>
  </Section>
);

export default Experience;
