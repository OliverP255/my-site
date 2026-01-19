'use client';

import { useState } from 'react';
import TypingText from './TypingText';
import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserver';

export default function Now() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [titleComplete, setTitleComplete] = useState(false);

  return (
    <div ref={ref}>
      <h2 className="text-3xl md:text-4xl font-bold mb-10 md:mb-12">
        {isVisible ? (
          <TypingText
            text="Now"
            speed={50}
            delay={0}
            onComplete={() => setTitleComplete(true)}
          />
        ) : (
          'Now'
        )}
      </h2>
      <div className="space-y-6">
        {titleComplete && (
          <>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              <TypingText
                text="[Add what you're currently focused on, what excites you, and what you're working on]"
                speed={25}
                delay={300}
              />
            </p>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              <TypingText
                text="[Add more details about your current interests, learning goals, or projects]"
                speed={25}
                delay={1500}
              />
            </p>
          </>
        )}
      </div>
    </div>
  );
}
