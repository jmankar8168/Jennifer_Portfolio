import React, { useEffect, useRef, useState } from 'react';

/**
 * HeroIntro — cinematic opening poster overlay.
 * Timeline Choreography:
 * • 0.0s – 3.0s: 'enter' (blue bg + giant yellow starburst + white jenni. wordmark)
 * • 3.0s – 4.0s: 'hold'  (poster holds, cursor subtle tracking)
 * • 4.0s – 5.5s: 'exit'  (poster physically slides away toward bottom-left, starburst crops on edges)
 * • 5.5s – 7.5s: 'settle' (quiet pause, original site bg & header exposed)
 * • 7.5s – 12.0s: 'reveal' (original site hero scene content organically enters)
 * • 13.0s+:      'done'   (overlay unmounts, 100% interactive)
 */
export default function HeroIntro({ onComplete, onPhaseChange }) {
  const overlayRef = useRef(null);
  const [phase, setPhase] = useState('enter');

  const forceTopScroll = () => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  useEffect(() => {
    forceTopScroll();

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setTimeout(() => {
        if (onPhaseChange) onPhaseChange('done');
        if (onComplete) onComplete();
      }, 300);
      return;
    }

    // 0.0s - 3.0s: Enter
    const t1 = setTimeout(() => {
      setPhase('hold');
      if (onPhaseChange) onPhaseChange('hold');
    }, 3000);

    // 4.0s: Physical Poster Slide Exit
    const t2 = setTimeout(() => {
      setPhase('exit');
      if (onPhaseChange) onPhaseChange('exit');
    }, 4000);

    // 5.5s: Settle period (Original site revealed)
    const t3 = setTimeout(() => {
      setPhase('settle');
      if (onPhaseChange) onPhaseChange('settle');
    }, 5500);

    // 7.5s: Reveal secondary content
    const t4 = setTimeout(() => {
      setPhase('reveal');
      if (onPhaseChange) onPhaseChange('reveal');
    }, 7500);

    // 13.0s: Done & Unmount
    const t5 = setTimeout(() => {
      setPhase('done');
      if (onPhaseChange) onPhaseChange('done');
      if (onComplete) onComplete();
    }, 13000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, []);

  if (phase === 'done') return null;

  return (
    <div
      ref={overlayRef}
      className={`hi-poster-overlay hi-phase-${phase}`}
      aria-hidden="true"
    >
      {/* Background grid lines */}
      <div className="hi-grid" />

      {/* Giant hand-drawn yellow starburst artwork */}
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

      {/* Giant wordmark */}
      <div className={`hi-title-wrap hi-title-${phase}`}>
        <h1 className="hi-giant">jenni.</h1>
        <p className="hi-tagline">Product Designer &amp; Art Director</p>
      </div>

      {/* Bottom strip */}
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
