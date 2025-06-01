"use client";

import { useState } from "react";
import Image from "next/image";
import { Modal } from "@/ui/components/modal/modal";
import { Typography } from "@/ui/design-system/typography/typography";

interface Soin {
  id: string;
  title: string;
  description: string;
  image: string;
  objectPosition?: string;
}

export function Soins() {
  const [activeSoin, setActiveSoin] = useState<number | null>(null);

  const soins: Soin[] = [
    {
      id: "hypnose",
      title: "Hypnose – Plongez au cœur de votre inconscient",
      description: `
L’hypnose thérapeutique est une méthode douce qui permet d’accéder à l’inconscient, ce réservoir de ressources souvent inexploitées.
En état modifié de conscience, vous explorez vos blocages et automatismes, ouvrant la voie à des transformations durables, à votre rythme.
Elle est particulièrement efficace pour gérer le stress, l’anxiété, les phobies, les troubles du sommeil et les dépendances.
      `,
      image: "/assets/images/hypnose.webp",
    },
    {
      id: "pnl",
      title: "PNL – Reprogrammez vos schémas mentaux",
      description: `
La Programmation Neuro-Linguistique (PNL) aide à comprendre et transformer vos réactions, pensées et comportements limitants.
Grâce à des techniques concrètes, elle vous permet d'améliorer vos relations, de retrouver confiance et de mieux orienter vos décisions.
      `,
      image: "/assets/images/pnl.png",
      objectPosition: "center 40%",
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
    },
    {
      id: "reiki",
      title: "Reiki – L’harmonie par l’énergie",
      description: `
Le Reiki est une pratique énergétique d’origine japonaise visant à rétablir l’équilibre du corps et de l’esprit.
Par imposition des mains, l’énergie universelle circule à nouveau librement, apaisant tensions, stress et fatigue.
Une séance invite à une profonde détente et un recentrage intérieur.
      `,
      image: "/assets/images/reiki.webp",
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
        <p className="text-gray-600 mt-4 leading-relaxed text-sm">
          Les approches proposées s’inscrivent dans une démarche complémentaire au soin médical classique, sans jamais s’y substituer.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
        {soins.map((soin, i) => (
          <div
            key={soin.id}
            onClick={() => setActiveSoin(i)}
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
          </div>
        ))}
      </div>

      {activeSoin !== null && (
        <Modal soin={soins[activeSoin]} onClose={() => setActiveSoin(null)} />
      )}

      <section className="text-center my-12">
        <blockquote className="text-xl md:text-2xl font-semibold text-[var(--color-ocean-blue)] mb-2">
          “L’inconscient parle. La PNL traduit. L’hypnose transforme.”
        </blockquote>
      </section>
    </section>
  );
}
