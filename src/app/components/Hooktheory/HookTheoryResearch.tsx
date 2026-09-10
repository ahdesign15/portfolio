import { CaseStudySection } from './HookTheoryShared';

const insights = [
  {
    label: 'Learnability',
    title: '"I want to understand music, not learn how to use this."',
    description:
      'Users consistently separated their goal (understanding music) from their experience of the tool (navigating a complex interface). The product was getting in the way of itself.',
  },
  {
    label: 'Trust',
    title: "The interface undermined the product's credibility.",
    description:
      'Multiple users described the visual design as feeling "dated" or "like a student project." For professional producers especially, the aesthetic was causing them to question whether the data and tools could be trusted.',
  },
  {
    label: 'Discovery',
    title: 'Key features were hidden behind prior knowledge.',
    description:
      'To find the most valuable parts of the platform — the chord analyzer, the song database, the progression tools — users needed to already know they existed. New users had no path to discovering what made the product worth using.',
  },
];

export function HookTheoryResearch() {
  return (
    <CaseStudySection
      sectionLabel="03 — Research & Insights"
      heading="What users actually told us."
      accent="#185fa5"
    >
      <p className="text-[#7a6f6f] text-[15px] md:text-[16px] leading-[27.2px]">
        We spoke with users in the 24–50 age range across skill levels — people who wanted
        to learn music theory but kept bouncing off the product before they got anywhere.
        Three things came up in almost every conversation.
      </p>

      <div className="flex flex-col gap-4">
        {insights.map(({ label, title, description }) => (
          <div
            key={label}
            className="bg-[#e8f0f9] border-l-[3px] border-[#185fa5] rounded-r-[10px] pt-6 pb-5 pl-6 pr-5 md:pl-7 md:pr-6 flex flex-col gap-3"
          >
            <span className="font-bold text-[9.5px] text-[#0d3a66] tracking-[0.665px] uppercase">
              {label}
            </span>
            <p className="font-bold text-[15px] md:text-[16px] text-[#2a2020] leading-[22.4px]">{title}</p>
            <p className="text-[#7a6f6f] text-[13px] leading-[21.45px]">{description}</p>
          </div>
        ))}
      </div>

      <p className="text-[#9e9393] text-[12px] italic">
        Methods: User interviews and surveys (24–50 age range), heuristic evaluation of the
        existing platform, competitive and comparative analysis of music education and
        creative tools.
      </p>
    </CaseStudySection>
  );
}
