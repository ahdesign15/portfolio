import svgPaths from "./svg-x2hk08rn6";
import imgIPhone13Pro from "./3f7b017aba3b8d5153ba9e150114ac20b29aac39.png";
import imgImageEngage from "./954ce7dbc798463a21de10112b0b21d7fd19179e.png";
import imgImageEngage1 from "./b678284f3d88a31c7669c715683dac4b568bd139.png";
import imgImageAdminDrops from "./40a13b7860f34cbb89874e48ab88f00592bd6acf.png";
import imgVector from "./42b141cc5c542027ee09e2e4fe6d17ca3be90d49.png";
import imgVector1 from "./87399dc554a39c068d3f08401afa248d2a10ffa9.png";
import imgVector2 from "./42c3ad585da08ad29b275dd40a2c05829699c597.png";
import imgVector3 from "./34d605680b4e5e7b0d410244fbae79b1b5d1c7a7.png";
import imgVector4 from "./2a0d6ddbba882745c7ec5eed5211c54f6f8fd128.png";
import imgVector5 from "./a30576182d4b64459972c3854254033701e7f46c.png";

function Link() {
  return (
    <div className="h-[32px] relative shrink-0 w-[219.703px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[32px] left-0 text-[24px] text-white top-0 whitespace-nowrap">Andreis Hernandez</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute h-[24px] left-0 top-[8px] w-[53.281px]" data-name="Link">
      <p className="[word-break:break-word] absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-white top-[-1px] whitespace-nowrap">Design</p>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute h-[24px] left-[85.28px] top-[8px] w-[46.969px]" data-name="Link">
      <p className="[word-break:break-word] absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-white top-[-1px] whitespace-nowrap">About</p>
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute h-[24px] left-[164.25px] top-[8px] w-[61.297px]" data-name="Link">
      <p className="[word-break:break-word] absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-white top-[-1px] whitespace-nowrap">Resume</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p31e8b100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ButtonToggleTheme() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[273.55px] pt-[8px] px-[8px] rounded-[33554400px] size-[40px] top-0" data-name="Button - Toggle theme">
      <Icon />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[40px] relative shrink-0 w-[313.547px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link1 />
        <Link2 />
        <Link3 />
        <ButtonToggleTheme />
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="h-[88px] relative shrink-0 w-full" data-name="Navigation">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[32px] py-[24px] relative size-full">
          <Link />
          <Container />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[rgba(10,10,10,0.8)] h-[89px] relative shrink-0 w-full" data-name="Header">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-px px-[149.5px] relative size-full">
        <Navigation />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] bg-clip-text font-['Poppins:SemiBold_Italic',sans-serif] italic leading-[90px] relative shrink-0 text-[72px] text-[transparent] tracking-[-2.688px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(270deg, rgb(67, 147, 208) 0%, rgb(147, 200, 64) 25%, rgb(227, 225, 28) 50%, rgb(242, 148, 60) 75%, rgb(234, 15, 139) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)" }}>
        Prosper XO
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[46px] not-italic relative shrink-0 text-[36px] text-white whitespace-nowrap">From idea to investor demo</p>
    </div>
  );
}

function HeadingText() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[558px]" data-name="Heading Text">
      <Text />
      <Frame1 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[499px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Poppins:Regular','Noto_Sans:Bold_Italic','Noto_Sans_Math:Regular','Noto_Sans_Symbols:SemiBold','Noto_Sans_Symbols2:Regular',sans-serif] leading-[0] relative shrink-0 text-[24px] text-white w-full" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 700' }}>
        <span className="leading-[30px]">{`A `}</span>
        <span className="font-['Poppins:SemiBold_Italic','Noto_Sans:Bold_Italic','Noto_Sans_Math:Regular','Noto_Sans_Symbols:SemiBold','Noto_Sans_Symbols2:Regular',sans-serif] italic leading-[30px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 700' }}>{`0→1 `}</span>
        <span className="leading-[30px]">{`consumer product built from blank Figma file to investor-ready demo. `}</span>
        <span className="font-['Poppins:SemiBold_Italic','Noto_Sans:Bold_Italic','Noto_Sans_Math:Regular','Noto_Sans_Symbols:SemiBold','Noto_Sans_Symbols2:Regular',sans-serif] italic leading-[30px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 700' }}>{`Design system, product architecture, and 45 screens `}</span>
        <span className="leading-[30px]">across fan, artist, and admin surfaces.</span>
      </p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] h-[804px] items-start py-[50px] relative shrink-0">
      <HeadingText />
      <Paragraph />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame8 />
      <div className="relative shrink-0 size-[800px]" data-name="iPhone 13 Pro">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-16.67%] max-w-none top-0 w-[133.33%]" src={imgIPhone13Pro} />
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[18px] relative shrink-0 w-[262px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18.4px] left-0 text-[#8b83a3] text-[11.5px] top-[-0.2px] tracking-[1.4px] uppercase whitespace-nowrap">Role</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[50px] relative shrink-0 w-[262px]" data-name="Container">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid font-['Poppins:Regular',sans-serif] leading-[24.8px] not-italic relative size-full text-[#f5f1ff] text-[16px] whitespace-nowrap">
        <p className="absolute left-0 top-[0.2px]">Lead Product Designer</p>
        <p className="absolute left-0 top-[25px]">(Founding)</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[7.992px] h-[76px] items-start pt-[0.203px] relative shrink-0 w-[262px]" data-name="Container">
      <Text1 />
      <Container3 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[18px] relative shrink-0 w-[262px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18.4px] left-0 text-[#8b83a3] text-[11.5px] top-[-0.2px] tracking-[1.4px] uppercase whitespace-nowrap">Scope</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[50px] relative shrink-0 w-[262px]" data-name="Container">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid leading-[24.8px] relative size-full text-[#f5f1ff] text-[16px] whitespace-nowrap">
        <p className="absolute font-['Poppins:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] left-0 top-[0.2px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          0 → 1 Product
        </p>
        <p className="absolute font-['Poppins:Regular',sans-serif] left-0 not-italic top-[25px]">Design System · Brand Collab</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[7.992px] h-[76px] items-start pt-[0.203px] relative shrink-0 w-[262px]" data-name="Container">
      <Text2 />
      <Container5 />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[18px] relative shrink-0 w-[262px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18.4px] left-0 text-[#8b83a3] text-[11.5px] top-[-0.2px] tracking-[1.4px] uppercase whitespace-nowrap">Timeline</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[50px] relative shrink-0 w-[262px]" data-name="Container">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid font-['Poppins:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] leading-[24.8px] relative size-full text-[#f5f1ff] text-[16px] whitespace-nowrap">
        <p className="absolute left-0 top-[0.2px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Oct 2025 → Present
        </p>
        <p className="absolute left-0 top-[25px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Final Sprint: Feb → April 2026
        </p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[7.992px] h-[76px] items-start pt-[0.203px] relative shrink-0 w-[262px]" data-name="Container">
      <Text3 />
      <Container7 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[18px] relative shrink-0 w-[262px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18.4px] left-0 text-[#8b83a3] text-[11.5px] top-[-0.2px] tracking-[1.4px] uppercase whitespace-nowrap">Stage</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[50px] relative shrink-0 w-[262px]" data-name="Container">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid leading-[24.8px] relative size-full text-[#f5f1ff] text-[16px] whitespace-nowrap">
        <p className="absolute font-['Poppins:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] left-0 top-[0.2px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
          Idea → Investor Demo
        </p>
        <p className="absolute font-['Poppins:Regular',sans-serif] left-0 not-italic top-[25px]">(Pre-seed)</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[7.992px] h-[76px] items-start pt-[0.203px] relative shrink-0 w-[262px]" data-name="Container">
      <Text4 />
      <Container9 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[24px] items-end justify-center py-[8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(168,85,247,0.22)] border-solid border-t inset-0 pointer-events-none" />
      <Container2 />
      <Container4 />
      <Container6 />
      <Container8 />
    </div>
  );
}

function Component00Hero1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[991px] items-start relative shrink-0 w-full" data-name="00 Hero">
      <Frame9 />
      <Container1 />
    </div>
  );
}

function Component00Hero() {
  return (
    <div className="h-[1117px] relative shrink-0 w-full" data-name="00 - Hero">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative size-full">
          <Component00Hero1 />
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[49px] left-[354.13px] top-0 w-[766px]" data-name="Heading 2">
      <p className="[word-break:break-word] absolute font-['Poppins:Medium',sans-serif] leading-[0] left-[0.15px] not-italic text-[#f5f1ff] text-[0px] top-[1.87px] tracking-[-0.896px] whitespace-nowrap">
        <span className="leading-[49.28px] text-[44.8px]">{`An idea and a `}</span>
        <span className="font-['Poppins:Medium_Italic',sans-serif] italic leading-[49.28px] text-[#ea0f8b] text-[44.8px]">blank Figma file</span>
        <span className="leading-[49.28px] text-[44.8px]">.</span>
      </p>
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="h-[49px] relative shrink-0 w-[1120px]" data-name="SectionHeader">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18.4px] left-0 text-[#8b83a3] text-[11.5px] top-[-0.13px] tracking-[1.4px] uppercase whitespace-nowrap">01 — Context</p>
        <Heading />
      </div>
    </div>
  );
}

function BodyText() {
  return (
    <div className="h-[114px] relative shrink-0 w-[641px]" data-name="BodyText">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[28.56px] left-0 not-italic text-[#f5f1ff] text-[16.8px] top-[-0.09px] w-[641px]">{`Prosper XO came to me pre-seed, pre-funding, pre-design. Just a vision: music discovery through the world around you, not an algorithm. My job was to make that vision legible — to investors, to engineers, and to future users who hadn't seen it yet.`}</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-[1008.969px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[249.97px] pt-[0.094px] relative size-full">
        <BodyText />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[56.133px] h-[516.375px] items-end pt-[0.133px] relative shrink-0 w-full" data-name="Container">
      <SectionHeader />
      <Container11 />
    </div>
  );
}

function Component01Context() {
  return (
    <div className="h-[610px] relative shrink-0 w-full" data-name="01 - Context">
      <div className="content-stretch flex flex-col items-start pt-[124px] px-[40px] relative size-full">
        <Container10 />
      </div>
    </div>
  );
}

function SectionHeader1() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[222px] items-start relative shrink-0 w-full whitespace-nowrap" data-name="SectionHeader">
      <p className="font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18.4px] relative shrink-0 text-[#8b83a3] text-[11.5px] tracking-[1.4px] uppercase">02 — The Product</p>
      <div className="font-['Poppins:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[#f5f1ff] text-[0px] tracking-[-0.896px]">
        <p className="mb-0 text-[44.8px] whitespace-pre">
          <span className="leading-[49.28px]">{`A `}</span>
          <span className="[word-break:break-word] font-['Poppins:Medium_Italic',sans-serif] italic leading-[49.28px] text-[#ea0f8b] tracking-[-0.896px]">five-act flow</span>
          <span className="leading-[49.28px]">, one shared</span>
        </p>
        <p className="leading-[49.28px] text-[44.8px] whitespace-pre">{` navigation.`}</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] absolute bg-clip-text font-['Poppins:Regular',sans-serif] leading-[48px] left-0 not-italic text-[48px] text-[transparent] top-[2px] tracking-[-0.96px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(129.068deg, rgb(255, 107, 157) 6.9018%, rgb(194, 57, 243) 35.347%, rgb(168, 85, 247) 64.653%, rgb(6, 182, 212) 93.098%)" }}>
        45
      </p>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#8b83a3] text-[24px] w-[286px]">Screens designed for investor demo</p>
    </div>
  );
}

