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
    {
      id: "hypnose",
      title: "Hypnose",
      description: `
Apparue au XVIIème siècle, l’hypnose ericksonienne est une manière douce et efficace d’accéder à notre inconscient, véritable réservoir de ressources, afin d’évoluer et de se « soigner » de la meilleure façon possible.

Je vous propose un accompagnement adapté et personnalisé basé sur la confiance et le respect de votre identité, de vos valeurs et de votre histoire.

L'hypnose permet :
• la gestion mentale  
• la confiance et l’estime de soi  
• les phobies et troubles de l’anxiété  
• l’aide à la concentration  
• la gestion du sommeil
      `,
      image: "/assets/images/hypnose.webp",
    },
    {
      id: "pnl",
      title: "PNL",
      description: `
La PNL (Programmation Neuro-linguistique) est une discipline qui s’inscrit dans le champ des sciences humaines. Elle est un modèle qui permet à chacun de se réaliser dans sa vie personnelle et professionnelle.

Elle permet de :
• savoir comment gérer votre stress et agir sur la nature de vos émotions pour vivre harmonieusement avec vous-même et votre entourage  
• comprendre et maîtriser l’excellence de ceux qui réussissent dans des domaines aussi variés que le sport, l’entreprise, la pédagogie, la thérapie, le social…  
• acquérir des apprentissages clés pour tous ceux qui sont dans des métiers d’accompagnement ou en relation avec autrui
      `,
      image: "/assets/images/pnl.png",
      objectPosition: "center 40%",
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

      <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
        {soins.map((soin, i) => (
          <div
            key={soin.id}
            onClick={() => setActiveSoin(i)}
            className="cursor-pointer bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg text-center"
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
    </section>
  );
}
