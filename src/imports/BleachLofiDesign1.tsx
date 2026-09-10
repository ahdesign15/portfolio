import imgImageWithFallback from "figma:asset/a03e6a0f31867e121f0fc87d807309674999ee1a.png";

function ImageWithFallback() {
  return (
    <div className="h-[845px] relative rounded-[10px] shrink-0 w-[509px]" data-name="ImageWithFallback">
      <div aria-hidden="true" className="absolute inset-0 rounded-[10px]">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[10px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[10px] size-full" src={imgImageWithFallback} />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

export default function BleachLofiDesign() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col items-center justify-center p-[32px] pointer-events-none relative rounded-[16px] size-full" data-name="Bleach Lofi Design 1">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 rounded-[16px]" />
      <ImageWithFallback />
    </div>
  );
}