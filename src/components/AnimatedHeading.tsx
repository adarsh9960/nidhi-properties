import React, { useState, useEffect } from 'react';

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  initialDelay?: number; // ms
  charDelay?: number;    // ms
}

export const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  text,
  className = '',
  style = {},
  initialDelay = 200,
  charDelay = 30,
}) => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, initialDelay);

    return () => clearTimeout(timer);
  }, [initialDelay]);

  const lines = text.split('\n');

  // Compute character delays according to formula:
  // (lineIndex * lineLength * charDelay) + (charIndex * charDelay)
  // where lineLength is the length of the first line (or preceding line length)
  const line0Length = lines[0]?.length || 0;

  return (
    <h1 className={className} style={{ letterSpacing: '-0.04em', ...style }}>
      {lines.map((line, lineIndex) => {
        const lineLength = line0Length;
        const lineBaseDelay = lineIndex * lineLength * charDelay;

        return (
          <span key={lineIndex} className="block">
            {line.split('').map((char, charIndex) => {
              const delay = lineBaseDelay + (charIndex * charDelay);

              return (
                <span
                  key={charIndex}
                  className="inline-block transition-all duration-500 ease-out"
                  style={{
                    opacity: isAnimated ? 1 : 0,
                    transform: isAnimated ? 'translateX(0)' : 'translateX(-18px)',
                    transitionProperty: 'opacity, transform',
                    transitionDuration: '500ms',
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
    </h1>
  );
};
