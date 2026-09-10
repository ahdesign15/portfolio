import { CaseStudySection, InsightBlock } from './ProsperShared';

const phases = [
  {
    label: 'Phase 01',
    title: 'Generate',
    description: 'Use Claude as a thinking partner. Explore ideas broadly. Produce raw material — flows, layouts, edge cases, variations.',
  },
  {
    label: 'Phase 02',
    title: 'Deconstruct',
    description: "Take every output apart piece by piece. Evaluate each decision against the design system. Keep what works, discard what doesn't.",
  },
  {
    label: 'Phase 03',
    title: 'Reassemble',
    description: 'Rebuild with intention. Every pixel is a design decision, not a default. The output is craft — the AI was just the starting material.',
  },
];

export function ProsperProcess() {
  return (
    <CaseStudySection sectionLabel="05 — Process" heading="AI as a tool, not a shortcut.">
      <p className="text-[#7a6f6f] text-[15px] md:text-[16px] leading-[27.2px]">
        I don't use AI to get the job done. I don't simply take what is given. I use it like a Jackson
        Pollock painting — generate, then take it apart piece by piece, and reassemble like a Lego set.
      </p>
      <p className="text-[#7a6f6f] text-[15px] md:text-[16px] leading-[27.2px]">
        Using AI isn't about accepting what's given. It's about having more material to be critical of.
        The speed comes from how fast you can evaluate, not how fast you can generate.
      </p>

      {/* 1 col mobile, 3 col sm+ with arrows hidden on mobile */}
      <div className="flex flex-col sm:flex-row items-stretch gap-4 mt-2">
        {phases.map((phase, i) => (
          <div key={phase.label} className="contents sm:flex sm:items-center sm:gap-4 sm:flex-1">
            <div className="bg-white border border-[#e8e5e0] rounded-[10px] p-4 md:p-5 flex flex-col gap-2 flex-1">
              <span className="font-bold text-[11px] text-[#ae536e] tracking-[1.1px] uppercase">{phase.label}</span>
              <p className="font-bold text-[14px] text-[#2a2020]">{phase.title}</p>
              <p className="text-[#7a6f6f] text-[12px] leading-[19.2px]">{phase.description}</p>
            </div>
            {i < phases.length - 1 && (
              <span className="hidden sm:block text-[#9e9393] text-[18px] shrink-0">→</span>
            )}
          </div>
        ))}
      </div>

      <InsightBlock label="Process philosophy" title="Generate → Deconstruct → Reassemble">
        <p className="m-0 mb-3">
          Every AI-assisted output went through the same cycle: generate a broad set of possibilities,
          break them down to their individual decisions, keep what serves the product, discard what
          doesn't, and rebuild with intention.
        </p>
        <p className="m-0">
          This isn't a one-size-fits-all workflow. It's a craft practice that uses AI to expand the surface area
          of exploration — then applies design judgment to refine it down to the right answer.
        </p>
      </InsightBlock>
    </CaseStudySection>
  );
}
