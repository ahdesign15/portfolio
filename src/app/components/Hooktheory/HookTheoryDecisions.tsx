import { CaseStudySection } from './HookTheoryShared';

interface DecisionCardProps {
  version: string;
  title: string;
  problem: string;
  decision: string;
  result: string;
  badge: string;
  badgeBg: string;
  badgeColor: string;
}

function DecisionCard({ version, title, problem, decision, result, badge, badgeBg, badgeColor }: DecisionCardProps) {
  return (
    <div className="bg-white border border-[#e8e5e0] rounded-[10px] p-5 flex flex-col gap-2">
      <span className="font-bold text-[10px] text-[#9e9393] tracking-[1px] uppercase">{version}</span>
      <p className="font-bold text-[14px] text-[#2a2020]">{title}</p>
      <p className="text-[12px] text-[#7a6f6f] leading-[18.6px]">
        <span className="font-bold">Problem:</span> {problem}
      </p>
      <p className="text-[12px] text-[#2a2020] leading-[18.6px]">
        <span className="font-bold">Decision:</span> {decision}
      </p>
      <p className="font-bold text-[11px] text-[#185fa5] leading-[16.5px]">{result}</p>
      <span
        className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.7px] uppercase self-start"
        style={{ background: badgeBg, color: badgeColor }}
      >
        {badge}
      </span>
    </div>
  );
}

export function HookTheoryDecisions() {
  return (
    <CaseStudySection
      sectionLabel="04 — Key Decisions"
      heading="Three decisions that defined the redesign."
      accent="#185fa5"
    >
      <p className="text-[#7a6f6f] text-[15px] md:text-[16px] leading-[27.2px]">
        Not every decision in a 3-week engagement gets time to be perfect. These three did
        — because they were the ones that would determine whether the redesign held up or
        fell apart.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
        <DecisionCard
          version="Decision 01"
          title="Navigation restructure"
          problem="Six-plus competing top-level items required prior knowledge of the platform."
          decision="Consolidated top-level items to 3 clear sections: Learn, Create, Discover. Each maps to a distinct user intent."
          result="In testing, participants located core learning tools in the restructured nav without prompting. None succeeded in the original."
          badge="IA"
          badgeBg="#e8f0f9"
          badgeColor="#0d3a66"
        />
        <DecisionCard
          version="Decision 02"
          title="Visual language modernization"
          problem="The outdated UI caused users to question the product's credibility before engaging with its actual value."
          decision="Rebuilt typographic scale, color palette, spacing system, and component library. Every change made with trustworthiness as the primary criterion — not just aesthetics."
          result={`"Professional." "Like something I'd actually pay for." — usability testing participants.`}
          badge="UI System"
          badgeBg="#eef3e5"
          badgeColor="#49522e"
        />
        <DecisionCard
          version="Decision 03"
          title="Progressive disclosure for beginners"
          problem="Users without a theory background had no clear starting point and no guided path into the product's value."
          decision="Built an onboarding layer and restructured content hierarchy so beginners see approachable entry points first — with depth available on demand for advanced users."
          result="Participants reported feeling less intimidated by the interface after the restructure."
          badge="UX Flow"
          badgeBg="rgba(169,136,136,0.18)"
          badgeColor="#6b4b4b"
        />
      </div>
    </CaseStudySection>
  );
}