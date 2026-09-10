import imgImageWithFallback from "figma:asset/66f9fe9d73fd79859470d992d79f3c520dff35fb.png";

function ImageWithFallback() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[10px] w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgImageWithFallback} />
      <div className="size-full" />
    </div>
  );
}

export default function HooktheoryScreen() {
  return (
    <div className="bg-[#f5f3f0] content-stretch flex flex-col items-start pb-0 pt-[48px] px-[48px] relative rounded-[16px] size-full" data-name="Hooktheory Screen 2">
      <ImageWithFallback />
    </div>
  );
}