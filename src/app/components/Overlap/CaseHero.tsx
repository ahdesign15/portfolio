import React from 'react';
import overlapScreens from '../../../imports/PhoneScreens/4d7e193feea4a47fc1b345bb98904695d3ee1f28.png';

export function CaseHero() {
  return (
    <section style={{ backgroundColor: '#f9f9f7' }} className="w-full pt-[64px]">
      <div className="max-w-[1080px] mx-auto px-[48px] pb-[96px] flex flex-col gap-[12px]">

        {/* Title */}
        <h1
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: '96px',
            letterSpacing: '-2.4px',
            lineHeight: '96px',
            color: '#2d6a2d',
          }}
        >
          Overlap
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 400,
            fontSize: '26px',
            color: '#7a6f6f',
            lineHeight: 'normal',
          }}
        >
          Time-first soccer match discovery
        </p>

        {/* Meta paragraph */}
        <div
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 400,
            fontSize: '16px',
            color: '#7a6f6f',
            lineHeight: '27.2px',
            maxWidth: '560px',
            paddingTop: '8px',
            paddingBottom: '28px',
            display: 'flex',
            flexDirection: 'column',
            gap: '26.565px',
          }}
        >
          <p>Product design lead · Mobile &amp; Web · 8 weeks</p>
          <p>
            Helping soccer fans find matches that fit their available time — not the
            other way around. A ground-up rethinking of match discovery built around
            how fans actually plan their viewing.
          </p>
        </div>

        {/* Meta grid */}
        <div
          style={{
            borderTop: '1px solid #e8e5e0',
            borderBottom: '1px solid #e8e5e0',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gap: '32px',
            paddingTop: '25px',
            paddingBottom: '25px',
          }}
        >
          {[
            { term: 'Role', detail: 'Founding Product Designer' },
            { term: 'Scope', detail: '0 → 1 Product' },
            { term: 'Work', detail: 'Design System · Brand' },
            { term: 'Timeline', detail: '4 Months' },
          ].map(({ term, detail }) => (
            <div key={term} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: '10px',
                  color: '#9e9393',
                  letterSpacing: '0.8px',
                  textTransform: 'uppercase',
                }}
              >
                {term}
              </span>
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: '14px',
                  color: '#2a2020',
                  lineHeight: '21px',
                }}
              >
                {detail}
              </span>
            </div>
          ))}
        </div>

        {/* Hero image area */}
        <div
          style={{
            background: 'linear-gradient(133deg, rgb(30, 61, 30) 5%, rgb(45, 106, 45) 95%)',
            borderRadius: '16px',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '30px',
            width: '100%',
          }}
        >
          <div style={{ width: '659px', height: '679px', position: 'relative', flexShrink: 0 }}>
            <img
              src={overlapScreens}
              alt="Overlap app screens"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
