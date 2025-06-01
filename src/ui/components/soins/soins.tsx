"use client";

/* Public Library */
import { useState } from "react";
import Image from "next/image";

/* Component */
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
      title: "Hypnose",
      description: `
Elle permet un accès direct à l’inconscient, ce réservoir de mémoires, d’émotions et de solutions. En état modifié de conscience, vous explorez vos blocages, vos automatismes, et ouvrez la voie à des transformations durables — en douceur, à votre rythme.
      `,
      image: "/assets/images/hypnose.webp",
    },
    {
      id: "pnl",
      title: "PNL",
      description: `
Elle agit comme une cartographie de votre fonctionnement mental, émotionnel et comportemental. Grâce à des techniques précises, vous reprenez le pouvoir sur vos pensées, vos réactions et vos choix. C’est un outil de changement rapide, concret, orienté solutions.
      `,
      image: "/assets/images/pnl.png",
      objectPosition: "center 40%",
    },
    {
      id: "coaching",
      title: "Coaching",
      description: `
Le coaching apporte une dynamique d’action. Il vous aide à clarifier vos objectifs, à identifier vos freins et à poser des pas concrets vers le changement. Il s’appuie sur vos forces et vos valeurs pour faire émerger une direction alignée avec qui vous êtes vraiment.
      `,
      image: "/assets/images/roro.png",
      objectPosition: "center 40%",
    },
    {
      id: "dream",
      title: "Dream Machine",
      description: `
Dream Machine
      `,
      image: "/assets/images/roro.png",
      objectPosition: "center 40%",
    },
    {
      id: "reiki",
      title: "Reiki",
      description: `
Le Reiki est un art énergétique d'origine japonaise développé par Mikao Usui à la fin du 19e siècle. "Rei" signifie "l'universel", le "tout" : la matière, l'âme et l'esprit. Et "ki" (ou "Qi") renvoie à l'énergie vitale qui circule en chaque individu, comme dans la médecine chinoise. Le Reiki est la méthode de mise ou remise en contact de l'énergie universelle avec la force vitale propre à chacun de nous.

Comme toute pratique holistique, le Reiki permettrait :
• d'apaiser le corps et l'esprit  
• de procurer un sentiment de bien-être  
• d'harmoniser la circulation de l'énergie  
• de favoriser un état de relaxation  
• de soutenir le potentiel de guérison
      `,
      image: "/assets/images/reiki.webp",
    },
  ];

  return (
    <section id="soins" className="bg-[var(--color-pale-blue)] py-6 px-6">
      <div className="text-center mb-8 max-w-xl mx-auto">
        <Typography
          variant="m-40"
          weight="semibold"
          theme="ocean-blue"
          component="h2"
        >
          Soins
        </Typography>
        <p className="text-gray-600 mt-4 leading-relaxed text-sm">
          Ces thérapies ne se substituent en aucun cas à un traitement médical
          et ne dispensent en aucun cas de consulter et/ou de suivre les
          recommandations allopathiques
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
                {soin.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {activeSoin !== null && (
        <Modal soin={soins[activeSoin]} onClose={() => setActiveSoin(null)} />
      )}

      <section className="text-center my-8">
        <blockquote className="text-2xl font-semibold text-[var(--color-ocean-blue)] mb-2">
          “L’inconscient parle. La PNL traduit. L’hypnose transforme.”
        </blockquote>
      </section>
    </section>
  );
}
