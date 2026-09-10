import prosperBg from '../../../imports/ProsperUpdate/3f7b017aba3b8d5153ba9e150114ac20b29aac39.png';
import hooktheoryImg from '../../../imports/Container-1/426190e431263457f0b6b0b30408def5dc782409.png';
import overlapImg from '../../../imports/PhoneScreens/4d7e193feea4a47fc1b345bb98904695d3ee1f28.png';
import papertrailImg1 from '../../../imports/Container-1/422443be3ef7d122fe286b096a597b35a34c5eb4.png';
import papertrailImg2 from '../../../imports/Container-1/b9842d182bbcd0c5d5f9b923117cd7093eec1973.png';
import papertrailImg3 from '../../../imports/Container-1/1060ebda483088f459460d9c5d06db79a47895a8.png';
import bleachImg from '../../../imports/Container-1/1f48ea8fc6a65665629b7da114a31f8cd5b1b2ad.png';

interface CaseStudyCardProps {
  tags: string[];
  subtitle: string;
  title: string;
  meta: string;
  platform: string;
  href: string;
  textSide: 'left' | 'right';
  visual: React.ReactNode;
  visualBg: string;
}

function CaseStudyCard({ tags, subtitle, title, meta, platform, href, textSide, visual, visualBg }: CaseStudyCardProps) {
  const textPanel = (
    <div className="bg-[#302b1b] p-8 md:p-12 flex flex-col justify-between h-full">
      <div className="flex flex-col gap-1">
        <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
          {tags.map((tag) => (
            <span key={tag} className="bg-white/[0.08] text-[#d2bab6] font-bold text-[10px] tracking-[0.7px] uppercase px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-[#d2bab6]/70 text-[18px] md:text-[24px] leading-[1.3] font-normal">
          {subtitle}
        </p>
        <h3 className="text-white font-bold text-[28px] md:text-[36px] tracking-[-0.72px] leading-[1.15] mt-1">
          {title}
        </h3>
        <p className="text-[#d2bab6]/50 text-[11px] md:text-[12px] italic mt-1">{meta}</p>
      </div>
      <div className="flex items-center justify-between border-t border-[#d2bab6]/[0.12] pt-4 mt-6">
        <span className="text-[#d2bab6]/50 font-bold text-[11px] md:text-[12px] tracking-[1.2px] uppercase">
          {platform}
        </span>
        <a
          href={href}
          className="bg-white/[0.08] border border-white/[0.12] text-white font-bold text-[11px] tracking-[0.55px] uppercase px-4 py-2 rounded flex items-center gap-2 hover:bg-white/[0.15] transition-colors"
        >
          Case Study <span className="text-[14px]">→</span>
        </a>
      </div>
    </div>
  );

  const visualPanel = (
    <div className="relative overflow-hidden h-full min-h-[200px]" style={{ background: visualBg }}>
      <div className="absolute inset-0 flex items-center justify-center">
        {visual}
      </div>
    </div>
  );

  return (
    // Mobile: stack vertically. md+: side by side
    <div className="bg-white border border-[#e8e5e0] rounded-[16px] overflow-hidden flex flex-col md:grid md:grid-cols-2 min-h-[360px] md:h-[400px]">
      {textSide === 'left' ? (
        <>
          {/* On mobile text always comes first */}
          {textPanel}
          {visualPanel}
        </>
      ) : (
        <>
          <div className="order-2 md:order-1">{visualPanel}</div>
          <div className="order-1 md:order-2">{textPanel}</div>
        </>
      )}
    </div>
  );
}

export function FeaturedWork() {
  return (
    <section id="work" className="w-full max-w-[984px] mx-auto flex flex-col gap-8 md:gap-12">
      <div className="flex items-baseline justify-between border-b border-[#e8e5e0] pb-5 md:pb-6">
        <h2 className="font-semibold text-[24px] md:text-[30px] text-[#2a2020] tracking-[-0.3px]">
          Featured Work
        </h2>
        <span className="font-bold text-[11px] text-[#9e9393] tracking-[1.1px] uppercase">
          5 Case Studies
        </span>
      </div>

      <div className="flex flex-col gap-4">
        <CaseStudyCard
          tags={['Mobile', 'Product Design', '0 → 1']}
          subtitle="Empowering artists with data ownership —"
          title="Prosper XO"
          meta="Lead Product Designer · Oct 2025 – Present · Read time 15 min"
          platform="Mobile"
          href="/prosper-xo"
          textSide="right"
          visualBg="linear-gradient(148deg, rgb(196,181,168) 5%, rgb(210,186,182) 95%)"
          visual={<img src={prosperBg} alt="Prosper XO preview" className="h-[200px] md:h-[375px] object-contain rounded-[14px]" />}
        />
        <CaseStudyCard
          tags={['Web', 'UX Research', 'Client Work']}
          subtitle="Rethinking music theory for everyone —"
          title="HookTheory"
          meta="UX Researcher & Lead UI Designer · 3 weeks · Team of 4 · Read time 20 min"
          platform="Web"
          href="/hooktheory"
          textSide="left"
          visualBg="linear-gradient(148deg, rgb(26,58,92) 5%, rgb(24,95,165) 95%)"
          visual={<img src={hooktheoryImg} alt="HookTheory preview" className="h-[200px] md:h-[375px] object-contain rounded-[14px]" />}
        />
        <CaseStudyCard
          tags={['Mobile', 'Product Design']}
          subtitle="Time-first soccer match discovery —"
          title="Overlap"
          meta="Product Designer · 8 weeks · Read time 15 min"
          platform="Mobile · Web"
          href="/soccer"
          textSide="right"
          visualBg="linear-gradient(90deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), linear-gradient(148deg, rgb(30,45,30) 5%, rgb(45,74,45) 95%)"
          visual={<img src={overlapImg} alt="Overlap preview" className="h-[200px] md:h-[375px] object-contain rounded-[14px]" />}
        />
        <CaseStudyCard
          tags={['Mobile', 'Product Design']}
          subtitle="Building creative freedom for artists —"
          title="PaperTrail"
          meta="Product Designer · 4 weeks · Read time 20 min"
          platform="Mobile"
          href="/papertrail"
          textSide="left"
          visualBg="linear-gradient(148deg, rgb(42,32,24) 5%, rgb(61,48,32) 95%)"
          visual={
            <div className="relative w-full h-full flex items-center justify-center p-6 md:p-8">
              <div className="relative w-full max-w-[260px] md:max-w-[320px] aspect-[450/340]">
                <div
                  className="absolute"
                  style={{ left: '11%', top: '20%', width: '32%', transform: 'rotate(-6deg)' }}
                >
                  <img src={papertrailImg1} alt="" className="w-full object-contain shadow-[0px_9px_14px_rgba(0,0,0,0.1)]" />
                </div>
                <div
                  className="absolute"
                  style={{ left: '35%', top: '13%', width: '32%', transform: 'rotate(7deg)' }}
                >
                  <img src={papertrailImg2} alt="" className="w-full object-contain shadow-[0px_9px_14px_rgba(0,0,0,0.1)]" />
                </div>
                <div
                  className="absolute"
                  style={{ left: '21%', top: '3%', width: '36%' }}
                >
                  <img src={papertrailImg3} alt="" className="w-full object-contain shadow-[0px_25px_50px_rgba(0,0,0,0.15)]" />
                </div>
              </div>
            </div>
          }
        />
        <CaseStudyCard
          tags={['Web', 'UX Research', 'E-commerce']}
          subtitle="Turning product discovery into brand discovery —"
          title="Bleach USA"
          meta="UX Researcher & Lead UI Designer · 2 weeks · Solo · Read time 25 min"
          platform="Web"
          href="/bleach-usa"
          textSide="right"
          visualBg="linear-gradient(148deg, rgb(33,55,68) 5%, rgb(26,44,56) 95%)"
          visual={<img src={bleachImg} alt="Bleach USA preview" className="h-[200px] md:h-[375px] object-contain rounded-[14px]" />}
        />
      </div>
    </section>
  );
}