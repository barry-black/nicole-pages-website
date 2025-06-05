"use client";

/* Public Library */
import { useState } from "react";
import Image from "next/image";

/* Components */
import { Seo } from "@/ui/components/seo/seo";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Footer } from "@/ui/components/footer/footer";
import { Button } from "@/ui/design-system/button/button";

/* Hooks */
import { useNavigateAndScroll } from "@/hooks/useNavigateAndScroll";

export default function TarifsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const navigateAndScroll = useNavigateAndScroll();

  return (
    <>
      <Seo
        title="Tarifs - Nicole Pagès"
        description="Découvrez le cadre apaisant du cabinet de Nicole Pagès à Sainte-Livrade-sur-Lot."
      />

      <main className="text-center text-[var(--color-sky-blue)] bg-white flex flex-col min-h-screen">
        {/* Sticky Navbar */}
        <Navigation menuOpen={menuOpen} toggleMenu={toggleMenu} />

        {/* Bloc Tarifs */}
        <section className="mt-16 mb-12 px-6 flex flex-col items-center bg-white relative z-10">
          <div className="max-w-prose text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-ocean-blue)]">
              Tarifs
            </h2>
            <ul className="space-y-4 text-xl md:text-2xl font-medium text-[var(--color-sky-blue)]">
              <li>
                <strong>Séance bien-être individuelle</strong> : 60€
              </li>
              <li>
                <strong>Séance ibération tabac</strong> : 80€
              </li>
              <li>
                <strong>Forfait accompagnement</strong> : 200€
              </li>
            </ul>

            <p className="text-sm text-gray-500 mt-4 leading-relaxed max-w-prose mx-auto">
              Le forfait accompagnement est pensé pour un travail en profondeur.
              Il inclut un minimum de 4 séances, sans coût supplémentaire si
              quelques séances supplémentaires s’avèrent nécessaires.
            </p>
          </div>

          {/* Bouton */}
          <div className="pt-10">
            <Button
              variant="callAction"
              onClick={() => navigateAndScroll("contact")}
            >
              Prendre rendez&#8209;vous
            </Button>
          </div>
        </section>

        {/* Image décorative bas de page */}
        <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden z-0">
          <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
          <Image
            src="/assets/images/tarifs.webp"
            alt="Arrière-plan Tarifs"
            fill
            className="object-cover scale-[1.6] object-[center_bottom] sm:scale-[1.4] md:scale-[1.5] md:object-[center_-300px]"
            priority
          />
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
