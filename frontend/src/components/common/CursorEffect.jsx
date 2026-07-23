import React, { useEffect, useState } from 'react';

export const CursorEffect = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleHover = (e) => {
      if (e.target.closest('a, button, input, select, .interactive-hover')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mouseover', handleHover);
    };
  }, []);

  return (
    <div
      className="hidden lg:block custom-cursor"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      <div
        className={`w-8 h-8 -mt-4 -ml-4 rounded-full border border-accent/40 pointer-events-none transition-all duration-200 ease-out flex items-center justify-center ${
          isHovered ? 'scale-150 bg-highlight/10 border-highlight' : 'scale-100'
        }`}
      >
        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
      </div>
    </div>
  );
};
