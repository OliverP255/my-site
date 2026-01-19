export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  award?: string;
  imageUrl?: string;
}

export const projects: Project[] = [
  // Add your projects here
  // Example:
  // {
  //   id: 'project-1',
  //   name: 'Project Name',
  //   description: 'Brief description of the project',
  //   technologies: ['React', 'TypeScript', 'Next.js'],
  //   githubUrl: 'https://github.com/username/project',
  //   liveUrl: 'https://project-demo.com',
  //   award: '1st place Hackathon Name',
  // },
];
