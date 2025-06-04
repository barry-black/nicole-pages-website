"use client";

/* Public Library */
import { useRef, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

/* Component */
import { Seo } from "@/ui/components/seo/seo";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Accueil } from "@/ui/components/accueil/accueil";
import { WhoIAm } from "@/ui/components/who-i-am/who-i-am";
import { Soins } from "@/ui/components/soins/soins";
import { Temoignages } from "@/ui/components/temoignage/temoignage";
import { Contact } from "@/ui/components/contact/contact";
import { MapView } from "@/ui/components/map-view/map-view";
import { Footer } from "@/ui/components/footer/footer";

/* API */
import { scrollToSection } from "@/api/scrollToSection";

export default function MainPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const searchParams = useSearchParams();
  const scrollToId = searchParams.get("scrollTo");

  const navRef = useRef<HTMLElement>(null);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    if (scrollToId) {
      scrollToSection(scrollToId);
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, [scrollToId]);

  useEffect(() => {
    const updateNavHeight = () => {
      if (navRef.current) {
        setNavHeight(navRef.current.offsetHeight);
      }
    };
    updateNavHeight();
    window.addEventListener("resize", updateNavHeight);
    return () => window.removeEventListener("resize", updateNavHeight);
  }, []);

  return (
    <>
      <Seo
        title="Nicole Pagès Thérapie"
        description="Thérapeute spécialisée en Hypnose, Reiki et PNL à Sainte-Livrade-sur-Lot."
      />

      <main className="text-gray-800">
        {/* Sticky Navbar */}
        <Navigation ref={navRef} menuOpen={menuOpen} toggleMenu={toggleMenu} />

        {/* Accueil */}
        <Accueil navHeight={navHeight} />
        <section className="text-center py-8 bg-white">
          <Button
            variant="callAction"
            onClick={() => scrollToSection("contact")}
          >
            Prendre rendez-vous
          </Button>
        </section>

        {/* Qui suis-je */}
        <WhoIAm />

        {/* Citation */}
        <section className="text-center py-8 bg-white">
          <blockquote className="text-2xl font-semibold text-[var(--color-ocean-blue)] mb-2">
            “La paix vient de l’intérieur. Ne la cherchez pas à l’extérieur.”
          </blockquote>
          <Typography variant="ds-40" theme="ocean-blue" component="p">
            Bouddah
          </Typography>
        </section>

        {/* Soins */}
        <Soins />

        {/* Témoignages */}
        <Temoignages />

        {/* Contact */}
        <Contact />

        {/* Carte */}
        <MapView />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
