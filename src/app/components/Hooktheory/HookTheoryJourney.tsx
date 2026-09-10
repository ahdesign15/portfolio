import { CaseStudySection, JourneyTimeline } from './HookTheoryShared';

const timeline = [
  { date: 'Week 1', title: 'Discovery & research', description: 'User interviews, heuristic evaluation, competitive analysis. Built a shared understanding of where the product was failing its users.', dotColor: '#185fa5' },
  { date: 'Week 1–2', title: 'IA & flow restructure', description: 'Rebuilt the site map. Three clear sections — Learn, Create, Discover — replaced 6+ competing top-level items.', dotColor: '#185fa5' },
  { date: 'Week 2', title: 'Visual language', description: 'Typography, color, spacing, component foundations. Every decision made with trustworthiness as the primary criterion.', dotColor: '#185fa5' },
  { date: 'Week 2–3', title: 'Testing & iteration', description: 'Clickable prototype sessions with 5 participants. Structured tasks, no prompting. Findings drove the final sprint.', dotColor: '#185fa5' },
  { date: 'Handoff', title: 'Delivered', description: 'Component library, annotated specs, and design files. Built for a team inheriting it without us in the room.', dotColor: '#0d3a66' },
];

export function HookTheoryJourney() {
  return (
    <CaseStudySection
      sectionLabel="07 — Journey"
      heading="Three weeks, end to end."
      accent="#185fa5"
    >
      <JourneyTimeline items={timeline} />
    </CaseStudySection>
  );
}
