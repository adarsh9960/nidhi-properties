import React, { useState, useEffect, useRef } from 'react';

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  initialDelay?: number; // ms
  charDelay?: number;    // ms
  as?: 'h1' | 'h2' | 'h3';
}

export const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  text,
  className = '',
  style = {},
  initialDelay = 100,
  charDelay = 25,
  as: Component = 'h1',
}) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const domRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsAnimated(true);
            }, initialDelay);
            if (domRef.current) observer.unobserve(domRef.current);
          }
        });
      },
      { threshold: 0.15 }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [initialDelay]);

  const lines = text.split('\n');
  const line0Length = lines[0]?.length || 0;

  return (
    <Component ref={domRef} className={className} style={{ letterSpacing: '-0.03em', ...style }}>
      {lines.map((line, lineIndex) => {
        const lineBaseDelay = lineIndex * line0Length * charDelay;

        return (
          <span key={lineIndex} className="block">
            {line.split('').map((char, charIndex) => {
              const delay = lineBaseDelay + (charIndex * charDelay);

              return (
                <span
                  key={charIndex}
                  className="inline-block transition-all ease-out"
                  style={{
                    opacity: isAnimated ? 1 : 0,
                    transform: isAnimated ? 'translateX(0) translateY(0)' : 'translateX(-12px) translateY(4px)',
                    transitionDuration: '450ms',
                    transitionDelay: `${delay}ms`,
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              );
            })}
          </span>
        );
      })}
    </Component>
  );
};
