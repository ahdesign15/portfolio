import { CaseStudySection, InsightBlock } from './BleachShared';

export function BleachContext() {
  return (
    <CaseStudySection
      sectionLabel="01 — Context"
      heading="Invisible value."
      accent="#213744"
    >
      <p className="text-[#7a6f6f] text-[15px] md:text-[16px] leading-[27.2px]">
        Users couldn't tell what made Bleach worth choosing over competitors. The problem
        wasn't just bad navigation — it was invisible value. The product existed. The brand
        didn't. And without a brand, the product had no reason to be trusted.
      </p>

      <InsightBlock
        label="Problem statement"
        title={`"Users couldn't find products, understand quality, or see brand value."`}
        accentBg="#e6edf1"
        accentBorder="#213744"
        accentText="#0f1e28"
      >
        <p className="m-0">
          Three failures in one sentence. Each one a separate design problem. Each one measurable.
        </p>
      </InsightBlock>
    </CaseStudySection>
  );
}