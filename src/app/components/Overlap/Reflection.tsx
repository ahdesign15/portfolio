import React from 'react';

export function Reflection() {
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
          }}
        >
          07 — Reflection
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
            When research gives you permission to be radical.
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
            The time-first concept felt risky to propose — it meant inverting the entire paradigm
            that every existing platform uses. What made it defensible wasn't instinct, it was the
            research. Every interview said the same thing. When the finding is that consistent, the
            design decision becomes obvious.
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
            What I'd test next: more variation in the time input pattern itself. Sliders, presets, and
            natural language all have different implications depending on context — casual couch
            browsing vs. quick planning on a phone. The right answer is probably different for
            different segments.
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
            The work here sets up a personalization layer: if you know a user's typical time
            windows and viewing habits, you can surface defaults that require zero input. The
            time-first model actually gets easier the longer someone uses it.
          </p>
        </div>
      </div>
    </section>
  );
}
