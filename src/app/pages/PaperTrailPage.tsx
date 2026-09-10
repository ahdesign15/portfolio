import React, { useEffect } from 'react';
import { Header } from '@/app/components/portfolio/Header';
import { Footer } from '@/app/components/portfolio/Footer';
import { PaperTrailHero } from '@/app/components/papertrail/PaperTrailHero';
import { PaperTrailContext } from '@/app/components/papertrail/PaperTrailContext';
import { PaperTrailResearch } from '@/app/components/papertrail/PaperTrailResearch';
import { PaperTrailGoals } from '@/app/components/papertrail/PaperTrailGoals';
import { PaperTrailDecisions } from '@/app/components/papertrail/PaperTrailDecisions';
import { PaperTrailValidation } from '@/app/components/papertrail/PaperTrailValidation';
import { PaperTrailJourney } from '@/app/components/papertrail/PaperTrailJourney';
import { PaperTrailReflection } from '@/app/components/papertrail/PaperTrailReflection';

export function PaperTrailPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f9f9f7] flex flex-col items-center relative w-full">
      <Header />
      <main className="w-full flex-grow flex flex-col pt-[121px]">
        <div className="pt-16">
          <PaperTrailHero />
        </div>

        <PaperTrailContext />
        <PaperTrailResearch />
        <PaperTrailGoals />
        <PaperTrailDecisions />
        <PaperTrailValidation />
        <PaperTrailJourney />
        <PaperTrailReflection />
      </main>
      <Footer />
    </div>
  );
}