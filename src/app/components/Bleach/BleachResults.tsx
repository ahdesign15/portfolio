import imgTops from '../../../imports/image-5.png';
import { CaseStudySection, StatCard, InsightBlock } from './BleachShared';

export function BleachResults() {
  return (
    <CaseStudySection
      sectionLabel="05 — Results"
      heading="From 34% to 100%."
      accent="#213744"
    >
      <p className="text-[#7a6f6f] text-[15px] md:text-[16px] leading-[27.2px]">
        Post-redesign usability testing measured against the same tasks as the baseline.
        Every metric moved.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard value="100%" label="up from 34% — Navigation task success rate" />
        <StatCard value="100%" label="up from 0% — Search function discoverability" />
        <StatCard value="75%" label="estimated — Checkout completion rate" />
      </div>

      <InsightBlock
        label="Why this matters"
        title="Navigation success went from a coin flip to a certainty."
        accentBg="#e6edf1"
        accentBorder="#213744"
        accentText="#0f1e28"
      >
        <p className="m-0 mb-3">
          A 34% navigation success rate means most users can't find what they're looking for.
          That's not a design preference issue — it's a conversion failure. Every user who
          leaves without finding a product is a purchase that didn't happen.
        </p>
        <p className="m-0">
          Moving from 0% to 100% search discoverability is the clearest possible proof that the
          original design had a fundamental problem — and that the fix worked.
        </p>
      </InsightBlock>

      {/* Product photography strip */}
      <div className="rounded-[12px] overflow-hidden border border-[#e8e5e0]">
        <div className="overflow-x-auto">
          <img
            src={imgTops}
            alt="Bleach USA product photography"
            className="h-[200px] md:h-[300px] w-auto max-w-none object-cover"
          />
        </div>
      </div>
    </CaseStudySection>
  );
}
