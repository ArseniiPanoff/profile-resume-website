import { Project } from '../data/projects';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL + '/api/projects';

export class ProjectService {
  // Fetch all projects
  static async fetchProjects(): Promise<Project[]> {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }
    return response.json();
  }

  // Create a new project
  static async createProject(project: Omit<Project, 'id'>): Promise<Project> {
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    });
    if (!response.ok) {
      throw new Error('Failed to create project');
    }
    return response.json();
  }

  // Update an existing project
  static async updateProject(
    id: number,
    project: Partial<Project>
  ): Promise<Project> {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    });
    if (!response.ok) {
      throw new Error('Failed to update project');
    }
    return response.json();
  }

  // Delete a project
  static async deleteProject(id: number): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete project');
    }
  }
}
