// src/components/Sections/Skills.tsx
import React from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import Section from './Section';
import { SkillLevel, skills } from '../../data/skills';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const levelOrder: Record<SkillLevel, number> = {
  Beginner: 1,
  Intermediate: 2,
  Advanced: 3,
  Professional: 4,
};

const skillLevelToStars = (level: SkillLevel) => {
  const levels = { Beginner: 1, Intermediate: 2, Advanced: 3, Professional: 4 };
  const stars = [];
  for (let i = 1; i <= 4; i++) {
    stars.push(
      i <= levels[level] ? (
        <StarIcon key={i} color="primary" />
      ) : (
        <StarBorderIcon key={i} color="primary" />
      )
    );
  }
  return (
    <Box sx={{ paddingLeft: '40px' }} display="flex">
      {stars}
    </Box>
  );
};

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Skills">
      {skills.map((skillCategory, index) => (
        <Box
          key={index}
          mb={4}
          sx={{
            borderRadius: 2,
            padding: 2,
            overflow: 'hidden',
            minWidth: '70%', // Handle overflow to avoid layout issues
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{ mb: 2, textAlign: 'center' }}
          >
            {skillCategory.category}
          </Typography>
          <List sx={{ padding: 0 }}>
            {skillCategory.items
              .sort((a, b) => levelOrder[b.level] - levelOrder[a.level])
              .map((skill, idx) => (
                <ListItem
                  key={idx}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: 1,
                    borderBottom: '1px solid #ddd',
                    mb: 1,
                    minHeight: '64px', // Set a minimum height for consistent item size
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}
                  >
                    <ListItemText
                      primary={skill.name}
                      secondary={
                        <Typography variant="body2" noWrap>
                          {skill.description}
                        </Typography>
                      }
                      primaryTypographyProps={{ sx: { textAlign: 'left' } }}
                      secondaryTypographyProps={{ sx: { textAlign: 'left' } }}
                    />
                  </Box>
                  <Box sx={{ display: 'flex' }}>
                    {skillLevelToStars(skill.level)}
                  </Box>
                </ListItem>
              ))}
          </List>
        </Box>
      ))}
    </Section>
  );
};

export default Skills;
