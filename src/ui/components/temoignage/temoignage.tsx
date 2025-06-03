/* Public Library */
import React, { useEffect, useState } from "react";
import { Masonry } from "masonic";

/* Component */
import { Typography } from "@/ui/design-system/typography/typography";

const testimonials = [
  {
    name: "Anaïs",
    text: "Nicole est très à l'écoute des gens et donne énormément de son temps et d'énergie. Elle n'est pas dans le jugement et pour moi c'est une personne magnifique qui aime les gens... Dès mon premier rdv, elle m'a beaucoup aidé et apaisé.",
  },
  {
    name: "Cécile B.",
    text: "Nicole est une personne très à l’écoute et empathique. Elle m’a accompagné dans un moment difficile et m’a permis de reprendre le contrôle sur ma vie avec beaucoup de bienveillance, c’est une magicienne !! Nicole est très professionnelle, elle prend le temps et saura mettre à profit son large champs de compétences pour vous aider dans votre démarche. Son aide m’est très précieuse et je la remercie. Je la recommande vivement !!",
  },
  {
    name: "Hélène O.",
    text: "Nicole Pagès est plus qu'une thérapeute ❤️ Son écoute, sa bienveillance, sa douceur, sa joie et tant d'autres qualités peuvent la qualifier... Suite à un burn-out elle m'a permis de surmonter mes angoisses et de retrouver une qualité de vie incroyable. Vous pouvez y aller les yeux fermés, elle fera un travail super si vous êtes partant pour travailler vous aussi de votre côté 🤟 Je vous la recommande les yeux fermés 😜",
  },
  {
    name: "Laurianne D.",
    text: "Avant de rencontrer Nicole j’étais submergée par des émotions que j’arrivais plus à contenir, j’avais perdu confiance en moi et j’avais donc déjà consulté plusieurs thérapeutes au fil des années sans grand résultat... Nicole est une personne au grand cœur dont la bienveillance se ressent immédiatement. Grâce à elle j’ai appris à mieux me connaître et surtout à m’accepter afin de pouvoir réavancer en me fixant de nouveaux objectifs. Nicole c'est une véritable bouffée d'oxygène dans des moments de vie où l'on peine à reprendre son souffle. Ma fille l’adore aussi. Merci Nicole.",
  },
  {
    name: "Agnieszka L.",
    text: "Si vous êtes au moment de votre vie où vous chercher à reprendre votre destin en main, n'hésitez pas ! Foncez ! Nicole, sera la pour vous guider avec une perfection inégale, avec son énergie positive et son sourire remplie de douceur et d'amour pour son prochain. Pour ma famille et moi, Nicole est un cadeau de ciel qui a apparu au bon moment de ma vie. MERCI !",
  },
  {
    name: "Elodie D.",
    text: "Si vous avez besoin d'aide, alors foncez. Nicole est une incroyable personne, elle apporte un soutien inconditionnel et quand on sort de ses séances, on a appris tellement des choses sur nous même. Merci encore pour votre aide.",
  },
];

export const Temoignages = () => {
  const [mounted, setMounted] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true); // ✅ Le composant est maintenant monté côté client
  }, []);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!mounted) return null; // ⛔️ Évite le rendu côté serveur

  return (
    <section className="bg-[#284a74] text-white py-12 px-6">
      <Typography
        variant="m-40"
        theme="white"
        weight="semibold"
        component="h2"
        className="text-center mb-10"
      >
        Témoignages
      </Typography>

      <div className="max-w-6xl mx-auto">
        <Masonry
          items={testimonials}
          columnGutter={16}
          columnWidth={320}
          overscanBy={2}
          render={({ index, data }) => {
            const isOpen = index === openIndex;
            const preview =
              data.text.length > 180
                ? data.text.slice(0, 180).trim() + "…"
                : data.text;

            return (
              <div
                key={index}
                onClick={() => toggle(index)}
                className="cursor-pointer bg-white/10 rounded-2xl p-6 shadow-md backdrop-blur-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative pl-6">
                  {/* Guillemet décoratif */}
                  <div className="absolute left-0 top-0 text-5xl text-white/30 leading-none font-serif select-none">
                    “
                  </div>

                  <Typography
                    variant="m-18-italic"
                    theme="white"
                    component="blockquote"
                    className={`leading-relaxed transition-all duration-300 ${
                      !isOpen ? "line-clamp-5" : ""
                    }`}
                  >
                    {isOpen ? data.text : preview}
                  </Typography>
                </div>

                <div className="mt-4 text-right">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggle(index);
                    }}
                    className="text-sm underline text-white/70 hover:text-white"
                  >
                    {isOpen ? "Réduire" : "Lire plus"}
                  </button>
                </div>

                {/* Signature élégante */}
                <div className="mt-6 flex justify-end">
                  <div className="border-l-2 border-white/30 pl-4 text-sm italic text-white/80">
                    <Typography
                      variant="m-18"
                      component="p"
                      theme="white"
                      weight="medium"
                    >
                      — {data.name}
                    </Typography>
                  </div>
                </div>
              </div>
            );
          }}
        />
      </div>
    </section>
  );
};
