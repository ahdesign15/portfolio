import svgPaths from "./svg-za9jl78xlu";
import imgUmygyZ59In0Ujje4H17BUgki4TaPng from "figma:asset/0d1721e037465c0830ea9e0494644b1199d4da59.png";
import imgVector from "figma:asset/5b6c791a8d89adc9837d7ce61878f2f3ff41485d.png";
import imgVector1 from "figma:asset/d77141e1a394850f14cdc0856e8f4a70252fbba9.png";
import imgIMockupIPhone14 from "figma:asset/422443be3ef7d122fe286b096a597b35a34c5eb4.png";
import imgIMockupIPhone15 from "figma:asset/1060ebda483088f459460d9c5d06db79a47895a8.png";
import imgIMockupIPhone16 from "figma:asset/b9842d182bbcd0c5d5f9b923117cd7093eec1973.png";
import imgUmygyZ59In0Ujje4H17BUgki4TaPng1 from "figma:asset/7d4507e7d6897c4264e8a2ed79a950278facf9c2.png";
import imgVector2 from "figma:asset/379d32e0347edf9c2c490c459dbed7eac49c427e.png";
import imgVector3 from "figma:asset/cd6819d2a8268f7ae5601dce01b629335883a394.png";

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[0px] text-black text-nowrap">
        <p className="leading-[43.2px] text-[36px]">Andreis Hernandez</p>
      </div>
    </div>
  );
}

function AndreisHernandez() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Andreis Hernandez">
      <Container1 />
    </div>
  );
}

function LinkFrame() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0" data-name="Link - Frame 1">
      <AndreisHernandez />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0d0c0c] text-[0px] text-center text-nowrap">
        <p className="leading-[21.6px] text-[18px]">Design</p>
      </div>
    </div>
  );
}

function Design() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Design">
      <Container2 />
    </div>
  );
}

function LinkFrame1() {
  return (
    <div className="content-stretch flex h-[50px] items-center justify-center p-[10px] relative shrink-0 w-[120px]" data-name="Link - Frame 3">
      <Design />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0d0c0c] text-[18px] text-center text-nowrap">
        <p className="leading-[21.6px]">About</p>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="About">
      <Container3 />
    </div>
  );
}

function LinkFrame3() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0 w-[94px]" data-name="Link - Frame 5">
      <About />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0d0c0c] text-[18px] text-center text-nowrap">
        <p className="leading-[21.6px]">Resume</p>
      </div>
    </div>
  );
}

function Resume() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Resume">
      <Container4 />
    </div>
  );
}

function LinkFrame2() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0 w-[120px]" data-name="Link - Frame 4">
      <Resume />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[18px] h-[70px] items-center justify-end relative shrink-0">
      <LinkFrame1 />
      <LinkFrame3 />
      <LinkFrame2 />
    </div>
  );
}

function Desktop() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Desktop">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[40px] py-[25px] relative w-full">
          <LinkFrame />
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col h-[120px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Desktop />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[30px] text-black text-nowrap">
        <p className="leading-[60px]">Andreis is a</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Heading1 />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute bottom-[60px] content-stretch flex flex-col items-start left-0" data-name="text1">
      <div className="h-[60px] shrink-0 w-full" data-name="Heading 6" />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[30px] text-black text-nowrap">
        <p className="leading-[60px]">musician</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-[-1px]" data-name="Text 2">
      <Container10 />
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute bottom-[-60px] content-stretch flex flex-col items-start left-0" data-name="Text 3">
      <div className="h-[60px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Text12nd() {
  return (
    <div className="absolute bottom-[-127px] content-stretch flex flex-col items-start left-0" data-name="text 1 (2nd)">
      <div className="h-[60px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Variant1() {
  return (
    <div className="h-[60px] min-h-[60px] overflow-clip relative shrink-0 w-full" data-name="Variant 2">
      <Text />
      <Text1 />
      <Text2 />
      <Text12nd />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[253px]" data-name="Container">
      <Variant1 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[20px] py-[10px] relative shrink-0" data-name="Container">
      <Container8 />
      <Container9 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[96px] leading-[0] relative shrink-0 text-[24px] text-black text-center w-full" data-name="Heading 6">
      <div className="absolute flex flex-col h-[48px] justify-center left-[calc(50%+2.19px)] top-[24px] translate-x-[-50%] translate-y-[-50%] w-[556.608px]">
        <p className="leading-[48px]">{`with 10+ years in Hospitality, Creative Freelancing `}</p>
      </div>
      <div className="absolute flex flex-col h-[48px] justify-center left-[calc(50%+0.14px)] top-[72px] translate-x-[-50%] translate-y-[-50%] w-[282.29px]">
        <p className="leading-[48px]">{`and Intellectual Property `}</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[593px]" data-name="Container">
      <Heading2 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[20px] py-[10px] relative shrink-0 w-[633px]" data-name="Container">
      <Container12 />
    </div>
  );
}

function Container6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[100px] py-[10px] relative size-full">
          <Container7 />
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#302b1b] text-[150px] w-full">
        <p className="leading-[180px]">Featured Work</p>
      </div>
    </div>
  );
}

