import React, { useEffect } from 'react';
import { Header } from '../components/portfolio/Header';
import { Footer } from '../components/portfolio/Footer';
import { HeroSection } from '../components/portfolio/HeroSection';
import { IndustryShowcase } from '../components/portfolio/IndustryShowcase';
import { FeaturedWork } from '../components/portfolio/FeaturedWork';
import { AboutSnapshot } from '../components/portfolio/AboutSnapshot';
import { CallToAction } from '../components/portfolio/CallToAction';

export function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f9f9f7] flex flex-col items-center relative w-full">
      <Header />
      <main className="w-full flex-grow flex flex-col pt-[121px]">
        <div className="flex justify-center px-6 py-16 md:py-24">
          <HeroSection />
        </div>

        <IndustryShowcase />

        <div className="w-full h-px bg-[#e8e5e0]" />

        <div className="flex justify-center px-6 py-16 md:py-24">
          <FeaturedWork />
        </div>

        <div className="w-full h-px bg-[#e8e5e0]" />

        <div className="flex justify-center px-6 py-16 md:py-24">
          <AboutSnapshot />
        </div>

        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
