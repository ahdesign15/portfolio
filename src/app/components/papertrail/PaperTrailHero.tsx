import imgScreen1 from '../../../imports/Container-1/422443be3ef7d122fe286b096a597b35a34c5eb4.png';
import imgScreen2 from '../../../imports/Container-1/b9842d182bbcd0c5d5f9b923117cd7093eec1973.png';
import imgScreen3 from '../../../imports/Container-1/1060ebda483088f459460d9c5d06db79a47895a8.png';

const meta = [
  { term: 'Role', detail: ['Product Designer'] },
  { term: 'Duration', detail: ['4 Weeks'] },
  { term: 'Responsibilities', detail: ['Research · UX/UI · Prototyping'] },
  { term: 'Tools', detail: ['Figma'] },
];

export function PaperTrailHero() {
  return (
    <section className="w-full max-w-[984px] mx-auto px-6 md:px-12 pb-16 md:pb-24">
      <h1 className="font-bold text-[#8a6a50] leading-none tracking-[-1.5px] text-[56px] sm:text-[72px] md:text-[96px] md:tracking-[-2.4px]">
        PaperTrail
      </h1>

      <p className="text-[#7a6f6f] text-[18px] md:text-[26px] leading-normal mt-2">
        A reflective social platform for artists
      </p>

      <p className="text-[#7a6f6f] text-[15px] md:text-[16px] leading-[27.2px] max-w-[560px] mt-2 pb-6 md:pb-7">
        An alternative to engagement-driven social platforms — designed for
        artists who want to share work with intention, not performance. Research,
        UX, and UI from scratch.
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

      {/* Three-phone hero mockup */}
      <div
        className="mt-6 rounded-[16px] overflow-hidden flex items-center justify-center py-8 md:py-[30px]"
        style={{ background: 'linear-gradient(145deg, rgb(61,48,32) 5%, rgb(106,78,56) 95%)', minHeight: 'clamp(220px, 35vw, 466px)' }}
      >
        <div className="relative h-[200px] sm:h-[280px] md:h-[340px] w-[260px] sm:w-[380px] md:w-[450px]">
          <div className="absolute" style={{ left: '8%', top: '8%', transform: 'rotate(-6deg)' }}>
            <img src={imgScreen1} alt="PaperTrail app screen" className="w-[90px] sm:w-[120px] md:w-[133px] object-contain shadow-[0px_9px_14px_rgba(0,0,0,0.2)]" />
          </div>
          <div className="absolute" style={{ left: '58%', top: '8%', transform: 'rotate(6deg)' }}>
            <img src={imgScreen3} alt="PaperTrail app screen" className="w-[90px] sm:w-[120px] md:w-[133px] object-contain shadow-[0px_9px_14px_rgba(0,0,0,0.2)]" />
          </div>
          <div className="absolute" style={{ left: '34%', top: '0%' }}>
            <img src={imgScreen2} alt="PaperTrail app screen" className="w-[100px] sm:w-[135px] md:w-[148px] object-contain shadow-[0px_25px_50px_rgba(0,0,0,0.25)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