function FeaturedWork() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[-0.05%] right-[-0.05%] top-0" data-name="Featured Work">
      <Container14 />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[180px] opacity-[0.101] overflow-clip relative shrink-0 w-[1068px]" data-name="Container">
      <FeaturedWork />
    </div>
  );
}

function UmygyZ59In0Ujje4H17BUgki4TaPng() {
  return (
    <div className="absolute inset-0 rounded-tl-[24px] rounded-tr-[24px]" data-name="UmygyZ59In0Ujje4h17BUgki4TA.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[24px] rounded-tr-[24px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgUmygyZ59In0Ujje4H17BUgki4TaPng} />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[96.79%_4.23%_1.51%_4.28%]" data-name="Group">
      <div className="absolute inset-[-85.9%_-0.94%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 493.075 14.331">
          <g filter="url(#filter0_f_10_415)" id="Group">
            <path d={svgPaths.p363a200} fill="var(--fill-0, black)" fillOpacity="0.4" id="Vector" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="14.331" id="filter0_f_10_415" width="493.075" x="1.99251e-08" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_10_415" stdDeviation="2.26455" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[0.2%_9.5%_4.58%_9.5%]" data-name="Group">
      <div className="absolute inset-[-0.2%_-0.28%_-0.61%_-0.28%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 430.93 297.133">
          <g filter="url(#filter0_dd_10_364)" id="Group">
            <path d={svgPaths.p3c376a00} fill="var(--fill-0, #3A4245)" id="Vector" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="297.133" id="filter0_dd_10_364" width="430.93" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="0.301941" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.0823529 0 0 0 0 0.25098 0 0 0 0.14 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_10_364" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="0.603881" />
              <feGaussianBlur stdDeviation="0.603881" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.0823529 0 0 0 0 0.25098 0 0 0 0.05 0" />
              <feBlend in2="effect1_dropShadow_10_364" mode="normal" result="effect2_dropShadow_10_364" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_10_364" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[5.82%_11.59%_11.9%_11.59%]" data-name="Group">
      <div className="absolute inset-[5.82%_11.59%_11.9%_11.59%]" data-name="Vector">
        <img alt="" className="block max-w-none size-full" height="254.649" src={imgVector} width="406.418" />
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[5.82%_11.59%_11.9%_11.59%]" data-name="Group">
      <div className="absolute inset-[5.82%_11.59%_11.9%_11.59%]" data-name="Vector">
        <img alt="" className="block max-w-none size-full" height="254.649" src={imgVector1} width="406.418" />
      </div>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents inset-[5.82%_11.59%_11.9%_11.59%]" data-name="Mask group">
      <Group3 />
      <Group4 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[5.82%_11.59%_11.9%_11.59%]" data-name="Group">
      <MaskGroup />
    </div>
  );
}

