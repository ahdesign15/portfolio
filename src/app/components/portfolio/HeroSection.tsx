import { ImageWithFallback } from '../figma/ImageWithFallback';
import heroPhoto from '../../../imports/image-3.png';

export function HeroSection() {
  return (
    <section className="w-full max-w-[984px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
      {/* Text column */}
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-[#2a2020] leading-none tracking-[-1.5px] text-[56px] sm:text-[72px] md:text-[96px] md:tracking-[-2.4px]">
          <span className="block">Hi, I'm</span>
          <span className="block text-[#ae536e]">Andreis</span>
        </h1>

        <p className="text-[#7a6f6f] text-[18px] sm:text-[22px] md:text-[26px] leading-[1.45]">
          I design thoughtful digital experiences that help people learn, create, and connect.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="/#work"
            className="bg-[#ae536e] text-white font-bold text-[13px] px-6 py-3 rounded-[7px] min-h-[44px] flex items-center hover:bg-[#9e4a61] transition-colors"
          >
            View work
          </a>
          <a
            href="/#about"
            className="bg-white border border-[rgba(42,32,32,0.2)] text-[#2a2020] font-bold text-[13px] px-6 py-3 rounded-[7px] min-h-[44px] flex items-center hover:bg-[#f5f5f3] transition-colors"
          >
            About me
          </a>
        </div>
      </div>

      {/* Portrait column — hidden on small, shown md+ */}
      <div className="relative rounded-[24px] overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] h-[320px] sm:h-[400px] md:h-[460px] hidden sm:block">
        <div className="absolute inset-0 bg-gradient-to-b from-[#c4b5a8] to-[#e8dcd8]" />
        <ImageWithFallback
          src={heroPhoto}
          alt="Andreis Hernandez"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
      </div>
    </section>
  );
}