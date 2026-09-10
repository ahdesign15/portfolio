import imgCommunity from '../../../imports/Container-1/1060ebda483088f459460d9c5d06db79a47895a8.png';
import imgInterface from '../../../imports/Container-1/422443be3ef7d122fe286b096a597b35a34c5eb4.png';
import imgExplore from '../../../imports/Container-1/b9842d182bbcd0c5d5f9b923117cd7093eec1973.png';

import { CaseStudySection } from './PaperTrailShared';

interface DecisionCardProps {
  image: string;
  version: string;
  title: string;
  problem: string;
  decision: string;
  result: string;
  badge: string;
  badgeBg: string;
  badgeColor: string;
}

function DecisionCard({ image, version, title, problem, decision, result, badge, badgeBg, badgeColor }: DecisionCardProps) {
  return (
    <div className="bg-white border border-[#e8e5e0] rounded-[10px] p-4 md:p-5 flex flex-col gap-3">
      <div
        className="rounded-[7px] flex items-center justify-center py-6"
        style={{ background: 'linear-gradient(108deg, rgb(226,213,200) 0%, rgb(196,181,168) 100%)' }}
      >
        <img src={image} alt={title} className="h-[160px] md:h-[200px] object-contain shadow-[0px_20px_40px_rgba(0,0,0,0.15)]" />
      </div>
      <span className="font-bold text-[10px] text-[#9e9393] tracking-[1px] uppercase">{version}</span>
      <p className="font-bold text-[14px] text-[#2a2020]">{title}</p>
      <p className="text-[12px] text-[#7a6f6f] leading-[18.6px]">
        <span className="font-bold">Problem:</span> {problem}
      </p>
      <p className="text-[12px] text-[#2a2020] leading-[18.6px]">
        <span className="font-bold">Decision:</span> {decision}
      </p>
      <p className="font-bold text-[11px] text-[#8a6a50] leading-[16.5px]">{result}</p>
      <span
        className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.7px] uppercase self-start"
        style={{ background: badgeBg, color: badgeColor }}
      >
        {badge}
      </span>
    </div>
  );
}

export function PaperTrailDecisions() {
  return (
    <CaseStudySection
      sectionLabel="04 — Key Decisions"
      heading="Three decisions built on removal, not addition."
      accent="#8a6a50"
    >
      <p className="text-[#7a6f6f] text-[15px] md:text-[16px] leading-[27.2px]">
        The most important design decisions were about what not to build. Restraint was the
        primary tool.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
        <DecisionCard
          image={imgCommunity}
          version="Decision 01"
          title="Removed public engagement metrics"
          problem="Public metrics create anxiety and drive artists toward safer, more performative work."
          decision="No likes, follower counts, or public engagement metrics anywhere in the product."
          result="Reducing comparison helps artists focus on their work rather than external validation."
          badge="Core Removal"
          badgeBg="#f2ece6"
          badgeColor="#5a3e2a"
        />
        <DecisionCard
          image={imgInterface}
          version="Decision 02"
          title="Journaling before posting"
          problem="Posting feels impulsive and reaction-seeking on existing platforms."
          decision="Journaling is the first step in the posting flow — reflection before publication is required, not optional."
          result="Encourages intention and self-awareness before sharing, turning posting into a considered act."
          badge="UX Flow"
          badgeBg="#eef3e5"
          badgeColor="#49522e"
        />
        <DecisionCard
          image={imgExplore}
          version="Decision 03"
          title="Chronological content ordering"
          problem="Algorithmic feeds prioritize viral content, not personal progress."
          decision="Chronological ordering only. No algorithm. No boosting based on engagement."
          result="Reinforces personal creative progress over popularity. What you made last matters as much as what performs."
          badge="Feed Logic"
          badgeBg="rgba(169,136,136,0.18)"
          badgeColor="#6b4b4b"
        />
      </div>
    </CaseStudySection>
  );
}
