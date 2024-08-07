export type JobType = 'internship' | 'freelance' | 'full-time' | 'part-time';

export interface Job {
  id: number;
  jobType: JobType;
  title: string;
  description: string;
  tasks: string[];
  completedProjects?: string[];
  contacts?: { name: string; link: string }[];
  pdf?: { buttonDesc: string; pdfLink: string };
  projectLink?: string;
}

export const jobs: Job[] = [
  {
    id: 1,
    jobType: 'freelance',
    title: 'Software Developer at ADMSS, Inc ( USA, Freelance work )',
    description:
      'February 2023 – July 2023. Worked on web development with TypeScript, React, and Axios. Designed and implemented UI elements and managed project building and testing.',
    tasks: [
      'Web development using TypeScript, React, and Axios',
      'Designing and implementing UI elements and their behavior',
      'Structuring the project and overseeing project building, testing, and presentation',
    ],
    completedProjects: [
      'Implemented a web service capable of managing internal functions from the browser to control microservices and users.',
    ],
    contacts: [
      {
        name: 'Yuri Nagibovich',
        link: 'https://www.linkedin.com/in/yuri-nagibovich/',
      },
    ],
    pdf: {
      buttonDesc: 'View Approval',
      pdfLink: '/testimonials/Freelance_Approval.pdf',
    },
  },
  {
    id: 2,
    jobType: 'full-time',
    title: 'Software Developer at Mindhive Oy ( Mikkeli, Finland )',
    description:
      'January 2022 – November 2022. Full-stack development using TypeScript, React, Node.js, Firebase, and MongoDB. Managed project structure and testing.',
    tasks: [
      'Full stack development on TypeScript using React, Node.js, Firebase, MongoDB',
      'Creating UI elements and setting up their behavior on the web page and interaction with back-end',
      'Design of project structure',
      'Project building and testing',
      'Task management',
    ],
    projectLink: 'https://aavistus.app',
    contacts: [
      {
        name: 'Ulisses Camargo',
        link: 'https://www.linkedin.com/in/ulissescamargo/',
      },
      {
        name: 'Dmitrii Slepnev',
        link: 'https://www.linkedin.com/in/dmitrii-slepnev/',
      },
    ],
  },
  {
    id: 3,
    jobType: 'internship',
    title:
      'Unity Game Programmer Intern at Xamk Game Studios ( Mikkeli, Finland )',
    description:
      'May 2021 – November 2021. Developed scripts in C# using Unity, tested and debugged, created UI elements, and optimized code.',
    tasks: [
      'Creation and modification of scripts in C# using Unity',
      'Testing, debugging and error fixing',
      'Creation of elements of user interface',
      'Development of game structure',
      'Optimization of code',
    ],
    projectLink:
      'https://play.google.com/store/apps/details?id=com.XamkGamePortfolio.CopsAndRobbers',
    completedProjects: [
      '“Cops and robbers” - A fully completed educational/entertainment game for children of ages 6-10. Available at Google Play store.',
      '“Coding game” - A demo version of an educational game for children of ages 8-12, which teaches them to code and logical thinking.',
    ],
  },
  {
    id: 4,
    jobType: 'internship',
    title:
      'Android Game Development Intern at JetBrains ( Saint Petersburg, Russia )',
    description: 'June 2018. Developed game app logic in Kotlin.',
    tasks: [
      'Development and planning of a game app logic',
      'Creation of code in Kotlin',
    ],
    projectLink: 'https://github.com/SVDouble/android-practice-18-app',
    completedProjects: [
      '“GameStorm” - A mobile app with a set of simple games on Kotlin. Available at GitHub.',
    ],
  },
];
