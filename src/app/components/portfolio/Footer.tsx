import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-gradient-to-b from-[#fafaf8] to-white dark:from-[#0f0e0d] dark:to-[#0a0a0a] pt-16 pb-8 px-6 md:px-12 lg:px-[157.5px] transition-colors duration-300">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 border-t border-black/5 dark:border-white/5 pointer-events-none" />

      {/* Desktop Layout */}
      <div className="hidden lg:flex items-center justify-between w-full">
        {/* Left - Name */}
        <div className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-2xl text-black dark:text-white transition-colors duration-300">
          Andreis Hernandez
        </div>

        {/* Center - Navigation */}
        <nav className="flex gap-8">
          <a
            href="/#work"
            className="font-['Plus_Jakarta_Sans',sans-serif] text-base text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
          >
            Work
          </a>
          <a
            href="/#about"
            className="font-['Plus_Jakarta_Sans',sans-serif] text-base text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
          >
            About
          </a>
          <a
            href="https://drive.google.com/file/d/1M703wh8GZoroIP-M20kDblDGvbHKxKKc/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="font-['Plus_Jakarta_Sans',sans-serif] text-base text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
          >
            Resume
          </a>
          <a
            href="https://linkedin.com/in/andreis-hernandez/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-['Plus_Jakarta_Sans',sans-serif] text-base text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:andreishdesign@gmail.com"
            className="font-['Plus_Jakarta_Sans',sans-serif] text-base text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
          >
            Email
          </a>
        </nav>

        {/* Right - Copyright */}
        <div className="font-['Plus_Jakarta_Sans',sans-serif] text-sm text-black/40 dark:text-white/40 transition-colors duration-300">
          © {currentYear} All rights reserved
        </div>
      </div>

      {/* Mobile/Tablet Layout */}
      <div className="flex lg:hidden flex-col gap-8 items-center text-center">
        {/* Name */}
        <div className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-2xl text-black dark:text-white transition-colors duration-300">
          Andreis Hernandez
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap gap-6 justify-center">
          <a
            href="/#work"
            className="font-['Plus_Jakarta_Sans',sans-serif] text-base text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
          >
            Work
          </a>
          <a
            href="/#about"
            className="font-['Plus_Jakarta_Sans',sans-serif] text-base text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
          >
            About
          </a>
          <a
            href="https://drive.google.com/file/d/1M703wh8GZoroIP-M20kDblDGvbHKxKKc/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="font-['Plus_Jakarta_Sans',sans-serif] text-base text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
          >
            Resume
          </a>
          <a
            href="https://linkedin.com/in/andreis-hernandez/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-['Plus_Jakarta_Sans',sans-serif] text-base text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:andreishdesign@gmail.com"
            className="font-['Plus_Jakarta_Sans',sans-serif] text-base text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
          >
            Email
          </a>
        </nav>

        {/* Copyright */}
        <div className="font-['Plus_Jakarta_Sans',sans-serif] text-sm text-black/40 dark:text-white/40 transition-colors duration-300">
          © {currentYear} All rights reserved
        </div>
      </div>
    </footer>
  );
}