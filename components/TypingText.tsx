'use client';

import { useState, useEffect, useRef } from 'react';
import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserver';

interface TypingTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
  cursor?: string;
  showCursor?: boolean;
}

export default function TypingText({
  text,
  speed = 30,
  delay = 0,
  className = '',
  onComplete,
  cursor = '|',
  showCursor: shouldShowCursor = false,
}: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const cursorRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Blinking cursor animation (only if cursor should be shown)
    if (shouldShowCursor) {
      cursorRef.current = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 530);
    } else {
      setShowCursor(false);
    }

    return () => {
      if (cursorRef.current) {
        clearInterval(cursorRef.current);
      }
    };
  }, [shouldShowCursor]);

  useEffect(() => {
    if (!isIntersecting || displayedText.length >= text.length) {
      if (displayedText.length >= text.length && onComplete) {
        onComplete();
      }
      return;
    }

    // Initial delay
    if (!isTyping && delay > 0) {
      const delayTimeout = setTimeout(() => {
        setIsTyping(true);
      }, delay);
      return () => clearTimeout(delayTimeout);
    }

    if (!isTyping) {
      setIsTyping(true);
    }

    // Typing animation
    timeoutRef.current = setTimeout(() => {
      setDisplayedText(text.slice(0, displayedText.length + 1));
    }, speed);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isIntersecting, displayedText, text, speed, delay, isTyping, onComplete]);

  // Check if typing is complete
  useEffect(() => {
    if (displayedText.length >= text.length && isTyping) {
      setIsTyping(false);
      if (onComplete) {
        onComplete();
      }
    }
  }, [displayedText, text.length, isTyping, onComplete]);

  return (
    <span ref={ref} className={className}>
      {displayedText}
      {shouldShowCursor && (
        <span
          className={`inline-block ml-0.5 ${
            showCursor ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-150`}
        >
          {cursor}
        </span>
      )}
    </span>
  );
}
