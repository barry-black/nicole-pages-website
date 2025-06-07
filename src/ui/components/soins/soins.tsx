"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Modal } from "@/ui/components/modal/modal";
import { Typography } from "@/ui/design-system/typography/typography";

interface Soin {
  id: string;
  title: string;
  description: string;
  image: string;
  objectPosition?: string;
  quote?: string;
  author?: string;
}

export function Soins() {
  const [activeSoin, setActiveSoin] = useState<number | null>(null);

  const soins: Soin[] = [
    {
      id: "pnl",
      title: "PNL – Reprogrammez vos schémas mentaux",
      description: `
La Programmation Neuro-Linguistique (PNL) aide à comprendre et transformer vos réactions, pensées et comportements limitants.
Grâce à des techniques concrètes, elle vous permet d'améliorer vos relations, de retrouver confiance et de mieux orienter vos décisions.
      `,
      image: "/assets/images/pnl.png",
      objectPosition: "center 40%",
      quote:
        "Ce n’est pas l’événement qui compte, mais la manière dont on y réagit.",
      author: "Épictète",
    },
    {
      id: "hypnose",
      title: "Hypnose – Plongez au cœur de votre inconscient",
      description: `
L’hypnose thérapeutique est une méthode douce qui permet d’accéder à l’inconscient, ce réservoir de ressources souvent inexploitées.
En état modifié de conscience, vous explorez vos blocages et automatismes, ouvrant la voie à des transformations durables, à votre rythme.
Elle est particulièrement efficace pour gérer le stress, l’anxiété, les phobies, les troubles du sommeil et les dépendances.
      `,
      image: "/assets/images/hypnose.png",
      quote:
        "Ce que l’on ne veut pas savoir de soi-même finit par arriver de l’extérieur comme un destin.",
      author: "Carl Gustav Jung",
    },
    {
      id: "coaching",
      title: "Coaching – Avancez avec clarté et confiance",
      description: `
Le coaching est un accompagnement personnalisé qui vous aide à clarifier vos objectifs, lever les freins, et passer à l'action.
C'est une démarche active, bienveillante, qui vous reconnecte à vos ressources pour construire un changement durable.
      `,
      image: "/assets/images/coaching.png",
      objectPosition: "center 40%",
      quote:
        "On ne peut rien enseigner à un homme ; on peut seulement l’aider à le découvrir en lui-même.",
      author: "Galilée",
    },
    {
      id: "reiki",
      title: "Reiki – L’harmonie par l’énergie",
      description: `
Le Reiki est une pratique énergétique d’origine japonaise visant à rétablir l’équilibre du corps et de l’esprit.
Par imposition des mains, l’énergie universelle circule à nouveau librement, apaisant tensions, stress et fatigue.
Une séance invite à une profonde détente et un recentrage intérieur.
      `,
      image: "/assets/images/reiki.png",
      quote: "L’énergie suit la pensée, alors pensez positivement.",
      author: "Louise Hay",
    },
    {
      id: "dream",
      title: "Dream Machine – Voyage au cœur de la conscience",
      description: `
La Dream Machine utilise la stimulation lumineuse pour induire des états modifiés de conscience.
En fermant les yeux, vous êtes guidé dans une expérience intérieure unique, entre relaxation profonde, méditation et créativité.
C’est un outil novateur et sensoriel pour explorer l’esprit autrement.
      `,
      image: "/assets/images/dream.png",
      objectPosition: "center 40%",
      quote: "Les rêves sont la littérature du sommeil.",
      author: "Jean Cocteau",
    },
  ];

  return (
    <section id="soins" className="bg-[var(--color-pale-blue)] py-10 px-6">
      <div className="text-center mb-10 max-w-xl mx-auto">
        <Typography
          variant="m-40"
          weight="semibold"
          theme="ocean-blue"
          component="h2"
        >
          Soins proposés
        </Typography>
        <p className="text-gray-600 mt-4 leading-relaxed text-base">
          Les approches proposées s’inscrivent dans une démarche complémentaire
          au soin médical classique, sans jamais s’y substituer.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
        {soins.map((soin, i) => (
          <motion.div
            key={soin.id}
            onClick={() => setActiveSoin(i)}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="w-[300px] cursor-pointer bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg text-center"
          >
            <div className="relative w-full h-48">
              <Image
                src={soin.image}
                alt={soin.title}
                fill
                className="object-cover"
                style={{ objectPosition: soin.objectPosition || "center" }}
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {soin.title.split("–")[0].trim()}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {activeSoin !== null && (
        <Modal soin={soins[activeSoin]} onClose={() => setActiveSoin(null)} />
      )}

      <motion.section
        className="text-center my-12 px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      ></motion.section>
    </section>
  );
}
