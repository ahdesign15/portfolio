import imgImageWithFallback from "figma:asset/1f48ea8fc6a65665629b7da114a31f8cd5b1b2ad.png";

function ImageWithFallback() {
  return (
    <div className="absolute h-[480px] left-[calc(50%-0.5px)] rounded-[14px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[720px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgImageWithFallback} />
    </div>
  );
}

export default function Container() {
  return (
    <div className="relative rounded-[16px] size-full" data-name="Container" style={{ backgroundImage: "linear-gradient(68.1356deg, rgba(249, 222, 48, 0) 55.816%, rgb(187, 171, 68) 29.017%)" }}>
      <div className="content-stretch flex flex-col items-start overflow-clip pb-px pt-[65px] px-[226px] relative rounded-[inherit] size-full">
        <ImageWithFallback />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}