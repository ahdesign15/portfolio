import { CaseStudySection, JourneyTimeline } from './BleachShared';

const timeline = [
  { date: 'Days 1–3', title: 'Research & audit', description: 'Usability testing on existing site. Three critical metrics identified. Competitive analysis revealed missing features.', dotColor: '#213744' },
  { date: 'Days 4–5', title: 'Goal definition', description: 'Four strategic goals set. Every subsequent decision evaluated against them.', dotColor: '#213744' },
  { date: 'Days 6–9', title: 'Design & build', description: 'Navigation restructure, product page rebuild, brand system established. Three decisions, executed in parallel.', dotColor: '#213744' },
  { date: 'Days 10–14', title: 'Testing & validation', description: 'Post-redesign usability testing. 100% nav success, 100% search discoverability confirmed.', dotColor: '#213744' },
  { date: 'Next', title: 'Phase 2', description: 'Lookbook feature, user-generated content, wishlist functionality — building on the foundation.', dotColor: '#0f1e28' },
];

export function BleachJourney() {
  return (
    <CaseStudySection
      sectionLabel="06 — Journey"
      heading="Two weeks, research to redesign."
      accent="#213744"
    >
      <JourneyTimeline items={timeline} />
    </CaseStudySection>
  );
}
