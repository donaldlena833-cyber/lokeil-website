import React, { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  variant?: 'fade-up' | 'fade-in' | 'scale-in' | 'slide-left' | 'slide-right';
  delay?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  variant = 'fade-up',
  delay = 0,
  className = '',
}: ScrollRevealProps) {
  return (
    <div
      data-reveal={variant}
      data-delay={delay}
      className={className}
    >
      {children}
    </div>
  );
}
