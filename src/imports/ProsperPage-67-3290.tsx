import svgPaths from "./svg-m76povq3h8";
import imgProsper21 from "figma:asset/55ec15748b4a8bddffe704acd706e3c2f234b8f9.png";
import imgProsper3 from "figma:asset/b678284f3d88a31c7669c715683dac4b568bd139.png";
import imgProsper1 from "figma:asset/954ce7dbc798463a21de10112b0b21d7fd19179e.png";
import imgProsper4 from "figma:asset/ad4cc81056f65c22b5ab955a60cac247bf4116e1.png";
import imgProsper5 from "figma:asset/40a13b7860f34cbb89874e48ab88f00592bd6acf.png";
import imgProsper6 from "figma:asset/38064452ce5b225260c90f5d025db5bb003e739b.png";

function Link() {
  return (
    <div className="h-[32px] relative shrink-0 w-[219.703px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[32px] left-0 text-[24px] text-black top-0 whitespace-pre">Andreis Hernandez</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[53.281px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-black top-[-1px] whitespace-pre">Design</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[46.969px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-black top-[-1px] whitespace-pre">About</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-black top-[-1px] whitespace-pre">Resume</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[15.19%_15.19%_12.5%_12.53%]" data-name="Vector">
        <div className="absolute inset-[-5.76%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.3473 19.354">
            <path d={svgPaths.p14b2bb80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[33554400px] shrink-0 size-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[40px] relative shrink-0 w-[313.547px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative size-full">
        <Link1 />
        <Link2 />
        <Link3 />
        <Button />
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="h-[88px] relative shrink-0 w-full" data-name="Navigation">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[32px] py-0 relative size-full">
          <Link />
          <Container />
        </div>
      </div>
    </div>
  );
}

function TopNav() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] relative shrink-0 w-full" data-name="Top Nav">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.05)] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-px pt-0 px-[157.5px] relative w-full">
        <Navigation />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative w-full">
          <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[60px] relative shrink-0 text-[60px] text-center text-white tracking-[-1.5px] whitespace-pre">🌈 Prosper XO</p>
        </div>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="opacity-90 relative shrink-0 w-full" data-name="Paragraph">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[20px] py-0 relative w-full">
          <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[32.5px] min-h-px min-w-px relative text-[20px] text-center text-white whitespace-pre-wrap">Designing the creative economy operating system that empowers artists with data ownership, connects fans through gamified engagement, and delivers measurable cultural ROI for brands</p>
        </div>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-95 px-[21px] py-0 relative shrink-0" data-name="Paragraph">
      <p className="font-['Plus_Jakarta_Sans:Light',sans-serif] font-light leading-[36px] relative shrink-0 text-[30px] text-center text-white whitespace-pre">When Artists Prosper, Culture Thrives</p>
    </div>
  );
}

