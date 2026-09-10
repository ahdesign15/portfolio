import { CaseStudySection } from './PaperTrailShared';

export function PaperTrailReflection() {
  return (
    <>
      <CaseStudySection
        sectionLabel="07 — Reflection"
        heading="Constraint as a design tool."
        accent="#8a6a50"
      >
        <p className="text-[#7a6f6f] text-[15px] md:text-[16px] leading-[27.2px]">
          The hardest part of this project wasn't removing likes — it was resisting the urge to
          add something back when the product felt sparse. There's a pull toward
          completeness in UX that can work against intentional restraint. Every time the
          prototype felt "empty," the right question was whether it should feel that way.
        </p>
        <p className="text-[#7a6f6f] text-[15px] md:text-[16px] leading-[27.2px]">
          What I'd do differently: visual design deserves more time. The interaction model is
          strong, but the app could be more distinctive on the surface. The next iteration would
          invest more in the aesthetic language — what does calm, intentional creative sharing
          actually look like at the pixel level?
        </p>
        <p className="text-[#7a6f6f] text-[15px] md:text-[16px] leading-[27.2px]">
          PaperTrail shows that designing for emotional well-being is a product problem, not
          just a UI preference. The decisions about what the platform doesn't do are as
          consequential as what it does. That framing is something I'd carry into any project
          where user wellbeing is part of the brief.
        </p>
      </CaseStudySection>

      <div className="w-full bg-[#302b1b] py-16 md:py-24">
        <div className="max-w-[984px] mx-auto px-6 md:px-12 flex flex-col gap-4">
          <span className="font-bold text-[11px] text-[#d2bab6] tracking-[1.1px] uppercase">
            Next Case Study
          </span>
          <a
            href="/bleach"
            className="font-bold text-white text-[40px] sm:text-[52px] md:text-[64px] leading-[1.1] tracking-[-1.28px] hover:text-[#d2bab6] transition-colors"
          >
            Bleach USA →
          </a>
          <p className="text-[#d2bab6] text-[15px] md:text-[16px]">Turning product discovery into brand discovery</p>
        </div>
      </div>
    </>
  );
}
