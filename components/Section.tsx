import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-24 md:py-40 ${className}`}>
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        {children}
      </div>
    </section>
  );
}