function HeroText() {
  return (
    <div className="content-stretch flex flex-col gap-[26px] items-center justify-center relative shrink-0 w-[557px]" data-name="hero text">
      <Heading />
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function HeroImages() {
  return (
    <div className="h-[458px] relative shrink-0 w-[643px]" data-name="Hero Images">
      <div className="absolute h-[457px] left-[422px] top-px w-[221px]" data-name="Prosper 2 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProsper21} />
      </div>
      <div className="absolute h-[457px] left-[279px] top-px w-[221px]" data-name="Prosper 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProsper3} />
      </div>
      <div className="absolute h-[457px] left-[137px] top-0 w-[221px]" data-name="Prosper 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProsper1} />
      </div>
      <div className="absolute h-[457px] left-0 top-px w-[221px]" data-name="Prosper 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProsper4} />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <HeroText />
      <HeroImages />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[40px] left-0 text-[#1a1a1a] text-[36px] top-[-1px] tracking-[-0.36px] whitespace-pre">Project Overview</p>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[20px] left-0 text-[#667eea] text-[14px] top-0 tracking-[0.7px] uppercase whitespace-pre">Role</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#333] text-[16px] top-[-1px] whitespace-pre">{`Lead Product & UX Design`}</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#f8f9fa] col-[1] justify-self-stretch relative rounded-[14px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#667eea] border-l-4 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-0 pl-[36px] pr-[32px] pt-[32px] relative size-full">
        <Heading2 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[20px] left-0 text-[#667eea] text-[14px] top-0 tracking-[0.7px] uppercase whitespace-pre">Timeline</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#333] text-[16px] top-[-1px] w-[204px] whitespace-pre-wrap">18 months (Beta Launch Q2 2026)</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#f8f9fa] col-[2] justify-self-stretch relative rounded-[14px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#667eea] border-l-4 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-0 pl-[36px] pr-[32px] pt-[32px] relative size-full">
        <Heading3 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[20px] left-0 text-[#667eea] text-[14px] top-0 tracking-[0.7px] uppercase whitespace-pre">Platform</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#333] text-[16px] top-[-1px] w-[208px] whitespace-pre-wrap">iOS, Android, Web, Physical Hardware</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#f8f9fa] col-[3] justify-self-stretch relative rounded-[14px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#667eea] border-l-4 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-0 pl-[36px] pr-[32px] pt-[32px] relative size-full">
        <Heading4 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[20px] left-0 text-[#667eea] text-[14px] top-0 tracking-[0.7px] uppercase whitespace-pre">Team</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#333] text-[16px] top-[-1px] w-[173px] whitespace-pre-wrap">Founders, Engineers, Designers, Community Organizers</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#f8f9fa] col-[4] justify-self-stretch relative rounded-[14px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#667eea] border-l-4 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-0 pl-[36px] pr-[32px] pt-[32px] relative size-full">
        <Heading5 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="gap-[32px] grid grid-cols-[repeat(4,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[184px] relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}

function ProjectOverview() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Project Overview">
      <Heading1 />
      <Container1 />
    </div>
  );
}

function ProsperHero() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[60px] h-[1039px] items-center justify-center left-0 pb-[128px] pt-[64px] px-[197.5px] top-0 w-[1595px]" data-name="ProsperHero" style={{ backgroundImage: "linear-gradient(146.919deg, rgb(102, 126, 234) 0%, rgb(118, 75, 162) 50%, rgb(240, 147, 251) 100%)" }}>
      <Frame />
      <ProjectOverview />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[40px] left-0 text-[#1a1a1a] text-[36px] top-[-1px] tracking-[-0.36px] whitespace-pre">The Problem</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[65px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[32.5px] left-0 text-[#1a1a1a] text-[20px] top-0 w-[1172px] whitespace-pre-wrap">The creative economy is fundamentally broken. While streaming now accounts for 84% of recorded music revenue, artists are struggling more than ever to make a sustainable living from their work.</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[48px] left-[106.28px] text-[#667eea] text-[48px] text-center top-[-1px] translate-x-[-50%] whitespace-pre">61%</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-[106.11px] text-[#666] text-[16px] text-center top-[-1px] translate-x-[-50%] w-[206px] whitespace-pre-wrap">of U.S. musicians live below the poverty line</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-white col-[1] justify-self-stretch relative rounded-[14px] row-[1] self-stretch shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-0 pt-[32px] px-[32px] relative size-full">
        <Container9 />
        <Container10 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[48px] left-[106.23px] text-[#667eea] text-[48px] text-center top-[-1px] translate-x-[-50%] whitespace-pre">$0.004</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-[106.25px] text-[#666] text-[16px] text-center top-[-1px] translate-x-[-50%] w-[209px] whitespace-pre-wrap">average per-stream payout to artists</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-white col-[2] justify-self-stretch relative rounded-[14px] row-[1] self-stretch shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-0 pt-[32px] px-[32px] relative size-full">
        <Container12 />
        <Container13 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[48px] left-[106.19px] text-[#667eea] text-[48px] text-center top-[-1px] translate-x-[-50%] whitespace-pre">$21K</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-[106.25px] text-[#666] text-[16px] text-center top-[-1px] translate-x-[-50%] w-[209px] whitespace-pre-wrap">median annual income from music</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-white col-[3] justify-self-stretch relative rounded-[14px] row-[1] self-stretch shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-0 pt-[32px] px-[32px] relative size-full">
        <Container15 />
        <Container16 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[48px] left-[106.39px] text-[#667eea] text-[48px] text-center top-[-1px] translate-x-[-50%] whitespace-pre">0%</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-[106.25px] text-[#666] text-[16px] text-center top-[-1px] translate-x-[-50%] w-[203px] whitespace-pre-wrap">of their own fan data artists own</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-white col-[4] justify-self-stretch relative rounded-[14px] row-[1] self-stretch shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-0 pt-[32px] px-[32px] relative size-full">
        <Container18 />
        <Container19 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="gap-[32px] grid grid-cols-[repeat(4,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[172px] relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Container11 />
      <Container14 />
      <Container17 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[32px] left-0 text-[#ff6b6b] text-[24px] top-0 whitespace-pre">Core Issues We Identified</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] left-0 text-[#1a1a1a] text-[18px] top-0 whitespace-pre">• Platforms own all fan data, leaving artists without insights to build defensible careers</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] left-0 text-[#1a1a1a] text-[18px] top-0 whitespace-pre">• Fans want direct ways to support artists but tools are fragmented across multiple apps</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] left-0 text-[#1a1a1a] text-[18px] top-0 whitespace-pre">• Brands seek authentic cultural engagement but lack measurable ROI metrics</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] left-0 text-[#1a1a1a] text-[18px] top-0 whitespace-pre">{`• AI threatens to put 24% of music creators' revenues at risk by 2028`}</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] left-0 text-[#1a1a1a] text-[18px] top-0 whitespace-pre">• Physical spaces generate massive economic impact while artists who power them struggle financially</p>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[204px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
      <ListItem4 />
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-white h-[320px] relative rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[20px] items-start pb-0 pt-[32px] px-[32px] relative size-full">
        <Heading7 />
        <List />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] h-[725px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading6 />
      <Paragraph6 />
      <Container7 />
      <Container20 />
    </div>
  );
}

function ProsperProblem() {
  return (
    <div className="absolute bg-[#fff8f0] content-stretch flex flex-col h-[885px] items-start left-0 pb-0 pl-[201.5px] pr-[193.5px] pt-[80px] top-[1039px] w-[1595px]" data-name="ProsperProblem">
      <Container6 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="absolute h-[70.797px] left-[29.5px] top-0 w-[1536px]" data-name="Heading 2">
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[70.8px] left-0 text-[#1a1a1a] text-[59px] top-0 tracking-[-0.59px] whitespace-pre">Design Challenge</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[97.5px] left-[29.5px] top-[70.8px] w-[896px]" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[32.5px] left-0 text-[#333] text-[20px] top-0 w-[886px] whitespace-pre-wrap">How might we design a mobile platform that empowers artists with data ownership, creates sustainable income streams, and bridges the physical and digital creative economies—all while keeping the experience intuitive, engaging, and accessible for artists, fans, and brands?</p>
    </div>
  );
}

function DesignChallenge() {
  return (
    <div className="absolute bg-[#fafbfc] h-[168px] left-[197px] top-[2084px] w-[1204px]" data-name="Design Challenge">
      <Heading8 />
      <Paragraph7 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[40px] left-0 text-[#1a1a1a] text-[36px] top-[-1px] tracking-[-0.36px] whitespace-pre">The Solution</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] left-0 text-[#555] text-[20px] top-0 w-[1199px] whitespace-pre-wrap">Prosper XO creates a unified ecosystem where every interaction—from tipping and streaming to scanning NFC merchandise and completing fan missions—generates first-party data, recurring revenue, and measurable cultural impact.</p>
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[32px] left-0 text-[#667eea] text-[24px] top-0 whitespace-pre">🎵 For Artists</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#1a1a1a] text-[16px] top-[-1px] w-[232px] whitespace-pre-wrap">First-party data ownership and multiple revenue streams</p>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[30.391px] left-0 top-0 w-[19px]" data-name="Text">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[30.4px] left-0 text-[#667eea] text-[19px] top-0 whitespace-pre">→</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[60.781px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[30.4px] left-[32px] text-[#1a1a1a] text-[19px] top-0 w-[238px] whitespace-pre-wrap">Prosper ID dashboard with real-time fan analytics</p>
      <Text />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute h-[30.391px] left-0 top-0 w-[19px]" data-name="Text">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[30.4px] left-0 text-[#667eea] text-[19px] top-0 whitespace-pre">→</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[91.172px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[30.4px] left-[32px] text-[#1a1a1a] text-[19px] top-0 w-[252px] whitespace-pre-wrap">Direct monetization through tips, gated content, and releases</p>
      <Text1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute h-[30.391px] left-0 top-0 w-[19px]" data-name="Text">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[30.4px] left-0 text-[#667eea] text-[19px] top-0 whitespace-pre">→</p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[91.172px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[30.4px] left-[32px] text-[#1a1a1a] text-[19px] top-0 w-[225px] whitespace-pre-wrap">NFC-enabled merch that turns physical items into digital access points</p>
      <Text2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute h-[30.391px] left-0 top-0 w-[19px]" data-name="Text">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[30.4px] left-0 text-[#667eea] text-[19px] top-0 whitespace-pre">→</p>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="h-[91.172px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[30.4px] left-[32px] text-[#1a1a1a] text-[19px] top-0 w-[165px] whitespace-pre-wrap">Brand partnership opportunities with transparent ROI</p>
      <Text3 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[370.297px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem5 />
      <ListItem6 />
      <ListItem7 />
      <ListItem8 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[574.297px] items-start left-0 pb-[2px] pt-[42px] px-[42px] rounded-[16px] top-0 w-[373.328px]" data-name="Container" style={{ backgroundImage: "linear-gradient(123.026deg, rgba(102, 126, 234, 0.082) 0%, rgba(118, 75, 162, 0.082) 100%)" }}>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(102,126,234,0.19)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Heading10 />
      <Paragraph9 />
      <List1 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[32px] left-0 text-[#667eea] text-[24px] top-0 whitespace-pre">💛 For Fans</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#1a1a1a] text-[16px] top-[-1px] w-[272px] whitespace-pre-wrap">Gamified engagement with tangible impact</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute h-[30.391px] left-0 top-0 w-[19px]" data-name="Text">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[30.4px] left-0 text-[#667eea] text-[19px] top-0 whitespace-pre">→</p>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="h-[60.781px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[30.4px] left-[32px] text-[#1a1a1a] text-[19px] top-0 w-[257px] whitespace-pre-wrap">Earn Prosper Points for every interaction</p>
      <Text4 />
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute h-[30.391px] left-0 top-0 w-[19px]" data-name="Text">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[30.4px] left-0 text-[#667eea] text-[19px] top-0 whitespace-pre">→</p>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="h-[60.781px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[30.4px] left-[32px] text-[#1a1a1a] text-[19px] top-0 w-[224px] whitespace-pre-wrap">Unlock exclusive content and experiences</p>
      <Text5 />
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute h-[30.391px] left-0 top-0 w-[19px]" data-name="Text">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[30.4px] left-0 text-[#667eea] text-[19px] top-0 whitespace-pre">→</p>
    </div>
  );
}

function ListItem11() {
  return (
    <div className="h-[60.781px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[30.4px] left-[32px] text-[#1a1a1a] text-[19px] top-0 w-[241px] whitespace-pre-wrap">Collect digital and physical cultural moments</p>
      <Text6 />
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute h-[30.391px] left-0 top-0 w-[19px]" data-name="Text">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[30.4px] left-0 text-[#667eea] text-[19px] top-0 whitespace-pre">→</p>
    </div>
  );
}

function ListItem12() {
  return (
    <div className="h-[60.781px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[30.4px] left-[32px] text-[#1a1a1a] text-[19px] top-0 w-[244px] whitespace-pre-wrap">Direct support options that artists actually receive</p>
      <Text7 />
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[279.125px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem9 />
      <ListItem10 />
      <ListItem11 />
      <ListItem12 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[574.297px] items-start left-[413.33px] pb-[2px] pt-[42px] px-[42px] rounded-[16px] top-0 w-[373.328px]" data-name="Container" style={{ backgroundImage: "linear-gradient(123.026deg, rgba(102, 126, 234, 0.082) 0%, rgba(118, 75, 162, 0.082) 100%)" }}>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(102,126,234,0.19)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Heading11 />
      <Paragraph10 />
      <List2 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[32px] left-0 text-[#667eea] text-[24px] top-0 whitespace-pre">🤝 For Brands</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#1a1a1a] text-[16px] top-[-1px] w-[269px] whitespace-pre-wrap">Authentic cultural engagement with verifiable metrics</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute h-[30.391px] left-0 top-0 w-[19px]" data-name="Text">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[30.4px] left-0 text-[#667eea] text-[19px] top-0 whitespace-pre">→</p>
    </div>
  );
}

function ListItem13() {
  return (
    <div className="h-[60.781px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[30.4px] left-[32px] text-[#1a1a1a] text-[19px] top-0 w-[243px] whitespace-pre-wrap">Sponsor artist releases and fan missions</p>
      <Text8 />
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute h-[30.391px] left-0 top-0 w-[19px]" data-name="Text">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[30.4px] left-0 text-[#667eea] text-[19px] top-0 whitespace-pre">→</p>
    </div>
  );
}

function ListItem14() {
  return (
    <div className="h-[60.781px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[30.4px] left-[32px] text-[#1a1a1a] text-[19px] top-0 w-[207px] whitespace-pre-wrap">Access verified cultural impact data</p>
      <Text9 />
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute h-[30.391px] left-0 top-0 w-[19px]" data-name="Text">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[30.4px] left-0 text-[#667eea] text-[19px] top-0 whitespace-pre">→</p>
    </div>
  );
}

function ListItem15() {
  return (
    <div className="h-[60.781px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[30.4px] left-[32px] text-[#1a1a1a] text-[19px] top-0 w-[219px] whitespace-pre-wrap">Transparent ROI through real-time dashboards</p>
      <Text10 />
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute h-[30.391px] left-0 top-0 w-[19px]" data-name="Text">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[30.4px] left-0 text-[#667eea] text-[19px] top-0 whitespace-pre">→</p>
    </div>
  );
}

function ListItem16() {
  return (
    <div className="h-[60.781px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[30.4px] left-[32px] text-[#1a1a1a] text-[19px] top-0 w-[200px] whitespace-pre-wrap">Co-create meaningful community moments</p>
      <Text11 />
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[279.125px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem13 />
      <ListItem14 />
      <ListItem15 />
      <ListItem16 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[574.297px] items-start left-[826.66px] pb-[2px] pt-[42px] px-[42px] rounded-[16px] top-0 w-[373.344px]" data-name="Container" style={{ backgroundImage: "linear-gradient(123.027deg, rgba(102, 126, 234, 0.082) 0%, rgba(118, 75, 162, 0.082) 100%)" }}>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(102,126,234,0.19)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Heading12 />
      <Paragraph11 />
      <List3 />
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[574.297px] relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Container23 />
      <Container24 />
    </div>
  );
}

function ProsperSolution() {
  return (
    <div className="absolute bg-[#fafbfc] content-stretch flex flex-col gap-[40px] h-[910.297px] items-start left-0 pb-0 pt-[80px] px-[197.5px] top-[2289.05px] w-[1595px]" data-name="ProsperSolution">
      <Heading9 />
      <Paragraph8 />
      <Container21 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[40px] left-0 text-[#1a1a1a] text-[36px] top-[-1px] tracking-[-0.36px] whitespace-pre">{`Key Features & Design Decisions`}</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[40px] left-0 text-[#0a0a0a] text-[36px] top-[-1px] whitespace-pre">🎯</p>
    </div>
  );
}

function Heading14() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#1a1a1a] text-[20px] top-0 whitespace-pre">Release Engine</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[156px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[26px] left-0 text-[#555] text-[16px] top-[-1px] w-[312px] whitespace-pre-wrap">Transforms every song drop into a multi-stream cultural and financial moment with gamified missions, collectibles, and brand activations. Unlike traditional streaming, each release becomes a micro-economy.</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[16px] h-[334px] items-start left-0 pb-px pt-[33px] px-[33px] rounded-[14px] top-0 w-[378.656px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Container27 />
      <Heading14 />
      <Paragraph12 />
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[40px] left-0 text-[#0a0a0a] text-[36px] top-[-1px] whitespace-pre">⭐</p>
    </div>
  );
}

function Heading15() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#1a1a1a] text-[20px] top-0 whitespace-pre">Prosper Points</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[130px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[26px] left-0 text-[#555] text-[16px] top-[-1px] w-[303px] whitespace-pre-wrap">A rewards system that turns every action—tips, RSVPs, scans, merch purchases—into tangible value. Fans earn points, artists gain insights, brands see measurable engagement.</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[16px] h-[334px] items-start left-[410.66px] pb-px pt-[33px] px-[33px] rounded-[14px] top-0 w-[378.672px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Container29 />
      <Heading15 />
      <Paragraph13 />
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[40px] left-0 text-[#0a0a0a] text-[36px] top-[-1px] whitespace-pre">📱</p>
    </div>
  );
}

function Heading16() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#1a1a1a] text-[20px] top-0 whitespace-pre">NFC Integration</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[130px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[26px] left-0 text-[#555] text-[16px] top-[-1px] w-[311px] whitespace-pre-wrap">Physical merchandise becomes interactive. Tap a vinyl record, hoodie, or cassette with your phone to unlock exclusive content, verify authenticity, and earn rewards instantly.</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[16px] h-[334px] items-start left-[821.33px] pb-px pt-[33px] px-[33px] rounded-[14px] top-0 w-[378.656px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Container31 />
      <Heading16 />
      <Paragraph14 />
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[40px] left-0 text-[#0a0a0a] text-[36px] top-[-1px] whitespace-pre">🏙️</p>
    </div>
  );
}

function Heading17() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#1a1a1a] text-[20px] top-0 whitespace-pre">Prosper Portals</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[130px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[26px] left-0 text-[#555] text-[16px] top-[-1px] w-[307px] whitespace-pre-wrap">Physical kiosks at venues, record shops, and cultural spaces. Like ATMs for culture—walk up, tap your ID, discover artists, and connect with the local creative community.</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[16px] h-[308px] items-start left-0 pb-px pt-[33px] px-[33px] rounded-[14px] top-[366px] w-[378.656px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Container33 />
      <Heading17 />
      <Paragraph15 />
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[40px] left-0 text-[#0a0a0a] text-[36px] top-[-1px] whitespace-pre">📊</p>
    </div>
  );
}

function Heading18() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#1a1a1a] text-[20px] top-0 whitespace-pre">Artist Dashboard</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[130px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[26px] left-0 text-[#555] text-[16px] top-[-1px] w-[302px] whitespace-pre-wrap">First-party analytics showing real fan engagement, demographics, and revenue streams. Artists own their data and can make informed decisions about their careers.</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[16px] h-[308px] items-start left-[410.66px] pb-px pt-[33px] px-[33px] rounded-[14px] top-[366px] w-[378.672px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Container35 />
      <Heading18 />
      <Paragraph16 />
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[40px] left-0 text-[#0a0a0a] text-[36px] top-[-1px] whitespace-pre">🎮</p>
    </div>
  );
}

function Heading19() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#1a1a1a] text-[20px] top-0 whitespace-pre">Fan Missions</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[130px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[26px] left-0 text-[#555] text-[16px] top-[-1px] w-[306px] whitespace-pre-wrap">Gamified challenges that reward real-world participation. Attend a show, share a release, scan merch, or complete location-based tasks to earn points and unlock experiences.</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[16px] h-[308px] items-start left-[821.33px] pb-px pt-[33px] px-[33px] rounded-[14px] top-[366px] w-[378.656px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Container37 />
      <Heading19 />
      <Paragraph17 />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[674px] relative shrink-0 w-full" data-name="Container">
      <Container26 />
      <Container28 />
      <Container30 />
      <Container32 />
      <Container34 />
      <Container36 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[40px] items-center justify-center relative shrink-0 w-[1168px]">
      <div className="h-[576px] relative shrink-0 w-[278px]" data-name="Prosper 5">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProsper5} />
      </div>
      <div className="h-[576px] relative shrink-0 w-[278px]" data-name="Prosper 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProsper6} />
      </div>
    </div>
  );
}

function ProsperFeatures() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[40px] items-start left-0 px-[197.5px] py-[80px] top-[3199.34px] w-[1595px]" data-name="ProsperFeatures">
      <Heading13 />
      <Container25 />
      <Frame1 />
    </div>
  );
}

function Heading20() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[40px] left-0 text-[#1a1a1a] text-[36px] top-[-1px] tracking-[-0.36px] whitespace-pre">User Journey: Artist Perspective</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[40px] relative shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[40px] left-0 text-[#667eea] text-[36px] top-[-1px] whitespace-pre">01</p>
      </div>
    </div>
  );
}

function Heading21() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Heading 4">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#1a1a1a] text-[24px] whitespace-pre">{`Onboarding & Profile Creation`}</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[29.25px] min-h-px min-w-px relative text-[#555] text-[18px] whitespace-pre-wrap">Artists create their Prosper ID, upload music, set up merch drops, and define their brand partnerships preferences. The system guides them through data ownership setup.</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <Heading21 />
        <Paragraph18 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="bg-white col-[1] justify-self-stretch relative rounded-[14px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex gap-[32px] items-start p-[33px] relative size-full">
        <Container40 />
        <Container41 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[40px] relative shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[40px] left-0 text-[#667eea] text-[36px] top-[-1px] whitespace-pre">02</p>
      </div>
    </div>
  );
}

function Heading22() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[32px] left-0 text-[#1a1a1a] text-[24px] top-0 whitespace-pre">Release Creation</p>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[29.25px] min-h-px min-w-px relative text-[#555] text-[18px] whitespace-pre-wrap">{`Package a new song as a "release event" with gamified missions, NFC collectibles, and optional brand sponsorships. Set pricing, goals, and fan engagement targets.`}</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <Heading22 />
        <Paragraph19 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="bg-white col-[1] justify-self-stretch relative rounded-[14px] row-[2] self-start shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex gap-[32px] items-start p-[33px] relative w-full">
        <Container43 />
        <Container44 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[40px] relative shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[40px] left-0 text-[#667eea] text-[36px] top-[-1px] whitespace-pre">03</p>
      </div>
    </div>
  );
}

function Heading23() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Heading 4">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#1a1a1a] text-[24px] whitespace-pre">{`Launch & Engagement`}</p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[29.25px] min-h-px min-w-px relative text-[#555] text-[18px] whitespace-pre-wrap">Fans discover the release through the app, Prosper Portals, or NFC scans. They stream, tip, purchase merch, and complete missions—all generating data and revenue.</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <Heading23 />
        <Paragraph20 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-white col-[1] justify-self-stretch relative rounded-[14px] row-[3] self-start shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex gap-[32px] items-start p-[33px] relative w-full">
        <Container46 />
        <Container47 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[40px] relative shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[40px] left-0 text-[#667eea] text-[36px] top-[-1px] whitespace-pre">04</p>
      </div>
    </div>
  );
}

function Heading24() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading 4">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#1a1a1a] text-[24px] whitespace-pre">{`Analytics & Growth`}</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[29.25px] min-h-px min-w-px relative text-[#555] text-[18px] whitespace-pre-wrap">Real-time dashboard shows fan demographics, engagement patterns, revenue breakdown, and brand partnership opportunities. Artists iterate based on owned data.</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <Heading24 />
        <Paragraph21 />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="bg-white col-[1] justify-self-stretch relative rounded-[14px] row-[4] self-start shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex gap-[32px] items-start p-[33px] relative w-full">
        <Container49 />
        <Container50 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[40px] relative shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[40px] left-0 text-[#667eea] text-[36px] top-[-1px] whitespace-pre">05</p>
      </div>
    </div>
  );
}

function Heading25() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading 4">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#1a1a1a] text-[24px] whitespace-pre">Sustainable Income</p>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[29.25px] min-h-px min-w-px relative text-[#555] text-[18px] whitespace-pre-wrap">{`Multiple revenue streams compound: streaming, tips, merch, brand sponsorships, and premium fan tiers. A single 200-fan release can generate $20K+ vs. <$7 on Spotify.`}</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <Heading25 />
        <Paragraph22 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="bg-white col-[1] justify-self-stretch relative rounded-[14px] row-[5] self-start shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex gap-[32px] items-start p-[33px] relative w-full">
        <Container52 />
        <Container53 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="gap-[32px] grid grid-cols-[repeat(1,_minmax(0,_1fr))] grid-rows-[_____198px_fit-content(100%)_fit-content(100%)_fit-content(100%)_fit-content(100%)] relative shrink-0 w-full" data-name="Container">
      <Container39 />
      <Container42 />
      <Container45 />
      <Container48 />
      <Container51 />
    </div>
  );
}

function ProsperJourney() {
  return (
    <div className="absolute bg-[#fafbfc] content-stretch flex flex-col gap-[40px] items-start left-0 px-[197.5px] py-[80px] top-[4729.34px] w-[1595px]" data-name="ProsperJourney">
      <Heading20 />
      <Container38 />
    </div>
  );
}

function Heading26() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[40px] left-0 text-[36px] text-white top-[-1px] tracking-[-0.36px] whitespace-pre">{`Impact & Outcomes`}</p>
    </div>
  );
}

function Heading27() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[28px] left-0 text-[20px] text-white top-0 whitespace-pre">Artist Empowerment</p>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[130px] opacity-90 relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[26px] left-0 text-[16px] text-white top-[-1px] w-[290px] whitespace-pre-wrap">75% of surveyed artists requested Day One access. Each release generates $2K–$7K average, with brand partnerships pushing to $15K+—compared to pennies from streaming.</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col gap-[16px] h-[256px] items-start left-0 pb-px pt-[33px] px-[33px] rounded-[14px] top-0 w-[378.656px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Heading27 />
      <Paragraph23 />
    </div>
  );
}

function Heading28() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[28px] left-0 text-[20px] text-white top-0 whitespace-pre">Community Growth</p>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[130px] opacity-90 relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[26px] left-0 text-[16px] text-white top-[-1px] w-[311px] whitespace-pre-wrap">2,000+ artists engaged through town halls and surveys. 700+ fans signed up via QR codes. Multiple brand partners in preliminary discussions for pilot activations.</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col gap-[16px] h-[256px] items-start left-[410.66px] pb-px pt-[33px] px-[33px] rounded-[14px] top-0 w-[378.672px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Heading28 />
      <Paragraph24 />
    </div>
  );
}

function Heading29() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[28px] left-0 text-[20px] text-white top-0 whitespace-pre">Data Ownership</p>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[104px] opacity-90 relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[26px] left-0 text-[16px] text-white top-[-1px] w-[308px] whitespace-pre-wrap">First platform giving artists 100% ownership of their fan data. Every interaction builds a defensible data moat that compounds with network growth.</p>
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col gap-[16px] h-[256px] items-start left-[821.33px] pb-px pt-[33px] px-[33px] rounded-[14px] top-0 w-[378.656px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Heading29 />
      <Paragraph25 />
    </div>
  );
}

function Heading30() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[28px] left-0 text-[20px] text-white top-0 whitespace-pre">Market Validation</p>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[104px] opacity-90 relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[26px] left-0 text-[16px] text-white top-[-1px] w-[306px] whitespace-pre-wrap">Featured in NPR, KUTX, and Austin Chronicle. Partnerships forming with City of Austin, UT Austin, and Congressional advocacy for artist data rights.</p>
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col gap-[16px] h-[230px] items-start left-0 pb-px pt-[33px] px-[33px] rounded-[14px] top-[288px] w-[378.656px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Heading30 />
      <Paragraph26 />
    </div>
  );
}

function Heading31() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[28px] left-0 text-[20px] text-white top-0 whitespace-pre">Network Effects</p>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="h-[104px] opacity-90 relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[26px] left-0 text-[16px] text-white top-[-1px] w-[298px] whitespace-pre-wrap">With 500 artists and 10K fans, platform generates 2–3M+ verifiable interactions annually. Each action creates revenue, data, and compound network value.</p>
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col gap-[16px] h-[230px] items-start left-[410.66px] pb-px pt-[33px] px-[33px] rounded-[14px] top-[288px] w-[378.672px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Heading31 />
      <Paragraph27 />
    </div>
  );
}

function Heading32() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[28px] left-0 text-[20px] text-white top-0 whitespace-pre">Financial Model</p>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="h-[104px] opacity-90 relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[26px] left-0 text-[16px] text-white top-[-1px] w-[309px] whitespace-pre-wrap">70–80% gross margins across SaaS, data, and merch. Projected $1.2–1.8M GMV in first 18 months with path to $5–7M seed round.</p>
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col gap-[16px] h-[230px] items-start left-[821.33px] pb-px pt-[33px] px-[33px] rounded-[14px] top-[288px] w-[378.656px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Heading32 />
      <Paragraph28 />
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[518px] relative shrink-0 w-full" data-name="Container">
      <Container56 />
      <Container57 />
      <Container58 />
      <Container59 />
      <Container60 />
      <Container61 />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] h-[598px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading26 />
      <Container55 />
    </div>
  );
}

function ProsperImpact() {
  return (
    <div className="absolute content-stretch flex flex-col h-[758px] items-start left-0 pb-0 pt-[80px] px-[197.5px] top-[5971.34px] w-[1595px]" data-name="ProsperImpact" style={{ backgroundImage: "linear-gradient(154.581deg, rgb(102, 126, 234) 0%, rgb(118, 75, 162) 100%)" }}>
      <Container54 />
    </div>
  );
}

function Header() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Header">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[40px] left-0 text-[#1a1a1a] text-[36px] top-[-1px] tracking-[-0.36px] whitespace-pre">{`Design Learnings & Takeaways`}</p>
    </div>
  );
}

