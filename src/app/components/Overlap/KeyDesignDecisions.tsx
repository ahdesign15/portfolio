import React from 'react';

const decisions = [
  {
    number: 'Decision 01',
    title: 'Time window as primary input',
    body: "Research showed users plan around availability, not leagues. Making time selection the first interaction matches the user's actual mental model.",
    insight: '↳ Users think in time, not leagues',
    tag: 'Core UX',
  },
  {
    number: 'Decision 02',
    title: 'Streaming availability on match cards',
    body: 'Feasibility influences decisions early. Hiding access information until later forces users to backtrack — a guaranteed momentum killer.',
    insight: '↳ Feasibility matters early',
    tag: 'UI Pattern',
  },
  {
    number: 'Decision 03',
    title: 'Flexible time ranges over exact pickers',
    body: 'Users think in blocks: "Saturday afternoon," not 2:00–5:00 PM. Exact time inputs add unnecessary friction at the wrong moment.',
    insight: '↳ Time windows beat exact times',
    tag: 'Interaction',
  },
  {
    number: 'Decision 04',
    title: 'Progressive filter disclosure',
    body: "Presenting all filters upfront overwhelmed users. Revealing refinement options progressively maintains search flow and doesn't kill early momentum.",
    insight: '↳ Complexity kills momentum',
    tag: 'IA',
  },
  {
    number: 'Decision 05',
    title: 'Match importance over metadata',
    body: 'Users need enough context to make a fast decision — not every detail. Surfacing importance (Derby, Title Decider) does more work than exhaustive stats.',
    insight: '↳ Context beats comprehensiveness',
    tag: 'Content',
  },
];

export function KeyDesignDecisions() {
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
          05 — Key Decisions
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
            Five decisions, all tied directly to research.
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
            Every design decision connects to a specific insight. No feature added without a finding to justify it.
          </p>

          {/* Decision cards grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              gap: '20px',
              paddingTop: '8px',
            }}
          >
            {decisions.map(({ number, title, body, insight, tag }) => (
              <div
                key={number}
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
                    fontSize: '10px',
                    color: '#9e9393',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
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
                    lineHeight: 'normal',
                  }}
                >
                  {title}
                </span>
                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 400,
                    fontSize: '12px',
                    color: '#7a6f6f',
                    lineHeight: '19.2px',
                    margin: 0,
                    paddingTop: '4px',
                  }}
                >
                  {body}
                </p>
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: '11px',
                    color: '#2d6a2d',
                    paddingTop: '4px',
                    paddingBottom: '9px',
                  }}
                >
                  {insight}
                </span>
                <div
                  style={{
                    display: 'inline-flex',
                    backgroundColor: '#e8f4e8',
                    borderRadius: '9999px',
                    padding: '4px 12px',
                    alignSelf: 'flex-start',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: '10px',
                      color: '#1a3d1a',
                      letterSpacing: '0.7px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
