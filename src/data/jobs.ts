export type JobType = 'internship' | 'freelance' | 'full-time' | 'part-time';

export interface Job {
  id: number;
  jobType: JobType;
  title: string;
  description: string;
  tasks: string[];
  completedProjects?: string[];
  contacts?: { [key: string]: string };
  pdf?: string;
  projectLink?: string;
}
