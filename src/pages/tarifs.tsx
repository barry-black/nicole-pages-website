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

        {/* Bloc Tarifs */}
        <section className="mt-16 mb-12 px-6 flex flex-col items-center bg-white relative z-10">
          <div className="max-w-prose text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-ocean-blue)]">
              Tarifs
            </h2>
            <ul className="space-y-4 text-xl md:text-2xl font-medium text-[var(--color-sky-blue)]">
              <li>1 séance : 60€</li>
              <li>4 séances : 200€</li>
            </ul>
          </div>
        </section>

        {/* Image en bas de page */}
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