function StatCard() {
  return (
    <div className="bg-[#120d1e] content-stretch flex flex-col gap-[8px] h-[188px] items-start p-[36px] relative rounded-[16px] shrink-0 w-[352px]" data-name="StatCard">
      <div aria-hidden className="absolute border border-[rgba(168,85,247,0.22)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container12 />
      <Container13 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] absolute bg-clip-text font-['Poppins:Regular',sans-serif] leading-[48px] left-0 not-italic text-[48px] text-[transparent] top-[2px] tracking-[-0.96px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(112.754deg, rgb(255, 107, 157) 6.9018%, rgb(194, 57, 243) 35.347%, rgb(168, 85, 247) 64.653%, rgb(6, 182, 212) 93.098%)" }}>
        5
      </p>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#8b83a3] text-[24px] whitespace-nowrap">Act flow structure</p>
    </div>
  );
}

function StatCard1() {
  return (
    <div className="bg-[#120d1e] content-stretch flex flex-col gap-[8px] h-[189px] items-start p-[36px] relative rounded-[16px] shrink-0 w-[352px]" data-name="StatCard">
      <div aria-hidden className="absolute border border-[rgba(168,85,247,0.22)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container14 />
      <Container15 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] absolute bg-clip-text font-['Poppins:Regular',sans-serif] leading-[48px] left-0 not-italic text-[48px] text-[transparent] top-[2px] tracking-[-0.96px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(111.423deg, rgb(255, 107, 157) 6.9018%, rgb(194, 57, 243) 35.347%, rgb(168, 85, 247) 64.653%, rgb(6, 182, 212) 93.098%)" }}>
        3
      </p>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#8b83a3] text-[24px] w-[268px]">User contexts, one system</p>
    </div>
  );
}

function StatCard2() {
  return (
    <div className="bg-[#120d1e] content-stretch flex flex-col gap-[8px] items-start p-[36px] relative rounded-[16px] shrink-0 w-[352px]" data-name="StatCard">
      <div aria-hidden className="absolute border border-[rgba(168,85,247,0.22)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container16 />
      <Container17 />
    </div>
  );
}

function StatCards() {
  return (
    <div className="content-center flex flex-wrap gap-[32px] items-center justify-end relative shrink-0 w-full" data-name="Stat Cards">
      <StatCard />
      <StatCard1 />
      <StatCard2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#f5f1ff] text-[0px] w-[641px]">
          <span className="leading-[28.56px] text-[16.8px]">{`The fan experience needed to feel like a story, not an app. I structured it as five acts — `}</span>
          <span className="font-['Poppins:Medium',sans-serif] leading-[28.56px] text-[#ff6b9d] text-[16.8px]">Discover, Engage, Quest, Reward, Manage</span>
          <span className="leading-[28.56px] text-[16.8px]">{` — mapped across a single shared bottom nav so every user, fan or artist, lived in the same shell.`}</span>
        </p>
      </div>
    </div>
  );
}

function BodyText1() {
  return (
    <div className="relative shrink-0" data-name="BodyText">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#f5f1ff] text-[0px] w-[641px]">
          <span className="leading-[28.56px] text-[16.8px]">{`Artists don't get a separate app. They get `}</span>
          <span className="font-['Poppins:Medium',sans-serif] leading-[28.56px] text-[#ff6b9d] text-[16.8px]">{`Prosper's admin tool`}</span>
          <span className="leading-[28.56px] text-[16.8px]">{` — a management layer accessed from their profile where they can view analytics, track performance, and manage their presence. Same nav, same system, a different door. And critically: `}</span>
          <span className="font-['Poppins:Medium',sans-serif] leading-[28.56px] text-[#ff6b9d] text-[16.8px]">no gatekeeping.</span>
          <span className="leading-[28.56px] text-[16.8px]">{` Unlike other platforms that lock data behind follower thresholds or premium tiers, every artist on Prosper XO gets full access to their analytics regardless of metrics. The internal company tool is the only true split — a separate mobile surface for the ops team to moderate, manage inventory, and keep the platform healthy.`}</span>
        </p>
      </div>
    </div>
  );
}

function BodyText2() {
  return (
    <div className="relative shrink-0" data-name="BodyText">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#f5f1ff] text-[16.8px] w-[641px]">
          <span className="leading-[28.56px]">{`The third iteration brought what the first two were missing: `}</span>
          <span className="leading-[28.56px] text-[#06b6d4]">animation and motion design, positive response feedback, support flows, and the kind of interaction depth</span>
          <span className="leading-[28.56px]">{` that makes users feel like the platform is responding to them, not just displaying to them.`}</span>
        </p>
      </div>
    </div>
  );
}

function BodyTextContainer() {
  return (
    <div className="h-[496.75px] relative shrink-0 w-full" data-name="Body Text Container">
      <div className="content-stretch flex flex-col gap-[19.781px] items-start pl-[367.969px] pt-[-0.18px] relative size-full">
        <Frame5 />
        <BodyText1 />
        <BodyText2 />
      </div>
    </div>
  );
}

function ImageEngage() {
  return (
    <div className="blur-[2px] h-[534px] opacity-85 relative shrink-0 w-full" data-name="Image (Engage)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageEngage} />
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[#0a0612] h-[536px] relative rounded-[32px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <ImageEngage />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(168,85,247,0.22)] border-solid inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14.4px] left-[54.59px] text-[#a855f7] text-[9px] text-center top-[-0.2px] tracking-[0.9px] uppercase whitespace-nowrap">Engage</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#8b83a3] text-[10px] text-center whitespace-nowrap">Tip, collect, and quest</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[0.195px] h-[30px] items-start relative shrink-0 w-[108px]" data-name="Container">
      <Container20 />
      <Container21 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-center relative shrink-0 w-[267px]">
      <Container18 />
      <Container19 />
    </div>
  );
}

function ImageEngage1() {
  return (
    <div className="blur-[2px] h-[534px] opacity-85 relative shrink-0 w-full" data-name="Image (Engage)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageEngage1} />
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-[#0a0612] h-[536px] relative rounded-[32px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <ImageEngage1 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(168,85,247,0.22)] border-solid inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14.4px] left-[54.09px] text-[#a855f7] text-[9px] text-center top-[-0.2px] tracking-[0.9px] uppercase whitespace-nowrap">Library</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#8b83a3] text-[10px] text-center whitespace-nowrap">Collections and rewards</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[0.195px] h-[30px] items-start relative shrink-0 w-[108px]" data-name="Container">
      <Container24 />
      <Container25 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-center relative shrink-0 w-[267px]">
      <Container22 />
      <Container23 />
    </div>
  );
}

function ImageAdminDrops() {
  return (
    <div className="blur-[2px] h-[534px] opacity-85 relative shrink-0 w-full" data-name="Image (Admin — Drops)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageAdminDrops} />
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-[#0a0612] h-[536px] relative rounded-[32px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <ImageAdminDrops />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(168,85,247,0.22)] border-solid inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14.4px] left-[71.54px] text-[#a855f7] text-[9px] text-center top-[-0.2px] tracking-[0.9px] uppercase whitespace-nowrap">Admin — Drops</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#8b83a3] text-[10px] text-center whitespace-nowrap">Full visibility, no gatekeeping</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col gap-[0.195px] h-[30px] items-start relative shrink-0 w-[142px]" data-name="Container">
      <Container28 />
      <Container29 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-center relative shrink-0 w-[267px]">
      <Container26 />
      <Container27 />
    </div>
  );
}

function ScreensContainer() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Screens Container">
      <Frame4 />
      <Frame3 />
      <Frame2 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[67px] items-center justify-center relative shrink-0 w-[1120px]">
      <SectionHeader1 />
      <StatCards />
      <BodyTextContainer />
      <ScreensContainer />
    </div>
  );
}

function Component04TheProduct() {
  return (
    <div className="h-[1917.625px] relative shrink-0 w-full" data-name="04 - The Product">
      <div className="flex flex-row justify-end size-full">
        <div className="content-stretch flex gap-[10px] items-start justify-end pt-[124px] px-[40px] relative size-full">
          <Frame6 />
          <p className="[word-break:break-word] absolute font-['Poppins:ExtraLight_Italic',sans-serif] italic leading-[30px] left-[622px] text-[16px] text-white top-[1722px] w-[499px]">Note: Due to NDA some images may not appear for full view</p>
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[49px] left-[354px] top-[-0.13px] w-[766px]" data-name="Heading 2">
      <p className="[word-break:break-word] absolute font-['Poppins:Medium',sans-serif] leading-[0] left-[0.15px] not-italic text-[#f5f1ff] text-[0px] top-[1.87px] tracking-[-0.896px] whitespace-nowrap">
        <span className="leading-[49.28px] text-[44.8px]">{`Three designs to get to `}</span>
        <span className="font-['Poppins:Medium_Italic',sans-serif] italic leading-[49.28px] text-[#ea0f8b] text-[44.8px]">the one</span>
        <span className="leading-[49.28px] text-[44.8px]">.</span>
      </p>
    </div>
  );
}

function SectionHeader2() {
  return (
    <div className="h-[49px] relative shrink-0 w-[1120px]" data-name="SectionHeader">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18.4px] left-0 text-[#8b83a3] text-[11.5px] top-[-0.13px] tracking-[1.4px] uppercase whitespace-nowrap">03 — ITERATION</p>
        <Heading1 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[246px] relative shrink-0 w-[1008.969px]" data-name="Container">
      <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[28.56px] not-italic relative shrink-0 text-[#f5f1ff] text-[16.8px] w-full">{`Three directions to find the right one. V1 was intentionally unbranded — built to surface assumptions, not answers. V2 added structure and an early system, but the interaction depth wasn't there. V3 is what you see: animation, feedback loops, support flows, and the kind of motion that makes a product feel alive. Each version is shown below with the key decision that ended it.`}</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col h-[85.641px] items-start pl-[246px] pt-[-0.18px] relative shrink-0 w-[1008.969px]" data-name="Container">
      <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#f5f1ff] text-[0px] w-full">
        <span className="leading-[28.56px] text-[16.8px]">{`I would build a direction, then `}</span>
        <span className="font-['Poppins:Medium',sans-serif] leading-[28.56px] text-[#ea0f8b] text-[16.8px]">take it apart piece by piece</span>
        <span className="leading-[28.56px] text-[16.8px]">{` — keeping what served the product, discarding what didn't, and carrying the lessons forward. Each version wasn't a failure; it was a filter.`}</span>
      </p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[36px] items-start relative size-full">
        <Container31 />
        <Container32 />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[0.57%_1.4%_0.54%_1.2%]" data-name="Group">
      <div className="absolute inset-[4%_7.92%]" data-name="Vector">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="456.363" src={imgVector} width="210.386" />
      </div>
      <div className="absolute inset-[4%_7.92%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 210.386 456.363">
          <path d={svgPaths.p3f16c500} fill="url(#paint0_linear_240_1065)" fillOpacity="0.2" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_240_1065" x1="273.822" x2="22.5077" y1="-148.371" y2="456.261">
              <stop />
              <stop offset="1" stopColor="#666666" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="-translate-y-1/2 absolute aspect-[242.50563049316406/488.50091552734375] left-[1.2%] right-[1.4%] top-[calc(50%+0.06px)]" data-name="Vector">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="490.5" src={imgVector1} width="243.498" />
      </div>
    </div>
  );
}

function PropserPhoneScreen() {
  return (
    <div className="h-[496px] relative shrink-0 w-[250px]" data-name="Propser Phone Screen 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group />
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div className="bg-[#0a0612] relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(168,85,247,0.22)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pb-[21px] pt-[20px] relative size-full">
        <PropserPhoneScreen />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#8b83a3] text-[11.5px] tracking-[1.382px] uppercase w-full">
        <p className="leading-[17.86px]">Version 01 · Oct 2025</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f5f1ff] text-[17.6px] w-full">
        <p className="leading-[27.28px]">Exploration</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[5px] pt-[0.99px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8b83a3] text-[14.4px] w-full">
        <p className="leading-[22.32px] mb-0">The first pass was intentionally loose — a</p>
        <p className="leading-[22.32px] mb-0">general shape of what the platform could</p>
        <p className="leading-[22.32px] mb-0">be. Unbranded, structurally vague,</p>
        <p className="leading-[22.32px] mb-0">designed to start conversations and</p>
        <p className="leading-[22.32px]">surface assumptions.</p>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(168,85,247,0.15)] content-stretch flex items-start pb-[2.36px] pt-px px-[10px] relative rounded-[20px] shrink-0" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a855f7] text-[11.2px] whitespace-nowrap">
        <p className="leading-[17.36px]">Exploring</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7px] items-start p-[24px] relative size-full">
        <Container35 />
        <Heading2 />
        <Container36 />
        <Overlay />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#120d1e] col-1 justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="Background+Border">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-[23.33px] pt-px px-px relative rounded-[inherit] size-full">
        <BackgroundHorizontalBorder />
        <Container34 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(168,85,247,0.22)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[0.77%_3.2%_2.46%_1.6%]" data-name="Group">
      <div className="absolute inset-[4%_7.92%]" data-name="Vector">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="456.363" src={imgVector2} width="210.386" />
      </div>
      <div className="-translate-y-1/2 absolute aspect-[242.50563049316406/488.50091552734375] left-[1.6%] right-[3.2%] top-[calc(50%-4.19px)]" data-name="Vector">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="480" src={imgVector3} width="238" />
      </div>
    </div>
  );
}

