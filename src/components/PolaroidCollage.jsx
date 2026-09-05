import React from 'react';

const photos = [
  { id: 1, rotate: '-6deg', top: '10%', left: '2%',  caption: 'design session ✦', bg: '#fff9f5' },
  { id: 2, rotate: '3deg',  top: '0%',  left: '28%', caption: 'mood board',    bg: '#ffffff' },
  { id: 3, rotate: '-2deg', top: '14%', left: '54%', caption: 'creative day', bg: '#faedf2' },
  { id: 4, rotate: '5deg',  top: '5%',  left: '76%', caption: 'the vision ✦',  bg: '#fffaf6' },
];

function PolaroidCard({ rotate, caption, bg, color }) {
  return (
    <div
      style={{
        backgroundColor: bg,
        padding: '12px 12px 36px',
        borderRadius: '3px',
        boxShadow: '0 8px 28px rgba(52,33,26,0.18)',
        transform: 'rotate(' + rotate + ')',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'default',
        flexShrink: 0,
        width: '180px',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)';
        e.currentTarget.style.boxShadow = '0 16px 40px rgba(52,33,26,0.28)';
        e.currentTarget.style.zIndex = '10';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'rotate(' + rotate + ')';
        e.currentTarget.style.boxShadow = '0 8px 28px rgba(52,33,26,0.18)';
        e.currentTarget.style.zIndex = '1';
      }}
    >
      {/* Photo placeholder — warm gradient */}
      <div style={{
        width: '100%',
        height: '160px',
        background: 'linear-gradient(135deg, #e8d5c4 0%, #c9a98a 50%, #a07850 100%)',
        borderRadius: '2px',
        marginBottom: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2rem',
        opacity: 0.7,
      }}>
        {['🌿','🍂','✨','🌸'][photos.indexOf(photos.find(p => p.rotate === rotate)) % 4]}
      </div>
      <p style={{
        fontFamily: "'Caveat', cursive",
        fontSize: '1.1rem',
        color: '#34211a',
        textAlign: 'center',
        margin: 0,
      }}>
        {caption}
      </p>
    </div>
  );
}

export default function PolaroidCollage() {
  return (
    <section style={{
      backgroundColor: '#faedf2',
      padding: '80px 40px 100px',
      position: 'relative',
      overflow: 'hidden',
      borderBottom: '1px solid rgba(52,33,26,0.1)',
    }}>

      {/* Decorative doodle lines — top left */}
      <svg style={{ position:'absolute', top:30, left:30, opacity:0.12 }} width="120" height="120" viewBox="0 0 120 120" fill="none">
        <path d="M10 60 Q40 10 70 60 Q100 110 120 60" stroke="#34211a" strokeWidth="1.5" fill="none"/>
        <path d="M0 80 Q30 30 60 80 Q90 130 120 80" stroke="#788554" strokeWidth="1" fill="none"/>
      </svg>

      {/* Olive star top right */}
      <div style={{ position:'absolute', top:40, right:60, color:'#788554', fontSize:'2rem', opacity:0.5 }}>✦</div>
      <div style={{ position:'absolute', top:80, right:100, color:'#788554', fontSize:'1rem', opacity:0.35 }}>✦</div>

      {/* Section label */}
      <p style={{
        fontFamily:"'Cormorant Garamond', Georgia, serif",
        fontSize:'0.78rem',
        letterSpacing:'0.2em',
        textTransform:'uppercase',
        color:'#788554',
        fontWeight:700,
        marginBottom:'14px',
        textAlign:'center',
      }}>Behind the Scenes</p>

      <h2 style={{
        fontFamily:"'Cormorant Garamond', Georgia, serif",
        fontSize:'clamp(2rem, 4vw, 3.2rem)',
        color:'#34211a',
        fontWeight:400,
        textAlign:'center',
        marginBottom:'64px',
        lineHeight:1.2,
      }}>
        Behind{' '}
        <span style={{ fontFamily:"'Pinyon Script', cursive", fontSize:'1.3em', fontWeight:400 }}>
          my craft
        </span>
      </h2>

      {/* Polaroid row — overlapping */}
      <div style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'flex-start',
        gap:'24px',
        flexWrap:'wrap',
        position:'relative',
      }}>
        {photos.map((p, i) => (
          <PolaroidCard key={p.id} rotate={p.rotate} caption={p.caption} bg={p.bg} />
        ))}
      </div>

      {/* Handwritten note bottom */}
      <p style={{
        fontFamily:"'Caveat', cursive",
        fontSize:'1.4rem',
        color:'#788554',
        textAlign:'center',
        marginTop:'52px',
        opacity:0.8,
      }}>
        curiosity, craft, and thoughtful design ✦
      </p>
    </section>
  );
}