function BoldText() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[1148px]" data-name="Bold Text">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#667eea] text-[20px] top-0 w-[371px] whitespace-pre-wrap">{`Bridging Physical & Digital is Complex:`}</p>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="h-[94.5px] relative shrink-0 w-full" data-name="Paragraph">
      <BoldText />
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[29.25px] left-0 text-[#1a1a1a] text-[18px] top-[36px] w-[1138px] whitespace-pre-wrap">Designing for NFC interactions, physical kiosks, and mobile apps simultaneously required thinking systemically about touchpoints, data flow, and user context at every interaction.</p>
    </div>
  );
}

function Container63() {
  return (
    <div className="bg-[#f8f9fa] col-[1] justify-self-stretch relative rounded-[10px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#667eea] border-l-4 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col items-start pb-0 pl-[28px] pr-[24px] pt-[24px] relative size-full">
        <Paragraph29 />
      </div>
    </div>
  );
}

function BoldText1() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[1148px]" data-name="Bold Text">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#667eea] text-[20px] top-0 w-[329px] whitespace-pre-wrap">Gamification Must Feel Authentic:</p>
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="h-[94.5px] relative shrink-0 w-full" data-name="Paragraph">
      <BoldText1 />
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[29.25px] left-0 text-[#1a1a1a] text-[18px] top-[36px] w-[1121px] whitespace-pre-wrap">Early prototypes felt too game-like. We learned that rewards systems work best when they celebrate real actions fans already want to take—supporting artists they love—rather than manufactured engagement.</p>
    </div>
  );
}