function ProsperPhoneScreen() {
  return (
    <div className="h-[496px] relative shrink-0 w-[250px]" data-name="Prosper Phone Screen 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group1 />
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder1() {
  return (
    <div className="bg-[#0a0612] relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(168,85,247,0.22)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pb-[21px] pt-[20px] relative size-full">
        <ProsperPhoneScreen />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#8b83a3] text-[11.5px] tracking-[1.382px] uppercase w-full">
        <p className="leading-[17.86px]">Version 03 · Feb 2026</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f5f1ff] text-[17.6px] w-full">
        <p className="leading-[27.28px]">Production</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[5px] pt-px relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8b83a3] text-[14.4px] w-full">
        <p className="leading-[22.32px] mb-0">The final version adds depth: animation,</p>
        <p className="leading-[22.32px] mb-0">positive feedback loops, support flows, and</p>
        <p className="leading-[22.32px] mb-0">the in-depth interaction design that makes</p>
        <p className="leading-[22.32px] mb-0">it feel alive. Built as the foundation for the</p>
        <p className="leading-[22.32px]">fully developed platform.</p>
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(74,222,128,0.15)] content-stretch flex items-start pb-[2.36px] pt-px px-[10px] relative rounded-[20px] shrink-0" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4ade80] text-[11.2px] whitespace-nowrap">
        <p className="leading-[17.36px]">Production</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7px] items-start p-[24px] relative size-full">
        <Container38 />
        <Heading3 />
        <Container39 />
        <Overlay1 />
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#120d1e] col-3 justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="Background+Border">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-[23.31px] pt-px px-px relative rounded-[inherit] size-full">
        <BackgroundHorizontalBorder1 />
        <Container37 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(168,85,247,0.22)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[0.97%_1.91%]" data-name="Group">
      <div className="absolute inset-[4.19%_8.28%]" data-name="Vector">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="454.4" src={imgVector4} width="209.433" />
      </div>
      <div className="absolute inset-[0.97%_1.91%]" data-name="Vector">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="486.4" src={imgVector5} width="241.408" />
      </div>
    </div>
  );
}

function ProseperPhoneScreen() {
  return (
    <div className="h-[496px] relative shrink-0 w-[251px]" data-name="Proseper Phone Screen 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group2 />
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder2() {
  return (
    <div className="bg-[#0a0612] relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(168,85,247,0.22)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pb-[21px] pt-[20px] relative size-full">
        <ProseperPhoneScreen />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#8b83a3] text-[11.5px] tracking-[1.382px] uppercase w-full">
        <p className="leading-[17.86px]">Version 02</p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f5f1ff] text-[17.6px] w-full">
        <p className="leading-[27.28px]">Refining</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[5px] pt-[0.99px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8b83a3] text-[14.4px] w-full">
        <p className="leading-[22.32px] mb-0">A more concise flow and an early design</p>
        <p className="leading-[22.32px] mb-0">system. The bones were forming, but key</p>
        <p className="leading-[22.32px] mb-0">pieces were still missing — the experience</p>
        <p className="leading-[22.32px] mb-0">{`didn't yet capture the founder's vision or`}</p>
        <p className="leading-[22.32px] mb-0">the depth of interaction the product</p>
        <p className="leading-[22.32px]">demanded.</p>
      </div>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(6,182,212,0.15)] content-stretch flex items-start pb-[2.36px] pt-px px-[10px] relative rounded-[20px] shrink-0" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#06b6d4] text-[11.2px] whitespace-nowrap">
        <p className="leading-[17.36px]">Refining</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-end size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7px] items-start justify-end p-[24px] relative size-full">
          <Container41 />
          <Heading4 />
          <Container42 />
          <Overlay2 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#120d1e] col-2 justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="Background+Border">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <BackgroundHorizontalBorder2 />
        <Container40 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(168,85,247,0.22)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-[1120px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[23px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] relative size-full">
        <BackgroundBorder />
        <BackgroundBorder1 />
        <BackgroundBorder2 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col gap-[76.133px] items-end pt-[0.133px] relative shrink-0 w-full" data-name="Container">
      <SectionHeader2 />
      <Frame12 />
      <Container33 />
    </div>
  );
}

function Component02Iteration() {
  return (
    <div className="h-[1917.625px] relative shrink-0 w-full" data-name="02 - Iteration">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col items-end pt-[124px] px-[40px] relative size-full">
          <Container30 />
        </div>
      </div>
    </div>
  );
}

function SectionHeader3() {
  return (
    <div className="relative shrink-0 w-[1120px]" data-name="SectionHeader">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[206px] items-start relative size-full">
        <p className="font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18.4px] relative shrink-0 text-[#8b83a3] text-[11.5px] tracking-[1.4px] uppercase whitespace-nowrap">04 — Design System</p>
        <p className="font-['Poppins:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[#f5f1ff] text-[0px] tracking-[-0.896px] w-[766px]">
          <span className="leading-[49.28px] text-[44.8px]">{`The `}</span>
          <span className="font-['Poppins:Medium_Italic',sans-serif] italic leading-[49.28px] text-[#ea0f8b] text-[44.8px]">foundation</span>
          <span className="leading-[49.28px] text-[44.8px]">{` that made everything else possible.`}</span>
        </p>
      </div>
    </div>
  );
}