function LmUeE6IFv3Lnd7UcnzOtD1PXdYoSvg1() {
  return (
    <div className="absolute h-[309.489px] left-1/2 overflow-clip top-1/2 translate-x-[-50%] translate-y-[-50%] w-[529px]" data-name="LMUeE6iFV3lnd7UCNZOtD1pXdYo.svg">
      <Group />
      <Group1 />
      <div className="absolute inset-[0.54%_9.7%_4.92%_9.7%]" data-name="Vector">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(38, 44, 45, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 426.408 292.609">
            <path d={svgPaths.p24686d80} fill="var(--fill-0, #262C2D)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[0.88%_9.9%_5.26%_9.9%]" data-name="Vector">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(18, 21, 21, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 424.305 290.5">
            <path d={svgPaths.p32589e00} fill="var(--fill-0, #121515)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[90.23%_9.9%_7.22%_9.9%]" data-name="Vector">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(38, 44, 45, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 424.305 7.90843">
            <path d="M0 0H424.305V7.90843H0V0Z" fill="var(--fill-0, #262C2D)" id="Vector" />
          </svg>
        </div>
      </div>
      <Group2 />
      <div className="absolute inset-[3.09%_49.73%_95.97%_49.73%]" data-name="Vector">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(38, 44, 45, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.8935 2.89954">
            <path clipRule="evenodd" d={svgPaths.p136aa00} fill="var(--fill-0, #262C2D)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[3.27%_49.83%_96.15%_49.83%]" data-name="Vector">
        <div className="absolute inset-[0_0_0.02%_0]" style={{ "--fill-0": "rgba(18, 21, 21, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.80833 1.81225">
            <path clipRule="evenodd" d={svgPaths.p30411e80} fill="var(--fill-0, #121515)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[3.38%_49.96%_96.5%_49.97%]" data-name="Vector">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(99, 111, 115, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.362332 0.362328">
            <path clipRule="evenodd" d={svgPaths.p2f123300} fill="var(--fill-0, #636F73)" fillRule="evenodd" id="Vector" opacity="0.4" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[4.58%] left-0 right-1/2 top-[92.78%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 264.5 8.17173">
          <path d={svgPaths.p31a63e00} fill="url(#paint0_linear_10_379)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_10_379" x1="0" x2="264.5" y1="4.21721" y2="4.21721">
              <stop stopColor="#333333" />
              <stop offset="0.022" stopColor="#535458" />
              <stop offset="0.036" stopColor="#4D4E52" />
              <stop offset="0.058" stopColor="#333438" />
              <stop offset="0.087" stopColor="#35363A" />
              <stop offset="0.136" stopColor="#4E4F53" />
              <stop offset="0.757" stopColor="#888080" />
              <stop offset="1" stopColor="#888080" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[92.78%_0.03%_4.58%_49.98%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 264.499 8.17173">
          <path d={svgPaths.p3d7e5940} fill="url(#paint0_linear_10_389)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_10_389" x1="264.499" x2="0" y1="4.21721" y2="4.21721">
              <stop stopColor="#333333" />
              <stop offset="0.022" stopColor="#535458" />
              <stop offset="0.036" stopColor="#4D4E52" />
              <stop offset="0.058" stopColor="#333438" />
              <stop offset="0.087" stopColor="#35363A" />
              <stop offset="0.136" stopColor="#4E4F53" />
              <stop offset="0.757" stopColor="#888080" />
              <stop offset="1" stopColor="#888080" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[92.78%_42.86%_5.34%_42.86%]" data-name="Vector">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(78, 79, 83, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75.4969 5.79937">
            <path d={svgPaths.p31405a10} fill="var(--fill-0, #4E4F53)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[92.78%_42.86%_5.34%_42.86%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75.4969 5.79937">
          <path d={svgPaths.p31405a10} fill="url(#paint0_linear_10_398)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_10_398" x1="0" x2="75.4969" y1="2.89953" y2="2.89953">
              <stop stopOpacity="0.5" />
              <stop offset="0.139" stopColor="#818487" stopOpacity="0" />
              <stop offset="0.861" stopColor="#818487" stopOpacity="0" />
              <stop offset="1" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[95.42%_0_2.19%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 529 7.38004">
          <path d={svgPaths.p25bb3900} fill="url(#paint0_linear_10_406)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_10_406" x1="264.5" x2="264.5" y1="0" y2="7.38004">
              <stop stopColor="#333333" />
              <stop offset="1" stopColor="#08090D" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function LmUeE6IFv3Lnd7UcnzOtD1PXdYoSvgFill() {
  return (
    <div className="h-[305.28px] overflow-clip relative shrink-0 w-[529px]" data-name="LMUeE6iFV3lnd7UCNZOtD1pXdYo.svg fill">
      <LmUeE6IFv3Lnd7UcnzOtD1PXdYoSvg1 />
    </div>
  );
}

function LmUeE6IFv3Lnd7UcnzOtD1PXdYoSvg() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="LMUeE6iFV3lnd7UCNZOtD1pXdYo.svg">
      <LmUeE6IFv3Lnd7UcnzOtD1PXdYoSvgFill />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[305.28px] relative shrink-0 w-[529px]" data-name="Container">
      <LmUeE6IFv3Lnd7UcnzOtD1PXdYoSvg />
    </div>
  );
}

function Frame16() {
  return (
    <div className="h-[538.19px] relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[23px] py-[92px] relative size-full">
          <UmygyZ59In0Ujje4H17BUgki4TaPng />
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function RethinkingChordKnowledgeWithHookTheory() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Rethinking chord knowledge with HookTheory">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[0px] text-black text-center text-nowrap">
        <p className="leading-[38.4px] text-[32px]">
          <span className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal">{`Rethinking chord knowledge with `}</span>
          <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold">HookTheory</span>
        </p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#424242] text-[12px] text-center text-nowrap">
        <p className="leading-[14.4px]">Read time 20 minutes</p>
      </div>
    </div>
  );
}

function ReadTime20Minutes() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[137px]" data-name="Read time 20 minutes">
      <Container18 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[10px] pt-[9px] px-[10px] relative shrink-0">
      <ReadTime20Minutes />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[9.99px] items-center justify-center px-[20px] py-[10px] relative w-full">
          <RethinkingChordKnowledgeWithHookTheory />
          <Frame13 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-black text-nowrap">
        <p className="leading-[21.6px]">Web</p>
      </div>
    </div>
  );
}

function Web() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Web">
      <Container19 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0 w-[126px]">
      <Web />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1f1f1f] text-[18px] text-nowrap">
        <p className="leading-[21.6px]">Case Study</p>
      </div>
    </div>
  );
}

function ViewCaseStudy() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="View Case Study">
      <Container21 />
    </div>
  );
}

function Variant() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[30px] shrink-0 w-full" data-name="Variant 1">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
          <ViewCaseStudy />
          <div className="absolute inset-0 rounded-[30px]" data-name="Border">
            <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[30px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col h-[60px] items-start justify-center relative shrink-0 w-[194px]" data-name="Container">
      <Variant />
    </div>
  );
}

function LinkCaseStudyButton() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative shrink-0 w-[218px]" data-name="Link - Case Study button">
      <Container20 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[10px] relative w-full">
          <Frame4 />
          <LinkCaseStudyButton />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#d2bab6] content-stretch flex flex-col items-start relative rounded-bl-[24px] rounded-br-[24px] shrink-0 w-full">
      <Frame1 />
      <Frame7 />
    </div>
  );
}

