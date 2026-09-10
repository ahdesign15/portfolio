import { CaseStudySection, JourneyTimeline } from './PaperTrailShared';

const timeline = [
  { date: 'Week 1', title: 'Research', description: 'Interviews with independent artists. Two core insights emerged early and held throughout.', dotColor: '#49522e' },
  { date: 'Week 2', title: 'Concept & decisions', description: 'Four design goals defined. Three core decisions made. Competitive analysis of creative platforms.', dotColor: '#49522e' },
  { date: 'Week 3', title: 'Design & prototype', description: 'Journaling-first posting flow. Metric-free profile. Chronological feed. High-fidelity prototype.', dotColor: '#49522e' },
  { date: 'Week 4', title: 'Testing & iteration', description: 'Usability sessions. Onboarding simplified. Journaling prompts refined. Final prototype delivered.', dotColor: '#49522e' },
  { date: 'Next', title: 'Future exploration', description: 'Private sharing modes, long-term habit formation, and broader testing across creative disciplines.', dotColor: '#8a6a50' },
];

export function PaperTrailJourney() {
  return (
    <CaseStudySection
      sectionLabel="06 — Journey"
      heading="Four weeks, research to handoff."
      accent="#8a6a50"
    >
      <JourneyTimeline items={timeline} />
    </CaseStudySection>
  );
}
