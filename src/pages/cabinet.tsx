"use client";

/* Public Library */
import { useState } from "react";

/* Components */
import { Seo } from "@/ui/components/seo/seo";
import { Navigation } from "@/ui/components/navigation/navigation";
import { CabinetCarousel } from "@/ui/components/carroussel/caroussel";
import { Footer } from "@/ui/components/footer/footer";
import { Button } from "@/ui/design-system/button/button";

/* Hooks */
import { useNavigateAndScroll } from "@/hooks/useNavigateAndScroll";

export default function CabinetPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const navigateAndScroll = useNavigateAndScroll();

  return (
    <>
      <Seo
        title="Le Cabinet - Nicole Pagès"
        description="Découvrez le cadre apaisant du cabinet de Nicole Pagès à Sainte-Livrade-sur-Lot."
      />

      <main className="text-center text-[var(--color-sky-blue)] bg-white">
        {/* Sticky Navbar */}
        <Navigation menuOpen={menuOpen} toggleMenu={toggleMenu} />

        {/* Galerie d’images */}
        <CabinetCarousel />

        {/* Bloc horaires + bouton */}
        <section className="py-0 px-6 flex flex-col items-center bg-white">
          <div className="max-w-prose text-center space-y-6">
            <h2 className="text-2xl font-semibold text-[var(--color-ocean-blue)]">
              Horaires
            </h2>
            <ul className="space-y-2 text-lg font-medium text-[var(--color-sky-blue)]">
              <li>lundi, jeudi et vendredi : de 08h00 à 20h00</li>
              <li>mardi : de 13h00 à 20h00</li>
            </ul>
          </div>

          <div className="my-10">
            <Button
              variant="callAction"
              onClick={() => navigateAndScroll("contact")}
            >
              Prendre rendez-vous
            </Button>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
