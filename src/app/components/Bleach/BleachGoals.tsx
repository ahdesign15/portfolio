import { CaseStudySection } from './BleachShared';

const goals = [
  { num: '01', title: 'Make brand differentiation visible', description: 'Through every interaction — not just the homepage. Brand identity as a system, not a logo.', iconBg: '#e6edf1', iconColor: '#213744' },
  { num: '02', title: 'Prioritize transparency', description: 'Size guides, materials, fit context — everything needed to answer "is this worth it?" before the user asks.', iconBg: '#eef3e5', iconColor: '#49522e' },
  { num: '03', title: 'Surface high-traffic categories', description: 'Navigation rebuilt around what users actually look for, not what the site structure assumed they would.', iconBg: '#e6edf1', iconColor: '#213744' },
  { num: '04', title: 'Align digital to physical', description: 'The product is industrial and bold. The website needed to match — not feel generic in comparison.', iconBg: '#eef3e5', iconColor: '#49522e' },
];

export function BleachGoals() {
  return (
    <CaseStudySection
      sectionLabel="03 — Design Goal"
      heading="One goal, four strategies."
      accent="#213744"
    >
      <p className="text-[#7a6f6f] text-[15px] md:text-[16px] leading-[27.2px]">
        Create an intuitive, engaging e-commerce experience that clearly communicates
        Bleach's value, guides users from exploration to purchase, and establishes a strong
        brand identity. Four strategic goals shaped how we got there.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {goals.map(({ num, title, description, iconBg, iconColor }) => (
          <div key={num} className="bg-white border border-[#e8e5e0] rounded-[10px] p-4 md:p-5 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div
                className="size-7 rounded-[7px] flex items-center justify-center font-bold text-[13px] shrink-0"
                style={{ background: iconBg, color: iconColor }}
              >
                {num}
              </div>
              <span className="font-bold text-[13px] text-[#2a2020]">{title}</span>
            </div>
            <p className="text-[#7a6f6f] text-[12px] leading-[19.2px]">{description}</p>
          </div>
        ))}
      </div>
    </CaseStudySection>
  );
}
