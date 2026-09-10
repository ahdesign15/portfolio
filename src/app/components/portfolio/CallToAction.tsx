export function CallToAction() {
  return (
    <section className="w-full bg-[#302b1b] py-16 md:py-24">
      <div className="max-w-[984px] mx-auto px-6 md:px-12">
        <div className="max-w-[560px] flex flex-col gap-5">
          <h2 className="font-bold text-[36px] sm:text-[42px] md:text-[48px] leading-[1.15] tracking-[-0.96px] text-white">
            Let's build something{' '}
            <span className="text-[#c46b83]">worth using.</span>
          </h2>

          <p className="text-[#d2bab6] text-[15px] md:text-[16px] leading-[27.2px]">
            Open to full-time roles, freelance projects, and conversations about
            design. If you're building something you care about, I'd like to hear from
            you.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="mailto:andreishdesign@gmail.com"
              className="bg-[#ae536e] text-white font-bold text-[13px] px-6 py-3 rounded-[7px] min-h-[44px] flex items-center hover:bg-[#9e4a61] transition-colors break-all"
            >
              andreishdesign@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/andreishernandez"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#d2bab6]/25 text-[#d2bab6] font-bold text-[13px] px-6 py-3 rounded-[7px] min-h-[44px] flex items-center hover:border-[#d2bab6]/50 transition-colors"
            >
              LinkedIn →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
