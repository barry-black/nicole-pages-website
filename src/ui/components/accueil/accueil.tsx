"use client";

/* Public Library */
import Image from "next/image";
import { motion } from "framer-motion";

/* Component */
import { Typography } from "@/ui/design-system/typography/typography";

interface AccueilProps {
  navHeight: number;
}

export const Accueil = ({ navHeight }: AccueilProps) => {
  return (
    <section
      className="relative overflow-hidden"
      style={{ height: `calc(100vh - ${navHeight}px)` }}
    >
      {/* Image de fond zoomée, centrée en bas à gauche, sans filtre */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/accueil.webp"
          alt="Arrière-plan Accueil"
          fill
          className="object-cover object-left-bottom"
          priority
        />
      </div>

      {/* Contenu centré verticalement et horizontalement avec animation */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-white text-center h-full px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Typography variant="ds-62-shadow" theme="white" weight="semibold">
          Thérapeute
        </Typography>
        <Typography variant="m-88-shadow" theme="white" weight="semibold">
          Hypnose PNL Coaching Reiki
        </Typography>
      </motion.div>
    </section>
  );
};
