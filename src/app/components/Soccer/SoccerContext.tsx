import React from 'react';

export function SoccerContext() {
  return (
    <section className="w-full border-t border-[#e8e5e0] bg-[#f9f9f7] py-24 px-6 md:px-10 lg:px-24">
      <div className="max-w-[1080px] mx-auto flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Section label */}
        <div
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: '11px',
            color: '#2d6a2d',
            letterSpacing: '1.1px',
            textTransform: 'uppercase',
            lineHeight: 'normal',
          }}
        >
          01 — Context
        </div>

        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
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
            The wrong question gets asked first.
          </h2>

          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 400,
              fontSize: '16px',
              color: '#7a6f6f',
              lineHeight: '27.2px',
              maxWidth: '641px',
              margin: 0,
            }}
          >
            Every existing match discovery platform starts with the same question: what do you
            want to watch? League, team, competition. But soccer fans don't actually think that
            way. They check their calendar first. The product existed to answer a question nobody
            was asking.
          </p>
        </div>
      </div>
    </section>
  );
}
