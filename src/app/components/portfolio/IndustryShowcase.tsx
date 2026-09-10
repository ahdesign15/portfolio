const industries = [
  'Hospitality',
  'Entertainment',
  'B2C',
  'Education',
  'Music',
  'Tech',
];

export function IndustryShowcase() {
  const pills = [...industries, ...industries, ...industries];

  return (
    <div className="w-full bg-white overflow-hidden py-12 md:py-20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 mb-8 md:mb-12 text-center">
        <h2 className="font-semibold text-[24px] sm:text-[30px] md:text-[36px] text-black tracking-[-0.36px] leading-tight">
          Experience Across Industries
        </h2>
        <p className="text-[14px] md:text-[16px] text-black/50 font-light leading-6 mt-3">
          Designing products across creative, consumer, and technical spaces.
        </p>
      </div>

      {/* Scrolling ticker */}
      <div className="relative overflow-hidden">
        <div
          className="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(90deg, white 0%, transparent 100%)' }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(270deg, white 0%, transparent 100%)' }}
        />

        <div
          className="flex gap-3 md:gap-4 animate-[ticker_20s_linear_infinite]"
          style={{ width: 'max-content' }}
        >
          {pills.map((industry, i) => (
            <div
              key={i}
              className="bg-black/5 rounded-full px-5 md:px-8 py-3 md:py-4 flex items-center justify-center shrink-0"
            >
              <span className="font-medium text-[14px] md:text-[18px] text-black leading-7 whitespace-nowrap">
                {industry}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
