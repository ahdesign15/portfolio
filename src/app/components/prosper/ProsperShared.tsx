import React from 'react';

interface CaseStudySectionProps {
  sectionLabel: string;
  heading: string;
  children: React.ReactNode;
}

export function CaseStudySection({ sectionLabel, heading, children }: CaseStudySectionProps) {
  return (
    <section className="w-full border-t border-[#e8e5e0] py-16 md:py-24">
      <div className="max-w-[984px] mx-auto px-6 md:px-12 flex flex-col md:grid md:grid-cols-[148px_1fr] gap-6 md:gap-12 items-start">
        {/* Left label */}
        <span className="font-bold text-[11px] text-[#ae536e] tracking-[1.1px] uppercase shrink-0">
          {sectionLabel}
        </span>

        {/* Right content */}
        <div className="flex flex-col gap-6 w-full">
          <h2 className="font-semibold text-[22px] sm:text-[26px] md:text-[30px] text-[#2a2020] tracking-[-0.3px] leading-[1.2]">
            {heading}
          </h2>
          {children}
        </div>
      </div>
    </section>
  );
}

interface InsightBlockProps {
  label: string;
  title: string;
  children: React.ReactNode;
}

export function InsightBlock({ label, title, children }: InsightBlockProps) {
  return (
    <div className="bg-[#f5e6ea] border-l-[3px] border-[#ae536e] rounded-r-[10px] pt-6 pb-5 pl-6 pr-5 md:pl-7 md:pr-6 flex flex-col gap-3 w-full">
      <span className="font-bold text-[9.5px] text-[#7a2840] tracking-[0.665px] uppercase">
        {label}
      </span>
      <p className="font-bold text-[15px] md:text-[16px] text-[#2a2020] leading-[22.4px]">{title}</p>
      <div className="text-[#7a6f6f] text-[13px] leading-[21.45px]">{children}</div>
    </div>
  );
}