function HookTheory() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col grow h-[741px] items-center min-h-px min-w-px relative rounded-[24px] shrink-0" data-name="HookTheory">
      <Frame16 />
      <Frame8 />
      <div className="absolute inset-0 rounded-[24px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[24px]" />
      </div>
    </div>
  );
}

function UmygyZ59In0Ujje4H17BUgki4TaPng1() {
  return (
    <div className="absolute inset-0 rounded-tl-[24px] rounded-tr-[24px]" data-name="UmygyZ59In0Ujje4h17BUgki4TA.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[24px] rounded-tr-[24px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgUmygyZ59In0Ujje4H17BUgki4TaPng} />
      </div>
    </div>
  );
}

function IMockupIPhone() {
  return (
    <div className="h-[303px] relative shrink-0 w-[148px]" data-name="iMockup - iPhone 14">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-0.06%] max-w-none top-0 w-[100.11%]" src={imgIMockupIPhone14} />
      </div>
    </div>
  );
}

function IMockupIPhone1() {
  return (
    <div className="h-[304px] relative shrink-0 w-[148px]" data-name="iMockup - iPhone 14">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-0.22%] max-w-none top-0 w-[100.44%]" src={imgIMockupIPhone15} />
      </div>
    </div>
  );
}

function IMockupIPhone2() {
  return (
    <div className="h-[303px] relative shrink-0 w-[148px]" data-name="iMockup - iPhone 14">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-0.06%] max-w-none top-0 w-[100.11%]" src={imgIMockupIPhone16} />
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[3px] items-center justify-center relative shrink-0 w-full">
      <IMockupIPhone />
      <IMockupIPhone1 />
      <IMockupIPhone2 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="h-[500px] relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[23px] py-[92px] relative size-full">
          <UmygyZ59In0Ujje4H17BUgki4TaPng1 />
          <Frame19 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[0px] text-black text-center text-nowrap">
        <p className="leading-[38.4px] text-[32px]">
          <span className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal">{`Building creative freedom with `}</span>
          <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold">Paper Trail</span>
        </p>
      </div>
    </div>
  );
}

