import React, { useEffect } from 'react';
import { Header } from '@/app/components/portfolio/Header';
import { Footer } from '@/app/components/portfolio/Footer';
import { HookTheoryHero } from '@/app/components/Hooktheory/HookTheoryHero';
import { HookTheoryContext } from '@/app/components/Hooktheory/HookTheoryContext';
import { HookTheoryRedesign } from '@/app/components/Hooktheory/HookTheoryRedesign';
import { HookTheoryResearch } from '@/app/components/Hooktheory/HookTheoryResearch';
import { HookTheoryDecisions } from '@/app/components/Hooktheory/HookTheoryDecisions';
import { HookTheoryDesignSystem } from '@/app/components/Hooktheory/HookTheoryDesignSystem';
import { HookTheoryValidation } from '@/app/components/Hooktheory/HookTheoryValidation';
import { HookTheoryJourney } from '@/app/components/Hooktheory/HookTheoryJourney';
import { HookTheoryReflection } from '@/app/components/Hooktheory/HookTheoryReflection';

export { HookTheoryPage as HooktheoryPage };
export function HookTheoryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f9f9f7] flex flex-col items-center relative w-full">
      <Header />
      <main className="w-full flex-grow flex flex-col pt-[121px]">
        <div className="pt-16">
          <HookTheoryHero />
        </div>

        <HookTheoryContext />
        <HookTheoryRedesign />
        <HookTheoryResearch />
        <HookTheoryDecisions />
        <HookTheoryDesignSystem />
        <HookTheoryValidation />
        <HookTheoryJourney />
        <HookTheoryReflection />
      </main>
      <Footer />
    </div>
  );
}