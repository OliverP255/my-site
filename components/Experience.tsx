import { experiences, education } from '@/lib/experience';

export default function Experience() {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Experience</h2>
      
      {experiences.length > 0 && (
        <div className="mb-16">
          {experiences.map((exp) => (
            <div key={exp.id} className="mb-12 last:mb-0">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    {exp.company}
                  </p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {exp.period}
                </p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                {exp.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              {exp.technologies && exp.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {education.length > 0 && (
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-8">Education</h3>
          {education.map((edu) => (
            <div key={edu.id} className="mb-8 last:mb-0">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                <div>
                  <h4 className="text-lg md:text-xl font-semibold">
                    {edu.degree}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    {edu.institution}
                  </p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {edu.period}
                </p>
              </div>
              {edu.description && (
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  {edu.description}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {experiences.length === 0 && education.length === 0 && (
        <p className="text-gray-600 dark:text-gray-400">
          Experience and education will be displayed here. Add your information in{' '}
          <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">
            lib/experience.ts
          </code>
        </p>
      )}
    </div>
  );
}
