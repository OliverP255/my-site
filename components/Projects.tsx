import { projects } from '@/lib/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  if (projects.length === 0) {
    return (
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Projects</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Projects will be displayed here. Add your projects in{' '}
          <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">
            lib/projects.ts
          </code>
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Projects</h2>
      <div className="space-y-0">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
