import React from 'react';

export default function JenniHeroSection() {
  return (
    <section id="hero" className="jenni-hero-section" aria-label="Hero Section">
      {/* Background grid lines */}
      <div className="hi-grid" />

      {/* Giant hand-drawn yellow starburst artwork */}
      <div className="hi-star-wrap hi-star-active">
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

      {/* Giant title & Tagline */}
      <div className="hi-title-wrap hi-title-active">
        <h1 className="hi-giant">jenni.</h1>
        <p className="hi-tagline">Product Designer &amp; Art Director</p>
      </div>

      {/* Bottom scroll hint & Pills */}
      <div className="hi-bottom hi-bottom-active">
        <span className="hi-scroll">scroll to explore &#8595;</span>
        <div className="hi-pills">
          <span className="hi-pill">Product Design</span>
          <span className="hi-pill">Art Direction</span>
          <span className="hi-pill">Digital Spaces</span>
        </div>
      </div>
    </section>
  );
}
