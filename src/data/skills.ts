export type SkillLevel =
  | 'Beginner'
  | 'Intermediate'
  | 'Advanced'
  | 'Professional';

export interface Skill {
  category: string;
  items: {
    name: string;
    description?: string;
    level: SkillLevel;
    icon?: string;
  }[];
}

export const skills: Skill[] = [
  {
    category: 'Programming Languages',
    items: [
      {
        name: 'TypeScript',
        description: 'Mainly for web development',
        level: 'Professional',
        icon: 'typescript-icon',
      },
      {
        name: 'Python',
        description:
          'For services development, such as Discord bots and small AI projects',
        level: 'Intermediate',
        icon: 'python-icon',
      },
      {
        name: 'C#',
        description: 'For both web and game development',
        level: 'Advanced',
        icon: 'csharp-icon',
      },
      {
        name: 'Kotlin',
        description:
          'For Spring Boot RESTful applications or mobile development',
        level: 'Intermediate',
        icon: 'kotlin-icon',
      },
    ],
  },
  {
    category: 'Frameworks, Tools, and Environments',
    items: [
      { name: 'React & Node.js', level: 'Professional', icon: 'react-icon' },
      {
        name: 'Spring Boot & Hibernate',
        level: 'Intermediate',
        icon: 'spring-icon',
      },
      {
        name: 'MySQL, Firebase & MongoDB',
        level: 'Intermediate',
        icon: 'database-icon',
      },
      { name: 'Git & GitHub', level: 'Professional', icon: 'git-icon' },
      { name: 'Jupyter Notebook', level: 'Beginner', icon: 'jupyter-icon' },
      {
        name: 'Android Studio, Rider, Visual Studio & VS Code',
        level: 'Advanced',
        icon: 'ide-icon',
      },
    ],
  },
];
