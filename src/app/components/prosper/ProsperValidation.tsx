import { CaseStudySection, InsightBlock } from './ProsperShared';

const validationItems = [
  { icon: '!', iconBg: '#f5e6ea', iconColor: '#ae536e', title: 'Error states', description: 'Identified and designed missing error, empty, and fallback states across all five acts of the fan flow.' },
  { icon: '↻', iconBg: '#eef3e5', iconColor: '#49522e', title: 'Flow continuity', description: 'Mapped prototype connections end-to-end to ensure the investor demo told a complete, unbroken story.' },
  { icon: '◇', iconBg: '#f5e6ea', iconColor: '#ae536e', title: 'Missing screens', description: 'Gap analysis revealed 12+ screens assumed but never built — onboarding, payment, creation flows, confirmations.' },
  { icon: '✓', iconBg: '#eef3e5', iconColor: '#49522e', title: 'Component coverage', description: 'Audited every screen against the design system to catch inconsistencies, missing components, and token drift.' },
];

export function ProsperValidation() {
  return (
    <CaseStudySection sectionLabel="06 — Validation" heading="Catching what's missing before users do.">
      <p className="text-[#7a6f6f] text-[15px] md:text-[16px] leading-[27.2px]">
        There's no traditional user testing on a pre-seed product that hasn't shipped. But
        validation doesn't only happen in a usability lab. For Prosper XO, it happened through
        rigorous design auditing — systematically identifying what was missing, broken, or
        incomplete before the product ever reached a user's hands.
      </p>
      <p className="text-[#7a6f6f] text-[15px] md:text-[16px] leading-[27.2px]">
        Working through the complete flow exposed gaps: error states that didn't exist,
        screens that were assumed but never built, edge cases in the quest and reward loops,
        missing onboarding steps, and transitions that broke the narrative. Each gap was
        documented, prioritized, and addressed.
      </p>

      {/* 1 col mobile, 2 col sm+ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {validationItems.map(({ icon, iconBg, iconColor, title, description }) => (
          <div key={title} className="bg-white border border-[#e8e5e0] rounded-[10px] p-4 md:p-5 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="size-7 rounded-[7px] flex items-center justify-center font-bold text-[13px] shrink-0" style={{ background: iconBg, color: iconColor }}>
                {icon}
              </div>
              <span className="font-bold text-[13px] text-[#2a2020]">{title}</span>
            </div>
            <p className="text-[#7a6f6f] text-[12px] leading-[19.2px]">{description}</p>
          </div>
        ))}
      </div>

      <InsightBlock label="Why this matters" title="Validation before users.">
        <p className="m-0">
          For an investor showcase, gaps aren't just UX problems — they're credibility risks. A missing error
          state during a demo tells the room "this isn't thought through." Catching those moments before
          they happen is how design earns trust in the room.
        </p>
      </InsightBlock>
    </CaseStudySection>
  );
}
