"use client";

/* public library */
import { useState } from "react";
import Image from "next/image";

/* Component */
import { Seo } from "@/ui/components/seo/seo";
import { Navigation } from "@/ui/components/navigation/navigation";
import { CabinetCarousel } from "@/ui/components/carroussel/caroussel";

export default function CabinetPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  return (
    <>
      <Seo
        title="Le Cabinet - Nicole Pagès"
        description="Découvrez le cadre apaisant du cabinet de Nicole Pagès à Sainte-Livrade-sur-Lot."
      />
      <main className="text-center text-[#008398] bg-white">
        {/* Sticky Navbar */}
        <Navigation menuOpen={menuOpen} toggleMenu={toggleMenu} />

        {/* Galerie d’images */}
        <CabinetCarousel />

        {/* Horaires */}
        <section className="py-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#284a74]">
            Horaires
          </h2>
          <ul className="space-y-2 text-lg font-medium">
            <li>les lundis et jeudis : de 08h00 à 20h00</li>
            <li>les mardis : de 13h00 à 20h00</li>
            <li>les vendredis : de 08h00 à 13h00</li>
          </ul>
        </section>

        <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition my-6">
          Prendre rendez-vous
        </button>
      </main>
    </>
  );
}
