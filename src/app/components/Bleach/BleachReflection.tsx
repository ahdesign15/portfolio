import { CaseStudySection } from './BleachShared';

export function BleachReflection() {
  return (
    <>
      <CaseStudySection
        sectionLabel="07 — Reflection"
        heading="When the baseline is 34%, the redesign isn't optional."
        accent="#213744"
      >
        <p className="text-[#7a6f6f] text-[15px] md:text-[16px] leading-[27.2px]">
          Two weeks is a tight timeline for a complete e-commerce redesign. What made it
          possible was clarity about the problem. The baseline usability testing removed
          ambiguity — there was no question about what needed to change. When you know
          exactly what's broken, prioritization is easy.
        </p>
        <p className="text-[#7a6f6f] text-[15px] md:text-[16px] leading-[27.2px]">
          The hardest call was brand work within a usability-focused brief. The navigation and
          product page problems were clear. The brand problem was real but harder to
          quantify. I made the case that usability improvements without brand work would leave
          users with a site they could navigate but no reason to trust — and that trust was the
          actual conversion problem.
        </p>
        <p className="text-[#7a6f6f] text-[15px] md:text-[16px] leading-[27.2px]">
          The redesign successfully transformed Bleach USA from a confusing storefront into a
          competitive, brand-forward experience. By removing friction and adding
          transparency, we removed the barriers between browsing and buying. Phase 2 —
          lookbook, user content, wishlist — builds on a foundation that actually works now.
        </p>
      </CaseStudySection>

      {/* Closing — this is the last case study, so it links back to all work instead of "next" */}
      <div className="w-full bg-[#302b1b] py-16 md:py-24">
        <div className="max-w-[984px] mx-auto px-6 md:px-12 flex flex-col gap-4">
          <span className="font-bold text-[11px] text-[#d2bab6] tracking-[1.1px] uppercase">
            That's all five
          </span>
          <a
            href="/#work"
            className="font-bold text-white text-[40px] sm:text-[52px] md:text-[64px] leading-[1.1] tracking-[-1.28px] hover:text-[#d2bab6] transition-colors"
          >
            ← Back to all work
          </a>
        </div>
      </div>
    </>
  );
}
