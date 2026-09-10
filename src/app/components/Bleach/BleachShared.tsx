// Shared layout primitives for the Bleach USA case study.
// Components take an `accent` / color prop so they render in Bleach's navy theme.
import React from 'react';

interface CaseStudySectionProps {
  sectionLabel: string;
  heading: string;
  accent: string;
  children: React.ReactNode;
}

export function CaseStudySection({ sectionLabel, heading, accent, children }: CaseStudySectionProps) {
  return (
    <section className="w-full border-t border-[#e8e5e0] py-16 md:py-24">
      <div className="max-w-[984px] mx-auto px-6 md:px-12 flex flex-col md:grid md:grid-cols-[148px_1fr] gap-6 md:gap-12 items-start">
        <span
          className="font-bold text-[11px] tracking-[1.1px] uppercase shrink-0"
          style={{ color: accent }}
        >
          {sectionLabel}
        </span>

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
  accentBg: string;
  accentBorder: string;
  accentText: string;
  children: React.ReactNode;
}

export function InsightBlock({ label, title, accentBg, accentBorder, accentText, children }: InsightBlockProps) {
  return (
    <div
      className="rounded-r-[10px] pt-6 pb-5 pl-6 pr-5 md:pl-7 md:pr-6 flex flex-col gap-3 w-full"
      style={{ background: accentBg, borderLeft: `3px solid ${accentBorder}` }}
    >
      <span className="font-bold text-[9.5px] tracking-[0.665px] uppercase" style={{ color: accentText }}>
        {label}
      </span>
      <p className="font-bold text-[15px] md:text-[16px] text-[#2a2020] leading-[22.4px]">{title}</p>
      <div className="text-[#7a6f6f] text-[13px] leading-[21.45px]">{children}</div>
    </div>
  );
}

interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="bg-white border border-[#e8e5e0] rounded-[10px] flex flex-col items-center py-5 md:py-6 px-4 md:px-6 gap-2">
      <span className="font-bold text-[32px] md:text-[42px] text-[#2a2020] tracking-[-1.26px] leading-[1.1]">
        {value}
      </span>
      <span className="text-[10px] md:text-[11px] text-[#9e9393] text-center leading-[15.95px]">
        {label}
      </span>
    </div>
  );
}

interface ValidationCardProps {
  icon: string;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
}

export function ValidationCard({ icon, iconBg, iconColor, title, description }: ValidationCardProps) {
  return (
    <div className="bg-white border border-[#e8e5e0] rounded-[10px] p-4 md:p-5 flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <div
          className="size-7 rounded-[7px] flex items-center justify-center font-bold text-[13px] shrink-0"
          style={{ background: iconBg, color: iconColor }}
        >
          {icon}
        </div>
        <span className="font-bold text-[13px] text-[#2a2020]">{title}</span>
      </div>
      <p className="text-[#7a6f6f] text-[12px] leading-[19.2px]">{description}</p>
    </div>
  );
}

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  dotColor: string;
}

export function JourneyTimeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative w-full">
      <div className="hidden sm:block absolute left-0 right-0 top-[10px] h-[1.5px] bg-[#e8e5e0]" />
      <div className="sm:hidden absolute left-[4px] top-0 bottom-0 w-[1.5px] bg-[#e8e5e0]" />

      <div className="flex flex-col sm:flex-row gap-0 sm:gap-6 sm:justify-between relative">
        {items.map(({ date, title, description, dotColor }) => (
          <div
            key={date}
            className="relative flex flex-col gap-2 pl-7 sm:pl-0 sm:pt-8 pb-8 sm:pb-0"
            style={{ flex: '1 0 0' }}
          >
            <div
              className="absolute sm:top-[-26px] sm:left-0 top-0 left-0 size-[10px] rounded-[2px] border-2 border-[#f9f9f7]"
              style={{ background: dotColor }}
            />
            <span className="font-bold text-[10px] tracking-[1px] uppercase" style={{ color: dotColor }}>
              {date}
            </span>
            <p className="font-bold text-[13px] md:text-[14px] text-[#2a2020] leading-[21px]">{title}</p>
            <p className="text-[#7a6f6f] text-[11px] md:text-[12px] leading-[19.2px]">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
