import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const frameRef = useRef(null);
  
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      const target = document.elementFromPoint(e.clientX, e.clientY);
      if (target) {
        const isClickable = target.closest('a, button, [role="button"], input, textarea, select, .clickable');
        setIsHovered(!!isClickable);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    const animate = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0px) translate(-50%, -50%)`;
      }

      if (ringRef.current) {
        const scale = isHovered ? 1.15 : 1.0;
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0px) translate(-50%, -50%) scale(${scale})`;
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [isHovered, isVisible]);

  if (typeof window === 'undefined') return null;

  return (
    <div
      className={`custom-cursor-root ${isVisible ? 'cursor-visible' : 'cursor-hidden'} ${isHovered ? 'cursor-hover' : ''}`}
      aria-hidden="true"
    >
      {/* Outer Ring */}
      <div ref={ringRef} className="custom-cursor-ring">
        <svg viewBox="0 0 52 52" width="50" height="50">
          <circle
            cx="26"
            cy="26"
            r="23"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            className="cursor-ring-circle"
          />
        </svg>
      </div>

      {/* Inner Dot */}
      <div ref={dotRef} className="custom-cursor-dot">
        <svg viewBox="0 0 16 16" width="10" height="10">
          <circle
            cx="8"
            cy="8"
            r="4"
            fill="#ffffff"
            className="cursor-dot-circle"
          />
        </svg>
      </div>
    </div>
  );
}
