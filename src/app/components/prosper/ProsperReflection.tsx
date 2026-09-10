import { CaseStudySection } from './ProsperShared';

export function ProsperReflection() {
  return (
    <>
      <CaseStudySection sectionLabel="08 — Reflection" heading="What founding design really takes.">
        <p className="text-[#7a6f6f] text-[15px] md:text-[16px] leading-[27.2px]">
          The hardest lesson was knowing when my design instincts were wrong. In V2, I pushed
          for a layered navigation architecture — it was interesting to design. The founder pulled
          us back. That tension became the shared-bottom-nav decision that's now one of the
          product's defining features. The best design outcome in this project came from being overruled.
        </p>
        <p className="text-[#7a6f6f] text-[15px] md:text-[16px] leading-[27.2px]">
          Working at founding speed means making a hundred decisions before you have data
          to justify any of them. The design system was the only thing that kept those decisions
          from compounding into chaos. Without it, working with Claude Code at the pace we
          needed would have produced inconsistency at scale instead of speed at scale.
        </p>
        <p className="text-[#7a6f6f] text-[15px] md:text-[16px] leading-[27.2px]">
          This work sets up the next phase: a design system built out to cover the full product
          surface, real users, and testing that goes beyond the prototype. The foundation is
          there. What comes next is the product itself.
        </p>
      </CaseStudySection>

      {/* Next case study */}
      <div className="w-full bg-[#302b1b] py-16 md:py-24">
        <div className="max-w-[984px] mx-auto px-6 md:px-12 flex flex-col gap-4">
          <span className="font-bold text-[11px] text-[#d2bab6] tracking-[1.1px] uppercase">
            Next Case Study
          </span>
          <a
            href="/hooktheory"
            className="font-bold text-white text-[40px] sm:text-[52px] md:text-[64px] leading-[1.1] tracking-[-1.28px] hover:text-[#d2bab6] transition-colors"
          >
            HookTheory →
          </a>
          <p className="text-[#d2bab6] text-[15px] md:text-[16px]">Rethinking music theory for everyone</p>
        </div>
      </div>
    </>
  );
}
