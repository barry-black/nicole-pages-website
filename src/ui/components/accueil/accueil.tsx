"use client";

/* public library */
import Image from "next/image";

/* Component */
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";

/* API */
import { scrollToSection } from "@/api/scrollToSection";

export const Accueil = () => {
  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Image de fond zoomée, centrée en bas à gauche, sans filtre */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/accueil.webp"
          alt="Arrière-plan Accueil"
          fill
          className="object-cover scale-150 object-left-bottom"
          priority
        />
      </div>

      {/* Contenu centré */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white text-center h-full px-4">
        <Typography variant="ds-62-shadow" theme="white" weight="semibold">
          Thérapeute
        </Typography>
        <Typography variant="m-88-shadow" theme="white" weight="semibold">
          Hypnose Reiki PNL
        </Typography>
        <Button variant="info" onClick={() => scrollToSection("who-i-am")}>
          + d&apos;info
        </Button>
      </div>
    </section>
  );
};
