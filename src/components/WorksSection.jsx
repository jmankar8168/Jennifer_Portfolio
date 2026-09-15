import React, { useState, useEffect, useRef } from 'react';

export default function WorksSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isHoveringSection, setIsHoveringSection] = useState(false);
  const sectionRef = useRef(null);
  
  const mousePos = useRef({ x: 0, y: 0 });
  const previewPos = useRef({ x: 0, y: 0 });
  const previewRef = useRef(null);
  const frameRef = useRef(null);

  // jenni's Work Categories with associated project assets & links
  const categories = [
    {
      id: 'cat-1',
      title: 'BRANDING & ART DIRECTION',
      subtitle: 'Brand Systems • Visual Identity',
      image: '/project-saas.jpg',
      link: 'https://storybook-static-mauve-pi.vercel.app',
      aspectRatio: '4/3'
    },
    {
      id: 'cat-2',
      title: 'PUBLICATION DESIGN',
      subtitle: 'Editorial • Books & Print',
      image: '/project-ai.jpg',
      link: 'https://jmankar8168.github.io/Jennifer_Portfolio/',
      aspectRatio: '3/4'
    },
    {
      id: 'cat-3',
      title: 'MOTION GRAPHICS',
      subtitle: '3D Motion • Kinetic Type',
      image: '/project-saas.jpg',
      link: 'https://github.com/jmankar8168/Jennifer_Portfolio',
      aspectRatio: '16/9'
    },
    {
      id: 'cat-4',
      title: 'PACKAGING DESIGN',
      subtitle: 'Physical Goods • Sustainable Packaging',
      image: '/project-ai.jpg',
      link: 'https://storybook-static-mauve-pi.vercel.app',
      aspectRatio: '1/1'
    },
    {
      id: 'cat-5',
      title: 'ART & ILLUSTRATION',
      subtitle: 'Digital Canvas • Character Design',
      image: '/project-saas.jpg',
      link: 'https://jmankar8168.github.io/Jennifer_Portfolio/',
      aspectRatio: '4/3'
    }
  ];

  // Handle smooth lerp position for floating thumbnail preview
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      
      // Calculate mouse position relative to section bounds
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mousePos.current = { x, y };

      // Set initial lerp position on first move
      if (previewPos.current.x === 0 && previewPos.current.y === 0) {
        previewPos.current = { x, y };
      }
    };

    const animate = () => {
      // Lerp preview position towards mouse position (0.15 factor for tactile lag)
      previewPos.current.x += (mousePos.current.x - previewPos.current.x) * 0.15;
      previewPos.current.y += (mousePos.current.y - previewPos.current.y) * 0.15;

      if (previewRef.current) {
        // Position offset: place thumbnail slightly to bottom-right of cursor
        const offsetX = 40;
        const offsetY = 20;

        // Viewport boundary collision prevention
        const sectionWidth = sectionRef.current ? sectionRef.current.offsetWidth : window.innerWidth;
        const finalX = Math.min(previewPos.current.x + offsetX, sectionWidth - 240);
        const finalY = previewPos.current.y + offsetY;

        previewRef.current.style.transform = `translate3d(${finalX}px, ${finalY}px, 0px)`;
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const marqueeText = [
    'ILLUSTRATION.', 'WEB DESIGN.', 'PACKAGING DESIGN.', 'BRANDING.', 'MOTION.', 'ART DIRECTION.'
  ];

  return (
    <section
      id="works"
      ref={sectionRef}
      className="works-typographic-section"
      onMouseEnter={() => setIsHoveringSection(true)}
      onMouseLeave={() => setIsHoveringSection(false)}
    >
      {/* ── LAYER 10: Oversized Section Heading (WORKS) ── */}
      <div className="works-editorial-heading">
        <h2>(WORKS)</h2>
      </div>

      {/* ── LAYER 20: Rotated Continuous Moving Diagonal Marquee Ribbon ── */}
      <div className="diagonal-marquee-ribbon">
        <div className="marquee-track">
          {Array(4).fill(marqueeText).flat().map((item, idx) => (
            <span key={idx} className="marquee-item">
              <span className="marquee-word">{item}</span>
              <span className="marquee-star">★</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── LAYER 30: Central Typographic Category List ── */}
      <div className="works-category-container">
        <div className="works-category-list">
          {categories.map((cat, idx) => {
            const isActive = activeCategory === idx;
            return (
              <a
                key={cat.id}
                href={cat.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`works-category-item ${isActive ? 'is-active' : 'is-inactive'}`}
                onMouseEnter={() => setActiveCategory(idx)}
                onClick={(e) => {
                  // If on touch device and not active, first tap activates preview
                  if ('ontouchstart' in window && !isActive) {
                    e.preventDefault();
                    setActiveCategory(idx);
                  }
                }}
              >
                <span className="category-title">{cat.title}</span>
                <span className="category-arrow">↗</span>
              </a>
            );
          })}
        </div>
      </div>

      {/* ── LAYER 40: Cursor-Following Floating Project Preview (pointer-events: none) ── */}
      <div
        ref={previewRef}
        className={`cursor-project-preview-card ${isHoveringSection ? 'preview-visible' : 'preview-hidden'}`}
      >
        <div className="preview-image-wrapper">
          <img
            key={categories[activeCategory].id}
            src={categories[activeCategory].image}
            alt={categories[activeCategory].title}
            className="preview-thumbnail-img"
          />
          <div className="preview-card-caption">
            <span className="preview-card-title">{categories[activeCategory].title}</span>
            <span className="preview-card-sub">{categories[activeCategory].subtitle}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