function BuildingCreativeFreedomWithPaperTrail() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Building creative freedom with Paper Trail">
      <Container22 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#424242] text-[12px] w-full">
        <p className="leading-[14.4px]">Read time 20 minutes</p>
      </div>
    </div>
  );
}

function ReadTime20Minutes1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[132px]" data-name="Read time 20 minutes">
      <Container23 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[10px] pt-[9px] px-[10px] relative shrink-0">
      <ReadTime20Minutes1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[9.99px] items-center justify-center p-[10px] relative w-full">
          <BuildingCreativeFreedomWithPaperTrail />
          <Frame14 />
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-black text-nowrap">
        <p className="leading-[21.6px]">Mobile</p>
      </div>
    </div>
  );
}

function Mobile() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Mobile">
      <Container24 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0 w-[126px]">
      <Mobile />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1f1f1f] text-[18px] text-nowrap">
        <p className="leading-[21.6px]">Case Study</p>
      </div>
    </div>
  );
}

function ViewCaseStudy1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="View Case Study">
      <Container26 />
    </div>
  );
}

function Variant2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[30px] shrink-0 w-full" data-name="Variant 1">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
          <ViewCaseStudy1 />
          <div className="absolute inset-0 rounded-[30px]" data-name="Border">
            <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[30px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col h-[60px] items-start justify-center relative shrink-0 w-[194px]" data-name="Container">
      <Variant2 />
    </div>
  );
}

function LinkCaseStudyButton1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative shrink-0 w-[218px]" data-name="Link - Case Study button">
      <Container25 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[10px] relative w-full">
          <Frame5 />
          <LinkCaseStudyButton1 />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame2 />
      <Frame10 />
    </div>
  );
}

