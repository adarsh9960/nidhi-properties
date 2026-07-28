import React, { useState, useEffect, useRef } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 800,
  className = '',
  direction = 'up',
  distance = 24,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
            if (domRef.current) observer.unobserve(domRef.current);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [delay]);

  let transformStyle = 'translate3d(0, 0, 0)';
  if (!isVisible) {
    if (direction === 'up') transformStyle = `translate3d(0, ${distance}px, 0)`;
    if (direction === 'down') transformStyle = `translate3d(0, -${distance}px, 0)`;
    if (direction === 'left') transformStyle = `translate3d(${distance}px, 0, 0)`;
    if (direction === 'right') transformStyle = `translate3d(-${distance}px, 0, 0)`;
    if (direction === 'none') transformStyle = 'translate3d(0, 0, 0)';
  }

  return (
    <div
      ref={domRef}
      className={`transition-all ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transform: transformStyle,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
};
