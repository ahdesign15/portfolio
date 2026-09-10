import { CaseStudySection } from './HookTheoryShared';

export function HookTheoryReflection() {
  return (
    <>
      <CaseStudySection
        sectionLabel="08 — Reflection"
        heading="What a 3-week engagement actually teaches you."
        accent="#185fa5"
      >
        <p className="text-[#7a6f6f] text-[15px] md:text-[16px] leading-[27.2px]">
          The hardest part of a 3-week engagement isn't the design — it's the alignment. Four
          designers, one client, one deadline. The pattern that kept us coherent was simple:
          one person owned the IA, one owned the visual language, and we diverged by layer
          and converged daily. We made better decisions faster because we weren't all trying
          to decide the same things at the same time.
        </p>
        <p className="text-[#7a6f6f] text-[15px] md:text-[16px] leading-[27.2px]">
          The thing I underestimated was how much the existing product's complexity would
          shape our decisions. Every time we simplified, we had to ask whether we were
          removing confusion or removing capability. That question — "whose confusion are we
          solving?" — is what I'd start with on a project like this now.
        </p>
        <p className="text-[#7a6f6f] text-[15px] md:text-[16px] leading-[27.2px]">
          This redesign lays a foundation. It doesn't finish the product. The next iteration needs
          more users, more testing across skill levels, and a design system built out to cover the
          full product surface. That work is worth doing — because the core product value is
          genuinely strong.
        </p>
      </CaseStudySection>

      <div className="w-full bg-[#302b1b] py-16 md:py-24">
        <div className="max-w-[984px] mx-auto px-6 md:px-12 flex flex-col gap-4">
          <span className="font-bold text-[11px] text-[#d2bab6] tracking-[1.1px] uppercase">
            Next Case Study
          </span>
          <a
            href="/papertrail"
            className="font-bold text-white text-[40px] sm:text-[52px] md:text-[64px] leading-[1.1] tracking-[-1.28px] hover:text-[#d2bab6] transition-colors"
          >
            PaperTrail →
          </a>
          <p className="text-[#d2bab6] text-[15px] md:text-[16px]">A reflective social platform for artists</p>
        </div>
      </div>
    </>
  );
}
