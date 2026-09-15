import React from 'react';

export default function FooterBanner() {
  return (
    <footer className="jenni-giant-footer">
      <div className="footer-headline-wrapper">
        <h1 className="footer-brand-huge">JENNI MANKAR</h1>
      </div>
      <div className="footer-meta-bottom">
        <span>&copy; {new Date().getFullYear()} Jenni Mankar. All rights reserved.</span>
        <span>Designed with art direction, rooms &amp; personality.</span>
      </div>
    </footer>
  );
}
