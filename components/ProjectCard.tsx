import { Project } from '@/lib/projects';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border-b border-gray-200 dark:border-gray-800 py-8 first:pt-0 last:border-b-0 hover-lift">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-start gap-3 mb-2">
            <h3 className="text-xl md:text-2xl font-semibold">
              {project.name}
            </h3>
            {project.award && (
              <span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
                {project.award}
              </span>
            )}
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4 font-mono text-sm leading-relaxed bg-gray-50 dark:bg-gray-900/50 px-4 py-3 rounded border-l-2 border-gray-300 dark:border-gray-700">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-gray-700 dark:text-gray-300 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700 font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-4 md:flex-col">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300 inline-block hover:scale-105 group"
            >
              GitHub
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 dark:bg-gray-100 transition-all duration-300 group-hover:w-full" />
            </Link>
          )}
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300 inline-block hover:scale-105 group"
            >
              Live
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 dark:bg-gray-100 transition-all duration-300 group-hover:w-full" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
