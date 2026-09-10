import imgContainer from "figma:asset/8cb726628c2381ca96930ed7c1ef88081d82d346.png";

export default function Container() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end overflow-clip pb-[90px] pt-[180px] px-[80px] relative rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-full" data-name="Container">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
        <div className="absolute bg-gradient-to-b from-[#c4b5a8] inset-0 rounded-[24px] to-[#e8dcd8] via-1/2" />
        <img alt="" className="absolute max-w-none object-cover opacity-60 rounded-[24px] size-full" src={imgContainer} />
      </div>
    </div>
  );
}