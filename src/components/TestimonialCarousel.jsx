import React, { useState } from 'react';

const testimonials = [
  {
    name: 'Aria Chen',
    role: 'Founder, Bloom Studio',
    text: 'Jennifer transformed our brand from forgettable to unforgettable. Her attention to editorial detail was unlike anything we had seen — every element felt intentional.',
    tag: 'Brand Identity',
    initial: 'A',
  },
  {
    name: 'Marcus Reid',
    role: 'Creative Director, Volta Co.',
    text: 'She delivered a design system in two weeks that our team has scaled for 18 months. Clean, documented, and genuinely beautiful to work in.',
    tag: 'UI/UX + Dev',
    initial: 'M',
  },
  {
    name: 'Sophie Laurent',
    role: 'CEO, Petal & Press',
    text: 'Working with Jenni felt like having a dedicated creative partner who understood our heart. The brand now speaks for itself — clients recognise us before they even read a word.',
    tag: 'Brand + Web',
    initial: 'S',
  },
  {
    name: 'Theo Nakamura',
    role: 'Co-founder, Slate & Oak',
    text: 'The landing page conversion jumped 38% after the redesign. Strategy AND aesthetics — rare to find a solo designer-developer operating at this level.',
    tag: 'Web Design',
    initial: 'T',
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const t = testimonials[index];

  return (
    <section style={{
      backgroundColor: '#ffffff',
      padding: '90px 40px',
      borderBottom: '1px solid rgba(52,33,26,0.08)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background deco */}
      <div style={{ position:'absolute', top:20, left:20, color:'#788554', fontSize:'6rem', opacity:0.04, fontFamily:'serif', lineHeight:1 }}>"</div>

      <div style={{ maxWidth:'700px', margin:'0 auto' }}>

        {/* Header + arrows */}
        <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', marginBottom:'48px' }}>
          <div>
            <p style={{
              fontFamily:"'Cormorant Garamond', Georgia, serif",
              fontSize:'0.78rem',
              letterSpacing:'0.2em',
              textTransform:'uppercase',
              color:'#788554',
              fontWeight:700,
              marginBottom:'8px',
            }}>What clients say</p>
            <h2 style={{
              fontFamily:"'Cormorant Garamond', Georgia, serif",
              fontSize:'clamp(1.8rem, 3.5vw, 2.8rem)',
              color:'#34211a',
              fontWeight:400,
              lineHeight:1.2,
              margin:0,
            }}>
              <span style={{ fontFamily:"'Pinyon Script', cursive", fontSize:'1.3em' }}>Kind</span>{' '}words
            </h2>
          </div>
          {/* Nav arrows */}
          <div style={{ display:'flex', gap:'10px' }}>
            {[prev, next].map((fn, i) => (
              <button key={i} onClick={fn} style={{
                width:'40px', height:'40px',
                borderRadius:'50%',
                border:'1.5px solid #34211a',
                background:'none',
                cursor:'pointer',
                display:'flex', alignItems:'center', justifyContent:'center',
                fontSize:'1.1rem',
                color:'#34211a',
                transition:'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background='#34211a'; e.currentTarget.style.color='#faedf2'; }}
              onMouseLeave={e => { e.currentTarget.style.background='none'; e.currentTarget.style.color='#34211a'; }}
              >
                {i === 0 ? '‹' : '›'}
              </button>
            ))}
          </div>
        </div>

        {/* Card */}
        <div key={index} style={{
          backgroundColor:'#faedf2',
          borderRadius:'12px',
          padding:'40px 40px 36px',
          position:'relative',
          boxShadow:'0 4px 24px rgba(52,33,26,0.08)',
          animation:'fadeIn 0.35s ease',
        }}>
          {/* Tag pill */}
          <span style={{
            position:'absolute', top:'-14px', left:'32px',
            backgroundColor:'#788554',
            color:'#fff',
            fontFamily:"'Cormorant Garamond', Georgia, serif",
            fontSize:'0.8rem',
            fontStyle:'italic',
            letterSpacing:'0.06em',
            padding:'4px 16px',
            borderRadius:'9999px',
          }}>{t.tag}</span>

          {/* Quote text */}
          <p style={{
            fontFamily:"'Cormorant Garamond', Georgia, serif",
            fontSize:'clamp(1.15rem, 2.2vw, 1.45rem)',
            color:'#34211a',
            lineHeight:1.65,
            fontStyle:'italic',
            marginBottom:'28px',
          }}>
            "{t.text}"
          </p>

          {/* Author */}
          <div style={{ display:'flex', alignItems:'center', gap:'14px' }}>
            <div style={{
              width:'44px', height:'44px', borderRadius:'50%',
              backgroundColor:'#34211a',
              color:'#faedf2',
              display:'flex', alignItems:'center', justifyContent:'center',
              fontFamily:"'Cormorant Garamond', Georgia, serif",
              fontSize:'1.2rem',
              fontWeight:700,
              flexShrink:0,
            }}>{t.initial}</div>
            <div>
              <div style={{ fontFamily:"'Cormorant Garamond', Georgia, serif", fontWeight:700, color:'#34211a', fontSize:'1.05rem' }}>{t.name}</div>
              <div style={{ fontFamily:"'Caveat', cursive", color:'#788554', fontSize:'1rem' }}>{t.role}</div>
            </div>
          </div>
        </div>

        {/* Dot indicators */}
        <div style={{ display:'flex', justifyContent:'center', gap:'8px', marginTop:'24px' }}>
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setIndex(i)} style={{
              width: i === index ? '24px' : '8px',
              height:'8px',
              borderRadius:'9999px',
              border:'none',
              backgroundColor: i === index ? '#788554' : 'rgba(120,133,84,0.3)',
              cursor:'pointer',
              transition:'all 0.3s ease',
              padding:0,
            }} />
          ))}
        </div>
      </div>
    </section>
  );
}
