import { Job } from '../data/jobs';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL + '/api/jobs'; // Adjust this to your backend URL

export class JobService {
  // Fetch all jobs
  static async fetchJobs(): Promise<Job[]> {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch jobs');
    }
    return response.json();
  }

  // Create a new job
  static async createJob(job: Omit<Job, 'id'>): Promise<Job> {
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    if (!response.ok) {
      throw new Error('Failed to create job');
    }
    return response.json();
  }

  // Update an existing job
  static async updateJob(id: number, job: Partial<Job>): Promise<Job> {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    if (!response.ok) {
      throw new Error('Failed to update job');
    }
    return response.json();
  }

  // Delete a job
  static async deleteJob(id: number): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete job');
    }
  }
}
