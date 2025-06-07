"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Typography } from "@/ui/design-system/typography/typography";

export const WhoIAm = () => {
  return (
    <section
      id="who-i-am"
      className="bg-[var(--color-pale-blue)] py-24 px-4 sm:px-6 overflow-x-hidden"
    >
      {/* Citation stylisée */}
      <motion.div
        className="text-center mb-20 px-4 relative overflow-x-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <blockquote className="relative max-w-3xl mx-auto px-4 sm:px-6 text-ds text-ds-40 italic text-[var(--color-ocean-blue)] leading-relaxed overflow-hidden">
          <span className="text-4xl opacity-30 absolute -left-4 -top-4 select-none">
            “
          </span>
          <p>
            Et si vous décidiez d&rsquo;être heureux, parce que c&rsquo;est bon
            pour vous...
          </p>
          <span className="text-4xl opacity-30 absolute -right-4 -bottom-4 select-none">
            ”
          </span>
        </blockquote>
      </motion.div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12 relative overflow-x-hidden">
        {/* Bloc image avec glow */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ willChange: "transform" }}
          className="relative mt-8 z-10 flex flex-col items-center overflow-x-hidden"
        >
          {/* Glow effet animé */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-6 -left-6 w-[320px] sm:w-[360px] md:w-[400px] h-[400px] sm:h-[500px] md:h-[600px] rounded-xl bg-white/20 blur-2xl opacity-40 animate-pulse" />
          </div>

          {/* Image agrandie */}
          <Image
            src="/assets/images/photo_nicole.jpg"
            alt="Portrait Nicole"
            width={420}
            height={600}
            className="relative rounded-xl shadow-2xl object-cover z-10"
          />
        </motion.div>

        {/* Bloc texte plus étroit */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ willChange: "transform" }}
          className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 md:p-8 max-w-lg z-20 relative overflow-x-hidden"
        >
          <Typography
            variant="m-40"
            component="h2"
            theme="ocean-blue"
            weight="semibold"
            className="mb-4"
          >
            Qui suis-je ?
          </Typography>

          <Typography
            component="p"
            className="leading-relaxed text-[17px] text-black/90"
          >
            Bonjour, je m&rsquo;appelle Nicole.
            <br />
            <br />
            Thérapeute certifiée en Hypnose, Coaching, PNL et Reiki,
            j’accompagne celles et ceux qui souhaitent renverser une période
            difficile, se recentrer ou évoluer.
            <br />
            <br />
            Je suis convaincue que chacun porte en lui les ressources
            nécessaires à son propre changement. Mon rôle est de vous aider à
            les retrouver, dans un cadre bienveillant et respectueux.
            <br />
            <br />
            Mon cabinet est un espace d’écoute, de calme, et de confiance.
            Chaque mot, chaque silence y a sa place.
            <br />
            <br />
            <span className="mt-8 block border-l-4 border-[var(--color-ocean-blue)] pl-4 text-[18px] italic text-[var(--color-ocean-blue)] font-medium">
              Accompagner n&rsquo;est pas un m&eacute;tier. C&rsquo;est une
              pr&eacute;sence, attentive et sinc&egrave;re, qui avance &agrave;
              hauteur d&rsquo;&acirc;me &mdash; jamais devant, jamais
              derri&egrave;re.
            </span>
          </Typography>
        </motion.div>
      </div>
    </section>
  );
};
