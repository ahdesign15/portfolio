import imgImageWithFallback from "figma:asset/426190e431263457f0b6b0b30408def5dc782409.png";
import imgProsper21 from "figma:asset/55ec15748b4a8bddffe704acd706e3c2f234b8f9.png";
import imgProsper3 from "figma:asset/b678284f3d88a31c7669c715683dac4b568bd139.png";
import imgProsper1 from "figma:asset/954ce7dbc798463a21de10112b0b21d7fd19179e.png";
import imgProsper4 from "figma:asset/ad4cc81056f65c22b5ab955a60cac247bf4116e1.png";
import imgImagePaperTrailAppScreen1 from "figma:asset/422443be3ef7d122fe286b096a597b35a34c5eb4.png";
import imgImagePaperTrailAppScreen3 from "figma:asset/b9842d182bbcd0c5d5f9b923117cd7093eec1973.png";
import imgImagePaperTrailAppScreen2 from "figma:asset/1060ebda483088f459460d9c5d06db79a47895a8.png";
import imgScreenshot20260114At62301Pm1 from "figma:asset/cf93b295c9e6e4fb2e441f80d699923c3d7ffcd2.png";
import imgImageWithFallback1 from "figma:asset/1f48ea8fc6a65665629b7da114a31f8cd5b1b2ad.png";