function BodyText3() {
  return (
    <div className="h-[114px] relative shrink-0 w-[654px]" data-name="BodyText">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[0] left-0 not-italic text-[#f5f1ff] text-[0px] top-[-0.09px] w-[641px]">
          <span className="leading-[28.56px] text-[16.8px]">{`Through the iteration process, I began to understand something fundamental: `}</span>
          <span className="font-['Poppins:Medium',sans-serif] leading-[28.56px] text-[#ff6b9d] text-[16.8px]">{`a design system isn't a nice-to-have at the start — it's what makes speed possible later.`}</span>
          <span className="leading-[28.56px] text-[16.8px]">{` Especially when your workflow includes AI-assisted tools.`}</span>
        </p>
      </div>
    </div>
  );
}

function BodyText4() {
  return (
    <div className="h-[171px] relative shrink-0 w-[641px]" data-name="BodyText">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[28.56px] left-0 not-italic text-[#f5f1ff] text-[16.8px] top-[-0.14px] w-[641px]">{`I worked with the brand designer to establish the typographic foundation — testing styles, weights, and pairings until we had a scale that worked across every context. From there I built out the full system: color tokens for three distinct surfaces (fan, artist admin, internal company), component primitives, gradient treatments, spacing, and the visual language that became Prosper XO's identity.`}</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="relative shrink-0 w-[1120px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20.234px] items-center pl-[246px] relative size-full">
        <BodyText3 />
        <BodyText4 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[15.844px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[12px] left-0 not-italic text-[10px] text-[rgba(255,255,255,0.9)] top-0 whitespace-nowrap">Base: #10061C</p>
      </div>
    </div>
  );
}

function ColorSwatch() {
  return (
    <div className="bg-[#10061c] content-stretch flex items-end p-[13px] relative rounded-[14px] shrink-0 size-[176.656px]" data-name="ColorSwatch">
      <div aria-hidden className="absolute border border-[rgba(168,85,247,0.22)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Text5 />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[15.844px] relative shrink-0 w-[35.609px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[12px] left-0 not-italic text-[10px] text-[rgba(255,255,255,0.9)] top-0 whitespace-nowrap">Purple: #250F42</p>
      </div>
    </div>
  );
}

function ColorSwatch1() {
  return (
    <div className="bg-[#250f42] content-stretch flex items-end p-[13px] relative rounded-[14px] shrink-0 size-[176.672px]" data-name="ColorSwatch">
      <div aria-hidden className="absolute border border-[rgba(168,85,247,0.22)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Text6 />
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[15.844px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[12px] left-0 not-italic text-[#363c43] text-[10px] top-0 whitespace-nowrap">Orange: #F2943C</p>
      </div>
    </div>
  );
}

function ColorSwatch2() {
  return (
    <div className="bg-[#f2943c] content-stretch flex items-end p-[13px] relative rounded-[14px] shrink-0 size-[176.656px]" data-name="ColorSwatch">
      <div aria-hidden className="absolute border border-[rgba(168,85,247,0.22)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Text7 />
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[15.844px] relative shrink-0 w-[35.609px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[12px] left-0 not-italic text-[#363c43] text-[10px] top-0 whitespace-nowrap">Yellow: #E3E11C</p>
      </div>
    </div>
  );
}

function ColorSwatch3() {
  return (
    <div className="bg-[#e3e11c] content-stretch flex items-end p-[13px] relative rounded-[14px] shrink-0 size-[176.672px]" data-name="ColorSwatch">
      <div aria-hidden className="absolute border border-[rgba(168,85,247,0.22)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Text8 />
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[15.844px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[12px] left-0 not-italic text-[10px] text-[rgba(255,255,255,0.9)] top-0 whitespace-nowrap">Pink: #EA0F8B</p>
      </div>
    </div>
  );
}

function ColorSwatch4() {
  return (
    <div className="bg-[#ea0f8b] content-stretch flex items-end p-[13px] relative rounded-[14px] shrink-0 size-[176.656px]" data-name="ColorSwatch">
      <div aria-hidden className="absolute border border-[rgba(168,85,247,0.22)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Text9 />
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[15.844px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[12px] left-0 not-italic text-[10px] text-[rgba(255,255,255,0.9)] top-0 whitespace-nowrap">Blue: #4393D0</p>
      </div>
    </div>
  );
}

function ColorSwatch5() {
  return (
    <div className="bg-[#4393d0] content-stretch flex items-end p-[13px] relative rounded-[14px] shrink-0 size-[176.672px]" data-name="ColorSwatch">
      <div aria-hidden className="absolute border border-[rgba(168,85,247,0.22)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Text10 />
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[15.844px] relative shrink-0 w-[41.547px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[12px] left-0 not-italic text-[10px] text-[rgba(255,255,255,0.9)] top-0 whitespace-nowrap">Green: #93c840</p>
      </div>
    </div>
  );
}

function ColorSwatch6() {
  return (
    <div className="bg-[#93c840] content-stretch flex items-end p-[13px] relative rounded-[14px] shrink-0 size-[176.672px]" data-name="ColorSwatch">
      <div aria-hidden className="absolute border border-[rgba(168,85,247,0.22)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Text11 />
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[15.844px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[12px] left-0 not-italic text-[10px] text-[rgba(255,255,255,0.9)] top-0 whitespace-nowrap">Red: #df4726</p>
      </div>
    </div>
  );
}

function ColorSwatch7() {
  return (
    <div className="bg-[#df4726] content-stretch flex items-end p-[13px] relative rounded-[14px] shrink-0 size-[176.672px]" data-name="ColorSwatch">
      <div aria-hidden className="absolute border border-[rgba(168,85,247,0.22)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Text12 />
    </div>
  );
}

function BrandColorContainer() {
  return (
    <div className="relative shrink-0 w-[751px]" data-name="Brand Color Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-center flex flex-wrap gap-[12px] items-center relative size-full">
        <ColorSwatch />
        <ColorSwatch1 />
        <ColorSwatch2 />
        <ColorSwatch3 />
        <ColorSwatch4 />
        <ColorSwatch5 />
        <ColorSwatch6 />
        <ColorSwatch7 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute h-[16px] left-[21px] top-[20.93px] w-[315px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Poppins:SemiBold',sans-serif] leading-[16px] left-[-0.16px] not-italic text-[#8b83a3] text-[12px] top-[-1px] whitespace-nowrap">{`Typography & color`}</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[40px] relative shrink-0 w-[315px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Poppins:Light',sans-serif] leading-[40px] left-[-0.16px] not-italic text-[#f5f1ff] text-[25px] top-0 whitespace-nowrap">Light 300</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[42px] relative shrink-0 w-[315px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[41.6px] left-[-0.16px] not-italic text-[#f5f1ff] text-[26px] top-[0.2px] whitespace-nowrap">Regular 400</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[42px] relative shrink-0 w-[315px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Poppins:Medium',sans-serif] leading-[41.6px] left-[-0.16px] not-italic text-[#f5f1ff] text-[26px] top-[0.2px] whitespace-nowrap">Medium 500</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[42px] relative shrink-0 w-[315px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Poppins:SemiBold',sans-serif] leading-[41.6px] left-[-0.16px] not-italic text-[#f5f1ff] text-[26px] top-[0.2px] whitespace-nowrap">Semibold 600</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.797px] h-[171px] items-start left-[21px] pt-[0.109px] top-[52.82px] w-[315px]" data-name="Container">
      <Container48 />
      <Container49 />
      <Container50 />
      <Container51 />
    </div>
  );
}

function Container53() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#f5f1ff] text-[24px] whitespace-nowrap">Heading 1</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f5f1ff] text-[20px] whitespace-nowrap">Heading 2</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f5f1ff] text-[16px] whitespace-nowrap">Body</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#8b83a3] text-[10px] whitespace-nowrap">Caption</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.891px] h-[126px] items-start left-[21px] py-[-0.383px] top-[243.89px] w-[315px]" data-name="Container">
      <Container53 />
      <Container54 />
      <Container55 />
      <Container56 />
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[14px] relative shrink-0 w-[110px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Courier_New:Regular',sans-serif] leading-[14.4px] left-[-0.09px] not-italic text-[#8b83a3] text-[9px] top-[-1.2px] tracking-[0.72px] whitespace-nowrap">#0a0612 · FAN BASE</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute bg-[#0a0612] content-stretch flex h-[36px] items-center left-[21px] pl-[9.93px] pr-[10px] rounded-[8px] top-[390.07px] w-[315px]" data-name="Container">
      <Text13 />
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[14px] relative shrink-0 w-[98px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Courier_New:Regular',sans-serif] leading-[14.4px] left-[0.03px] not-italic text-[#8b83a3] text-[9px] top-[-1.2px] tracking-[0.72px] whitespace-nowrap">#10061C · ARTIST</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute bg-[#10061c] content-stretch flex h-[36px] items-center left-[21px] pl-[9.805px] pr-[10px] rounded-[8px] top-[430.07px] w-[315px]" data-name="Container">
      <Text14 />
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[14px] relative shrink-0 w-[92px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Courier_New:Regular',sans-serif] leading-[14.4px] left-[0.09px] not-italic text-[#8b83a3] text-[9px] top-[-1.2px] tracking-[0.72px] whitespace-nowrap">#06030E · ADMIN</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute bg-[#06030e] content-stretch flex h-[36px] items-center left-[21px] pl-[9.75px] pr-[10px] rounded-[8px] top-[470.07px] w-[315px]" data-name="Container">
      <Text15 />
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[14px] relative shrink-0 w-[86px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Courier_New:Regular',sans-serif] leading-[14.4px] left-[0.15px] not-italic text-[#f5f1ff] text-[9px] top-[-1.2px] tracking-[0.72px] whitespace-nowrap">#120D1E · CARD</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute bg-[#120d1e] content-stretch flex h-[36px] items-center left-[21px] pl-[9.688px] pr-[10px] rounded-[8px] top-[510.07px] w-[315px]" data-name="Container">
      <Text16 />
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-[#0a0612] h-[607px] relative rounded-[24px] shrink-0 w-[357px]" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container46 />
        <Container47 />
        <Container52 />
        <Container57 />
        <Container58 />
        <Container59 />
        <Container60 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(168,85,247,0.22)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute h-[16px] left-[21px] top-[20.93px] w-[315px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Poppins:SemiBold',sans-serif] leading-[16px] left-[-0.16px] not-italic text-[#8b83a3] text-[12px] top-[-1px] whitespace-nowrap">Components</p>
    </div>
  );
}

function Container64() {
  return <div className="relative rounded-[10px] shrink-0 size-[36px]" style={{ backgroundImage: "linear-gradient(87.3082deg, rgba(197, 222, 240, 0.63) 9.361%, rgba(28, 62, 87, 0.63) 86.288%)" }} data-name="Container" />;
}

function Container66() {
  return (
    <div className="h-[19px] relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[16px] left-[0.13px] not-italic text-[12px] text-white top-[-0.09px] whitespace-nowrap">Card title</p>
    </div>
  );
}

function Container67() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[12px] left-[0.13px] not-italic text-[#6b7786] text-[10px] top-0 whitespace-nowrap">Supporting text</p>
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[35px] relative shrink-0 w-[73px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[0.094px] items-start relative size-full">
        <Container66 />
        <Container67 />
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute bg-[#120d1e] content-stretch flex gap-[11.875px] h-[70px] items-center left-[21px] pl-[16.836px] pr-[17px] py-[17px] rounded-[14px] top-[52.93px] w-[315px]" data-name="Container">
      <div aria-hidden className="absolute border border-[rgba(168,85,247,0.22)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container64 />
      <Container65 />
    </div>
  );
}

function Container69() {
  return (
    <div className="relative rounded-[10px] shrink-0" style={{ backgroundImage: "linear-gradient(69.7424deg, rgba(197, 222, 240, 0.63) 9.361%, rgba(28, 62, 87, 0.63) 86.288%)" }} data-name="Container">
      <div aria-hidden className="absolute border border-[#ea0f8b] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_4px_20px_0px_rgba(168,85,247,0.4)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[119px] py-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">Primary CTA</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden className="absolute border border-[#9b91a8] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[124px] py-[13px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#513f68] text-[12px] text-center whitespace-nowrap">Secondary</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="opacity-40 relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden className="absolute border border-[rgba(168,85,247,0.12)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[131px] py-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9eaab9] text-[12px] text-center whitespace-nowrap">Disabled</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.805px] h-[147px] items-start left-[21px] pt-[-0.156px] top-[134.86px] w-[315px]" data-name="Container">
      <Container69 />
      <Container70 />
      <Container71 />
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute h-[15px] left-[14px] top-[12.24px] w-[285px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[12px] left-[-0.16px] not-italic text-[#8b83a3] text-[10px] top-[-0.09px] whitespace-nowrap">Label</p>
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute bg-[#120d1e] border border-[rgba(168,85,247,0.22)] border-solid h-[61px] left-[21px] rounded-[10px] top-[293.64px] w-[315px]" data-name="Container">
      <Container73 />
      <p className="[word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[16px] left-[13.84px] not-italic text-[#f5f1ff] text-[12px] top-[27.34px] whitespace-nowrap">Input value</p>
    </div>
  );
}

function Container75() {
  return <div className="bg-[rgba(168,85,247,0.3)] relative rounded-[4px] shrink-0 size-[20px]" data-name="Container" />;
}

function Container76() {
  return <div className="bg-[rgba(168,85,247,0.15)] relative rounded-[4px] shrink-0 size-[20px]" data-name="Container" />;
}

function Container77() {
  return <div className="relative rounded-[33554400px] shrink-0 size-[32px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(234, 15, 139) 0%, rgb(242, 148, 60) 25%, rgb(227, 225, 28) 50%, rgb(147, 200, 64) 75%, rgb(67, 147, 208) 100%)" }} data-name="Container" />;
}

function Container78() {
  return <div className="bg-[rgba(168,85,247,0.15)] relative rounded-[4px] shrink-0 size-[20px]" data-name="Container" />;
}

function Container79() {
  return <div className="bg-[rgba(168,85,247,0.15)] relative rounded-[4px] shrink-0 size-[20px]" data-name="Container" />;
}

function Container74() {
  return (
    <div className="absolute bg-[#120d1e] content-stretch flex h-[58px] items-center justify-between left-[21px] pl-[20.961px] pr-[20.977px] py-[13px] rounded-[14px] top-[528.07px] w-[315px]" data-name="Container">
      <div aria-hidden className="absolute border border-[rgba(168,85,247,0.22)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container75 />
      <Container76 />
      <Container77 />
      <Container78 />
      <Container79 />
    </div>
  );
}

function Container80() {
  return (
    <div className="bg-[rgba(227,225,28,0.15)] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[33554400px] shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#e3e11c] text-[10px] whitespace-nowrap">Reward</p>
    </div>
  );
}

function Container81() {
  return (
    <div className="bg-[rgba(147,200,64,0.15)] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[33554400px] shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#93c840] text-[10px] whitespace-nowrap">Unlocked</p>
    </div>
  );
}

function Container82() {
  return (
    <div className="bg-[rgba(245,158,11,0.15)] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[33554400px] shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#f59e0b] text-[10px] whitespace-nowrap">Limited</p>
    </div>
  );
}

function Container83() {
  return (
    <div className="bg-[rgba(239,68,68,0.15)] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[33554400px] shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#ef4444] text-[10px] whitespace-nowrap">Locked</p>
    </div>
  );
}

function Container84() {
  return (
    <div className="bg-[rgba(67,147,208,0.15)] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[33554400px] shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#4393d0] text-[10px] whitespace-nowrap">Points</p>
    </div>
  );
}

function Container85() {
  return (
    <div className="bg-[rgba(234,15,139,0.15)] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[33554400px] shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#ea0f8b] text-[10px] whitespace-nowrap">Live</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-center flex flex-wrap gap-[4px] items-center left-[21.51px] top-[383px] w-[307px]">
      <Container80 />
      <Container81 />
      <Container82 />
      <Container83 />
      <Container84 />
      <Container85 />
    </div>
  );
}

function Container61() {
  return (
    <div className="bg-[#0a0612] h-[607px] relative rounded-[24px] shrink-0 w-[357px]" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container62 />
        <Container63 />
        <Container68 />
        <Container72 />
        <Container74 />
        <Frame />
      </div>
      <div aria-hidden className="absolute border border-[rgba(168,85,247,0.22)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Container87() {
  return (
    <div className="h-[16px] relative shrink-0 w-[315px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Poppins:SemiBold',sans-serif] leading-[16px] left-[-0.17px] not-italic text-[#8b83a3] text-[12px] top-[-1px] whitespace-nowrap">Signature elements</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Icon">
          <path d="M11 4.58333V17.4167" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2.29167" />
          <path d="M4.58333 11H17.4167" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2.29167" />
        </g>
      </svg>
    </div>
  );
}

function Container89() {
  return (
    <div className="drop-shadow-[0px_4px_10px_rgba(168,85,247,0.55)] relative rounded-[24px] shrink-0 size-[48px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(234, 15, 139) 0%, rgb(242, 148, 60) 25%, rgb(227, 225, 28) 50%, rgb(147, 200, 64) 75%, rgb(67, 147, 208) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="h-[72px] relative shrink-0 w-[315px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[121.5px] relative size-full">
        <Container89 />
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="h-[14px] relative shrink-0 w-[315px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Courier_New:Regular',sans-serif] leading-[14.4px] left-[158.39px] not-italic text-[#8b83a3] text-[9px] text-center top-[-1.2px] tracking-[0.72px] uppercase whitespace-nowrap">CREATE</p>
      </div>
    </div>
  );
}

function Container92() {
  return <div className="bg-gradient-to-b from-[#9b91a8] relative rounded-[33554400px] shrink-0 size-[24px] to-[#140824] via-[#513f68] via-[46.824%]" data-name="Container" />;
}

function Container93() {
  return <div className="bg-gradient-to-b from-[#9b91a8] relative rounded-[33554400px] shrink-0 size-[48px] to-[#140824] via-[#513f68] via-[46.824%]" data-name="Container" />;
}

function Container94() {
  return <div className="bg-gradient-to-b from-[#9b91a8] relative rounded-[33554400px] shrink-0 size-[64px] to-[#140824] via-[#513f68] via-[46.824%]" data-name="Container" />;
}

function Container91() {
  return (
    <div className="h-[64px] relative shrink-0 w-[315px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-end justify-center px-[79.5px] relative size-full">
        <Container92 />
        <Container93 />
        <Container94 />
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="h-[14px] relative shrink-0 w-[315px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[12px] left-[157.72px] not-italic text-[#8b83a3] text-[10px] text-center top-[-1.2px] whitespace-nowrap">AVATAR · SM / MD / LG</p>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="bg-gradient-to-b drop-shadow-[-1px_2px_2px_rgba(109,94,128,0.15)] from-[#9b91a8] relative rounded-[14px] shrink-0 to-[#140824] via-[#513f68] via-[46.824%]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[112px] py-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
          <p className="leading-[16px]">Primary action</p>
        </div>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="h-[14px] relative shrink-0 w-[315px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Courier_New:Regular',sans-serif] leading-[14.4px] left-[157.47px] not-italic text-[#8b83a3] text-[9px] text-center top-[-1.2px] tracking-[0.72px] uppercase whitespace-nowrap">CTA · SHADOW GLOW</p>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="h-[53px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] absolute bg-clip-text font-['Poppins:Bold',sans-serif] leading-[0] left-[-0.17px] not-italic text-[20px] text-[transparent] top-[-0.91px] w-[316px]" style={{ backgroundImage: "linear-gradient(rgb(234, 15, 139) 0%, rgb(242, 148, 60) 25%, rgb(227, 225, 28) 50%, rgb(147, 200, 64) 75%, rgb(67, 147, 208) 100%)" }}>
        <p className="bg-clip-text leading-[24px] mb-0" style={{ backgroundImage: "linear-gradient(rgb(234, 15, 139) 0%, rgb(242, 148, 60) 25%, rgb(227, 225, 28) 50%, rgb(147, 200, 64) 75%, rgb(67, 147, 208) 100%)" }}>
          Gradient
        </p>
        <p className="leading-[24px]">text style</p>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[12px] left-[-0.17px] not-italic text-[#8b83a3] text-[10px] top-[-1.2px] whitespace-nowrap">DISPLAY · GRAD CLIP</p>
    </div>
  );
}

function Container98() {
  return (
    <div className="h-[73px] relative shrink-0 w-[315px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6.102px] items-start pt-[-0.195px] relative size-full">
        <Container99 />
        <Container100 />
      </div>
    </div>
  );
}

function Container103() {
  return <div className="bg-[#ea0f8b] relative rounded-[4px] shadow-[0px_0px_8px_0px_#4ade80] shrink-0 size-[8px]" data-name="Container" />;
}

function Text17() {
  return (
    <div className="h-[18px] relative shrink-0 w-[70px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.6px] left-[0.14px] not-italic text-[#f5f1ff] text-[11px] top-[-0.8px] whitespace-nowrap">Live indicator</p>
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="h-[18px] relative shrink-0 w-[281px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.859px] items-center pl-[-0.172px] relative size-full">
        <Container103 />
        <Text17 />
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[16px] relative shrink-0 w-[281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[-0.17px] not-italic text-[#8b83a3] text-[10px] top-0 whitespace-nowrap">Card with glow border</p>
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="bg-[#120d1e] h-[74px] relative rounded-[14px] shrink-0 w-[315px]" data-name="Container">
      <div aria-hidden className="absolute border border-[rgba(168,85,247,0.35)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[5.797px] items-start p-[17px] relative size-full">
        <Container102 />
        <Text18 />
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="bg-[#0a0612] h-[607px] relative rounded-[24px] shrink-0 w-[357px]" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip pb-[21px] pt-[20.93px] px-[21px] relative rounded-[inherit] size-full">
        <Container87 />
        <Container88 />
        <Container90 />
        <Container91 />
        <Container95 />
        <Container96 />
        <Container97 />
        <Container98 />
        <Container101 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(168,85,247,0.22)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function DesignSystemPhones() {
  return (
    <div className="relative shrink-0" data-name="DesignSystemPhones">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center justify-center relative size-full">
        <Container45 />
        <Container61 />
        <Container86 />
      </div>
    </div>
  );
}

function Container105() {
  return <div className="absolute h-[390px] left-px rounded-bl-[16px] rounded-tl-[16px] top-px w-[3px]" style={{ backgroundImage: "linear-gradient(90.2862deg, rgb(255, 107, 157) 6.9018%, rgb(194, 57, 243) 35.347%, rgb(168, 85, 247) 64.653%, rgb(6, 182, 212) 93.098%)" }} data-name="Container" />;
}

function Container106() {
  return (
    <div className="absolute bg-[rgba(255,107,157,0.12)] h-[21px] left-[40.81px] rounded-[33554400px] top-[50.46px] w-[176px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[17.44px] left-[10.19px] text-[#ff6b9d] text-[10.9px] top-[0.78px] tracking-[0.87px] uppercase whitespace-nowrap">Design system insight</p>
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute h-[22px] left-[41px] top-[83.72px] w-[529px]" data-name="Heading 3">
      <p className="[word-break:break-word] absolute font-['Poppins:Medium',sans-serif] leading-[22.08px] left-0 not-italic text-[#f5f1ff] text-[18.4px] top-[0.96px] whitespace-nowrap">Why the system came first</p>
    </div>
  );
}

function Container107() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col font-['Poppins:Regular',sans-serif] gap-[15.5px] h-[217px] items-start leading-[25.12px] left-[41px] not-italic pt-[-0.25px] text-[#8b83a3] text-[15.7px] top-[117.76px] w-[529px]" data-name="Container">
      <p className="relative shrink-0 w-full">{`When you're a founding designer working at speed, the design system isn't documentation for a future team — it's the thing that keeps your own output consistent across 45+ screens and three user contexts.`}</p>
      <p className="relative shrink-0 w-full">It also became critical for working with Claude Code. Without defined tokens, components, and patterns, AI-generated output has nothing to measure against. The system gave every generated screen a standard to meet.</p>
    </div>
  );
}

function InsightCard() {
  return (
    <div className="bg-[#120d1e] h-[392px] relative rounded-[16px] shrink-0 w-full" data-name="InsightCard">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container105 />
        <Container106 />
        <Heading5 />
        <Container107 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(168,85,247,0.22)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container104() {
  return (
    <div className="relative shrink-0 w-[1120px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[367.969px] pr-[141.031px] pt-[-0.242px] relative size-full">
        <InsightCard />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col gap-[55.766px] items-end relative shrink-0 w-full" data-name="Container">
      <SectionHeader3 />
      <Container44 />
      <BrandColorContainer />
      <DesignSystemPhones />
      <Container104 />
    </div>
  );
}

function Component03DesignSystem() {
  return (
    <div className="relative shrink-0 w-full" data-name="03 - Design System">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col items-end pt-[124px] px-[40px] relative size-full">
          <Container43 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18.4px] relative shrink-0 text-[#8b83a3] text-[11.5px] tracking-[1.4px] uppercase whitespace-nowrap">05 — Process</p>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Heading 2">
      <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[#f5f1ff] text-[0px] tracking-[-0.896px] w-[628px]">
        <span className="leading-[49.28px] text-[44.8px]">{`AI as a tool, `}</span>
        <span className="font-['Poppins:Medium_Italic',sans-serif] italic leading-[49.28px] text-[#ea0f8b] text-[44.8px]">not a shortcut</span>
        <span className="leading-[49.28px] text-[44.8px]">.</span>
      </p>
    </div>
  );
}

function SectionHeader4() {
  return (
    <div className="relative shrink-0 w-full" data-name="SectionHeader">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[255px] items-center justify-center relative size-full">
        <Frame7 />
        <Heading6 />
      </div>
    </div>
  );
}

function BodyText5() {
  return (
    <div className="relative shrink-0" data-name="BodyText">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#f5f1ff] text-[0px] w-[641px]">
          <span className="leading-[28.56px] text-[16.8px]">{`I don't use AI to get the job done. I don't simply take what is given. I use it like a Jackson Pollock painting — `}</span>
          <span className="font-['Poppins:Medium',sans-serif] leading-[28.56px] text-[#ff6b9d] text-[16.8px]">generate, then take it apart piece by piece, and reassemble like a Lego set.</span>
          <span className="leading-[28.56px] text-[16.8px]">{` `}</span>
        </p>
      </div>
    </div>
  );
}

function BodyText6() {
  return (
    <div className="relative shrink-0" data-name="Body Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#f5f1ff] text-[0px] w-[641px]">
          <span className="leading-[28.56px] text-[16.8px]">{`Using AI isn't about accepting what's given. `}</span>
          <span className="font-['Poppins:Medium',sans-serif] leading-[28.56px] text-[#ff6b9d] text-[16.8px]">{`It's about having more material to be critical of.`}</span>
          <span className="leading-[28.56px] text-[16.8px]">{` The speed comes from how fast you can evaluate, not how fast you can generate.`}</span>
        </p>
      </div>
    </div>
  );
}

function Container109() {
  return (
    <div className="relative shrink-0 w-[833px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[19.914px] items-start py-[-0.18px] relative size-full">
        <BodyText5 />
        <BodyText6 />
      </div>
    </div>
  );
}

function Container111() {
  return <div className="absolute h-[364px] left-px rounded-bl-[16px] rounded-tl-[16px] top-px w-[3px]" style={{ backgroundImage: "linear-gradient(90.3067deg, rgb(255, 107, 157) 6.9018%, rgb(194, 57, 243) 35.347%, rgb(168, 85, 247) 64.653%, rgb(6, 182, 212) 93.098%)" }} data-name="Container" />;
}

function Container112() {
  return (
    <div className="absolute bg-[rgba(255,107,157,0.12)] h-[21px] left-[41.2px] rounded-[33554400px] top-[50.02px] w-[153px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[17.44px] left-[9.8px] text-[#ff6b9d] text-[10.9px] top-[0.78px] tracking-[0.87px] uppercase whitespace-nowrap">Process philosophy</p>
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute h-[22px] left-[41px] top-[83.28px] w-[529px]" data-name="Heading 3">
      <p className="[word-break:break-word] absolute font-['Poppins:Medium','Noto_Sans:Medium','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Medium','Noto_Sans_Symbols2:Regular',sans-serif] leading-[22.08px] left-0 text-[#f5f1ff] text-[18.4px] top-[0.96px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 500' }}>
        Generate → Deconstruct → Reassemble
      </p>
    </div>
  );
}

function ProsperProcess() {
  return (
    <div className="h-[75px] relative shrink-0 w-full" data-name="ProsperProcess">
      <p className="[word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[25.12px] left-0 not-italic text-[#8b83a3] text-[15.7px] top-[0.81px] w-[529px]">{`This isn't a one-size-fits-all workflow. It's a craft practice that uses AI to expand the surface area of exploration — then applies design judgment to refine it down to the right answer.`}</p>
    </div>
  );
}

function Container113() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.938px] h-[192px] items-start left-[41px] pt-[-0.188px] top-[117.26px] w-[529px]" data-name="Container">
      <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[25.12px] not-italic relative shrink-0 text-[#8b83a3] text-[15.7px] w-full">{`Every AI-assisted output went through the same cycle: generate a broad set of possibilities, break them down to their individual decisions, keep what serves the product, discard what doesn't, and rebuild with intention.`}</p>
      <ProsperProcess />
    </div>
  );
}

function InsightCard1() {
  return (
    <div className="bg-[#120d1e] h-[366px] relative rounded-[16px] shrink-0 w-full" data-name="InsightCard">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container111 />
        <Container112 />
        <Heading7 />
        <Container113 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(168,85,247,0.22)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container110() {
  return (
    <div className="content-stretch flex flex-col h-[366px] items-start pt-[0.195px] relative shrink-0 w-[739px]" data-name="Container">
      <InsightCard1 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end justify-center pr-[100px] relative size-full">
          <Container110 />
        </div>
      </div>
    </div>
  );
}

function Container116() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[123.38px] p-px rounded-[33554400px] size-[80px] top-[-0.2px]" style={{ backgroundImage: "linear-gradient(135deg, rgba(255, 107, 157, 0.15) 0%, rgba(168, 85, 247, 0.1) 100%)" }} data-name="Container">
      <div aria-hidden className="absolute border border-[rgba(255,107,157,0.3)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[44.8px] relative shrink-0 text-[#fafafa] text-[28px] whitespace-nowrap">🎨</p>
    </div>
  );
}

function Container117() {
  return (
    <div className="absolute h-[22px] left-[129.88px] top-[96px] w-[67px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Poppins:SemiBold',sans-serif] leading-[22.4px] left-[33.75px] not-italic text-[#ff6b9d] text-[14px] text-center top-[-0.2px] whitespace-nowrap">Generate</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[60px] left-[63.38px] top-[122.2px] w-[200px]" data-name="Paragraph">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[15px] left-[100px] not-italic text-[#8b83a3] text-[10px] text-center top-0 w-[200px]">Use Claude as a thinking partner. Explore ideas broadly. Produce raw material — flows, layouts, edge cases, variations.</p>
    </div>
  );
}

function Container118() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-center left-[342.7px] top-[39.8px] w-[13px]" data-name="Container">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#8b83a3] text-[18px] whitespace-nowrap">→</p>
    </div>
  );
}

function Container119() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[495px] p-px rounded-[33554400px] size-[80px] top-[-0.2px]" style={{ backgroundImage: "linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(124, 58, 237, 0.1) 100%)" }} data-name="Container">
      <div aria-hidden className="absolute border border-[rgba(168,85,247,0.3)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[44.8px] relative shrink-0 text-[#fafafa] text-[28px] whitespace-nowrap">🔍</p>
    </div>
  );
}

function Container120() {
  return (
    <div className="absolute h-[22px] left-[491.5px] top-[96px] w-[87px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Poppins:SemiBold',sans-serif] leading-[22.4px] left-[43.94px] not-italic text-[#a855f7] text-[14px] text-center top-[-0.2px] whitespace-nowrap">Deconstruct</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[60px] left-[435px] top-[122.2px] w-[200px]" data-name="Paragraph">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[15px] left-[100px] not-italic text-[#8b83a3] text-[10px] text-center top-0 w-[200px]">{`Take every output apart piece by piece. Evaluate each decision against the design system. Keep what works, discard what doesn't.`}</p>
    </div>
  );
}

function Container121() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-center left-[714.32px] top-[39.8px] w-[13px]" data-name="Container">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#8b83a3] text-[18px] whitespace-nowrap">→</p>
    </div>
  );
}

function Container122() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[866.63px] p-px rounded-[33554400px] size-[80px] top-[-0.2px]" style={{ backgroundImage: "linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(74, 222, 128, 0.1) 100%)" }} data-name="Container">
      <div aria-hidden className="absolute border border-[rgba(6,182,212,0.3)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[44.8px] relative shrink-0 text-[#fafafa] text-[28px] whitespace-nowrap">🧱</p>
    </div>
  );
}

function Container123() {
  return (
    <div className="absolute h-[22px] left-[862.63px] top-[96px] w-[88px]" data-name="Container">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Poppins:SemiBold',sans-serif] leading-[22.4px] left-[44.15px] not-italic text-[#06b6d4] text-[14px] text-center top-[-0.2px] whitespace-nowrap">Reassemble</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[60px] left-[806.63px] top-[122.2px] w-[200px]" data-name="Paragraph">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[15px] left-[100px] not-italic text-[#8b83a3] text-[10px] text-center top-0 w-[200px]">Rebuild with intention. Every pixel is a design decision, not a default. The output is craft — the AI was just the starting material.</p>
    </div>
  );
}

function Container115() {
  return (
    <div className="h-[198px] relative shrink-0 w-full" data-name="Container">
      <Container116 />
      <Container117 />
      <Paragraph1 />
      <Container118 />
      <Container119 />
      <Container120 />
      <Paragraph2 />
      <Container121 />
      <Container122 />
      <Container123 />
      <Paragraph3 />
    </div>
  );
}

function Container114() {
  return (
    <div className="bg-[#120d1e] content-stretch flex flex-col h-[296px] items-start pb-px pt-[49px] px-[25px] relative rounded-[16px] shrink-0 w-[1120px]" data-name="Container">
      <div aria-hidden className="absolute border border-[rgba(168,85,247,0.22)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container115 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end justify-center pr-[40px] relative size-full">
          <Container114 />
        </div>
      </div>
    </div>
  );
}

function Container108() {
  return (
    <div className="content-stretch flex flex-col gap-[56.133px] h-[1368.25px] items-end pt-[0.133px] relative shrink-0 w-full" data-name="Container">
      <SectionHeader4 />
      <Container109 />
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Component05Process() {
  return (
    <div className="relative shrink-0 w-full" data-name="05 - Process">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col items-end pt-[124px] px-[40px] relative size-full">
          <Container108 />
        </div>
      </div>
    </div>
  );
}

function SectionHeader5() {
  return (
    <div className="relative shrink-0 w-[1120px]" data-name="SectionHeader">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[241px] items-start justify-end relative size-full">
        <p className="font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18.4px] relative shrink-0 text-[#8b83a3] text-[11.5px] tracking-[1.4px] uppercase whitespace-nowrap">06 — Validation</p>
        <p className="font-['Poppins:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[#f5f1ff] text-[0px] tracking-[-0.896px] w-[753px]">
          <span className="leading-[49.28px] text-[44.8px]">{`Catching what's `}</span>
          <span className="font-['Poppins:Medium_Italic',sans-serif] italic leading-[49.28px] text-[#ea0f8b] text-[44.8px]">missing</span>
          <span className="leading-[49.28px] text-[44.8px]">{` before users do.`}</span>
        </p>
      </div>
    </div>
  );
}

function BodyText7() {
  return (
    <div className="relative shrink-0" data-name="Body Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#f5f1ff] text-[0px] w-[641px]">
          <span className="leading-[28.56px] text-[16.8px]">{`There's no traditional user testing on a pre-seed product that hasn't shipped. But validation doesn't only happen in a usability lab. For Prosper XO, it happened through `}</span>
          <span className="font-['Poppins:Medium',sans-serif] leading-[28.56px] text-[#ff6b9d] text-[16.8px]">rigorous design auditing</span>
          <span className="leading-[28.56px] text-[16.8px]">{` — systematically identifying what was missing, broken, or incomplete before the product ever reached a user's hands.`}</span>
        </p>
      </div>
    </div>
  );
}

function BodyText8() {
  return (
    <div className="relative shrink-0" data-name="BodyText">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[28.56px] not-italic relative shrink-0 text-[#f5f1ff] text-[16.8px] w-[641px]">{`Working through the complete flow exposed gaps: error states that didn't exist, screens that were assumed but never built, edge cases in the quest and reward loops, missing onboarding steps, and transitions that broke the narrative. Each gap was documented, prioritized, and addressed.`}</p>
      </div>
    </div>
  );
}

function BodyText9() {
  return (
    <div className="relative shrink-0" data-name="Body Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#f5f1ff] text-[0px] w-[641px]">
          <span className="leading-[28.56px] text-[16.8px]">{`This was our version of research — `}</span>
          <span className="font-['Poppins:Medium',sans-serif] leading-[28.56px] text-[#ff6b9d] text-[16.8px]">stress-testing the demo against the reality of what a real user would encounter.</span>
          <span className="leading-[28.56px] text-[16.8px]">{` If a screen couldn't answer "what happens when something goes wrong?", it wasn't done.`}</span>
        </p>
      </div>
    </div>
  );
}

function Container125() {
  return (
    <div className="h-[382.563px] relative shrink-0 w-[1120px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[19.961px] items-start pl-[367.969px] pt-[-0.133px] relative size-full">
        <BodyText7 />
        <BodyText8 />
        <BodyText9 />
      </div>
    </div>
  );
}

function Container128() {
  return (
    <div className="bg-[rgba(239,68,68,0.15)] relative rounded-[10px] shrink-0 size-[28px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[20.8px] relative shrink-0 text-[#ef4444] text-[13px] whitespace-nowrap">!</p>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[24px] relative shrink-0 w-[88px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Poppins:SemiBold',sans-serif] leading-[24.32px] left-[0.06px] not-italic text-[#f5f1ff] text-[15.2px] top-[0.84px] whitespace-nowrap">Error states</p>
      </div>
    </div>
  );
}

function Container127() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.938px] items-center pl-[-0.008px] relative size-full">
        <Container128 />
        <Text19 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[40px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[21.76px] not-italic relative shrink-0 text-[#8b83a3] text-[13.6px] w-[216px]">Identified and designed missing error, empty, and fallback states across all five acts of the fan flow.</p>
      </div>
    </div>
  );
}

function AuditCard() {
  return (
    <div className="bg-[#120d1e] content-stretch flex flex-col gap-[12.125px] items-center p-[21px] relative rounded-[14px] shrink-0" data-name="AuditCard">
      <div aria-hidden className="absolute border border-[rgba(168,85,247,0.22)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container127 />
      <Paragraph4 />
    </div>
  );
}

function Container130() {
  return (
    <div className="bg-[rgba(6,182,212,0.15)] relative rounded-[10px] shrink-0 size-[28px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold','Noto_Sans:SemiBold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:SemiBold','Noto_Sans_Symbols2:Regular',sans-serif] font-semibold leading-[20.8px] relative shrink-0 text-[#06b6d4] text-[13px] whitespace-nowrap">↻</p>
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[24px] relative shrink-0 w-[117px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Poppins:SemiBold',sans-serif] leading-[24.32px] left-[0.07px] not-italic text-[#f5f1ff] text-[15.2px] top-[0.84px] whitespace-nowrap">Flow continuity</p>
      </div>
    </div>
  );
}

function Container129() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.93px] items-center pl-[-0.008px] relative size-full">
        <Container130 />
        <Text20 />
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[40px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[21.76px] not-italic relative shrink-0 text-[#8b83a3] text-[13.6px] w-[216px]">Mapped prototype connections end-to-end to ensure the investor demo told a complete, unbroken story.</p>
      </div>
    </div>
  );
}

function AuditCard1() {
  return (
    <div className="bg-[#120d1e] content-stretch flex flex-col gap-[12.125px] items-center p-[21px] relative rounded-[14px] shrink-0" data-name="AuditCard">
      <div aria-hidden className="absolute border border-[rgba(168,85,247,0.22)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container129 />
      <Paragraph5 />
    </div>
  );
}

function Container132() {
  return (
    <div className="bg-[rgba(168,85,247,0.15)] relative rounded-[10px] shrink-0 size-[28px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[20.8px] relative shrink-0 text-[#a855f7] text-[13px] whitespace-nowrap">◇</p>
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[24px] relative shrink-0 w-[123px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Poppins:SemiBold',sans-serif] leading-[24.32px] left-[-0.16px] not-italic text-[#f5f1ff] text-[15.2px] top-[0.84px] whitespace-nowrap">Missing screens</p>
      </div>
    </div>
  );
}

function Container131() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12.164px] items-center pl-[-0.008px] relative size-full">
        <Container132 />
        <Text21 />
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[40px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[21.76px] not-italic relative shrink-0 text-[#8b83a3] text-[13.6px] w-[216px]">Gap analysis revealed 12+ screens assumed but never built — onboarding, payment, creation flows, confirmations.</p>
      </div>
    </div>
  );
}

function AuditCard2() {
  return (
    <div className="bg-[#120d1e] content-stretch flex flex-col gap-[12.125px] items-center p-[21px] relative rounded-[14px] shrink-0" data-name="AuditCard">
      <div aria-hidden className="absolute border border-[rgba(168,85,247,0.22)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container131 />
      <Paragraph6 />
    </div>
  );
}

function Container134() {
  return (
    <div className="bg-[rgba(74,222,128,0.15)] relative rounded-[10px] shrink-0 size-[28px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold','Noto_Sans:SemiBold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:SemiBold','Noto_Sans_Symbols2:Regular',sans-serif] font-semibold leading-[20.8px] relative shrink-0 text-[#4ade80] text-[13px] whitespace-nowrap">✓</p>
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[24px] relative shrink-0 w-[170px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Poppins:SemiBold',sans-serif] leading-[24.32px] left-[0.12px] not-italic text-[#f5f1ff] text-[15.2px] top-[0.84px] whitespace-nowrap">Component coverage</p>
      </div>
    </div>
  );
}

function Container133() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.883px] items-center pl-[-0.008px] relative size-full">
        <Container134 />
        <Text22 />
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[40px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[21.76px] not-italic relative shrink-0 text-[#8b83a3] text-[13.6px] w-[216px]">Audited every screen against the design system to catch inconsistencies, missing components, and token drift.</p>
      </div>
    </div>
  );
}

function AuditCard3() {
  return (
    <div className="bg-[#120d1e] content-stretch flex flex-col gap-[12.125px] items-center p-[21px] relative rounded-[14px] shrink-0" data-name="AuditCard">
      <div aria-hidden className="absolute border border-[rgba(168,85,247,0.22)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container133 />
      <Paragraph7 />
    </div>
  );
}

function Container126() {
  return (
    <div className="relative shrink-0 w-[764px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-center flex flex-wrap gap-[8px] items-center relative size-full">
        <AuditCard />
        <AuditCard1 />
        <AuditCard2 />
        <AuditCard3 />
      </div>
    </div>
  );
}

function Container136() {
  return <div className="absolute h-[257px] left-px rounded-bl-[16px] rounded-tl-[16px] top-px w-[3px]" style={{ backgroundImage: "linear-gradient(90.4343deg, rgb(255, 107, 157) 6.9018%, rgb(194, 57, 243) 35.347%, rgb(168, 85, 247) 64.653%, rgb(6, 182, 212) 93.098%)" }} data-name="Container" />;
}

function Container137() {
  return (
    <div className="absolute bg-[rgba(74,222,128,0.12)] h-[21px] left-[40.78px] rounded-[33554400px] top-[50.21px] w-[139px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[17.44px] left-[10.22px] text-[#4ade80] text-[10.9px] top-[0.78px] tracking-[0.87px] uppercase whitespace-nowrap">Why this matters</p>
    </div>
  );
}

function Heading8() {
  return (
    <div className="absolute h-[22px] left-[41px] top-[83.47px] w-[529px]" data-name="Heading 3">
      <p className="[word-break:break-word] absolute font-['Poppins:Medium',sans-serif] leading-[22.08px] left-0 not-italic text-[#f5f1ff] text-[18.4px] top-[0.96px] whitespace-nowrap">Validation before users</p>
    </div>
  );
}

function Container138() {
  return (
    <div className="absolute h-[101px] left-[41px] top-[117.26px] w-[529px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[25.12px] left-0 not-italic text-[#8b83a3] text-[15.7px] top-[1.25px] w-[529px]">{`For an investor showcase, gaps aren't just UX problems — they're credibility risks. A missing error state during a demo tells the room "this isn't thought through." Catching those moments before they happen is how design earns trust in the room.`}</p>
    </div>
  );
}

function InsightCard2() {
  return (
    <div className="bg-[#120d1e] h-[259px] relative rounded-[16px] shrink-0 w-full" data-name="InsightCard">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container136 />
        <Container137 />
        <Heading8 />
        <Container138 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(168,85,247,0.22)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container135() {
  return (
    <div className="h-[259.016px] relative shrink-0 w-[1120px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[367.969px] pr-[141.031px] pt-[0.008px] relative size-full">
        <InsightCard2 />
      </div>
    </div>
  );
}

function Container124() {
  return (
    <div className="content-stretch flex flex-col gap-[55.766px] h-[1254.609px] items-end pt-[-0.234px] relative shrink-0 w-full" data-name="Container">
      <SectionHeader5 />
      <Container125 />
      <Container126 />
      <Container135 />
    </div>
  );
}

function Component06Validation() {
  return (
    <div className="relative shrink-0 w-full" data-name="06 - Validation">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col items-end pt-[124px] px-[40px] relative size-full">
          <Container124 />
        </div>
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[49px] relative shrink-0 w-[766px]" data-name="Heading 2">
      <p className="[word-break:break-word] absolute font-['Poppins:Medium',sans-serif] leading-[0] left-[0.15px] not-italic text-[#f5f1ff] text-[0px] top-[1.87px] tracking-[-0.896px] whitespace-nowrap">
        <span className="leading-[49.28px] text-[44.8px]">{`From October to the `}</span>
        <span className="font-['Poppins:Medium_Italic',sans-serif] italic leading-[49.28px] text-[#ea0f8b] text-[44.8px]">investor room</span>
        <span className="leading-[49.28px] text-[44.8px]">.</span>
      </p>
    </div>
  );
}

function SectionHeader6() {
  return (
    <div className="relative shrink-0" data-name="SectionHeader">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[255px] items-start justify-end relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18.4px] relative shrink-0 text-[#8b83a3] text-[11.5px] tracking-[1.4px] uppercase whitespace-nowrap">07 — Journey</p>
        <Heading9 />
      </div>
    </div>
  );
}

function Container142() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18.4px] left-[-0.02px] text-[#8b83a3] text-[11.5px] top-[-0.2px] tracking-[1.4px] uppercase whitespace-nowrap">Oct 2025</p>
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] absolute font-['Poppins:Medium',sans-serif] leading-[24.96px] left-[-0.02px] not-italic text-[#f5f1ff] text-[20.8px] top-[0.02px] whitespace-nowrap">First exploration</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[151px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[25.12px] left-[-0.02px] not-italic text-[#8b83a3] text-[15.7px] top-[1.13px] w-[211px]">{`Initial design direction — broad, unbranded, intentionally loose. Built to surface assumptions and start shaping the product's architecture.`}</p>
    </div>
  );
}

function TimelineItem() {
  return (
    <div className="h-full relative shrink-0 w-[242px]" data-name="TimelineItem">
      <div className="content-stretch flex flex-col gap-[6.172px] items-start pl-[32px] pt-[0.148px] relative size-full">
        <Container142 />
        <Heading10 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Container143() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18.4px] left-[-0.02px] text-[#8b83a3] text-[11.5px] top-[-0.2px] tracking-[1.4px] uppercase whitespace-nowrap">Nov – Jan</p>
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] absolute font-['Poppins:Medium',sans-serif] leading-[24.96px] left-[-0.02px] not-italic text-[#f5f1ff] text-[20.8px] top-[0.05px] w-[211px]">{`Iteration & system building`}</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[201px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[25.12px] left-[-0.02px] not-italic text-[#8b83a3] text-[15.7px] top-px w-[211px]">{`Second design direction with early design system. Worked with brand design on typography and visual identity. Closer, but still missing the depth the founder's vision demanded.`}</p>
    </div>
  );
}

function TimelineItem1() {
  return (
    <div className="content-stretch flex flex-col gap-[6.148px] h-[297px] items-center pl-[32px] pt-[0.047px] relative shrink-0 w-[242px]" data-name="TimelineItem">
      <Container143 />
      <Heading11 />
      <Paragraph9 />
    </div>
  );
}

function Container144() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18.4px] left-[-0.02px] text-[#8b83a3] text-[11.5px] top-[-0.2px] tracking-[1.4px] uppercase whitespace-nowrap">Feb 2026</p>
    </div>
  );
}

function Heading12() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] absolute font-['Poppins:Medium',sans-serif] leading-[24.96px] left-[-0.02px] not-italic text-[#f5f1ff] text-[20.8px] top-[0.02px] whitespace-nowrap">Final sprint begins</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[201px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[25.12px] left-[-0.02px] not-italic text-[#8b83a3] text-[15.7px] top-px w-[211px]">Third and final design direction — animation, positive feedback, support flows, and the interaction depth that makes the product feel alive. Built on a mature design system that enabled speed.</p>
    </div>
  );
}

function TimelineItem2() {
  return (
    <div className="h-full relative shrink-0 w-[242px]" data-name="TimelineItem">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[6.172px] items-center pl-[32px] pt-[0.023px] relative size-full">
          <Container144 />
          <Heading12 />
          <Paragraph10 />
        </div>
      </div>
    </div>
  );
}

function Container145() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18.4px] left-[-0.02px] text-[#8b83a3] text-[11.5px] top-[-0.2px] tracking-[1.4px] uppercase whitespace-nowrap">Feb – Apr 2026</p>
    </div>
  );
}

function Heading13() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] absolute font-['Poppins:Medium',sans-serif] leading-[24.96px] left-[-0.02px] not-italic text-[#f5f1ff] text-[20.8px] top-[0.05px] w-[211px]">{`Production & validation`}</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[201px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[25.12px] left-[-0.02px] not-italic text-[#8b83a3] text-[15.7px] top-px w-[211px]">45 screens across fan, artist, and admin surfaces. Gap analysis, error states, missing screen identification. Claude Code integration for velocity with design system as quality gate.</p>
    </div>
  );
}

function TimelineItem3() {
  return (
    <div className="content-stretch flex flex-col gap-[6.148px] h-[297px] items-center pl-[32px] pt-[0.047px] relative shrink-0 w-[242px]" data-name="TimelineItem">
      <Container145 />
      <Heading13 />
      <Paragraph11 />
    </div>
  );
}

function Container146() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18.4px] left-[-0.02px] text-[#8b83a3] text-[11.5px] top-[-0.2px] tracking-[1.4px] uppercase whitespace-nowrap">Present</p>
    </div>
  );
}

function Heading14() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] absolute font-['Poppins:Medium',sans-serif] leading-[24.96px] left-[-0.02px] not-italic text-[#f5f1ff] text-[20.8px] top-[0.02px] whitespace-nowrap">The raise</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[151px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[25.12px] left-[-0.02px] not-italic text-[#8b83a3] text-[15.7px] top-[1.13px] w-[211px]">Prosper XO is heading into investor conversations. The design work built the credibility to get in the room. The product is built to keep them there.</p>
    </div>
  );
}

function TimelineItem4() {
  return (
    <div className="h-full relative shrink-0 w-[242px]" data-name="TimelineItem">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[6.172px] items-center pl-[32px] pt-[0.148px] relative size-full">
          <Container146 />
          <Heading14 />
          <Paragraph12 />
        </div>
      </div>
    </div>
  );
}

function Container141() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(168,85,247,0.22)] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center self-stretch">
        <TimelineItem />
      </div>
      <TimelineItem1 />
      <div className="flex flex-row items-center self-stretch">
        <TimelineItem2 />
      </div>
      <TimelineItem3 />
      <div className="flex flex-row items-center self-stretch">
        <TimelineItem4 />
      </div>
    </div>
  );
}

function Container140() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container141 />
      </div>
    </div>
  );
}

function Container139() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-end relative shrink-0 w-full" data-name="Container">
      <SectionHeader6 />
      <Container140 />
    </div>
  );
}

