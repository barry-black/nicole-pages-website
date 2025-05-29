"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";
import { scrollToSection } from "@/api/scrollToSection";

export const useNavigateAndScroll = (menuOpen = false, toggleMenu?: () => void) => {
  const pathname = usePathname();
  const router = useRouter();

  return useCallback(
    (id: string) => {
      if (pathname === "/") {
        scrollToSection(id);
        if (menuOpen && toggleMenu) toggleMenu();
      } else {
        router.push(`/?scrollTo=${id}`);
        if (menuOpen && toggleMenu) toggleMenu();
      }
    },
    [pathname, menuOpen, toggleMenu, router]
  );
};