function Heading() {
  return (
    <div className="h-[180px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[180px] left-0 text-[180px] text-[rgba(0,0,0,0.08)] top-0 tracking-[-1.8px] whitespace-pre">Featured Work</p>
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="h-[343.469px] relative rounded-[14px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="ImageWithFallback">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[14px]">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[14px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[14px] size-full" src={imgImageWithFallback} />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="col-[1] justify-self-stretch relative row-[1] self-stretch shrink-0" data-name="Container" style={{ backgroundImage: "linear-gradient(142.001deg, rgb(196, 181, 168) 0%, rgb(210, 186, 182) 100%)" }}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-0 pt-[78.266px] px-[48px] relative size-full">
          <ImageWithFallback />
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex h-[45px] items-start left-[79.61px] top-[39px] w-[213.203px]" data-name="Text">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[40px] relative shrink-0 text-[36px] text-black whitespace-pre">HookTheory</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[40px] left-0 text-[36px] text-black top-[-1px] w-[492px] whitespace-pre-wrap">Rethinking chord knowledge with</p>
      <Text />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold_Italic',sans-serif] font-semibold italic leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.6)] top-0 w-[144px] whitespace-pre-wrap">Product Designer</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.6)] top-0 w-[144px] whitespace-pre-wrap">Read time 20 minutes</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[132px] relative shrink-0 w-[544px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Heading1 />
        <Paragraph />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[40.078px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] left-0 text-[18px] text-black top-0 whitespace-pre">Web</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="h-[58.391px] relative rounded-[33554400px] shrink-0 w-[172.188px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[34px] py-[14px] relative size-full">
        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[30.4px] relative shrink-0 text-[19px] text-black whitespace-pre">Case Study</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[58.391px] relative shrink-0 w-[544px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text1 />
        <Link />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#d2bab6] col-[2] justify-self-stretch relative row-[1] self-stretch shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start justify-between pl-[48px] pr-0 py-[48px] relative size-full">
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function HooktheoryCard() {
  return (
    <div className="bg-white grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[500px] overflow-clip relative rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Hooktheory Card">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[380px] relative shrink-0 w-full">
      <div className="absolute h-[377px] left-[377.72px] top-px w-[182px]" data-name="Prosper 2 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProsper21} />
      </div>
      <div className="absolute h-[377px] left-[249.72px] top-px w-[182px]" data-name="Prosper 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProsper3} />
      </div>
      <div className="absolute h-[378px] left-[122.68px] top-0 w-[182px]" data-name="Prosper 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProsper1} />
      </div>
      <div className="absolute h-[377px] left-0 top-px w-[182px]" data-name="Prosper 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProsper4} />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#cab7ae] col-[1] justify-self-stretch relative row-[1] self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[48px] py-0 relative size-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex h-[45px] items-start left-[266.13px] top-[37px] w-[197.313px]" data-name="Text">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[40px] relative shrink-0 text-[36px] text-black whitespace-pre">Prosper XO</p>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[40px] left-0 text-[36px] text-black top-[-1px] w-[498px] whitespace-pre-wrap">Empowering artists with data ownership with</p>
      <Text2 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold_Italic',sans-serif] font-semibold italic leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.8)] top-0 whitespace-pre">Product Designer</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.6)] top-0 whitespace-pre">Read time 15 minutes</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[132px] relative shrink-0 w-[544px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Heading2 />
        <Paragraph2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[28px] relative shrink-0 w-[200.031px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] left-0 text-[18px] text-black top-0 whitespace-pre">{`Mobile `}</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[58.391px] relative rounded-[33554400px] shrink-0 w-[172.188px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[34px] py-[14px] relative size-full">
        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[30.4px] relative shrink-0 text-[19px] text-black whitespace-pre">Coming soon</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[58.391px] relative shrink-0 w-[544px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text3 />
        <Link1 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#d2bab6] col-[2] justify-self-stretch relative row-[1] self-stretch shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start justify-between pl-[48px] pr-0 py-[48px] relative size-full">
        <Container7 />
        <Container8 />
      </div>
    </div>
  );
}

function ProsperCard() {
  return (
    <div className="bg-white grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[500px] overflow-clip relative rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Prosper Card">
      <Container5 />
      <Container6 />
    </div>
  );
}

function ImagePaperTrailAppScreen() {
  return (
    <div className="h-[330.909px] relative shrink-0 w-[161.115px]" data-name="Image (Paper Trail app screen 1)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImagePaperTrailAppScreen1} />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pb-0 pt-[-0.007px] px-[-0.07px] relative" data-name="Container">
      <ImagePaperTrailAppScreen />
    </div>
  );
}

function ImagePaperTrailAppScreen2() {
  return (
    <div className="h-[321.587px] relative shrink-0 w-[150.641px]" data-name="Image (Paper Trail app screen 3)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImagePaperTrailAppScreen3} />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pb-0 pt-[-0.007px] px-[-0.07px] relative" data-name="Container">
      <ImagePaperTrailAppScreen2 />
    </div>
  );
}

function ImagePaperTrailAppScreen1() {
  return (
    <div className="h-[304px] relative shrink-0 w-full" data-name="Image (Paper Trail app screen 2)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImagePaperTrailAppScreen2} />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col h-[304px] items-start left-[151px] overflow-clip pl-[-0.313px] pr-[-0.328px] py-0 top-[18px] w-[148px]" data-name="Container">
      <ImagePaperTrailAppScreen1 />
    </div>
  );
}

function PaperTrailPhones() {
  return (
    <div className="h-[340px] relative shrink-0 w-full" data-name="PaperTrailPhones">
      <div className="absolute flex h-[345.915px] items-center justify-center left-[60.5px] top-[-11.38px] w-[194.682px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-[354deg]">
          <Container10 />
        </div>
      </div>
      <div className="absolute flex h-[337.524px] items-center justify-center left-[210.5px] top-[-0.38px] w-[188.57px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-[7deg]">
          <Container11 />
        </div>
      </div>
      <Container12 />
    </div>
  );
}

function Container9() {
  return (
    <div className="col-[1] justify-self-stretch relative row-[1] self-stretch shrink-0" data-name="Container" style={{ backgroundImage: "linear-gradient(142.001deg, rgb(196, 181, 168) 0%, rgb(210, 186, 182) 100%)" }}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-0 pt-[80px] px-[95px] relative size-full">
          <PaperTrailPhones />
        </div>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute content-stretch flex h-[45px] items-start left-0 top-[37px] w-[176.734px]" data-name="Text">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[40px] relative shrink-0 text-[36px] text-black whitespace-pre">Paper Trail</p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[40px] left-0 text-[36px] text-black top-[-1px] whitespace-pre">Building creative freedom with</p>
      <Text4 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.6)] top-0 w-[144px] whitespace-pre-wrap">Product Designer</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.6)] top-0 w-[144px] whitespace-pre-wrap">Read time 20 minutes</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[132px] relative shrink-0 w-[544px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Heading3 />
        <Paragraph4 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[28px] relative shrink-0 w-[58.172px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] left-0 text-[18px] text-black top-0 whitespace-pre">Mobile</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[58.391px] relative rounded-[33554400px] shrink-0 w-[172.188px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[34px] py-[14px] relative size-full">
        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[30.4px] relative shrink-0 text-[19px] text-black whitespace-pre">Case Study</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[58.391px] relative shrink-0 w-[544px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text5 />
        <Link2 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#d2bab6] col-[2] justify-self-stretch relative row-[1] self-stretch shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start justify-between pl-[48px] pr-0 py-[48px] relative size-full">
        <Container14 />
        <Container15 />
      </div>
    </div>
  );
}

function PapertrailCard() {
  return (
    <div className="bg-white grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[500px] overflow-clip relative rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Papertrail Card">
      <Container9 />
      <Container13 />
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute content-stretch flex h-[45px] items-start left-[256.61px] top-[37px] w-[139.844px]" data-name="Text">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[40px] relative shrink-0 text-[36px] text-black whitespace-pre">Overlap</p>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[40px] left-0 text-[36px] text-black top-[-1px] w-[470px] whitespace-pre-wrap">Time-first soccer discovery with</p>
      <Text6 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.6)] top-0 whitespace-pre">Read time 15 minutes</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[132px] relative shrink-0 w-[544px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Heading4 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[28px] relative shrink-0 w-[117.563px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] left-0 text-[18px] text-black top-0 whitespace-pre">{`Mobile `}</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[58.391px] relative rounded-[33554400px] shrink-0 w-[172.188px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[34px] py-[14px] relative size-full">
        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[30.4px] relative shrink-0 text-[19px] text-black whitespace-pre">Coming soon</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[58.391px] relative shrink-0 w-[544px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text7 />
        <Link3 />
      </div>
    </div>
  );
}

function TextContainer() {
  return (
    <div className="bg-[#d2bab6] col-[1] justify-self-stretch relative row-[1] self-stretch shrink-0" data-name="Text Container">
      <div className="content-stretch flex flex-col items-start justify-between pl-[48px] pr-0 py-[48px] relative size-full">
        <Container16 />
        <Container17 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col h-[372px] items-center justify-center left-[66.5px] overflow-clip pl-[-0.313px] pr-[-0.328px] py-0 top-[-16.38px] w-[181px]" data-name="Container">
      <div className="aspect-[113/265] relative shrink-0 w-full" data-name="Screenshot 2026-01-14 at 6.23.01 PM 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[88.27%] left-0 max-w-none top-[5.87%] w-full" src={imgScreenshot20260114At62301Pm1} />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col h-[372px] items-center justify-center left-[137.5px] overflow-clip pl-[-0.313px] pr-[-0.328px] py-0 top-[-16.38px] w-[181px]" data-name="Container">
      <div className="aspect-[113/265] relative shrink-0 w-full" data-name="Screenshot 2026-01-14 at 6.23.01 PM 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[88.27%] left-0 max-w-none top-[5.87%] w-full" src={imgScreenshot20260114At62301Pm1} />
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col h-[372px] items-center justify-center left-[227.5px] overflow-clip pl-[-0.313px] pr-[-0.328px] py-0 top-[-16.38px] w-[181px]" data-name="Container">
      <div className="aspect-[113/265] relative shrink-0 w-full" data-name="Screenshot 2026-01-14 at 6.23.01 PM 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[88.27%] left-0 max-w-none top-[5.87%] w-full" src={imgScreenshot20260114At62301Pm1} />
        </div>
      </div>
    </div>
  );
}

function PaperTrailPhones1() {
  return (
    <div className="h-[340px] relative shrink-0 w-[472px]" data-name="PaperTrailPhones">
      <Container18 />
      <Container19 />
      <Container20 />
    </div>
  );
}

function ImageContainer() {
  return (
    <div className="col-[2] justify-self-stretch relative row-[1] self-stretch shrink-0" data-name="Image Container" style={{ backgroundImage: "linear-gradient(142.001deg, rgb(196, 181, 168) 0%, rgb(210, 186, 182) 100%)" }}>
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[80px] py-[40px] relative size-full">
          <PaperTrailPhones1 />
        </div>
      </div>
    </div>
  );
}

function OverlapCard() {
  return (
    <div className="bg-white grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[500px] overflow-clip relative rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Overlap Card">
      <TextContainer />
      <ImageContainer />
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute content-stretch flex h-[45px] items-start left-[275.31px] top-[37px] w-[199.219px]" data-name="Text">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[40px] relative shrink-0 text-[36px] text-black whitespace-pre">Bleach USA</p>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[40px] left-0 text-[36px] text-black top-[-1px] w-[409px] whitespace-pre-wrap">Creating familiarity in e-commerce with</p>
      <Text8 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.6)] top-0 w-[144px] whitespace-pre-wrap">Read time 25 minutes</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[132px] relative shrink-0 w-[544px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Heading5 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[28px] relative shrink-0 w-[40.078px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] left-0 text-[18px] text-black top-0 whitespace-pre">Web</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[58.391px] relative rounded-[33554400px] shrink-0 w-[172.188px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[34px] py-[14px] relative size-full">
        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[30.4px] relative shrink-0 text-[19px] text-black whitespace-pre">Case Study</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[58.391px] relative shrink-0 w-[544px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text9 />
        <Link4 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-[#d2bab6] col-[1] justify-self-stretch relative row-[1] self-stretch shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start justify-between pl-[48px] pr-0 py-[48px] relative size-full">
        <Container22 />
        <Container23 />
      </div>
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="h-[362.656px] relative rounded-[14px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="ImageWithFallback">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[14px]">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[14px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[14px] size-full" src={imgImageWithFallback1} />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="col-[2] justify-self-stretch relative row-[1] self-stretch shrink-0" data-name="Container" style={{ backgroundImage: "linear-gradient(142.001deg, rgb(196, 181, 168) 0%, rgb(210, 186, 182) 100%)" }}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-0 pt-[68.672px] px-[48px] relative size-full">
          <ImageWithFallback1 />
        </div>
      </div>
    </div>
  );
}

function BleachCard() {
  return (
    <div className="bg-white grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[500px] overflow-clip relative rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Bleach Card">
      <Container21 />
      <Container24 />
    </div>
  );
}

function ProjectContainers() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] h-[2144px] items-start relative shrink-0 w-full" data-name="Project Containers">
      <HooktheoryCard />
      <ProsperCard />
      <PapertrailCard />
      <OverlapCard />
      <BleachCard />
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative size-full" data-name="Container">
      <Heading />
      <ProjectContainers />
    </div>
  );
}