function Component07Journey() {
  return (
    <div className="content-stretch flex flex-col h-[1127px] items-end pt-[124px] px-[40px] relative shrink-0 w-[1472px]" data-name="07 - Journey">
      <Container139 />
    </div>
  );
}

function Heading15() {
  return (
    <div className="absolute h-[49px] left-[354.13px] top-0 w-[766px]" data-name="Heading 2">
      <p className="[word-break:break-word] absolute font-['Poppins:Medium',sans-serif] leading-[0] left-[0.15px] not-italic text-[#f5f1ff] text-[0px] top-[1.87px] tracking-[-0.896px] whitespace-nowrap">
        <span className="leading-[49.28px] text-[44.8px]">{`What `}</span>
        <span className="font-['Poppins:Medium_Italic',sans-serif] italic leading-[49.28px] text-[#ea0f8b] text-[44.8px]">founding design</span>
        <span className="leading-[49.28px] text-[44.8px]">{` really takes.`}</span>
      </p>
    </div>
  );
}

function SectionHeader7() {
  return (
    <div className="h-[49px] relative shrink-0 w-[1120px]" data-name="SectionHeader">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[18.4px] left-0 text-[#8b83a3] text-[11.5px] top-[-0.13px] tracking-[1.4px] uppercase whitespace-nowrap">08 — Reflection</p>
        <Heading15 />
      </div>
    </div>
  );
}

function Container149() {
  return (
    <div className="relative shrink-0 w-[1120px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[367.969px] pt-[-0.133px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[28.56px] not-italic relative shrink-0 text-[#f5f1ff] text-[16.8px] w-[641px]">{`The hardest lesson was knowing when my design instincts were wrong. In V2, I pushed for a layered navigation architecture — it was interesting to design. The founder pulled us back. That tension became the shared-bottom-nav decision that's now one of the product's defining features. The best design outcome in this project came from being overruled.`}</p>
      </div>
    </div>
  );
}

function Container148() {
  return (
    <div className="content-stretch flex flex-col gap-[56.133px] h-[487.828px] items-end pt-[0.133px] relative shrink-0 w-full" data-name="Container">
      <SectionHeader7 />
      <Container149 />
    </div>
  );
}

function Container147() {
  return (
    <div className="h-[728.828px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col items-end pt-[124px] px-[40px] relative size-full">
          <Container148 />
        </div>
      </div>
    </div>
  );
}

function Component08Reflection() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="08 - Reflection">
      <div aria-hidden className="absolute border-[rgba(168,85,247,0.22)] border-solid border-t inset-0 pointer-events-none" />
      <Container147 />
    </div>
  );
}

