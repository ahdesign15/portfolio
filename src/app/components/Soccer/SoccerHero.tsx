import React from 'react';
import overlapScreens from '../../../imports/PhoneScreens/4d7e193feea4a47fc1b345bb98904695d3ee1f28.png';

export function SoccerHero() {
  return (
    <section style={{ backgroundColor: '#f9f9f7' }} className="w-full pt-16 md:pt-[64px]">
      <div className="max-w-[1080px] mx-auto px-6 md:px-10 lg:px-12 pb-16 md:pb-24 flex flex-col gap-3">

        {/* Title */}
        <h1
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            color: '#2d6a2d',
            letterSpacing: '-2.4px',
            lineHeight: '1.05',
          }}
          className="text-[48px] md:text-[72px] lg:text-[96px]"
        >
          Overlap
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 400,
            color: '#7a6f6f',
            lineHeight: 'normal',
          }}
          className="text-[18px] md:text-[22px] lg:text-[26px]"
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
            paddingTop: '8px',
            paddingBottom: '28px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
          className="max-w-full md:max-w-[560px]"
        >
          <p style={{ margin: 0 }}>Product design lead · Mobile &amp; Web · 8 weeks</p>
          <p style={{ margin: 0 }}>
            Helping soccer fans find matches that fit their available time — not the
            other way around. A ground-up rethinking of match discovery built around
            how fans actually plan their viewing.
          </p>
        </div>

        {/* Meta grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          style={{
            borderTop: '1px solid #e8e5e0',
            borderBottom: '1px solid #e8e5e0',
            paddingTop: '25px',
            paddingBottom: '25px',
          }}
        >
          {[
            { term: 'Role', detail: 'Founding Product Designer' },
            { term: 'Scope', detail: '0 → 1 Product' },
            { term: 'Work', detail: 'Design System' },
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
          <img
            src={overlapScreens}
            alt="Overlap app screens"
            style={{ width: '100%', maxWidth: '659px', height: 'auto', objectFit: 'cover' }}
          />
        </div>

      </div>
    </section>
  );
}
