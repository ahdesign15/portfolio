import React from 'react';

export function SoccerDesignSystem() {
  return (
    <section className="w-full border-t border-[#e8e5e0] bg-[#f9f9f7] py-24 px-6 md:px-10 lg:px-24">
      <div className="max-w-[1080px] mx-auto flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Section label */}
        <div className="md:w-[148px] shrink-0"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: '11px',
            color: '#2d6a2d',
            letterSpacing: '1.1px',
            textTransform: 'uppercase',
          }}
        >
          04 — Design System
        </div>

        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 600,
              fontSize: '30px',
              color: '#2a2020',
              letterSpacing: '-0.3px',
              lineHeight: '36px',
              margin: 0,
            }}
          >
            The foundation that made everything else possible.
          </h2>

          {/* Design system tokens row */}
          <div
            style={{
              backgroundColor: '#ffffff',
              display: 'flex',
              gap: '40px',
              padding: '16px 8px',
              alignItems: 'flex-start',
            }}
          >
            {/* Color */}
            <div className='flex flex-col gap-2 flex-1 min-w-0'>
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: '24px',
                  color: '#2a2020',
                  lineHeight: '20px',
                }}
              >
                Color
              </span>
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: '12px',
                  color: '#7a6f6f',
                  lineHeight: '19.5px',
                  margin: 0,
                }}
              >
                A deep field-green,{' '}
                <code style={{ color: '#366322', background: 'rgba(255,255,255,0.05)', padding: '2px 6px', borderRadius: '4px', fontSize: '12px' }}>
                  #366322
                </code>
                , sits between artificial-turf saturation and real February pitch moss.
              </p>
              <div style={{ display: 'flex', gap: '8px' }}>
                {['#366322', '#7a9a6a', '#f5f4f0'].map((color) => (
                  <div
                    key={color}
                    style={{
                      width: '32px',
                      height: '32px',
                      backgroundColor: color,
                      borderRadius: '4px',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Typography */}
            <div className='flex flex-col gap-2 flex-1 min-w-0'>
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: '24px',
                  color: '#2a2020',
                  lineHeight: '20px',
                }}
              >
                Typography
              </span>
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: '12px',
                  color: '#7a6f6f',
                  lineHeight: '19.5px',
                  margin: 0,
                }}
              >
                Oswald in three weights for anything bold and sporty; Helvetica Neue for utility.
              </p>
              <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: '24px', color: '#2a2020', lineHeight: '32px' }}>
                Aa Bb Cc
              </span>
            </div>

            {/* Shape */}
            <div className='flex flex-col gap-2 flex-1 min-w-0'>
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: '24px',
                  color: '#2a2020',
                  lineHeight: '20px',
                }}
              >
                Shape
              </span>
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: '12px',
                  color: '#7a6f6f',
                  lineHeight: '19.5px',
                  margin: 0,
                }}
              >
                Pill buttons at 32px radius. Input fields at 16px. 8px grid throughout.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ height: '28px', backgroundColor: '#366322', borderRadius: '9999px', border: '1px solid rgba(0,0,0,0.1)' }} />
                <div style={{ height: '28px', backgroundColor: '#111', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
