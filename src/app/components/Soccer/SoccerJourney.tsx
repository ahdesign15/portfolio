import React from 'react';

const phases = [
  {
    weeks: 'Weeks 1–2',
    title: 'Discovery & research',
    body: '12 user interviews. 4-week diary study design. Three user segments identified.',
  },
  {
    weeks: 'Weeks 3–4',
    title: 'Synthesis & strategy',
    body: 'Key behaviors mapped. Time-first mental model confirmed. Experience strategy defined.',
  },
  {
    weeks: 'Weeks 5–6',
    title: 'Design & decisions',
    body: 'Five key decisions made. Core flow designed. Time input patterns explored.',
  },
  {
    weeks: 'Weeks 7–8',
    title: 'Concept testing',
    body: 'Validated against all three user segments. Findings confirmed time-first resonance.',
  },
  {
    weeks: 'Next',
    title: 'Multi-match & personalization',
    body: 'Social features, time-based preference learning, and multi-match planning as next iteration.',
  },
];

export function SoccerJourney() {
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
          07 — Journey
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
            Eight weeks, research to prototype.
          </h2>

          {/* Timeline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {phases.map(({ weeks, title, body }, i) => (
              <div
                key={weeks}
                className='flex flex-col sm:flex-row gap-4 sm:gap-8 py-5'
                style={{
                  borderTop: i === 0 ? 'none' : '1px solid #e8e5e0',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: '10px',
                    color: '#9e9393',
                    letterSpacing: '0.8px',
                    textTransform: 'uppercase',
                    paddingTop: '3px',
                  }}
                >
                  {weeks}
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: '14px',
                      color: '#2a2020',
                    }}
                  >
                    {title}
                  </span>
                  <p
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 400,
                      fontSize: '13px',
                      color: '#7a6f6f',
                      lineHeight: '21.45px',
                      margin: 0,
                    }}
                  >
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
