import imgIPhone13Pro from '../../../imports/ProsperUpdate/3f7b017aba3b8d5153ba9e150114ac20b29aac39.png';

const meta = [
  { term: 'Role', detail: ['Lead Product Designer', '(Founding)'] },
  { term: 'Scope', detail: ['0 → 1 Product', 'Design System · Brand'] },
  { term: 'Timeline', detail: ['Oct 2025 – Present', 'Final Sprint: Feb–Apr 2026'] },
  { term: 'Stage', detail: ['Idea → Investor Demo', '(Pre-seed)'] },
];

export function ProsperHero() {
  return (
    <section className="w-full max-w-[984px] mx-auto px-6 md:px-12 pb-16 md:pb-24">
      <h1 className="font-bold text-[#ae536e] leading-none tracking-[-1.5px] text-[56px] sm:text-[72px] md:text-[96px] md:tracking-[-2.4px]">
        Prosper XO
      </h1>

      <p className="text-[#7a6f6f] text-[18px] md:text-[26px] leading-normal mt-2">
        From idea to investor demo
      </p>

      <p className="text-[#7a6f6f] text-[15px] md:text-[16px] leading-[27.2px] max-w-[560px] mt-2 pb-6 md:pb-7">
        Lead Product Designer (Founding) · 0→1 product · Design system, product
        architecture, and 45 screens across fan, artist, and admin surfaces. Oct 2025 – Present.
      </p>

      {/* Meta grid — 2 cols on mobile, 4 on md+ */}
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

      {/* Hero image */}
      <div
        className="mt-6 rounded-[16px] overflow-hidden flex items-center justify-center"
        style={{
          background: 'linear-gradient(130deg, rgb(196,181,168) 5%, rgb(210,186,182) 95%)',
          height: 'clamp(280px, 40vw, 500px)',
        }}
      >
        <img
          src={imgIPhone13Pro}
          alt="Prosper XO screens"
          className="h-full w-auto object-cover"
        />
      </div>

      <p className="text-[#9e9393] text-[12px] italic mt-2">
        Note: Due to NDA some images may not appear in full.
      </p>
    </section>
  );
}
