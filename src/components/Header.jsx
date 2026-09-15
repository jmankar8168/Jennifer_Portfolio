import React from 'react';

export default function Header({ introPhase = 'done', onOpenCV, onOpenContact }) {
  const isHeroState = introPhase === 'enter' || introPhase === 'hold';

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'HOME', href: 'hero' },
    { id: 'work', label: 'WORK', href: 'works' },
    { id: 'about', label: 'ABOUT', href: 'about' },
    { id: 'contact', label: 'CONTACT', href: 'contact' },
  ];

  return (
    <header className={`jenni-header ${isHeroState ? 'jenni-header-hero' : 'jenni-header-site'}`}>
      <div className="header-inner">
        {/* Left: Clean Brand Logo "jenni." */}
        <div className="header-left-col">
          <a
            href="#hero"
            className="header-brand-link"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('hero');
            }}
          >
            <span className="header-brand-name">jenni.</span>
          </a>
        </div>

        {/* Right: Clean Navigation Links (HOME, WORK, ABOUT, CONTACT) */}
        <nav className="header-nav-links">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.href}`}
              className="header-nav-item"
              onClick={(e) => {
                e.preventDefault();
                if (item.id === 'contact' && onOpenContact) {
                  onOpenContact();
                } else {
                  scrollTo(item.href);
                }
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
