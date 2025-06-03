"use client";

import React from "react";
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
];

export const Temoignages = () => (
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

    <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
      {testimonials.map((t, i) => (
        <div key={i} className="px-2">
          <Typography
            variant="m-18-italic"
            theme="white"
            component="blockquote"
            className="mb-4 leading-relaxed"
          >
            “{t.text}”
          </Typography>
          <Typography
            variant="m-18"
            theme="white"
            weight="semibold"
            component="p"
          >
            {t.name}
          </Typography>
        </div>
      ))}
    </div>
  </section>
);
