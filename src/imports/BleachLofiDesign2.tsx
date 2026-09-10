import imgImageWithFallback from "figma:asset/b79e6214019ab0f63d10f63bb8bb7a57cbede0f4.png";

function ImageWithFallback() {
  return (
    <div className="h-[766px] relative rounded-[10px] shrink-0 w-[509px]" data-name="ImageWithFallback">
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
    <div className="bg-[#f9fafb] content-stretch flex flex-col items-center justify-center p-[33px] pointer-events-none relative rounded-[16px] size-full" data-name="Bleach Lofi Design 2">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 rounded-[16px]" />
      <ImageWithFallback />
    </div>
  );
}