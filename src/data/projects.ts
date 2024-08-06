export interface Project {
  id: number;
  title: string;
  description: string;
  tasksCompleted?: string[];
  contacts?: { name: string; link: string }[];
  pdf?: { buttonDesc: string; pdfLink: string }[];
  projectLink?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'AI for Starcraft II',
    description:
      'General idea of the project: develop a method that can autonomously identify and implement game strategies in StarCraft 2.' +
      'Collected game data serves as a basis to create and train a neural network that implements a game strategy based on player decisions.',
    tasksCompleted: [
      'Research on using the pandas and numpy libraries in python for data analysis',
      'Selection of the kernel-k-means as clustering method for the given goal ',
      'Literature Research on kernel-k-means ',
      'Development of a machine learning pipeline for the given problem',
      'Testing of kernel-k-means on two setups with different base-features',
    ],
    image: '/SC2_Image.png',
    pdf: [
      {
        buttonDesc: 'Project Evaluation',
        pdfLink: '/testimonials/Project_Evaluation_Arsenii_Panov.pdf',
      },
    ],
  },
];
