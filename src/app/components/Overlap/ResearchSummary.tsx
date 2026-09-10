import React from 'react';

const segments = [
  {
    label: 'Casual Viewers',
    headline: 'Watch 1–2 matches per month. Time first, team second.',
    body: 'These users plan viewing around free time, not fixtures. They'll watch any compelling match that fits their window — team loyalty is secondary to convenience.',
  },
  {
    label: 'Dedicated Fans',
    headline: '8+ matches per month, but still discover around availability.',
    body: 'They schedule time for key matches, but find secondary matches by checking what fits their calendar. Even heavy users start with when, not what.',
  },
  {
    label: 'Social Watchers',
    headline: '"What\'s on when we meet?" is the only question that matters.',
    body: 'Group viewing demands an instant answer based on a shared time window. Every other filter is a secondary consideration.',
  },
];

const stats = [
  { number: '12', label: 'User interviews and diary study participants' },
  { number: '4 wks', label: 'Diary study tracking real viewing habits' },
  { number: '3', label: 'Distinct user segments, one shared mental model' },
];

export function ResearchSummary() {
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
          <p style={{ margin: 0 }}>02 — Research &</p>
          <p style={{ margin: 0 }}>Insights</p>
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
            What we learned from 12 fans.
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
            Through 12 user interviews and 4-week diary studies tracking real viewing habits, we
            mapped how fans actually discover and select matches. Three user types emerged —
            and all of them started with availability, not preference.
          </p>

          {/* Stats row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              gap: '16px',
              paddingTop: '8px',
            }}
          >
            {stats.map(({ number, label }) => (
              <div
                key={number}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e8e5e0',
                  borderRadius: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '7.47px',
                  padding: '24px 25px 25px',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: '42px',
                    color: '#2a2020',
                    letterSpacing: '-1.26px',
                    lineHeight: '46.2px',
                    textAlign: 'center',
                  }}
                >
                  {number}
                </span>
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 400,
                    fontSize: '11px',
                    color: '#9e9393',
                    lineHeight: '15.95px',
                    textAlign: 'center',
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* User segments */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingTop: '8px' }}>
            {segments.map(({ label, headline, body }) => (
              <div
                key={label}
                style={{
                  backgroundColor: '#e8f4e8',
                  borderLeft: '3px solid #2d6a2d',
                  borderRadius: '0 10px 10px 0',
                  padding: '20px 24px 20px 27px',
                  maxWidth: '641px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '11px',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: '9.5px',
                    color: '#1a3d1a',
                    letterSpacing: '0.665px',
                    textTransform: 'uppercase',
                  }}
                >
                  {label}
                </span>
                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: '16px',
                    color: '#2a2020',
                    lineHeight: '22.4px',
                    margin: 0,
                  }}
                >
                  {headline}
                </p>
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
            ))}
          </div>

          {/* Key behaviors footnote */}
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: '13px',
              color: '#9e9393',
              lineHeight: 'normal',
              maxWidth: '641px',
              margin: 0,
            }}
          >
            Key behaviors: Users check availability first, then browse. Time windows matter more than kick-off times.
            Feasibility (streaming access) influences decisions early. Complexity kills search momentum.
          </p>
        </div>
      </div>
    </section>
  );
}
