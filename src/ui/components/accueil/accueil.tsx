"use client";

import Image from "next/image";
import { Typography } from "@/ui/design-system/typography/typography";

export const Accueil = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{ height: "calc(100vh - 64px)" }} // 64px = hauteur nav
    >
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

      {/* Contenu centré verticalement et horizontalement */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white text-center h-full px-4">
        <Typography variant="ds-62-shadow" theme="white" weight="semibold">
          Thérapeute
        </Typography>
        <Typography variant="m-88-shadow" theme="white" weight="semibold">
          Hypnose Reiki PNL
        </Typography>
      </div>
    </section>
  );
};
