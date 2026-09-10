import React, { useEffect } from 'react';
import { Header } from '@/app/components/portfolio/Header';
import { Footer } from '@/app/components/portfolio/Footer';
import { BleachHero } from '@/app/components/Bleach/BleachHero';
import { BleachContext } from '@/app/components/Bleach/BleachContext';
import { BleachResearch } from '@/app/components/Bleach/BleachResearch';
import { BleachGoals } from '@/app/components/Bleach/BleachGoals';
import { BleachDecisions } from '@/app/components/Bleach/BleachDecisions';
import { BleachResults } from '@/app/components/Bleach/BleachResults';
import { BleachJourney } from '@/app/components/Bleach/BleachJourney';
import { BleachReflection } from '@/app/components/Bleach/BleachReflection';

export function BleachPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f9f9f7] flex flex-col items-center relative w-full">
      <Header />
      <main className="w-full flex-grow flex flex-col pt-[121px]">
        <div className="pt-16">
          <BleachHero />
        </div>

        <BleachContext />
        <BleachResearch />
        <BleachGoals />
        <BleachDecisions />
        <BleachResults />
        <BleachJourney />
        <BleachReflection />
      </main>
      <Footer />
    </div>
  );
}