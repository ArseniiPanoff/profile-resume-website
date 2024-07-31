import React from 'react';
import { List } from '@mui/material';
import Section from './Section';
import WorkIcon from '@mui/icons-material/Work';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import SchoolIcon from '@mui/icons-material/School';
import ExperienceItem from './ExperienceItem';

const Experience: React.FC = () => (
  <Section id="experience" title="Experience">
    <List>
      <ExperienceItem
        icon={<WorkHistoryIcon />}
        title="Software Developer at ADMSS, Inc"
        description="February 2023 – July 2023. Worked on web development with TypeScript, React, and Axios. Designed and implemented UI elements and managed project building and testing."
      >
        {/* Placeholder content */}
        <div>
          <p>Additional details about this job. This could include specific achievements, technologies used, or challenges overcome.</p>
          {/* Add images, links, texts, etc. here */}
        </div>
      </ExperienceItem>
      <ExperienceItem
        icon={<WorkIcon />}
        title="Software Developer at Mindhive Oy"
        description="January 2022 – November 2022. Full-stack development using TypeScript, React, Node.js, Firebase, and MongoDB. Managed project structure and testing."
      >
        {/* Placeholder content */}
        <div>
          <p>Additional details about this job, including project contributions, team collaboration, and key outcomes.</p>
          {/* Add images, links, texts, etc. here */}
        </div>
      </ExperienceItem>
      <ExperienceItem
        icon={<SchoolIcon />}
        title="Unity Game Programmer Intern at Xamk Game Studios"
        description="May 2021 – November 2021. Developed scripts in C# using Unity, tested and debugged, created UI elements, and optimized code."
      >
        {/* Placeholder content */}
        <div>
          <p>Details about game development, including specific tasks performed, tools used, and the impact of your work.</p>
          {/* Add images, links, texts, etc. here */}
        </div>
      </ExperienceItem>
      <ExperienceItem
        icon={<SchoolIcon />}
        title="Android Game Development Intern at JetBrains"
        description="June 2018. Developed game app logic in Kotlin."
      >
        {/* Placeholder content */}
        <div>
          <p>Additional information about the intern role, such as skills gained, significant projects, and learning outcomes.</p>
          {/* Add images, links, texts, etc. here */}
        </div>
      </ExperienceItem>
    </List>
  </Section>
);

export default Experience;