function PaperTrail() {
  return (
    <div className="basis-0 bg-[#d2bab6] content-stretch flex flex-col grow h-full items-center min-h-px min-w-px relative rounded-[24px] shrink-0" data-name="PaperTrail">
      <Frame17 />
      <Frame9 />
      <div className="absolute inset-0 rounded-[24px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[24px]" />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[20px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <HookTheory />
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <PaperTrail />
      </div>
    </div>
  );
}

function UmygyZ59In0Ujje4H17BUgki4TaPng2() {
  return (
    <div className="absolute inset-0 rounded-tl-[24px] rounded-tr-[24px]" data-name="UmygyZ59In0Ujje4h17BUgki4TA.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[24px] rounded-tr-[24px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgUmygyZ59In0Ujje4H17BUgki4TaPng1} />
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[92.68%_4.23%_5.7%_4.28%]" data-name="Group">
      <div className="absolute inset-[-331.49%_-3.61%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 487.349 37.777">
          <g filter="url(#filter0_f_10_395)" id="Group">
            <path d={svgPaths.p16b67000} fill="var(--fill-0, black)" fillOpacity="0.4" id="Vector" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="37.777" id="filter0_f_10_395" width="487.349" x="-2.75446e-08" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_10_395" stdDeviation="8.20645" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[0.72%_9.5%_8.62%_9.5%]" data-name="Group">
      <div className="absolute inset-[-0.79%_-1.09%_-2.37%_-1.09%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 411.154 285.53">
          <g filter="url(#filter0_dd_10_408)" id="Group">
            <path d={svgPaths.p8be0900} fill="var(--fill-0, #3A4245)" id="Vector" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="285.53" id="filter0_dd_10_408" width="411.154" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="1.09419" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.0823529 0 0 0 0 0.25098 0 0 0 0.14 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_10_408" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2.18839" />
              <feGaussianBlur stdDeviation="2.18839" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.0823529 0 0 0 0 0.25098 0 0 0 0.05 0" />
              <feBlend in2="effect1_dropShadow_10_408" mode="normal" result="effect2_dropShadow_10_408" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_10_408" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[6.07%_11.59%_15.59%_11.59%]" data-name="Group">
      <div className="absolute inset-[6.07%_11.59%_15.59%_11.59%]" data-name="Vector">
        <img alt="" className="block max-w-none size-full" height="239.147" src={imgVector2} width="381.651" />
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[6.07%_11.59%_15.59%_11.59%]" data-name="Group">
      <div className="absolute inset-[6.07%_11.59%_15.59%_11.59%]" data-name="Vector">
        <img alt="" className="block max-w-none size-full" height="239.147" src={imgVector3} width="381.651" />
      </div>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute contents inset-[6.07%_11.59%_15.59%_11.59%]" data-name="Mask group">
      <Group8 />
      <Group9 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[6.07%_11.59%_15.59%_11.59%]" data-name="Group">
      <MaskGroup1 />
    </div>
  );
}

function Component4MHoVh6ZL6Iua6VCl5IqWnEZkcSvg1() {
  return (
    <div className="h-[305.28px] overflow-clip relative shrink-0 w-[496.764px]" data-name="4mHoVh6zL6IUA6VCl5IQWnEZkc.svg">
      <Group5 />
      <Group6 />
      <div className="absolute inset-[1.04%_9.7%_8.94%_9.7%]" data-name="Vector">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(38, 44, 45, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 400.426 274.796">
            <path d={svgPaths.p36fdb400} fill="var(--fill-0, #262C2D)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[1.37%_9.9%_9.27%_9.9%]" data-name="Vector">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(18, 21, 21, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 398.448 272.814">
            <path d={svgPaths.p38627100} fill="var(--fill-0, #121515)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[86.43%_9.9%_11.13%_9.9%]" data-name="Vector">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(38, 44, 45, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 398.448 7.4274">
            <path d="M0 0H398.448V7.4274H0V0Z" fill="var(--fill-0, #262C2D)" id="Vector" />
          </svg>
        </div>
      </div>
      <Group7 />
      <div className="absolute inset-[3.47%_49.73%_95.63%_49.73%]" data-name="Vector">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(38, 44, 45, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.71962 2.72345">
            <path clipRule="evenodd" d={svgPaths.p3a7af300} fill="var(--fill-0, #262C2D)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[3.64%_49.83%_95.8%_49.83%]" data-name="Vector">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(18, 21, 21, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.70146 1.70147">
            <path clipRule="evenodd" d={svgPaths.p236f4080} fill="var(--fill-0, #121515)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[3.75%_49.97%_96.14%_49.97%]" data-name="Vector">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(99, 111, 115, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.339201 0.340294">
            <path clipRule="evenodd" d={svgPaths.p19659f00} fill="var(--fill-0, #636F73)" fillRule="evenodd" id="Vector" opacity="0.4" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.62%] left-0 right-1/2 top-[88.87%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 248.382 7.67358">
          <path d={svgPaths.p259eeb00} fill="url(#paint0_linear_10_381)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_10_381" x1="0" x2="248.382" y1="3.95988" y2="3.95988">
              <stop stopColor="#333333" />
              <stop offset="0.022" stopColor="#535458" />
              <stop offset="0.036" stopColor="#4D4E52" />
              <stop offset="0.058" stopColor="#333438" />
              <stop offset="0.087" stopColor="#35363A" />
              <stop offset="0.136" stopColor="#4E4F53" />
              <stop offset="0.757" stopColor="#888080" />
              <stop offset="1" stopColor="#888080" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[88.87%_0.02%_8.62%_49.98%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 248.382 7.67358">
          <path d={svgPaths.p165c1300} fill="url(#paint0_linear_10_377)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_10_377" x1="248.382" x2="0" y1="3.95989" y2="3.95989">
              <stop stopColor="#333333" />
              <stop offset="0.022" stopColor="#535458" />
              <stop offset="0.036" stopColor="#4D4E52" />
              <stop offset="0.058" stopColor="#333438" />
              <stop offset="0.087" stopColor="#35363A" />
              <stop offset="0.136" stopColor="#4E4F53" />
              <stop offset="0.757" stopColor="#888080" />
              <stop offset="1" stopColor="#888080" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[88.87%_42.86%_9.35%_42.86%]" data-name="Vector">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(78, 79, 83, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70.895 5.44581">
            <path d={svgPaths.p2d30f700} fill="var(--fill-0, #4E4F53)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[88.87%_42.86%_9.35%_42.86%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70.895 5.44581">
          <path d={svgPaths.p2d30f700} fill="url(#paint0_linear_10_383)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_10_383" x1="0" x2="70.895" y1="2.72236" y2="2.72236">
              <stop stopOpacity="0.5" />
              <stop offset="0.139" stopColor="#818487" stopOpacity="0" />
              <stop offset="0.861" stopColor="#818487" stopOpacity="0" />
              <stop offset="1" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[91.38%_0_6.35%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 496.764 6.93172">
          <path d={svgPaths.p25df3800} fill="url(#paint0_linear_10_371)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_10_371" x1="248.382" x2="248.382" y1="0" y2="6.93172">
              <stop stopColor="#333333" />
              <stop offset="1" stopColor="#08090D" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Component4MHoVh6ZL6Iua6VCl5IqWnEZkcSvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[305.28px] items-center justify-center overflow-clip px-[16.118px] py-0 relative shrink-0 w-[529px]" data-name="4mHoVh6zL6IUA6VCl5IQWnEZkc.svg fill">
      <Component4MHoVh6ZL6Iua6VCl5IqWnEZkcSvg1 />
    </div>
  );
}

function Component4MHoVh6ZL6Iua6VCl5IqWnEZkcSvg() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="4mHoVh6zL6IUA6VCl5IQWnEZkc.svg">
      <Component4MHoVh6ZL6Iua6VCl5IqWnEZkcSvgFill />
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[305.28px] relative shrink-0 w-[529px]" data-name="Container">
      <Component4MHoVh6ZL6Iua6VCl5IqWnEZkcSvg />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col h-[500px] items-center justify-center relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full">
      <UmygyZ59In0Ujje4H17BUgki4TaPng2 />
      <Container28 />
    </div>
  );
}

function CreatingFamiliarityWithBleachUsa() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Creating familiarity with Bleach USA">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[0px] text-black text-center text-nowrap">
        <p className="leading-[38.4px] text-[32px]">
          <span className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal">{`Creating familiarity in e-commerce with `}</span>
          <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold">Bleach USA</span>
        </p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#424242] text-[12px] text-center text-nowrap">
        <p className="leading-[14.4px]">Read time 20 minutes</p>
      </div>
    </div>
  );
}

function ReadTime20Minutes2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[137px]" data-name="Read time 20 minutes">
      <Container29 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[10px] pt-[9px] px-[10px] relative shrink-0">
      <ReadTime20Minutes2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[9.99px] items-center justify-center px-[20px] py-[10px] relative w-full">
          <CreatingFamiliarityWithBleachUsa />
          <Frame15 />
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-black text-nowrap">
        <p className="leading-[21.6px]">Web</p>
      </div>
    </div>
  );
}

function Mobile1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Mobile">
      <Container30 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0 w-[126px]">
      <Mobile1 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1f1f1f] text-[18px] text-nowrap">
        <p className="leading-[21.6px]">Case Study</p>
      </div>
    </div>
  );
}

