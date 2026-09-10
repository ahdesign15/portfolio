import imgHero from '../../../imports/Container-1/426190e431263457f0b6b0b30408def5dc782409.png';

const meta = [
  { term: 'Role', detail: ['UX Researcher &', 'Lead UI Designer'] },
  { term: 'Team', detail: ['4 UX/UI Designers'] },
  { term: 'Duration', detail: ['3 Weeks'] },
  { term: 'Client', detail: ['Music Education', 'Platform'] },
];

export function HookTheoryHero() {
  return (
    <section className="w-full max-w-[984px] mx-auto px-6 md:px-12 pb-16 md:pb-24">
      <h1 className="font-bold text-[#185fa5] leading-none tracking-[-1.5px] text-[56px] sm:text-[72px] md:text-[96px] md:tracking-[-2.4px]">
        HookTheory
      </h1>

      <p className="text-[#7a6f6f] text-[18px] md:text-[26px] leading-normal mt-2">
        Making music theory click for everyone
      </p>

      <p className="text-[#7a6f6f] text-[15px] md:text-[16px] leading-[27.2px] max-w-[560px] mt-2 pb-6 md:pb-7">
        A 3-week client redesign for a music theory platform with a large existing
        user base. Research, information architecture, and a modernized UI system
        — built to guide curious learners from discovery to paid engagement.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-t border-b border-[#e8e5e0] py-5 md:py-6">
        {meta.map(({ term, detail }) => (
          <div key={term} className="flex flex-col gap-1">
            <span className="font-bold text-[10px] text-[#9e9393] tracking-[0.8px] uppercase">
              {term}
            </span>
            {detail.map((line, i) => (
              <p key={i} className="font-semibold text-[13px] md:text-[14px] text-[#2a2020] leading-[21px] m-0">
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>

      <div
        className="mt-6 rounded-[16px] overflow-hidden flex items-center justify-center"
        style={{ background: '#185fa5', height: 'clamp(220px, 35vw, 466px)' }}
      >
        <img src={imgHero} alt="HookTheory redesign" className="h-full w-full object-contain" />
      </div>
    </section>
  );
}
