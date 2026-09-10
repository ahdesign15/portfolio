import { CaseStudySection, StatCard, InsightBlock } from './BleachShared';

export function BleachResearch() {
  return (
    <CaseStudySection
      sectionLabel="02 — Research & Insights"
      heading="The numbers told us where to focus."
      accent="#213744"
    >
      <p className="text-[#7a6f6f] text-[15px] md:text-[16px] leading-[27.2px]">
        Usability testing on the existing site before any redesign work. Three numbers
        defined the problem.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard value="100%" label="of participants — Requested additional navigation categories — couldn't find what they were looking for" />
        <StatCard value="100%" label="of participants — Failed to locate the search function on the existing site" />
        <StatCard value="66%" label="of participants — Couldn't complete expected task flows without assistance" />
      </div>

      <div className="flex flex-col gap-4">
        <InsightBlock
          label="Trust"
          title='"Quality of the product is the most important thing to me when buying new clothes."'
          accentBg="#e6edf1"
          accentBorder="#213744"
          accentText="#0f1e28"
        >
          <p className="m-0">
            Users couldn't evaluate quality through the existing site — no material descriptions,
            no model measurements, no fit context. They were being asked to commit money to
            a product they couldn't understand.
          </p>
        </InsightBlock>
        <InsightBlock
          label="Usability"
          title={`"I don't like websites that are difficult to use, with poor-quality photos and a confusing layout."`}
          accentBg="#e6edf1"
          accentBorder="#213744"
          accentText="#0f1e28"
        >
          <p className="m-0">
            Navigation assumed user expertise. High-traffic categories were buried. The search
            function — the most fundamental e-commerce tool — was invisible. Basic usability
            failures were killing conversion before brand trust even became relevant.
          </p>
        </InsightBlock>
      </div>

      <p className="text-[#9e9393] text-[12px] italic">
        Essential features missing from competitive analysis: model photos with measurements,
        detailed material descriptions, visible size guides, advanced filtering by size, price, and
        category.
      </p>
    </CaseStudySection>
  );
}