import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Time Selection',
    body: 'User enters available window — "Saturday afternoon," not a specific hour.',
  },
  {
    number: '02',
    title: 'Match Results',
    body: 'Filtered matches with key context and streaming availability shown upfront.',
  },
  {
    number: '03',
    title: 'Match Detail',
    body: 'Deeper context — importance, teams, broadcast — for users who want it.',
  },
  {
    number: '04',
    title: 'Action',
    body: 'Direct path to streaming or calendar save — one tap from discovery to commitment.',
  },
];

export function ExperienceStrategy() {
  return (
    <section
      style={{
        backgroundColor: '#f9f9f7',
        borderTop: '1px solid #e8e5e0',
        paddingTop: '97px',
        paddingBottom: '96px',
        paddingLeft: '468px',
        paddingRight: '468px',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '148px minmax(0, 1fr)',
          gap: '48px',
        }}
      >
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
          <p style={{ margin: 0 }}>03 — Experience</p>
          <p style={{ margin: 0 }}>Strategy</p>
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
            Invert the discovery model.
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
            The core insight was simple and structural: the entire discovery model needed to be
            inverted. Instead of browsing leagues and teams to find a time that works, users start
            with their availability and discover relevant matches within that constraint. Time-first
            discovery.
          </p>

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
            This reduces cognitive load at exactly the right moment — before the user has
            committed to a decision — and surfaces feasibility alongside match details rather
            than as an afterthought.
          </p>

          {/* Flow steps */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0,1fr) 18px minmax(0,1fr) 18px minmax(0,1fr) 18px minmax(0,1fr)',
              gap: '16px',
              paddingTop: '12px',
            }}
          >
            {steps.map(({ number, title, body }, i) => (
              <React.Fragment key={number}>
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e8e5e0',
                    borderRadius: '10px',
                    padding: '21px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: '28px',
                      color: '#e8e5e0',
                      letterSpacing: '-0.56px',
                    }}
                  >
                    {number}
                  </span>
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
                  <span
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 400,
                      fontSize: '12px',
                      color: '#7a6f6f',
                      lineHeight: '19.2px',
                    }}
                  >
                    {body}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: '18px',
                      color: '#9e9393',
                    }}
                  >
                    →
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
