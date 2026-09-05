import React, { useState } from 'react';

const steps = [
  {
    num: '01',
    title: 'Discovery & Strategy',
    script: 'I listen first',
    body: 'Deep dive into your brand, audience, and goals. I map out the creative territory and vision before a single pixel is placed.',
  },
  {
    num: '02',
    title: 'Concept & Moodboarding',
    script: 'finding the feeling',
    body: 'Visual direction, typography pairings, color worlds — presented as a living mood board you can actually react to.',
  },
  {
    num: '03',
    title: 'Design & Build',
    script: 'craft in action',
    body: 'From wireframes to final components — every screen designed for delight and engineered for performance.',
  },
  {
    num: '04',
    title: 'Review & Refine',
    script: 'until it feels right',
    body: 'Two rounds of revision, collaborative feedback, and pixel-perfect polish before anything ships.',
  },
  {
    num: '05',
    title: 'Launch & Handoff',
    script: 'yours to keep',
    body: 'Clean code, documented components, and a handoff kit that lets you own and grow your product confidently.',
  },
];

export default function ProcessAccordion() {
  const [open, setOpen] = useState(null);

  return (
    <section style={{
      backgroundColor: '#faedf2',
      padding: '90px 40px',
      borderBottom: '1px solid rgba(52,33,26,0.1)',
    }}>
      <div style={{ maxWidth:'760px', margin:'0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom:'56px' }}>
          <p style={{
            fontFamily:"'Cormorant Garamond', Georgia, serif",
            fontSize:'0.78rem',
            letterSpacing:'0.2em',
            textTransform:'uppercase',
            color:'#788554',
            fontWeight:700,
            marginBottom:'12px',
          }}>How I work</p>
          <h2 style={{
            fontFamily:"'Cormorant Garamond', Georgia, serif",
            fontSize:'clamp(2rem, 4vw, 3.2rem)',
            color:'#34211a',
            fontWeight:400,
            lineHeight:1.2,
          }}>
            The{' '}
            <span style={{ fontFamily:"'Pinyon Script', cursive", fontSize:'1.3em' }}>
              process
            </span>
          </h2>
        </div>

        {/* Accordion items */}
        {steps.map((s, i) => (
          <div
            key={i}
            style={{
              borderTop: i === 0 ? '1px solid rgba(52,33,26,0.15)' : 'none',
              borderBottom: '1px solid rgba(52,33,26,0.15)',
            }}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                width:'100%',
                background:'none',
                border:'none',
                cursor:'pointer',
                padding:'24px 0',
                display:'flex',
                alignItems:'center',
                gap:'20px',
                textAlign:'left',
              }}
            >
              {/* + / − toggle */}
              <span style={{
                width:'32px',
                height:'32px',
                borderRadius:'50%',
                border:'1.5px solid #788554',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                color:'#788554',
                fontSize:'1.4rem',
                fontWeight:300,
                flexShrink:0,
                transition:'background 0.2s',
                backgroundColor: open === i ? '#788554' : 'transparent',
              }}>
                <span style={{ color: open === i ? '#fff' : '#788554', lineHeight:1 }}>
                  {open === i ? '−' : '+'}
                </span>
              </span>

              <span style={{
                fontFamily:"'Cormorant Garamond', Georgia, serif",
                fontSize:'0.78rem',
                letterSpacing:'0.15em',
                color:'#788554',
                fontWeight:700,
                width:'36px',
                flexShrink:0,
              }}>{s.num}</span>

              <span style={{
                fontFamily:"'Cormorant Garamond', Georgia, serif",
                fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',
                color:'#34211a',
                fontWeight:500,
                flex:1,
              }}>{s.title}</span>

              <span style={{
                fontFamily:"'Pinyon Script', cursive",
                fontSize:'1.4rem',
                color:'rgba(52,33,26,0.35)',
                flexShrink:0,
              }}>{s.script}</span>
            </button>

            {/* Expanded body */}
            <div style={{
              maxHeight: open === i ? '120px' : '0',
              overflow:'hidden',
              transition:'max-height 0.4s ease',
            }}>
              <p style={{
                fontFamily:"'Cormorant Garamond', Georgia, serif",
                fontSize:'1.05rem',
                color:'rgba(52,33,26,0.7)',
                lineHeight:1.7,
                paddingBottom:'28px',
                paddingLeft:'88px',
                margin:0,
              }}>{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
