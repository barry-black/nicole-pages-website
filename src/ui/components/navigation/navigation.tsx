"use client";

import { useCallback } from "react";
import { Button } from "@/ui/design-system/button/button";
import clsx from "clsx";

interface NavigationProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

export const Navigation = ({ menuOpen, toggleMenu }: NavigationProps) => {
  const handleScrollToSection = useCallback(
    (id: string) => {
      const section = document.getElementById(id);
      const header = document.querySelector("header");
      if (section && header) {
        const yOffset = -header.offsetHeight;
        const y =
          section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
        if (menuOpen) toggleMenu();
      }
    },
    [menuOpen, toggleMenu]
  );

  const handleScrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (menuOpen) toggleMenu();
  }, [menuOpen, toggleMenu]);

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-sky-blue)] text-white shadow">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo / scroll to top */}
        <div className="my-3">
          <Button
            variant="ico"
            icon="/assets/svg/papillon_blanc.png"
            onClick={handleScrollToTop}
          >
            Nicole Pagès
          </Button>
        </div>

        {/* Desktop menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-lg text-white">
            <li
              className="cursor-pointer hover:underline"
              onClick={() => handleScrollToSection("soins")}
            >
              Les soins
            </li>
            <li>
              <a href="/design-system" className="hover:underline">
                Le cabinet
              </a>
            </li>
            <li>
              <a href="/design-system" className="hover:underline">
                Les tarifs
              </a>
            </li>
            <li
              className="cursor-pointer hover:underline"
              onClick={() => handleScrollToSection("contact")}
            >
              Contact
            </li>
          </ul>
        </nav>

        {/* Mobile burger */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Menu"
            className="text-white cursor-pointer"
          >
            <svg
              className="w-8 h-8 transition-transform duration-300 ease-in-out"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu - toujours dans le DOM */}
      <nav
        className={clsx(
          "md:hidden bg-[var(--color-ocean-blue)] px-6 overflow-hidden transition-all duration-300 ease-in-out",
          menuOpen ? "max-h-[300px] py-6" : "max-h-0 py-0"
        )}
        aria-hidden={!menuOpen}
      >
        <ul className="flex flex-col space-y-4 text-lg text-white">
          <li
            className="cursor-pointer hover:underline"
            onClick={() => handleScrollToSection("soins")}
          >
            Les soins
          </li>
          <li>
            <a
              href="/design-system"
              onClick={toggleMenu}
              className="hover:underline"
            >
              Le cabinet
            </a>
          </li>
          <li>
            <a
              href="/design-system"
              onClick={toggleMenu}
              className="hover:underline"
            >
              Les tarifs
            </a>
          </li>
          <li
            className="cursor-pointer hover:underline"
            onClick={() => handleScrollToSection("contact")}
          >
            Contact
          </li>
        </ul>
      </nav>
    </header>
  );
};