function PropserXoBody() {
  return (
    <div className="relative shrink-0 w-full" data-name="Propser XO BODY">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[128px] relative size-full">
          <Component00Hero />
          <Component01Context />
          <Component04TheProduct />
          <Component02Iteration />
          <Component03DesignSystem />
          <Component05Process />
          <Component06Validation />
          <Component07Journey />
          <Component08Reflection />
        </div>
      </div>
    </div>
  );
}

function Container151() {
  return (
    <div className="h-[32px] relative shrink-0 w-[219.703px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[32px] left-0 text-[24px] text-white top-0 whitespace-nowrap">Andreis Hernandez</p>
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[39.766px]" data-name="Link">
      <p className="[word-break:break-word] absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(255,255,255,0.6)] top-[-1px] whitespace-nowrap">Work</p>
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute h-[24px] left-[71.77px] top-0 w-[46.969px]" data-name="Link">
      <p className="[word-break:break-word] absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(255,255,255,0.6)] top-[-1px] whitespace-nowrap">About</p>
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute h-[24px] left-[150.73px] top-0 w-[61.297px]" data-name="Link">
      <p className="[word-break:break-word] absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(255,255,255,0.6)] top-[-1px] whitespace-nowrap">Resume</p>
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute h-[24px] left-[244.03px] top-0 w-[63.719px]" data-name="Link">
      <p className="[word-break:break-word] absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(255,255,255,0.6)] top-[-1px] whitespace-nowrap">LinkedIn</p>
    </div>
  );
}

