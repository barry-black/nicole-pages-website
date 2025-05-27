"use client";

/* public library */
import { useState } from "react";
import Image from "next/image";

/* Components */
import { Seo } from "@/ui/components/seo/seo";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Footer } from "@/ui/components/footer/footer";

export default function TarifsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      <Seo
        title="Tarifs - Nicole Pagès"
        description="Découvrez le cadre apaisant du cabinet de Nicole Pagès à Sainte-Livrade-sur-Lot."
      />

      <main className="text-center text-[var(--color-sky-blue)] bg-white flex flex-col min-h-screen">
        {/* Sticky Navbar */}
        <Navigation menuOpen={menuOpen} toggleMenu={toggleMenu} />

        {/* Bloc horaires + bouton */}
        <section className="my-10 px-6 flex flex-col items-center bg-white relative z-10">
          <div className="max-w-prose text-center space-y-6">
            <h2 className="text-2xl font-semibold text-[var(--color-ocean-blue)]">
              Tarifs
            </h2>
            <ul className="space-y-2 text-lg font-medium text-[var(--color-sky-blue)]">
              <li>1 séance : 60€</li>
              <li>2 séances : 200€</li>
            </ul>
          </div>
        </section>

        {/* Image en bas de page */}
        <div className="relative w-full h-[300px] overflow-hidden z-0">
          <Image
            src="/assets/images/tarifs.webp"
            alt="Arrière-plan Tarifs"
            fill
            className="object-cover scale-150 object-[center_100px] md:object-[center_-300px]"
            priority
          />
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