function ViewCaseStudy2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="View Case Study">
      <Container32 />
    </div>
  );
}

function Variant3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[30px] shrink-0 w-full" data-name="Variant 1">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
          <ViewCaseStudy2 />
          <div className="absolute inset-0 rounded-[30px]" data-name="Border">
            <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[30px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col h-[60px] items-start justify-center relative shrink-0 w-[194px]" data-name="Container">
      <Variant3 />
    </div>
  );
}

function LinkCaseStudyButton2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative shrink-0 w-[218px]" data-name="Link - Case Study button">
      <Container31 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[10px] relative w-full">
          <Frame6 />
          <LinkCaseStudyButton2 />
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame3 />
      <Frame12 />
    </div>
  );
}

function Bleach() {
  return (
    <div className="basis-0 bg-[#d2bab6] content-stretch flex flex-col grow items-start min-h-px min-w-px relative rounded-[24px] shrink-0" data-name="Bleach">
      <Frame18 />
      <Frame11 />
      <div className="absolute inset-0 rounded-[24px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[24px]" />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Bleach />
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-center justify-center px-[20px] py-[10px] relative w-full">
          <Container16 />
          <Container27 />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[2080px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container13 />
      <Container15 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1f1f1f] text-[24px] w-full" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[33.6px]">Andreis Hernandez</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip px-[150px] py-[60px] relative shrink-0 w-[1235px]" data-name="Info">
      <Container33 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1f1f1f] text-[10px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[14px]">EXPLORE</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1f1f1f] text-[0px] text-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[22.4px] text-[16px]" style={{ fontVariationSettings: "'opsz' 9" }}>
          Design
        </p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[calc(50%+0.45px)] top-[-1px] translate-x-[-50%]" data-name="Container">
      <Container38 />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-1/2 opacity-60 top-[22.41px] translate-x-[-50%]" data-name="Container">
      <div className="h-[22.4px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[22px] overflow-clip relative shrink-0 w-[50.09px]" data-name="Container">
      <Container37 />
      <Container39 />
    </div>
  );
}

