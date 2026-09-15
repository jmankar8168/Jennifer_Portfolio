import React from 'react';

export default function Header({ introPhase = 'done', onOpenCV, onOpenContact }) {
  const isHeroState = introPhase === 'enter' || introPhase === 'hold';
  const isExitState = introPhase === 'exit';
  const isDoneState = introPhase === 'done';

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'about', heroLabel: 'HOME', finalLabel: 'about', href: 'hero' },
    { id: 'works', heroLabel: 'WORK', finalLabel: 'works', href: 'works' },
    { id: 'process', heroLabel: 'ABOUT', finalLabel: 'process', href: 'about' },
    { id: 'playground', heroLabel: '', finalLabel: 'playground', href: 'playground', isNewInFinal: true },
    { id: 'contact', heroLabel: 'CONTACT', finalLabel: 'contact', href: 'contact' },
  ];

  return (
    <header className={`jenni-header jenni-header-phase-${introPhase}`}>
      <div className="header-inner">
        {/* Left: Brand / Logo Area */}
        <div className="header-left-col">
          <a
            href="#hero"
            className="header-brand-link"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('hero');
            }}
          >
            {/* Avatar mark circle — expands out during transition */}
            <div className={`avatar-mark-circle ${isHeroState ? 'avatar-collapsed' : 'avatar-expanded'}`}>
              <svg viewBox="0 0 40 40" width="34" height="34">
                <circle cx="20" cy="20" r="18" fill="#0038ff" />
                <circle cx="20" cy="16" r="8" fill="#fde047" />
                <path d="M14 14 Q20 8 26 14" stroke="#111" strokeWidth="3" fill="#111" />
                <circle cx="18" cy="16" r="1.2" fill="#111" />
                <circle cx="22" cy="16" r="1.2" fill="#111" />
                <path d="M13 28 Q20 22 27 28 L27 38 L13 38 Z" fill="#fbbf24" />
              </svg>
            </div>
            
            <span className="header-brand-name">
              jenni
              <span className={`brand-period ${isHeroState ? 'period-visible' : 'period-hidden'}`}>.</span>
            </span>
          </a>
        </div>

        {/* Right: Persistent Spreading Navigation */}
        <nav className="header-nav-links">
          {navItems.map((item) => {
            const isCollapsible = item.isNewInFinal;
            return (
              <a
                key={item.id}
                href={`#${item.href}`}
                className={`header-nav-item ${isCollapsible && isHeroState ? 'nav-item-collapsed' : 'nav-item-expanded'}`}
                onClick={(e) => {
                  e.preventDefault();
                  if (item.id === 'contact' && onOpenContact) {
                    onOpenContact();
                  } else {
                    scrollTo(item.href);
                  }
                }}
              >
                <span className="nav-label-hero">{item.heroLabel}</span>
                <span className="nav-label-final">{item.finalLabel}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
