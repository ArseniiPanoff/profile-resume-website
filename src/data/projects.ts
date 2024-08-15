export interface Project {
  id: number;
  title: string;
  description: string;
  tasksCompleted?: string[];
  contacts?: { [key: string]: string };
  pdf?: string;
  projectLink?: string;
  image?: string;
}