function LinkVariant() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Link - Variant 1">
      <Container36 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start justify-center relative shrink-0" data-name="Container">
      <LinkVariant />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1f1f1f] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[22.4px]">About</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[calc(50%+0.2px)] top-[-1px] translate-x-[-50%]" data-name="Container">
      <Container43 />
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-1/2 opacity-60 top-[22.41px] translate-x-[-50%]" data-name="Container">
      <div className="h-[22.4px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[22px] overflow-clip relative shrink-0 w-[45.59px]" data-name="Container">
      <Container42 />
      <Container44 />
    </div>
  );
}

function LinkVariant1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Link - Variant 1">
      <Container41 />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start justify-center relative shrink-0" data-name="Container">
      <LinkVariant1 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1f1f1f] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[22.4px]">Contact</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[calc(50%+0.33px)] top-[-1px] translate-x-[-50%]" data-name="Container">
      <Container48 />
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-1/2 opacity-60 top-[22.41px] translate-x-[-50%]" data-name="Container">
      <div className="h-[22.4px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[22px] overflow-clip relative shrink-0 w-[60.33px]" data-name="Container">
      <Container47 />
      <Container49 />
    </div>
  );
}

function LinkVariant2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Link - Variant 1">
      <Container46 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start justify-center relative shrink-0" data-name="Container">
      <LinkVariant2 />
    </div>
  );
}

function NavFooterNavigation() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Nav - Footer navigation">
      <Container35 />
      <Container40 />
      <Container45 />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-black text-nowrap">
        <p className="leading-[36px]">LinkedIn</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[calc(50%+0.16px)] top-0 translate-x-[-50%]" data-name="Container">
      <Container53 />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap text-white" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[22.4px]">LinkedIn</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-1/2 opacity-60 top-[35px] translate-x-[-50%]" data-name="Container">
      <Container55 />
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[39px] overflow-clip relative shrink-0 w-[71.68px]" data-name="Container">
      <Container52 />
      <Container54 />
    </div>
  );
}

function LinkVariant3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px relative shrink-0 w-full" data-name="Link - Variant 1">
      <Container51 />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-start justify-center relative shrink-0 w-[170px]" data-name="Container">
      <LinkVariant3 />
    </div>
  );
}

function NavSocialMediaLinks() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Nav - Social media links">
      <Container50 />
    </div>
  );
}

function Links() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Links">
      <NavFooterNavigation />
      <NavSocialMediaLinks />
    </div>
  );
}

function Explore() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip relative shrink-0 w-[665px]" data-name="Explore">
      <Container34 />
      <Links />
    </div>
  );
}

function TopSection() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Top Section">
      <Info />
      <Explore />
    </div>
  );
}

function FooterDesktop() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer - Desktop">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[10px] py-[20px] relative w-full">
          <TopSection />
        </div>
      </div>
    </div>
  );
}

export default function Component1920WLight() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-center relative size-full" data-name="1920w light">
      <Container />
      <Container5 />
      <FooterDesktop />
    </div>
  );
}