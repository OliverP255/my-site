'use client';

import { projects } from '@/lib/projects';
import ProjectCard from './ProjectCard';
import TypingText from './TypingText';
import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserver';

export default function Projects() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  if (projects.length === 0) {
    return (
      <div ref={ref}>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 md:mb-16">
          {isVisible ? (
            <TypingText text="Projects" speed={50} delay={0} />
          ) : (
            'Projects'
          )}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
          Projects will be displayed here. Add your projects in{' '}
          <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">
            lib/projects.ts
          </code>
        </p>
      </div>
    );
  }

  return (
    <div ref={ref}>
      <h2 className="text-3xl md:text-4xl font-bold mb-12 md:mb-16">
        {isVisible ? (
          <TypingText text="Projects" speed={50} delay={0} />
        ) : (
          'Projects'
        )}
      </h2>
      <div className="space-y-0">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
