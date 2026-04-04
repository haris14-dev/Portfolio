import { useEffect, useState } from 'react';

/**
 * Meteors Component
 * Renders animated falling meteors effect
 * Moves slowly vertically from top to bottom across full screen
 * 
 * PERFORMANCE:
 * - Efficiently rendered with CSS animations
 * - Uses DOM elements with CSS animations for rendering
 * - Smooth 60 FPS performance
 */
export const Meteors = ({ number = 30 }) => {
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    // Create meteor positions - distribute across screen width, fall from top to bottom
    const meteorArray = Array.from({ length: number }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`, // Random horizontal position across full width
      delay: `${Math.random() * 4}s`, // 0-4s stagger
      duration: `${Math.random() * (20 - 12) + 12}s`, // 12-20 seconds (a bit faster)
    }));
    setMeteors(meteorArray);
  }, [number]);

  return (
    <>
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="absolute pointer-events-none"
          style={{
            left: meteor.left,
            top: '-100px',
            width: '2px',
            height: '300px',
            background: `linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1))`,
            animation: `meteor-fall ${meteor.duration} linear ${meteor.delay} infinite`,
            opacity: 0.8,
          }}
        />
      ))}
      <style>{`
        @keyframes meteor-fall {
          to {
            transform: translateY(200vh);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

