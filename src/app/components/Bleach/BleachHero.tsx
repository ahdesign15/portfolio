import imgHeroLaptop from '../../../imports/Container-1/1f48ea8fc6a65665629b7da114a31f8cd5b1b2ad.png';

const meta = [
  { term: 'Role', detail: ['UX Researcher &', 'Lead UI Designer'] },
  { term: 'Team', detail: ['Solo'] },
  { term: 'Duration', detail: ['2 Weeks'] },
  { term: 'Tools', detail: ['Figma · Research · Usability', 'Testing'] },
];

export function BleachHero() {
  return (
    <section className="w-full max-w-[984px] mx-auto px-6 md:px-12 pb-16 md:pb-24">
      <h1 className="font-bold text-[#213744] leading-none tracking-[-1.5px] text-[56px] sm:text-[72px] md:text-[96px] md:tracking-[-2.4px]">
        Bleach USA
      </h1>

      <p className="text-[#7a6f6f] text-[18px] md:text-[26px] leading-normal mt-2">
        Turning product discovery into brand discovery
      </p>

      <p className="text-[#7a6f6f] text-[15px] md:text-[16px] leading-[27.2px] max-w-[560px] mt-2 pb-6 md:pb-7">
        UX Researcher & Lead UI Designer · Web · 2 weeks · Solo
        <br /><br />
        Leading research and design to transform a functional streetwear site into
        a competitive conversion engine — with a brand identity that finally
        matched the product.
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
        style={{ background: 'linear-gradient(142deg, rgb(33,55,68) 5%, rgb(22,37,48) 95%)', height: 'clamp(220px, 35vw, 480px)' }}
      >
        <img src={imgHeroLaptop} alt="Bleach USA redesign" className="h-[85%] w-auto object-contain rounded-[14px]" />
      </div>
    </section>
  );
}
