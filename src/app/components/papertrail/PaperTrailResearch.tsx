import { CaseStudySection } from './PaperTrailShared';

export function PaperTrailResearch() {
  return (
    <CaseStudySection
      sectionLabel="02 — Research & Insights"
      heading="What artists actually told us."
      accent="#8a6a50"
    >
      <p className="text-[#7a6f6f] text-[15px] md:text-[16px] leading-[27.2px]">
        User interviews with independent artists across creative disciplines revealed two
        things that drove every subsequent design decision.
      </p>

      <div className="flex flex-col gap-4">
        <div className="bg-[#f2ece6] border-l-[3px] border-[#8a6a50] rounded-r-[10px] pt-6 pb-5 pl-6 pr-5 md:pl-7 md:pr-6 flex flex-col gap-3">
          <span className="font-bold text-[9.5px] text-[#5a3e2a] tracking-[0.665px] uppercase">
            Authenticity
          </span>
          <p className="font-bold text-[15px] md:text-[16px] text-[#2a2020] leading-[22.4px]">
            "I want to share, but I hate the performance."
          </p>
          <p className="text-[#7a6f6f] text-[13px] leading-[21.45px]">
            Artists want private reflection before public sharing. Engagement metrics directly
            influence what they choose to post — often leading to safer, less authentic work.
            The desire to share and the anxiety about metrics coexist in the same person.
          </p>
        </div>
        <div className="bg-[#f2ece6] border-l-[3px] border-[#8a6a50] rounded-r-[10px] pt-6 pb-5 pl-6 pr-5 md:pl-7 md:pr-6 flex flex-col gap-3">
          <span className="font-bold text-[9.5px] text-[#5a3e2a] tracking-[0.665px] uppercase">
            Motivation
          </span>
          <p className="font-bold text-[15px] md:text-[16px] text-[#2a2020] leading-[22.4px]">
            Momentum beats validation.
          </p>
          <p className="text-[#7a6f6f] text-[13px] leading-[21.45px]">
            Creative momentum improves when external pressure is removed. The internal
            reward of finishing something is more sustainable than the external reward of
            likes. Artists who described their most productive periods described them as
            times when they weren't thinking about the audience.
          </p>
        </div>
      </div>

      <p className="text-[#9e9393] text-[12px] italic">
        Methods: User interviews with independent artists, competitive analysis of creative and
        social platforms, affinity mapping and synthesis.
      </p>
    </CaseStudySection>
  );
}
