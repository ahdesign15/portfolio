import React, { useEffect } from 'react';
import { Header } from '@/app/components/portfolio/Header';
import { Footer } from '@/app/components/portfolio/Footer';
import { HookTheoryHero } from '@/app/components/hooktheory/HookTheoryHero';
import { HookTheoryContext } from '@/app/components/hooktheory/HookTheoryContext';
import { HookTheoryRedesign } from '@/app/components/hooktheory/HookTheoryRedesign';
import { HookTheoryResearch } from '@/app/components/hooktheory/HookTheoryResearch';
import { HookTheoryDecisions } from '@/app/components/hooktheory/HookTheoryDecisions';
import { HookTheoryDesignSystem } from '@/app/components/hooktheory/HookTheoryDesignSystem';
import { HookTheoryValidation } from '@/app/components/hooktheory/HookTheoryValidation';
import { HookTheoryJourney } from '@/app/components/hooktheory/HookTheoryJourney';
import { HookTheoryReflection } from '@/app/components/hooktheory/HookTheoryReflection';

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
