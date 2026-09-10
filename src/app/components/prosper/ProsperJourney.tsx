import { CaseStudySection } from './ProsperShared';

const timeline = [
  { date: 'Oct 2025', title: 'First exploration', description: "Initial design direction — broad, unbranded, intentionally loose. Built to surface assumptions and start shaping the product's architecture.", dotColor: '#49522e' },
  { date: 'Nov – Jan', title: 'Iteration & system building', description: "Second design direction with early design system. Worked with brand design on typography and visual identity. Closer, but still missing the depth the founder's vision demanded.", dotColor: '#49522e' },
  { date: 'Feb 2026', title: 'Final sprint begins', description: 'Third and final design direction — animation, positive feedback, support flows, and the interaction depth that makes the product feel alive. Built on a mature design system that enabled speed.', dotColor: '#49522e' },
  { date: 'Feb – Apr 2026', title: 'Production & validation', description: '45 screens across fan, artist, and admin surfaces. Gap analysis, error states, missing screen identification. Claude Code integration for velocity with design system as quality gate.', dotColor: '#49522e' },
  { date: 'Present', title: 'The raise', description: 'Prosper XO is heading into investor conversations. The design work built the credibility to get in the room. The product is built to keep them there.', dotColor: '#ae536e' },
];

export function ProsperJourney() {
  return (
    <CaseStudySection sectionLabel="07 — Journey" heading="From October to the investor room.">
      {/* Mobile: vertical stack. sm+: horizontal timeline */}
      <div className="relative w-full">
        {/* Horizontal track — only visible sm+ */}
        <div className="hidden sm:block absolute left-0 right-0 top-[10px] h-[1.5px] bg-[#e8e5e0]" />

        {/* Vertical track — only visible on mobile */}
        <div className="sm:hidden absolute left-[4px] top-0 bottom-0 w-[1.5px] bg-[#e8e5e0]" />

        {/* Items */}
        <div className="flex flex-col sm:flex-row gap-0 sm:gap-6 sm:justify-between relative">
          {timeline.map(({ date, title, description, dotColor }, i) => (
            <div
              key={date}
              className="relative flex flex-col gap-2 pl-7 sm:pl-0 sm:pt-8 pb-8 sm:pb-0"
              style={{ flex: '1 0 0' }}
            >
              {/* Dot — horizontal position for sm+, vertical position for mobile */}
              <div
                className="absolute sm:top-[-26px] sm:left-0 top-0 left-0 size-[10px] rounded-[2px] border-2 border-[#f9f9f7]"
                style={{ background: dotColor }}
              />
              <span className="font-bold text-[10px] text-[#ae536e] tracking-[1px] uppercase">{date}</span>
              <p className="font-bold text-[13px] md:text-[14px] text-[#2a2020] leading-[21px]">{title}</p>
              <p className="text-[#7a6f6f] text-[11px] md:text-[12px] leading-[19.2px]">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </CaseStudySection>
  );
}
