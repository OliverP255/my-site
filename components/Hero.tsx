'use client';

import TypingText from './TypingText';
import { useState } from 'react';

export default function Hero() {
  const [nameComplete, setNameComplete] = useState(false);
  const [taglineComplete, setTaglineComplete] = useState(false);

  return (
    <div className="min-h-screen flex flex-col justify-center">
      <h1 className="text-5xl md:text-7xl font-bold mb-8 md:mb-12 leading-tight">
        <TypingText
          text="Oliver Pryce"
          speed={80}
          delay={200}
          onComplete={() => setNameComplete(true)}
          className="block"
          showCursor={true}
        />
      </h1>
      <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 md:mb-10 max-w-2xl leading-relaxed">
        <TypingText
          text="Building software solutions. [Add your tagline here - e.g., 'Full-stack developer turning ideas into scalable products']"
          speed={30}
          delay={nameComplete ? 500 : 2000}
          onComplete={() => setTaglineComplete(true)}
          showCursor={false}
        />
      </p>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
        {taglineComplete && (
          <TypingText
            text="[Add a brief introduction about yourself, your background, and what you do]"
            speed={25}
            delay={800}
            showCursor={false}
          />
        )}
      </p>
    </div>
  );
}
