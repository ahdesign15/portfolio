import { Link } from 'react-router-dom';

const skills = [
  'UX Research',
  'UI Design',
  'Prototyping',
  'Design Systems',
  'Usability Testing',
  'Figma',
];

export function AboutSnapshot() {
  return (
    <section id="about" className="w-full max-w-[984px] mx-auto flex flex-col md:grid md:grid-cols-[148px_1fr] gap-6 md:gap-12 items-start">
      {/* Left label */}
      <div>
        <span className="font-bold text-[11px] text-[#9e9393] tracking-[1.1px] uppercase">
          About
        </span>
      </div>

      {/* Right content */}
      <div className="flex flex-col gap-5">
        <h2 className="font-semibold text-[22px] sm:text-[26px] md:text-[30px] text-[#2a2020] tracking-[-0.3px] leading-[1.2]">
          Designing with purpose, grounded in people.
        </h2>

        <p className="text-[#7a6f6f] text-[15px] md:text-[16px] leading-[27.2px]">
          I'm a product designer with about a year of focused UX/UI experience, building on a
          decade across hospitality, creative freelancing, and intellectual property. That
          background shaped how I think about design — I care about the human on the other
          side of the screen, not just the interface in front of them.
        </p>

        <p className="text-[#7a6f6f] text-[15px] md:text-[16px] leading-[27.2px]">
          My work spans EdTech, music, creative tools, and e-commerce. I'm at my best when
          research informs decisions, when systems scale cleanly, and when the product
          actually earns the user's trust. Outside of work, I spend time in music theory,
          photography, and building creative systems.
        </p>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-[560px]">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-white border border-[#e8e5e0] rounded-[7px] px-3 py-2 flex items-center h-[33px]"
            >
              <span className="font-semibold text-[12px] text-[#7a6f6f]">{skill}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ae536e] text-white font-bold text-[13px] px-6 py-3 rounded-[7px] min-h-[44px] flex items-center hover:bg-[#9e4a61] transition-colors"
          >
            View Resume
          </a>
          <a
            href="mailto:andreishdesign@gmail.com"
            className="bg-white border border-[rgba(42,32,32,0.2)] text-[#2a2020] font-bold text-[13px] px-6 py-3 rounded-[7px] min-h-[44px] flex items-center hover:bg-[#f5f5f3] transition-colors"
          >
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
}
