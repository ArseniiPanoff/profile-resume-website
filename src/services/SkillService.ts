import { Skill, SkillCategory } from '../data/skills';

const SKILL_API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL + '/api/skills/items'; // Adjust this to your backend URL
const SKILL_CATEGORY_API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL + '/api/skills/categories'; // Adjust this to your backend URL

export class SkillService {
  // Fetch all skills
  static async fetchSkills(categoryId?: number): Promise<Skill[]> {
    const url = categoryId
      ? `${SKILL_API_BASE_URL}?categoryId=${categoryId}`
      : SKILL_API_BASE_URL;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch skills');
    }
    return response.json();
  }

  // Create a new skill
  static async createSkill(skill: Omit<Skill, 'id'>): Promise<Skill> {
    const response = await fetch(SKILL_API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(skill),
    });
    if (!response.ok) {
      throw new Error('Failed to create skill');
    }
    return response.json();
  }

  // Update an existing skill
  static async updateSkill(id: number, skill: Partial<Skill>): Promise<Skill> {
    const response = await fetch(`${SKILL_API_BASE_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(skill),
    });
    if (!response.ok) {
      throw new Error('Failed to update skill');
    }
    return response.json();
  }

  // Delete a skill
  static async deleteSkill(id: number): Promise<void> {
    const response = await fetch(`${SKILL_API_BASE_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete skill');
    }
  }
}

export class SkillCategoryService {
  // Fetch all skill categories
  static async fetchSkillCategories(): Promise<SkillCategory[]> {
    const response = await fetch(SKILL_CATEGORY_API_BASE_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch skill categories');
    }
    return response.json();
  }

  // Create a new skill category
  static async createSkillCategory(
    category: Omit<SkillCategory, 'id'>
  ): Promise<SkillCategory> {
    const response = await fetch(SKILL_CATEGORY_API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(category),
    });
    if (!response.ok) {
      throw new Error('Failed to create skill category');
    }
    return response.json();
  }

  // Update an existing skill category
  static async updateSkillCategory(
    id: number,
    category: Partial<SkillCategory>
  ): Promise<SkillCategory> {
    const response = await fetch(`${SKILL_CATEGORY_API_BASE_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(category),
    });
    if (!response.ok) {
      throw new Error('Failed to update skill category');
    }
    return response.json();
  }

  // Delete a skill category
  static async deleteSkillCategory(id: number): Promise<void> {
    const response = await fetch(`${SKILL_CATEGORY_API_BASE_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete skill category');
    }
  }
}
