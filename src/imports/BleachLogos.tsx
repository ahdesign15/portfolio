import imgImageWithFallback from "figma:asset/6bda4d505b9e633d99f77106b03ae2dbec93eaf7.png";
import imgImageWithFallback1 from "figma:asset/770706d7c99f652ee3ec26e20da9d4a1de672b3b.png";

function ImageWithFallback() {
  return (
    <div className="h-[147.109px] relative rounded-[10px] shrink-0 w-[378px]" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Bl() {
  return (
    <div className="bg-[#f9fafb] col-[1] content-stretch flex items-center justify-center justify-self-stretch p-px relative rounded-[16px] row-[1] self-stretch shrink-0" data-name="BL 1">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <ImageWithFallback />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="relative shrink-0 size-[200px]" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Bl1() {
  return (
    <div className="bg-[#f9fafb] col-[2] content-stretch flex items-center justify-center justify-self-stretch p-px relative rounded-[16px] row-[1] self-stretch shrink-0" data-name="BL 2">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <ImageWithFallback1 />
    </div>
  );
}

export default function BleachLogos() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] relative size-full" data-name="Bleach logo\'s">
      <Bl />
      <Bl1 />
    </div>
  );
}