function Link8() {
  return (
    <div className="absolute h-[24px] left-[339.75px] top-0 w-[40.813px]" data-name="Link">
      <p className="[word-break:break-word] absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(255,255,255,0.6)] top-[-1px] whitespace-nowrap">Email</p>
    </div>
  );
}

function Navigation1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[380.563px]" data-name="Navigation">
      <Link4 />
      <Link5 />
      <Link6 />
      <Link7 />
      <Link8 />
    </div>
  );
}

function Container152() {
  return (
    <div className="h-[20px] relative shrink-0 w-[169.656px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-[rgba(255,255,255,0.4)] top-0 whitespace-nowrap">© 2026 All rights reserved</p>
    </div>
  );
}

function Container150() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[0.016px] relative size-full">
          <Container151 />
          <Navigation1 />
          <Container152 />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-gradient-to-t from-[#0f0e0d] h-[161px] relative shrink-0 to-[#0a0a0a] via-1/2 via-[#0c0c0b] w-full" data-name="Footer">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pt-[65px] px-[149.5px] relative size-full">
          <Container150 />
        </div>
      </div>
    </div>
  );
}

export default function ProsperUpdate() {
  return (
    <div className="bg-[#060606] content-stretch flex flex-col items-start relative size-full" data-name="Prosper Update">
      <Header />
      <PropserXoBody />
      <Footer />
    </div>
  );
}