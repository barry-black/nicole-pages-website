"use client";

/* Public Library */
import Image from "next/image";

/* Component */
import { Typography } from "@/ui/design-system/typography/typography";

export const WhoIAm = () => {
  return (
    <section id="who-i-am" className="bg-[var(--color-pale-blue)] py-16 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <Typography
            variant="m-40"
            component="h2"
            theme="ocean-blue"
            weight="semibold"
            className="mb-6"
          >
            Qui suis-je ?
          </Typography>

          <Typography component="p" className="mb-6 leading-relaxed text-[17px]">
            Bonjour, je suis Nicole.
            <br />
            <br />
            Thérapeute diplômée en Hypnothérapie, PNL Coaching et Reiki, je suis là pour vous aider à surmonter les épreuves de la vie et à mieux vous comprendre.
            <br />
            <br />
            Chaque personne porte en elle les ressources nécessaires à son propre changement. Mon rôle est de vous accompagner à les retrouver.
            <br />
            <br />
            À travers une approche bienveillante, je vous accompagne dans un espace d’écoute active, où chaque mot, chaque émotion, chaque silence a sa place.
            <br />
            <br />
            Plus qu’un métier, écouter, aider et conseiller a toujours été pour moi une vocation.
          </Typography>
        </div>

        <div className="flex justify-center">
          <Image
            src="/assets/images/photo_nicole.jpg"
            alt="Portrait Nicole"
            width={192}
            height={288}
            className="rounded-xl shadow-lg w-48 h-auto"
          />
        </div>
      </div>

      <div className="text-center mt-14 px-4">
        <Typography
          variant="m-24"
          theme="ocean-blue"
          component="p"
          weight="medium"
          className="italic"
        >
          Et si vous décidiez d’être heureux, parce que c’est bon pour vous...
        </Typography>
      </div>
    </section>
  );
};
