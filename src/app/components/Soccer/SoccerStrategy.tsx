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

export function SoccerStrategy() {
  return (
    <section className="w-full border-t border-[#e8e5e0] bg-[#f9f9f7] py-24 px-6 md:px-10 lg:px-24">
      <div className="max-w-[1080px] mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-12">

          {/* Section label */}
          <div className="md:w-[148px] shrink-0">
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: '11px',
                color: '#2d6a2d',
                letterSpacing: '1.1px',
                textTransform: 'uppercase',
                lineHeight: 'normal',
                margin: 0,
              }}
            >
              03 — Experience<br />Strategy
            </p>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col gap-6">
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
                margin: 0,
              }}
            >
              This reduces cognitive load at exactly the right moment — before the user has
              committed to a decision — and surfaces feasibility alongside match details rather
              than as an afterthought.
            </p>

            {/* Flow steps — stack on mobile, row on lg */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-3">
              {steps.map(({ number, title, body }, i) => (
                <div key={number} className="relative">
                  {/* Card */}
                  <div
                    className="h-full"
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

                  {/* Arrow — only on lg between cards */}
                  {i < steps.length - 1 && (
                    <span
                      className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 items-center justify-center text-[#9e9393] text-lg"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
