import { CaseStudySection } from './PaperTrailShared';

export function PaperTrailContext() {
  return (
    <CaseStudySection
      sectionLabel="01 — Context"
      heading="When sharing becomes performing."
      accent="#8a6a50"
    >
      <p className="text-[#7a6f6f] text-[15px] md:text-[16px] leading-[27.2px]">
        Many artists feel discouraged by existing social platforms that prioritize engagement
        metrics, visibility, and algorithmic performance. These systems often shift creative
        motivation away from personal expression and toward validation-seeking behavior.
        The pressure isn't just uncomfortable — it changes what people choose to make.
      </p>
      <p className="text-[#7a6f6f] text-[15px] md:text-[16px] leading-[27.2px]">
        PaperTrail explores what a platform looks like when you remove the performance
        entirely.
      </p>
    </CaseStudySection>
  );
}
