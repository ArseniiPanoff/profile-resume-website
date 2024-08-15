export interface Skill {
  id?: number;
  name: string;
  description?: string;
  level: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED' | 'PROFESSIONAL';
}

export interface SkillCategory {
  id?: number;
  categoryName: string;
  items: Skill[];
}
