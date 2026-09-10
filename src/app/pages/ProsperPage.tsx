import React, { useEffect } from 'react';
import { Header } from '@/app/components/portfolio/Header';
import { Footer } from '@/app/components/portfolio/Footer';
import { ProsperHero } from '@/app/components/prosper/ProsperHero';
import { ProsperContext } from '@/app/components/prosper/ProsperContext';
import { ProsperProduct } from '@/app/components/prosper/ProsperProduct';
import { ProsperIterations } from '@/app/components/prosper/ProsperIterations';
import { ProsperDesignSystem } from '@/app/components/prosper/ProsperDesignSystem';
import { ProsperProcess } from '@/app/components/prosper/ProsperProcess';
import { ProsperValidation } from '@/app/components/prosper/ProsperValidation';
import { ProsperJourney } from '@/app/components/prosper/ProsperJourney';
import { ProsperReflection } from '@/app/components/prosper/ProsperReflection';

export function ProsperPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f9f9f7] flex flex-col items-center relative w-full">
      <Header />
      <main className="w-full flex-grow flex flex-col pt-[121px]">
        {/* Hero / Overview — has its own full-width padding */}
        <div className="pt-16">
          <ProsperHero />
        </div>

        {/* Case study sections */}
        <ProsperContext />
        <ProsperProduct />
        <ProsperIterations />
        <ProsperDesignSystem />
        <ProsperProcess />
        <ProsperValidation />
        <ProsperJourney />
        <ProsperReflection />
      </main>
      <Footer />
    </div>
  );
}
