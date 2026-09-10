import imgBefore from '../../../imports/image-4.png';
import imgAfter from '../../../imports/image-6.png';
import { CaseStudySection, StatCard } from './HookTheoryShared';

export function HookTheoryRedesign() {
  return (
    <CaseStudySection
      sectionLabel="02 — The Redesign"
      heading="What changed, and why it mattered."
      accent="#185fa5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard value="5/5" label="Participants completed core flow without help" />
        <StatCard value="0/5" label="Completed the same task in the original UI" />
        <StatCard value="3 wks" label="Team of 4 designers · one client · one shot" />
      </div>

      <p className="text-[#7a6f6f] text-[15px] md:text-[16px] leading-[27.2px]">
        The redesign touched every layer: navigation restructured so users could find the
        tools they came for, a visual language rebuilt to feel trustworthy and modern, and a
        component system designed to scale with the product. The goal wasn't to make it
        look different. It was to make it work for everyone — from first-time musicians to
        professional producers.
      </p>

      {/* Before / After comparison */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <span className="font-bold text-[10px] text-[#9e9393] tracking-[0.8px] uppercase">
            Before — Original UI
          </span>
          <div className="rounded-[10px] overflow-hidden border border-[#e8e5e0] aspect-[4/3]">
            <img src={imgBefore} alt="Before redesign" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-bold text-[10px] text-[#185fa5] tracking-[0.8px] uppercase">
            After — Redesign
          </span>
          <div className="rounded-[10px] overflow-hidden border border-[#e8e5e0] aspect-[4/3]">
            <img src={imgAfter} alt="After redesign" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </CaseStudySection>
  );
}
