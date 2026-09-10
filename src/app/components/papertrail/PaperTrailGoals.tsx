import { CaseStudySection, InsightBlock } from './PaperTrailShared';

const goals = [
  { num: '01', label: 'Encourage reflection over performance' },
  { num: '02', label: 'Reduce social comparison at every touchpoint' },
  { num: '03', label: 'Create a calm, distraction-free experience' },
];

export function PaperTrailGoals() {
  return (
    <CaseStudySection
      sectionLabel="03 — Design Goals"
      heading="Four constraints that shaped everything."
      accent="#8a6a50"
    >
      <p className="text-[#7a6f6f] text-[15px] md:text-[16px] leading-[27.2px]">
        Each goal came directly from research. If a feature didn't serve at least one of these,
        it didn't ship.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {goals.map(({ num, label }) => (
          <div
            key={num}
            className="bg-white border border-[#e8e5e0] rounded-[10px] flex flex-col items-center py-5 md:py-6 px-4 gap-2"
          >
            <span className="font-bold text-[32px] md:text-[42px] text-[#2a2020] tracking-[-1.26px] leading-[1.1]">
              {num}
            </span>
            <span className="text-[10px] md:text-[11px] text-[#9e9393] text-center leading-[15.95px]">
              {label}
            </span>
          </div>
        ))}
      </div>

      <InsightBlock
        label="Fourth goal"
        title="Support consistency without external pressure."
        accentBg="#f2ece6"
        accentBorder="#8a6a50"
        accentText="#5a3e2a"
      >
        <p className="m-0">
          The app needed to be worth returning to even when nobody was watching. That meant
          building intrinsic rewards into the experience — progress, reflection, craft — rather
          than social ones.
        </p>
      </InsightBlock>
    </CaseStudySection>
  );
}
