"use client";

/* Public Library */
import { useState } from "react";
import Image from "next/image";

/* Component */
import { Modal } from "@/ui/components/modal/modal";

interface Soin {
  title: string;
  description: string;
  image: string;
  objectPosition?: string;
}

export function Soins() {
  const [activeSoin, setActiveSoin] = useState<number | null>(null);

  const soins: Soin[] = [
    {
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
    <section id="soins" className="bg-[#d6f1f1] py-12 px-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-teal-700 mb-2">Soins</h2>
        <p className="text-sm text-gray-600 max-w-xl mx-auto">
          Ces thérapies ne se substituent en aucun cas à un traitement médical
          et ne dispensent en aucun cas de consulter et/ou de suivre les
          recommandations allopathiques
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto mt-8">
        {soins.map((soin, i) => (
          <div
            key={i}
            className="relative group cursor-pointer"
            onClick={() => setActiveSoin(i)}
          >
            <div className="relative w-full h-48">
              <Image
                src={soin.image}
                alt={soin.title}
                fill
                className="rounded-lg shadow object-cover"
                style={{ objectPosition: soin.objectPosition || "center" }}
              />
            </div>
            <div className="text-center mt-2 text-lg font-medium">
              {soin.title}
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