function Container64() {
  return (
    <div className="bg-[#f8f9fa] col-[1] justify-self-stretch relative rounded-[10px] row-[2] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#667eea] border-l-4 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col items-start pb-0 pl-[28px] pr-[24px] pt-[24px] relative size-full">
        <Paragraph30 />
      </div>
    </div>
  );
}

function BoldText2() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[1148px]" data-name="Bold Text">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#667eea] text-[20px] top-0 w-[303px] whitespace-pre-wrap">Data Transparency Builds Trust:</p>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="h-[94.5px] relative shrink-0 w-full" data-name="Paragraph">
      <BoldText2 />
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[29.25px] left-0 text-[#1a1a1a] text-[18px] top-[36px] w-[1067px] whitespace-pre-wrap">{`Showing artists exactly what data they own and how it's used became a core differentiator. Transparency isn't just ethical—it's a competitive advantage.`}</p>
    </div>
  );
}

function Container65() {
  return (
    <div className="bg-[#f8f9fa] col-[1] justify-self-stretch relative rounded-[10px] row-[3] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#667eea] border-l-4 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col items-start pb-0 pl-[28px] pr-[24px] pt-[24px] relative size-full">
        <Paragraph31 />
      </div>
    </div>
  );
}

function BoldText3() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[1148px]" data-name="Bold Text">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#667eea] text-[20px] top-0 w-[397px] whitespace-pre-wrap">Multi-Stakeholder Design is Challenging:</p>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="h-[94.5px] relative shrink-0 w-full" data-name="Paragraph">
      <BoldText3 />
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[29.25px] left-0 text-[#1a1a1a] text-[18px] top-[36px] w-[1142px] whitespace-pre-wrap">Balancing artist needs, fan desires, and brand objectives required constant iteration. The Release Engine succeeded because it created value for all three groups simultaneously.</p>
    </div>
  );
}

