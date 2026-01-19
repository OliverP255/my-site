export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  technologies?: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export const experiences: Experience[] = [
  // Add your work experience here
  // Example:
  // {
  //   id: 'exp-1',
  //   role: 'Software Engineer',
  //   company: 'Company Name',
  //   period: '2020 - Present',
  //   description: [
  //     'Built and maintained web applications',
  //     'Collaborated with cross-functional teams',
  //   ],
  //   technologies: ['React', 'Node.js', 'TypeScript'],
  // },
];

export const education: Education[] = [
  // Add your education here
  // Example:
  // {
  //   id: 'edu-1',
  //   degree: 'Bachelor of Science in Computer Science',
  //   institution: 'University Name',
  //   period: '2016 - 2020',
  // },
];
