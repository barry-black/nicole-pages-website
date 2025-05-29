"use client";

/* Public Library */
import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";

/* Component */
import { Button } from "@/ui/design-system/button/button";

/* Hook */
import { useNavigateAndScroll } from "@/hooks/useNavigateAndScroll";

interface NavigationProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

export const Navigation = ({ menuOpen, toggleMenu }: NavigationProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const navRef = useRef<HTMLElement>(null);
  const [compact, setCompact] = useState(false);

  // Détection responsive landscape mobile (par exemple)
  useEffect(() => {
    function checkCompact() {
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;

      // Exemple simple : mode compact si en paysage ET largeur max 768px
      if (windowWidth <= 768 && windowWidth > windowHeight) {
        setCompact(true);
      } else {
        setCompact(false);
      }
    }
    checkCompact();
    window.addEventListener("resize", checkCompact);
    return () => window.removeEventListener("resize", checkCompact);
  }, []);

  const handleScrollToTop = useCallback(() => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (menuOpen) toggleMenu();
    } else {
      router.push("/");
      if (menuOpen) toggleMenu();
    }
  }, [pathname, menuOpen, toggleMenu, router]);

  const navigateAndScroll = useNavigateAndScroll(menuOpen, toggleMenu);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        toggleMenu();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen, toggleMenu]);

  return (
    <header
      ref={navRef}
      className={clsx(
        "sticky top-0 z-50 bg-[var(--color-sky-blue)] text-white shadow",
        compact && "compact-header"
      )}
    >
      <div className="flex items-center justify-between px-6 max-w-7xl mx-auto">
        <div className="my-3">
          <Button
            variant="ico"
            icon="/assets/svg/papillon_blanc.png"
            onClick={handleScrollToTop}
          >
            Nicole Pagès
          </Button>
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-lg text-white">
            <li
              className="cursor-pointer hover:underline"
              onClick={() => navigateAndScroll("soins")}
            >
              Les soins
            </li>
            <li>
              <Link href="/cabinet" className="hover:underline">
                Le cabinet
              </Link>
            </li>
            <li>
              <Link href="/tarifs" className="hover:underline">
                Les tarifs
              </Link>
            </li>
            <li
              className="cursor-pointer hover:underline"
              onClick={() => navigateAndScroll("contact")}
            >
              Contact
            </li>
          </ul>
        </nav>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Menu"
            aria-expanded={menuOpen}
            className="text-white cursor-pointer"
          >
            <svg
              className={`w-8 h-8 transition-transform duration-300 ease-in-out ${
                menuOpen ? "rotate-45" : "rotate-0"
              }`}
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

      <div
        className={clsx(
          "md:hidden overflow-hidden bg-[var(--color-ocean-blue)] transition-all duration-500 ease-in-out px-6",
          menuOpen ? "max-h-96 opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        )}
      >
        <ul className="flex flex-col space-y-4 text-lg text-white text-left">
          <li
            className="cursor-pointer hover:underline pt-2"
            onClick={() => navigateAndScroll("soins")}
          >
            Les soins
          </li>
          <li>
            <Link
              href="/cabinet"
              onClick={toggleMenu}
              className="hover:underline"
            >
              Le cabinet
            </Link>
          </li>
          <li>
            <Link
              href="/tarifs"
              onClick={toggleMenu}
              className="hover:underline"
            >
              Les tarifs
            </Link>
          </li>
          <li
            className="cursor-pointer hover:underline pb-2"
            onClick={() => navigateAndScroll("contact")}
          >
            Contact
          </li>
        </ul>
      </div>
    </header>
  );
};
