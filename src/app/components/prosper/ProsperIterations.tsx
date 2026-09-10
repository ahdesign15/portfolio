import imgV1Screen from '../../../imports/ProsperUpdate/42b141cc5c542027ee09e2e4fe6d17ca3be90d49.png';
import imgV2Screen from '../../../imports/ProsperUpdate/42c3ad585da08ad29b275dd40a2c05829699c597.png';
import imgV3Screen from '../../../imports/ProsperUpdate/2a0d6ddbba882745c7ec5eed5211c54f6f8fd128.png';

import { CaseStudySection } from './ProsperShared';

interface VersionCardProps {
  version: string;
  title: string;
  description: string;
  ended: string;
  badge: string;
  badgeColor: string;
  badgeTextColor: string;
  screenImages: string[];
}

function VersionCard({ version, title, description, ended, badge, badgeColor, badgeTextColor, screenImages }: VersionCardProps) {
  return (
    <div className="bg-white border border-[#e8e5e0] rounded-[10px] overflow-hidden flex flex-col">
      <div
        className="flex items-center justify-center py-8 md:py-12"
        style={{ background: 'linear-gradient(105deg, rgb(196,181,168) 0%, rgb(169,136,136) 100%)' }}
      >
        <div className="w-[140px] md:w-[199px] h-[280px] md:h-[395px] relative overflow-hidden">
          {screenImages.map((src, i) => (
            <img key={i} src={src} alt="" className="absolute inset-0 w-full h-full object-contain" />
          ))}
        </div>
      </div>
      <div className="p-4 md:p-5 flex flex-col gap-2">
        <span className="font-bold text-[10px] text-[#9e9393] tracking-[1px] uppercase">{version}</span>
        <p className="font-bold text-[14px] text-[#2a2020]">{title}</p>
        <p className="text-[#7a6f6f] text-[12px] leading-[19.2px]">{description}</p>
        <p className="font-bold text-[11px] text-[#97405b] leading-[16.5px]">{ended}</p>
        <span
          className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.7px] uppercase self-start"
          style={{ background: badgeColor, color: badgeTextColor }}
        >
          {badge}
        </span>
      </div>
    </div>
  );
}

export function ProsperIterations() {
  return (
    <CaseStudySection sectionLabel="03 — Iteration" heading="Three designs to get to the one.">
      <p className="text-[#7a6f6f] text-[15px] md:text-[16px] leading-[27.2px]">
        Three directions to find the right one. V1 was intentionally unbranded — built to surface
        assumptions, not answers. V2 added structure and an early system, but the interaction depth
        wasn't there. V3 is what you see: animation, feedback loops, support flows, and the kind of
        motion that makes a product feel alive. Each version is shown below with the key decision that ended it.
      </p>

      {/* 1 col mobile, 3 col md+ */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
        <VersionCard
          version="Version 01 · Oct 2025"
          title="Exploration"
          description="The first pass was intentionally loose — a general shape of what the platform could be. Unbranded, structurally vague, designed to start conversations and surface assumptions."
          ended="Ended: Architecture too vague to stress-test any real user decisions."
          badge="Exploring"
          badgeColor="rgba(169,136,136,0.18)"
          badgeTextColor="#6b4b4b"
          screenImages={[imgV1Screen]}
        />
        <VersionCard
          version="Version 02"
          title="Structure"
          description="A more concise flow and an early design system. The bones were forming, but key pieces were still missing — the experience didn't yet capture the founder's vision or the depth of interaction the product demanded."
          ended="Ended: Interaction depth not there — pushed for layered nav, founder pulled back."
          badge="Refining"
          badgeColor="rgba(217,140,40,0.12)"
          badgeTextColor="#7a4f10"
          screenImages={[imgV2Screen]}
        />
        <VersionCard
          version="Version 03 · Feb 2026"
          title="The product"
          description="The final version adds depth: animation, positive feedback loops, support flows, and the in-depth interaction design that makes it feel alive. Built as the foundation for the fully developed platform."
          ended="Shipped: 45 screens. Investor demo ready."
          badge="Production"
          badgeColor="#eef3e5"
          badgeTextColor="#49522e"
          screenImages={[imgV3Screen]}
        />
      </div>

      <p className="text-[#7a6f6f] text-[15px] md:text-[16px] leading-[27.2px]">
        I would build a direction, then take it apart piece by piece — keeping what served the
        product, discarding what didn't, and carrying the lessons forward. Each version
        wasn't a failure; it was a filter.
      </p>
    </CaseStudySection>
  );
}
