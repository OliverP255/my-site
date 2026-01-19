'use client';

import { useState } from 'react';
import TypingText from './TypingText';
import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserver';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // You can integrate with Formspree, EmailJS, or your own API here
    // For now, this is a placeholder
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div ref={ref}>
      <h2 className="text-3xl md:text-4xl font-bold mb-12 md:mb-16">
        {isVisible ? (
          <TypingText text="Contact" speed={50} delay={0} />
        ) : (
          'Contact'
        )}
      </h2>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Reach out to me at{' '}
            <a
              href="mailto:[your-email@example.com]"
              className="relative inline-block hover:scale-105 transition-transform duration-300 group"
            >
              <span className="underline">[your-email@example.com]</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 dark:bg-gray-100 transition-all duration-300 group-hover:w-full" />
            </a>
            {' '}or connect on:
          </p>
          <div className="flex flex-col gap-4">
            <a
              href="https://linkedin.com/in/[your-profile]"
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300 inline-block hover:scale-105 group w-fit"
            >
              LinkedIn
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 dark:bg-gray-100 transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="https://github.com/[your-username]"
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300 inline-block hover:scale-105 group w-fit"
            >
              GitHub
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 dark:bg-gray-100 transition-all duration-300 group-hover:w-full" />
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:border-transparent transition-all duration-300"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:border-transparent transition-all duration-300"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:border-transparent transition-all duration-300 resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-black rounded hover:opacity-80 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          {submitStatus === 'success' && (
            <p className="text-green-600 dark:text-green-400 text-sm">
              Message sent successfully!
            </p>
          )}
          {submitStatus === 'error' && (
            <p className="text-red-600 dark:text-red-400 text-sm">
              Failed to send message. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