function Container66() {
  return (
    <div className="bg-[#f8f9fa] col-[1] justify-self-stretch relative rounded-[10px] row-[4] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#667eea] border-l-4 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col items-start pb-0 pl-[28px] pr-[24px] pt-[24px] relative size-full">
        <Paragraph32 />
      </div>
    </div>
  );
}

function BoldText4() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[1148px]" data-name="Bold Text">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#667eea] text-[20px] top-0 w-[306px] whitespace-pre-wrap">Infrastructure Thinking Matters:</p>
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="h-[94.5px] relative shrink-0 w-full" data-name="Paragraph">
      <BoldText4 />
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[29.25px] left-0 text-[#1a1a1a] text-[18px] top-[36px] w-[1079px] whitespace-pre-wrap">{`We're not just designing an app—we're designing the operating system for how creativity is valued. This requires thinking beyond features to consider policy, community organizing, and cultural impact.`}</p>
    </div>
  );
}

function Container67() {
  return (
    <div className="bg-[#f8f9fa] col-[1] justify-self-stretch relative rounded-[10px] row-[5] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#667eea] border-l-4 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col items-start pb-0 pl-[28px] pr-[24px] pt-[24px] relative size-full">
        <Paragraph33 />
      </div>
    </div>
  );
}

function BoldText5() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[1148px]" data-name="Bold Text">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#667eea] text-[20px] top-0 w-[243px] whitespace-pre-wrap">Start Local, Think Global:</p>
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="h-[94.5px] relative shrink-0 w-full" data-name="Paragraph">
      <BoldText5 />
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[29.25px] left-0 text-[#1a1a1a] text-[18px] top-[36px] w-[1084px] whitespace-pre-wrap">Launching in Austin first allows us to test with a concentrated creative community before scaling. Geographic focus helped refine Prosper Portals and venue partnerships.</p>
    </div>
  );
}

