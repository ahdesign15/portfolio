import { CaseStudySection, ValidationCard, InsightBlock } from './PaperTrailShared';

export function PaperTrailValidation() {
  return (
    <CaseStudySection
      sectionLabel="05 — Testing & Validation"
      heading="Less pressure, more intention."
      accent="#8a6a50"
    >
      <p className="text-[#7a6f6f] text-[15px] md:text-[16px] leading-[27.2px]">
        Usability testing focused on the posting flow — whether the journaling-first approach
        felt natural or forced, and whether the absence of metrics changed how participants
        described the experience.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ValidationCard
          icon="✓"
          iconBg="#eef3e5"
          iconColor="#49522e"
          title="Posting flow clarity"
          description='Users completed posting flows with fewer questions. The journaling step, which we expected to create friction, was described as "helpful" rather than "extra work."'
        />
        <ValidationCard
          icon="✓"
          iconBg="#f2ece6"
          iconColor="#8a6a50"
          title="Emotional response"
          description="Participants reported feeling less pressure and more intention when sharing. The removal of visible metrics was noticed and welcomed — several users asked why other apps don't do this."
        />
        <ValidationCard
          icon="↻"
          iconBg="#f2ece6"
          iconColor="#8a6a50"
          title="Onboarding adjusted"
          description='Simplified onboarding steps after testing. Initial version explained the "no metrics" decision too heavily — users wanted to experience it, not read about it.'
        />
        <ValidationCard
          icon="!"
          iconBg="#eef3e5"
          iconColor="#49522e"
          title="Journaling prompts"
          description='Clarified journaling prompts after early sessions revealed ambiguity. "Describe your process" outperformed "what were you thinking?" as an opening question.'
        />
      </div>

      <InsightBlock
        label="Key finding"
        title="Designing for emotional well-being requires removal, not addition."
        accentBg="#f2ece6"
        accentBorder="#8a6a50"
        accentText="#5a3e2a"
      >
        <p className="m-0">
          The features that mattered most were the ones we didn't build. Every time we were
          tempted to add something, we asked whether it would serve the artist's work or their
          audience. That question cut most ideas before they made it to the prototype.
        </p>
      </InsightBlock>
    </CaseStudySection>
  );
}
