import React, { useEffect } from 'react';
import { Header } from '@/app/components/portfolio/Header';
import { Footer } from '@/app/components/portfolio/Footer';
import { SoccerHero } from '@/app/components/Soccer/SoccerHero';
import { SoccerContext } from '@/app/components/Soccer/SoccerContext';
import { SoccerResearch } from '@/app/components/Soccer/SoccerResearch';
import { SoccerStrategy } from '@/app/components/Soccer/SoccerStrategy';
import { SoccerPrinciple } from '@/app/components/Soccer/SoccerPrinciple';
import { SoccerDesignSystem } from '@/app/components/Soccer/SoccerDesignSystem';
import { SoccerDecisions } from '@/app/components/Soccer/SoccerDecisions';
import { SoccerValidation } from '@/app/components/Soccer/SoccerValidation';
import { SoccerJourney } from '@/app/components/Soccer/SoccerJourney';
import { SoccerReflection } from '@/app/components/Soccer/SoccerReflection';

export function SoccerDiscoveryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f9f9f7] flex flex-col items-center relative w-full">
      <Header />
      <main className="w-full flex-grow flex flex-col">
        <SoccerHero />
        <SoccerContext />
        <SoccerResearch />
        <SoccerStrategy />
        <SoccerPrinciple />
        <SoccerDesignSystem />
        <SoccerDecisions />
        <SoccerValidation />
        <SoccerJourney />
        <SoccerReflection />
      </main>
      <Footer />
    </div>
  );
}
