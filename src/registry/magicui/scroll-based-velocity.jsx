'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * ScrollVelocityContainer
 * Provides scroll-based animations for child rows
 * Tracks scroll velocity and applies momentum-based animations
 */
export function ScrollVelocityContainer({ children, className = '', ...props }) {
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden ${className}`}
      {...props}
    >
      {typeof children === 'function'
        ? children()
        : children}
    </div>
  );
}

/**
 * ScrollVelocityRow
 * Scrolls content horizontally based on page scroll velocity
 * baseVelocity: multiplier for scroll effect (5-10 recommended)
 * direction: 1 for left-to-right, -1 for right-to-left
 */
export function ScrollVelocityRow({
  children,
  baseVelocity = 5,
  direction = 1,
  className = '',
  ...props
}) {
  const rowRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const element = rowRef.current;
    if (!element) return;

    // Track last scroll position for smooth animation
    let lastScrollY = window.scrollY;
    let animationFrameId = null;

    const handleScroll = () => {
      // Calculate offset based on scroll position
      const scrollY = window.scrollY;
      const newOffset = (scrollY * baseVelocity * direction) % 1000;
      setOffset(newOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [baseVelocity, direction]);

  return (
    <div
      ref={rowRef}
      className={`relative flex w-full items-center overflow-hidden ${className}`}
      {...props}
    >
      {/* Main row */}
      <div
        className="flex whitespace-nowrap"
        style={{
          transform: `translateX(${offset}px)`,
          transition: 'transform 0.05s linear',
        }}
      >
        {children}
      </div>

      {/* Duplicate for seamless loop */}
      <div
        className="flex whitespace-nowrap"
        style={{
          transform: `translateX(${offset}px)`,
          transition: 'transform 0.05s linear',
        }}
      >
        {children}
      </div>

      {/* Extra duplicate for coverage */}
      <div
        className="flex whitespace-nowrap"
        style={{
          transform: `translateX(${offset}px)`,
          transition: 'transform 0.05s linear',
        }}
      >
        {children}
      </div>
    </div>
  );
}

