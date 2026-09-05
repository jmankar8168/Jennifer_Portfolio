import React from 'react';

const stats = [
  { value: '45+',  label: 'Projects Completed',  note: 'apps, design systems & web', icon: '🎨' },
  { value: '3+ yrs', label: 'Design & Dev Experience', note: 'UI/UX · Frontend · Brand', icon: '✦' },
  { value: '100%', label: 'Dedicated Focus',      note: 'direct 1-on-1 collaboration', icon: '🤍' },
  { value: '12+',  label: 'Industries Explored', note: 'fashion · tech · wellness', icon: '🌿' },
];

export default function StatsSection() {
  return (
    <section style={{
      backgroundColor: '#34211a',
      padding: '80px 40px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative star */}
      <div style={{ position:'absolute', top:30, right:50, color:'#788554', fontSize:'3rem', opacity:0.25 }}>✦</div>
      <div style={{ position:'absolute', bottom:30, left:40, color:'#faedf2', fontSize:'1.5rem', opacity:0.1 }}>✦</div>

      {/* Heading */}
      <div style={{ textAlign:'center', marginBottom:'60px' }}>
        <p style={{
          fontFamily:"'Cormorant Garamond', Georgia, serif",
          fontSize:'0.78rem',
          letterSpacing:'0.2em',
          textTransform:'uppercase',
          color:'rgba(250,237,242,0.5)',
          fontWeight:700,
          marginBottom:'12px',
        }}>By the numbers</p>
        <h2 style={{
          fontFamily:"'Cormorant Garamond', Georgia, serif",
          fontSize:'clamp(2rem, 4vw, 3rem)',
          color:'#faedf2',
          fontWeight:400,
          lineHeight:1.2,
        }}>
          The work{' '}
          <span style={{ fontFamily:"'Pinyon Script', cursive", fontSize:'1.3em' }}>
            speaks
          </span>
        </h2>
      </div>

      {/* Stats grid */}
      <div style={{
        maxWidth:'900px',
        margin:'0 auto',
        display:'grid',
        gridTemplateColumns:'repeat(auto-fit, minmax(180px, 1fr))',
        gap:'24px',
      }}>
        {stats.map((s, i) => (
          <div key={i} style={{
            backgroundColor:'rgba(250,237,242,0.06)',
            border:'1px solid rgba(250,237,242,0.1)',
            borderRadius:'8px',
            padding:'32px 24px',
            textAlign:'center',
            position:'relative',
            transition:'background 0.3s, transform 0.3s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = 'rgba(120,133,84,0.15)';
            e.currentTarget.style.transform = 'translateY(-4px)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = 'rgba(250,237,242,0.06)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            <div style={{ fontSize:'1.6rem', marginBottom:'12px' }}>{s.icon}</div>
            <div style={{
              fontFamily:"'Cormorant Garamond', Georgia, serif",
              fontSize:'3rem',
              fontWeight:700,
              color:'#faedf2',
              lineHeight:1,
              marginBottom:'8px',
            }}>{s.value}</div>
            <div style={{
              fontFamily:"'Cormorant Garamond', Georgia, serif",
              fontSize:'1.05rem',
              color:'rgba(250,237,242,0.9)',
              marginBottom:'6px',
              fontWeight:600,
            }}>{s.label}</div>
            <div style={{
              fontFamily:"'Caveat', cursive",
              fontSize:'0.95rem',
              color:'#788554',
            }}>{s.note}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
