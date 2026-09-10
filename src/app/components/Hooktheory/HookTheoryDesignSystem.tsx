import DesignSystemPanel from '../../../imports/DesignSystemPanel';
import { CaseStudySection, InsightBlock } from './HookTheoryShared';

export function HookTheoryDesignSystem() {
  return (
    <CaseStudySection
      sectionLabel="05 — Design System"
      heading="The foundation that makes it scalable."
      accent="#185fa5"
    >
      <p className="text-[#7a6f6f] text-[15px] md:text-[16px] leading-[27.2px]">
        A 3-week engagement doesn't leave time for a comprehensive design system. What
        it does leave time for is a component foundation — the reusable pieces that make
        future work consistent without requiring decisions to be re-litigated every time. That's
        what we built.
      </p>

      {/* Imported Figma design-system panel (fixed 720px artboard, scrolls on narrow screens) */}
      <div className="rounded-[12px] overflow-hidden border border-[#e8e5e0] overflow-x-auto">
        <div className="relative w-[720px] h-[248px] mx-auto">
          <DesignSystemPanel />
        </div>
      </div>

      <InsightBlock
        label="Design system insight"
        title="Built for a team that inherits it."
        accentBg="#e8f0f9"
        accentBorder="#185fa5"
        accentText="#0d3a66"
      >
        <p className="m-0 mb-3">
          A 3-week engagement means the team that asked us to redesign it will be the ones extending it
          without us. Every component decision was made with that handoff in mind — named
          consistently, documented inline, and built with enough flexibility that a developer could
          implement it without a designer in the room.
        </p>
        <p className="m-0">
          Accessibility improvements were scoped: text contrast, touch target sizing, and navigation
          keyboard support. A full WCAG audit was recommended as a next iteration.
        </p>
      </InsightBlock>
    </CaseStudySection>
  );
}
