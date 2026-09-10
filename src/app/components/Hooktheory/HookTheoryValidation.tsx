import { CaseStudySection, ValidationCard, InsightBlock } from './HookTheoryShared';

export function HookTheoryValidation() {
  return (
    <CaseStudySection
      sectionLabel="06 — Testing & Validation"
      heading="Catching what's broken before users do."
      accent="#185fa5"
    >
      <p className="text-[#7a6f6f] text-[15px] md:text-[16px] leading-[27.2px]">
        Three weeks is enough time to test if you use it well. We ran clickable prototype
        sessions with novice and intermediate users — structured tasks, no prompting,
        observation only. What we found told us exactly where to focus the final sprint.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ValidationCard
          icon="↻"
          iconBg="#eef3e5"
          iconColor="#49522e"
          title="Navigation clarity"
          description="Participants located core learning tools without prompting after the restructure. The original navigation required prior product knowledge to navigate effectively."
        />
        <ValidationCard
          icon="✓"
          iconBg="#e8f0f9"
          iconColor="#0d3a66"
          title="Onboarding completion"
          description="Simplified onboarding reduced drop-off points. Participants reached the first meaningful product interaction faster and with fewer questions."
        />
        <ValidationCard
          icon="!"
          iconBg="rgba(169,136,136,0.18)"
          iconColor="#6b4b4b"
          title="Calls to action"
          description="CTAs were refined after testing revealed users weren't sure what the primary action was on key pages. Each page now has one clear primary action."
        />
        <ValidationCard
          icon="◇"
          iconBg="#f5e6ea"
          iconColor="#ae536e"
          title="Edge cases identified"
          description="Testing surfaced missing states — empty search results, no-content library views, and error handling — that weren't accounted for in the initial designs. All addressed before handoff."
        />
      </div>

      <InsightBlock
        label="Why this matters"
        title="Testing with real tasks, not opinions."
        accentBg="#e8f0f9"
        accentBorder="#185fa5"
        accentText="#0d3a66"
      >
        <p className="m-0">
          The most useful feedback we got wasn't "I like this" or "this feels better." It was watching
          someone try to find the chord analyzer and fail — and then succeed after the restructure.
          Behavioral evidence beats stated preference every time.
        </p>
      </InsightBlock>
    </CaseStudySection>
  );
}
