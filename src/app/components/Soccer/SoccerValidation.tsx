import React from 'react';

const findings = [
  {
    icon: '✓',
    title: 'Time-first resonance',
    body: 'Time-first framing resonated strongly with all user segments during concept testing. "This is how I actually think about it" — consistent across all three segments.',
  },
  {
    icon: '↻',
    title: 'Progressive disclosure',
    body: 'Progressive disclosure maintained flow without sacrificing the ability to refine. Users reached match selection without abandoning the search.',
  },
  {
    icon: '!',
    title: 'Time input patterns',
    body: "Would need to test more variations of time input — sliders vs. presets vs. natural language. The right pattern depends on the user's context and device.",
  },
  {
    icon: '◇',
    title: 'Multi-match planning',
    body: 'A "full Saturday of football" use case emerged — deeper exploration of multi-match discovery would be the logical next iteration.',
  },
];

export function SoccerValidation() {
  return (
    <section className="w-full border-t border-[#e8e5e0] bg-[#f9f9f7] py-24 px-6 md:px-10 lg:px-24">
      <div className="max-w-[1080px] mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">

          {/* Section label */}
          <div className="md:w-[148px] shrink-0"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '11px', color: '#2d6a2d', letterSpacing: '1.1px', textTransform: 'uppercase' }}
          >
            06 — Validation
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col gap-6">
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '30px', color: '#2a2020', letterSpacing: '-0.3px', lineHeight: '36px', margin: 0 }}>
              Tested against the mental model, not the interface.
            </h2>

            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: '16px', color: '#7a6f6f', lineHeight: '27.2px', margin: 0 }}>
              Concept testing focused on whether the time-first approach matched how users
              actually plan viewing — not just whether the buttons were clear.
            </p>

            {/* Findings — 1 col mobile, 2 col sm+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {findings.map(({ icon, title, body }) => (
                <div
                  key={title}
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
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '20px', color: '#2d6a2d' }}>{icon}</span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '14px', color: '#2a2020' }}>{title}</span>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: '13px', color: '#7a6f6f', lineHeight: '21.45px', margin: 0 }}>{body}</p>
                </div>
              ))}
            </div>

            {/* Why this matters callout */}
            <div
              style={{
                backgroundColor: '#e8f4e8',
                borderLeft: '3px solid #2d6a2d',
                borderRadius: '0 10px 10px 0',
                padding: '20px 24px 20px 27px',
                display: 'flex',
                flexDirection: 'column',
                gap: '11px',
              }}
            >
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '9.5px', color: '#1a3d1a', letterSpacing: '0.665px', textTransform: 'uppercase' }}>
                Why this matters
              </span>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '16px', color: '#2a2020', lineHeight: '22.4px', margin: 0 }}>
                Matching the mental model is the whole job.
              </p>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: '13px', color: '#7a6f6f', lineHeight: '21.45px', margin: 0 }}>
                The research connection made alignment easy. When a stakeholder questioned a decision, the
                answer was always "here's the finding that drove it." Design and research weren't separate tracks
                — they were the same conversation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
