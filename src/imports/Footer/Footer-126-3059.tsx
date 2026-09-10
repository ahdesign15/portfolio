function Container1() {
  return (
    <div className="h-[32px] relative shrink-0 w-[219.703px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[32px] left-0 text-[24px] text-black top-0 whitespace-nowrap">Andreis Hernandez</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[39.766px]" data-name="Link">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(0,0,0,0.6)] top-[-1px] whitespace-nowrap">Work</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute h-[24px] left-[71.77px] top-0 w-[46.969px]" data-name="Link">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(0,0,0,0.6)] top-[-1px] whitespace-nowrap">About</p>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute h-[24px] left-[150.73px] top-0 w-[61.297px]" data-name="Link">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(0,0,0,0.6)] top-[-1px] whitespace-nowrap">Resume</p>
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute h-[24px] left-[244.03px] top-0 w-[63.719px]" data-name="Link">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(0,0,0,0.6)] top-[-1px] whitespace-nowrap">LinkedIn</p>
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute h-[24px] left-[339.75px] top-0 w-[40.813px]" data-name="Link">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(0,0,0,0.6)] top-[-1px] whitespace-nowrap">Email</p>
    </div>
  );
}

function Navigation() {
  return (
    <div className="h-[24px] relative shrink-0 w-[380.563px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link />
        <Link1 />
        <Link2 />
        <Link3 />
        <Link4 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[169.656px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.4)] top-0 w-[170px]">© 2026 All rights reserved</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[0.016px] relative size-full">
          <Container1 />
          <Navigation />
          <Container2 />
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#fafaf8] items-start pt-[65px] px-[157.5px] relative size-full to-white" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <Container />
    </div>
  );
}