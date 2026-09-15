import React, { useEffect, useRef, useState } from 'react';

/**
 * HeroIntro — cinematic opening overlay.
 * Phases: 'enter' (0-3s) | 'hold' (3-4.4s) | 'exit' (4.4-7s) | 'done'
 */
export default function HeroIntro({ onComplete, onPhaseChange }) {
  const overlayRef = useRef(null);
  const orbRef     = useRef(null);
  const mousePos   = useRef({ x: 0, y: 0 });
  const orbFrame   = useRef(null);
  const [phase, setPhase] = useState('enter');

  const lockScroll = () => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = '0px';
    document.body.style.left = '0px';
    document.body.style.width = '100%';
  };

  const unlockScroll = () => {
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.width = '';
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const animateOrb = () => {
    const orb = orbRef.current;
    if (!orb) return;
    const tx = parseFloat(orb.dataset.tx) || window.innerWidth  / 2;
    const ty = parseFloat(orb.dataset.ty) || window.innerHeight / 2;
    const nx = tx + (mousePos.current.x - tx) * 0.08;
    const ny = ty + (mousePos.current.y - ty) * 0.08;
    orb.dataset.tx = nx;
    orb.dataset.ty = ny;
    orb.style.left = nx + 'px';
    orb.style.top  = ny + 'px';
    orbFrame.current = requestAnimationFrame(animateOrb);
  };

  const handleMouseMove = (e) => {
    mousePos.current = { x: e.clientX, y: e.clientY };
  };

  useEffect(() => {
    lockScroll();

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setTimeout(() => {
        unlockScroll();
        if (onPhaseChange) onPhaseChange('done');
        if (onComplete) onComplete();
      }, 300);
      return () => unlockScroll();
    }

    mousePos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    if (orbRef.current) {
      orbRef.current.dataset.tx = window.innerWidth  / 2;
      orbRef.current.dataset.ty = window.innerHeight / 2;
    }

    const t1 = setTimeout(() => {
      setPhase('hold');
      if (onPhaseChange) onPhaseChange('hold');
    }, 3000);

    const t2 = setTimeout(() => {
      setPhase('exit');
      if (onPhaseChange) onPhaseChange('exit');
    }, 4400);

    const t3 = setTimeout(() => {
      unlockScroll();
      setPhase('done');
      if (onPhaseChange) onPhaseChange('done');
      if (onComplete) onComplete();
    }, 7000);

    orbFrame.current = requestAnimationFrame(animateOrb);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      if (orbFrame.current) cancelAnimationFrame(orbFrame.current);
      unlockScroll();
    };
  }, []);

  if (phase === 'done') return null;

  return (
    <div
      ref={overlayRef}
      className={`hi-overlay hi-phase-${phase}`}
      onMouseMove={handleMouseMove}
      aria-hidden="true"
    >
      {/* faint grid lines matching original site bg */}
      <div className="hi-grid" />

      {/* giant hand-drawn yellow starburst */}
      <div className={`hi-star-wrap hi-star-${phase}`}>
        <svg
          className="hi-star-svg"
          viewBox="0 0 700 700"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="
              M350 35
              C375 100 418 118 472 80
              C450 152 488 182 568 162
              C530 218 550 258 628 250
              C570 290 578 332 652 348
              C590 372 592 418 664 442
              C598 456 592 500 660 534
              C594 528 572 576 632 624
              C560 600 532 646 580 702
              C508 672 478 718 524 778
              C448 742 416 788 440 852
              C362 810 328 860 348 928
              C268 880 234 926 254 998
              C172 944 136 990 160 1066
              C84 1006 46 1050 72 1130

              M350 35
              C325 100 282 118 228 80
              C250 152 212 182 132 162
              C170 218 150 258 72 250
              C130 290 122 332 48 348
              C110 372 108 418 36 442
              C102 456 108 500 40 534
              C106 528 128 576 68 624
              C140 600 168 646 120 702
              C192 672 222 718 174 778
              C252 742 284 788 260 852
              C338 810 372 860 352 928
              C432 880 466 926 446 998
              C528 944 564 990 540 1066
              C616 1006 654 1050 628 1130
            "
            fill="#fde047"
            stroke="#f59e0b"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path
            d="
              M350 100 C382 148 422 160 475 128
              C454 192 488 218 558 202
              C524 252 542 288 614 286
              C558 322 564 360 632 380
            "
            fill="#fbbf24"
            opacity="0.55"
          />
        </svg>
      </div>

      {/* giant title */}
      <div className={`hi-title-wrap hi-title-${phase}`}>
        <h1 className="hi-giant">jenni.</h1>
        <p className="hi-tagline">Product Designer &amp; Art Director</p>
      </div>

      {/* cursor orb */}
      <div
        ref={orbRef}
        className="hi-orb"
        data-tx="0"
        data-ty="0"
        style={{ position: 'fixed', pointerEvents: 'none', zIndex: 99999, transform: 'translate(-50%,-50%)' }}
      >
        <svg viewBox="0 0 54 54" width="54" height="54">
          <circle cx="27" cy="27" r="25" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
          <circle cx="27" cy="27" r="4" fill="rgba(255,255,255,0.8)" />
        </svg>
      </div>

      {/* bottom strip */}
      <div className={`hi-bottom hi-bottom-${phase}`}>
        <span className="hi-scroll">scroll to explore &#8595;</span>
        <div className="hi-pills">
          <span className="hi-pill">Product Design</span>
          <span className="hi-pill">Art Direction</span>
          <span className="hi-pill">Digital Spaces</span>
        </div>
      </div>
    </div>
  );
}
