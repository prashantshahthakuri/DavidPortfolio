"use client";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center mb-20 bg-[#553f3f] text-white -mx-4 sm:-mx-8 -mt-6 sm:-mt-10 px-6 sm:px-8 py-4 sm:py-5 shadow-sm">
      <a
        href="#"
        className="text-lg sm:text-xl tracking-[0.2em] font-medium hover:opacity-90 transition-opacity"
      >
        David Shahi
      </a>

      <div className="flex items-center gap-4 sm:gap-7">
        <nav className="flex items-center gap-5 sm:gap-7 text-xs sm:text-sm font-medium">
          <a
            href="#about"
            className="hover:opacity-75 transition-opacity"
          >
            About me
          </a>
          <a
            href="#projects"
            className="hover:opacity-75 transition-opacity"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="hover:opacity-75 transition-opacity"
          >
            Skills
          </a>
        </nav>

        {/* Vertical divider */}
        <div className="h-4 w-[1px] bg-white/30 hidden xs:block" />

        {/* Theme Toggle Button positioned at the end of the navbar */}
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
