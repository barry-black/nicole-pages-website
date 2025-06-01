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
        <section className="px-6 py-12 flex flex-col items-center bg-white">
          <div className="max-w-xl w-full text-center space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-ocean-blue)]">
              Horaires d’ouverture
            </h2>

            <div className="space-y-4 text-base md:text-xl font-medium text-[var(--color-sky-blue)] w-full">
              {[
                { jours: "Lundi, Jeudi & Vendredi", horaires: "08h00 – 20h00" },
                { jours: "Mardi", horaires: "13h00 – 20h00" },
              ].map(({ jours, horaires }, i) => (
                <div
                  key={i}
                  className="flex justify-between items-start border-b pb-2 w-full"
                >
                  <span className="flex-1">{jours}</span>
                  <span className="ml-4 whitespace-nowrap text-right">
                    {horaires}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Button
                variant="callAction"
                onClick={() => navigateAndScroll("contact")}
              >
                Prendre rendez-vous
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
