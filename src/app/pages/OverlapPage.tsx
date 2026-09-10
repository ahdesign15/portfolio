import React from 'react';
import { Header } from '../components/portfolio/Header';
import { CaseHero } from '../components/soccer/CaseHero';
import { ProblemOverview } from '../components/soccer/ProblemOverview';
import { GoalsAndSuccess } from '../components/soccer/GoalsAndSuccess';
import { ResearchSummary } from '../components/soccer/ResearchSummary';
import { KeyLearnings } from '../components/soccer/KeyLearnings';
import { DesignPrinciples } from '../components/soccer/DesignPrinciples';
import { ExperienceStrategy } from '../components/soccer/ExperienceStrategy';
import { KeyDesignDecisions } from '../components/soccer/KeyDesignDecisions';
import { OutcomesImpact } from '../components/soccer/OutcomesImpact';
import { Reflection } from '../components/soccer/Reflection';

export function SoccerDiscoveryPage() {
  return (
    <div className="min-h-screen bg-[#ebe5dd] dark:bg-[#0f0e0d] transition-colors duration-300">
      <Header />
      <CaseHero />
      <ProblemOverview />
      <GoalsAndSuccess />
      <ResearchSummary />
      <KeyLearnings />
      <DesignPrinciples />
      <ExperienceStrategy />
      <KeyDesignDecisions />
      <OutcomesImpact />
      <Reflection />
    </div>
  );
}