function Container68() {
  return (
    <div className="bg-[#f8f9fa] col-[1] justify-self-stretch relative rounded-[10px] row-[6] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#667eea] border-l-4 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col items-start pb-0 pl-[28px] pr-[24px] pt-[24px] relative size-full">
        <Paragraph34 />
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(1,_minmax(0,_1fr))] grid-rows-[repeat(6,_minmax(0,_1fr))] h-[1071px] relative shrink-0 w-full" data-name="Container">
      <Container63 />
      <Container64 />
      <Container65 />
      <Container66 />
      <Container67 />
      <Container68 />
    </div>
  );
}

function Heading33() {
  return (
    <div className="absolute h-[40px] left-[20px] top-[64px] w-[1160px]" data-name="Heading 2">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[40px] left-[579.63px] text-[#1a1a1a] text-[36px] text-center top-[-1px] tracking-[-0.36px] translate-x-[-50%] whitespace-pre">Next Steps</p>
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="absolute h-[97.5px] left-[216px] top-[136px] w-[768px]" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[32.5px] left-[384.3px] text-[#555] text-[20px] text-center top-0 translate-x-[-50%] w-[740px] whitespace-pre-wrap">Beta launch scheduled for Q2 2026 with 500 artists, 10,000 fans, and 25 brand partners. Goal: validate unit economics, prove scalable engagement, and position for $5–7M seed round to expand nationwide.</p>
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="absolute h-[64px] left-[40px] top-[40px] w-[684px]" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[32px] left-[342.22px] text-[#667eea] text-[24px] text-center top-0 translate-x-[-50%] w-[574px] whitespace-pre-wrap">{`🌈 This isn't just an app—it's how society will value creativity`}</p>
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="absolute h-[28px] left-[40px] top-[120px] w-[684px]" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] left-[342.3px] text-[#555] text-[18px] text-center top-0 translate-x-[-50%] whitespace-pre">When artists prosper, culture thrives. And culture is infrastructure.</p>
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute border-2 border-[rgba(102,126,234,0.19)] border-solid h-[208px] left-[216px] rounded-[16px] top-[313.5px] w-[768px]" data-name="Container" style={{ backgroundImage: "linear-gradient(164.846deg, rgba(102, 126, 234, 0.082) 0%, rgba(118, 75, 162, 0.082) 100%)" }}>
      <Paragraph36 />
      <Paragraph37 />
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[585.5px] relative shrink-0 w-full" data-name="Container">
      <Heading33 />
      <Paragraph35 />
      <Container70 />
    </div>
  );
}

function ProsperTakeaways() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[40px] h-[1976.5px] items-start left-0 pb-0 pt-[80px] px-[197.5px] top-[6729.34px] w-[1595px]" data-name="ProsperTakeaways">
      <Header />
      <Container62 />
      <Container69 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="h-[8138.344px] relative shrink-0 w-[1595px]" data-name="Main Content">
      <ProsperHero />
      <ProsperProblem />
      <DesignChallenge />
      <ProsperSolution />
      <ProsperFeatures />
      <ProsperJourney />
      <ProsperImpact />
      <ProsperTakeaways />
    </div>
  );
}

function ProsperPage1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="ProsperPage" style={{ backgroundImage: "linear-gradient(rgb(255, 255, 255) 0%, rgb(250, 250, 248) 50%, rgb(245, 244, 241) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <MainContent />
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[32px] relative shrink-0 w-[219.703px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[32px] left-0 text-[24px] text-black top-0 whitespace-pre">Andreis Hernandez</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[39.766px]" data-name="Link">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(0,0,0,0.6)] top-[-1px] whitespace-pre">Work</p>
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute h-[24px] left-[71.77px] top-0 w-[46.969px]" data-name="Link">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(0,0,0,0.6)] top-[-1px] whitespace-pre">About</p>
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute h-[24px] left-[150.73px] top-0 w-[61.297px]" data-name="Link">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(0,0,0,0.6)] top-[-1px] whitespace-pre">Resume</p>
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute h-[24px] left-[244.03px] top-0 w-[63.719px]" data-name="Link">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(0,0,0,0.6)] top-[-1px] whitespace-pre">LinkedIn</p>
    </div>
  );
}

function Link8() {
  return (
    <div className="absolute h-[24px] left-[339.75px] top-0 w-[40.813px]" data-name="Link">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(0,0,0,0.6)] top-[-1px] whitespace-pre">Email</p>
    </div>
  );
}

function Navigation1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[380.563px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link4 />
        <Link5 />
        <Link6 />
        <Link7 />
        <Link8 />
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="h-[20px] relative shrink-0 w-[169.656px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.4)] top-0 w-[170px] whitespace-pre-wrap">© 2026 All rights reserved</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-0 pr-[0.016px] py-0 relative size-full">
          <Container72 />
          <Navigation1 />
          <Container73 />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-gradient-to-b bottom-0 content-stretch flex flex-col from-[#fafaf8] h-[161px] items-start left-0 pb-0 pt-[65px] px-[157.5px] to-white w-[1595px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <Container71 />
    </div>
  );
}

export default function ProsperPage() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="Prosper Page">
      <TopNav />
      <ProsperPage1 />
      <Footer />
    </div>
  );
}