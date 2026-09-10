import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Menu, X } from 'lucide-react';

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#FFFFFF] z-50 border-b border-black/5">
      <nav className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        <a
          href="/"
          className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-2xl text-[#000000] hover:opacity-60 transition-opacity"
        >
          Andreis Hernandez
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="/#work"
            className="font-['Plus_Jakarta_Sans',sans-serif] text-base text-[#000000] hover:opacity-60 transition-opacity"
          >
            Design
          </a>
          <a
            href="/#about"
            className="font-['Plus_Jakarta_Sans',sans-serif] text-base text-[#000000] hover:opacity-60 transition-opacity"
          >
            About
          </a>
          <a
            href="https://drive.google.com/file/d/1M703wh8GZoroIP-M20kDblDGvbHKxKKc/view?usp=sharing"
            className="font-['Plus_Jakarta_Sans',sans-serif] text-base text-[#000000] hover:opacity-60 transition-opacity"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-black/5 transition-all"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <svg className="w-6 h-6 text-[#000000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-[#000000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 -mr-2 text-[#000000] hover:opacity-60 transition-opacity"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#FFFFFF] border-b border-black/5 shadow-lg md:hidden">
            <div className="flex flex-col p-6 gap-6">
              <a
                href="/#work"
                className="font-['Plus_Jakarta_Sans',sans-serif] text-lg font-medium text-[#000000] hover:opacity-60 transition-opacity"
                onClick={() => setIsMenuOpen(false)}
              >
                Design
              </a>
              <a
                href="/#about"
                className="font-['Plus_Jakarta_Sans',sans-serif] text-lg font-medium text-[#000000] hover:opacity-60 transition-opacity"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="https://drive.google.com/file/d/1M703wh8GZoroIP-M20kDblDGvbHKxKKc/view?usp=sharing"
                className="font-['Plus_Jakarta_Sans',sans-serif] text-lg font-medium text-[#000000] hover:opacity-60 transition-opacity"
                onClick={() => setIsMenuOpen(false)}
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
