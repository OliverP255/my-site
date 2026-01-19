'use client';

import { experiences, education } from '@/lib/experience';
import TypingText from './TypingText';
import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserver';
import { useState, useEffect } from 'react';

function ExperienceItem({ exp, index, isVisible }: { exp: typeof experiences[0]; index: number; isVisible: boolean }) {
  const [roleComplete, setRoleComplete] = useState(false);
  const [companyComplete, setCompanyComplete] = useState(false);
  const [descriptionIndex, setDescriptionIndex] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    if (roleComplete && companyComplete && descriptionIndex < exp.description.length) {
      const timer = setTimeout(() => {
        setDescriptionIndex(prev => prev + 1);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [isVisible, roleComplete, companyComplete, descriptionIndex, exp.description.length]);

  return (
    <div className="mb-12 last:mb-0">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold">
            {isVisible ? (
              <TypingText
                text={exp.role}
                speed={50}
                delay={index * 300}
                onComplete={() => setRoleComplete(true)}
              />
            ) : (
              exp.role
            )}
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {isVisible && roleComplete ? (
              <TypingText
                text={exp.company}
                speed={40}
                delay={200}
                onComplete={() => setCompanyComplete(true)}
              />
            ) : (
              exp.company
            )}
          </p>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {exp.period}
        </p>
      </div>
      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
        {exp.description.map((item, idx) => (
          <li key={idx}>
            {isVisible && descriptionIndex > idx ? (
              <TypingText
                text={item}
                speed={25}
                delay={idx * 200}
              />
            ) : descriptionIndex > idx ? (
              item
            ) : null}
          </li>
        ))}
      </ul>
      {exp.technologies && exp.technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {exp.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-gray-700 dark:text-gray-300 font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Experience() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div ref={ref}>
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        {isVisible ? (
          <TypingText text="Experience" speed={50} delay={0} />
        ) : (
          'Experience'
        )}
      </h2>
      
      {experiences.length > 0 && (
        <div className="mb-16">
          {experiences.map((exp, index) => (
            <ExperienceItem key={exp.id} exp={exp} index={index} isVisible={isVisible} />
          ))}
        </div>
      )}

      {education.length > 0 && (
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            {isVisible ? (
              <TypingText text="Education" speed={50} delay={experiences.length * 500} />
            ) : (
              'Education'
            )}
          </h3>
          {education.map((edu, index) => (
            <div key={edu.id} className="mb-8 last:mb-0">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                <div>
                  <h4 className="text-lg md:text-xl font-semibold">
                    {isVisible ? (
                      <TypingText
                        text={edu.degree}
                        speed={40}
                        delay={experiences.length * 500 + index * 300 + 300}
                      />
                    ) : (
                      edu.degree
                    )}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    {isVisible ? (
                      <TypingText
                        text={edu.institution}
                        speed={35}
                        delay={experiences.length * 500 + index * 300 + 500}
                      />
                    ) : (
                      edu.institution
                    )}
                  </p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {edu.period}
                </p>
              </div>
              {edu.description && (
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  {isVisible ? (
                    <TypingText
                      text={edu.description}
                      speed={30}
                      delay={experiences.length * 500 + index * 300 + 700}
                    />
                  ) : (
                    edu.description
                  )}
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
