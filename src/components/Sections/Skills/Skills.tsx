import React, { useEffect, useState } from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  CircularProgress,
  Alert,
} from '@mui/material';
import Section from '../Section';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Skill, SkillCategory } from '../../../data/skills';
import { SkillCategoryService } from '../../../services/SkillService';

const levelOrder: Record<Skill['level'], number> = {
  BEGINNER: 1,
  INTERMEDIATE: 2,
  ADVANCED: 3,
  PROFESSIONAL: 4,
};

const skillLevelToStars = (level: Skill['level']) => {
  const levels = { BEGINNER: 1, INTERMEDIATE: 2, ADVANCED: 3, PROFESSIONAL: 4 };
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
  const [categories, setCategories] = useState<SkillCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        setLoading(true);
        const skillCategories =
          await SkillCategoryService.fetchSkillCategories();
        setCategories(skillCategories);
      } catch {
        setError('Failed to load skills');
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <Section id="skills" title="Skills">
        <Alert severity="error">{error}</Alert>
      </Section>
    );
  }

  return (
    <Section id="skills" title="Skills">
      {categories.map((skillCategory) => (
        <Box
          key={skillCategory.id}
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
            {skillCategory.categoryName}
          </Typography>
          <List sx={{ padding: 0 }}>
            {skillCategory.items
              .sort((a, b) => levelOrder[b.level] - levelOrder[a.level])
              .map((skill) => (
                <ListItem
                  key={skill.id}
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
                        skill.description ? (
                          <Typography variant="body2" noWrap>
                            {skill.description || 'No description available'}
                          </Typography>
                        ) : null
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
