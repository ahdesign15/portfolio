import imgLookbook from '../../../imports/image-5.png';
import { CaseStudySection } from './BleachShared';

interface DecisionCardProps {
  version: string;
  title: string;
  description: string;
  badge: string;
  badgeBg: string;
  badgeColor: string;
}

function DecisionCard({ version, title, description, badge, badgeBg, badgeColor }: DecisionCardProps) {
  return (
    <div className="bg-white border border-[#e8e5e0] rounded-[10px] p-4 md:p-5 flex flex-col gap-2">
      <span className="font-bold text-[10px] text-[#9e9393] tracking-[1px] uppercase">{version}</span>
      <p className="font-bold text-[14px] text-[#2a2020]">{title}</p>
      <p className="text-[#7a6f6f] text-[12px] leading-[19.2px]">{description}</p>
      <span
        className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.7px] uppercase self-start mt-1"
        style={{ background: badgeBg, color: badgeColor }}
      >
        {badge}
      </span>
    </div>
  );
}

export function BleachDecisions() {
  return (
    <CaseStudySection
      sectionLabel="04 — Design Decisions"
      heading="Three decisions that closed the gap."
      accent="#213744"
    >
      <p className="text-[#7a6f6f] text-[15px] md:text-[16px] leading-[27.2px]">
        Each decision mapped to a specific failure from the research phase. No redesign
        work without a finding to justify it.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
        <DecisionCard
          version="Decision 01"
          title="Navigation: from hidden to obvious"
          description="Surfaced high-traffic categories to top-level navigation. Introduced a persistent, high-contrast search bar that appears on every page — impossible to miss. Users who couldn't find the search function can now find it in under 2 seconds."
          badge="IA"
          badgeBg="#e6edf1"
          badgeColor="#0f1e28"
        />
        <DecisionCard
          version="Decision 02"
          title="Product pages: building trust"
          description='Restructured product pages to prioritize transparency: clear material breakdowns, size guides, and model measurements. Answers "Is this worth it?" before the user has to ask. Converts browsing intent into purchase confidence.'
          badge="UI System"
          badgeBg="#eef3e5"
          badgeColor="#49522e"
        />
        <DecisionCard
          version="Decision 03"
          title="Brand: industrial and bold"
          description="Transformed the visual identity from generic to distinctive — aligned with the physical product's industrial aesthetic. Every visual decision made the brand feel like a deliberate choice, not a template."
          badge="Brand"
          badgeBg="rgba(169,136,136,0.18)"
          badgeColor="#6b4b4b"
        />
      </div>

      {/* Lookbook strip — horizontally scrollable on all breakpoints */}
      <div className="rounded-[12px] overflow-hidden border border-[#e8e5e0]">
        <div className="overflow-x-auto">
          <img
            src={imgLookbook}
            alt="Bleach USA lookbook"
            className="h-[260px] md:h-[400px] w-auto max-w-none object-cover"
          />
        </div>
      </div>
    </CaseStudySection>
  );
}
