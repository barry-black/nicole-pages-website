"use client";

/* Public Library */
import { useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

/* Component */
import { Seo } from "@/ui/components/seo/seo";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Accueil } from "@/ui/components/accueil/accueil";
import { Button } from "@/ui/design-system/button/button";
import { Soins } from "@/ui/components/soins/soins";
import { Footer } from "@/ui/components/footer/footer";
import { Typography } from "@/ui/design-system/typography/typography";

/* API */
import { scrollToSection } from "@/api/scrollToSection";

export default function MainPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const searchParams = useSearchParams();
  const scrollToId = searchParams.get("scrollTo");

  useEffect(() => {
    if (scrollToId) {
      scrollToSection(scrollToId);
      // Nettoyage de l'URL sans recharger la page
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, [scrollToId]);

  return (
    <>
      <Seo
        title="Nicole Pagès Thérapie"
        description="Thérapeute spécialisée en Hypnose, Reiki et PNL à Sainte-Livrade-sur-Lot."
      />

      <main className="text-gray-800">
        {/* Sticky Navbar */}
        <Navigation menuOpen={menuOpen} toggleMenu={toggleMenu} />

        {/* Accueil */}
        <Accueil />

        <section className="text-center py-8 bg-white">
          <Button
            variant="callAction"
            onClick={() => scrollToSection("contact")}
          >
            Prendre rendez-vous
          </Button>
        </section>

        {/* Qui suis-je */}
        <section
          id="who-i-am"
          className="bg-[var(--color-pale-blue)] py-12 px-6"
        >
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-[var(--color-ocean-blue)] text-2xl font-bold mb-4">
                Qui suis-je ?
              </h2>
              <p className="mb-4">
                Bonjour, je suis Nicole. <br />
                <br />
                Thérapeute diplômée en Hypnothérapie, PNL Coaching et Reiki, je
                suis là pour vous aider à surmonter les épreuves de la vie et à
                mieux vous comprendre. <br />
                <br />
                Chaque personne porte en elle les ressources nécessaires à son
                propre changement. Mon rôle est de vous accompagner à les
                retrouver.
                <br />
                <br />À travers une approche bienveillante, je vous accompagne
                dans un espace d’écoute active, où chaque mot, chaque émotion,
                chaque silence a sa place. <br />
                <br />
                Plus qu’un métier, écouter, aider et conseiller a toujours été
                pour moi une vocation.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/assets/images/photo_nicole.jpg"
                alt="Portrait Nicole"
                width={192}
                height={288}
                className="rounded-lg shadow-lg w-48 h-auto"
              />
            </div>
          </div>
          <section
            className="text-center mx-3 py-8 text-[30px] text-[var(--color-ocean-blue)]"
            style={{ fontFamily: "var(--font-secondary)" }}
          >
            <p>
              Et si vous décidiez d’être heureux, parce que c’est bon pour
              vous...
            </p>
          </section>
        </section>

        {/* Citation */}

        <section className="text-center py-8 bg-white">
          <blockquote className="text-2xl font-semibold text-[var(--color-ocean-blue)] mb-2">
            “La paix vient de l’intérieur. Ne la cherchez pas à l’extérieur.”
          </blockquote>
          <Typography variant="ds-40" theme="ocean-blue" component="p">
            Bouddah
          </Typography>
        </section>

        {/* Soins */}
        <Soins />

        {/* Témoignages */}
        <section className="bg-[#284a74] text-white py-12 px-6">
          <h2 className="text-2xl font-bold text-center mb-10">Témoignages</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-center">
            {[
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
                text: "Nicole Pagès est plus qu'une thérapeute ❤️ Son écoute,sa bienveillance,sa douceur,sa joie et tant d'autres qualités peuvent la qualifier... Suite à un burn-out elle m'a permis de surmonter mes angoisses et de retrouver une qualité de vie incroyable. Vous pouvez y aller les yeux fermés, elle fera un travail super si vous êtes partant pour travailler vous aussi de votre côté 🤟 Je vous la recommande les yeux fermés 😜",
              },
              {
                name: "Laurianne D.",
                text: "Avant de rencontrer Nicole j’étais submergée par des émotions que j’arrivais plus à contenir, j’avais perdu confiance en moi et j’avais donc déjà consulté plusieurs thérapeutes au fil des années sans grand résultat... Nicole est une personne au grand coeur dont la bienveillance se resent immédiatement, elle sait vous rassurer, vous mettre à l’aise et vous écoute attentivement pour mieux adapter ses séances selon vos besoins. Grâce à elle j’ai appris à mieux me connaître et surtout à m’accepter afin de pouvoir réavancer en me fixant de nouveaux objectifs de vie. Nicole c'est une véritable bouffée d'oxygène dans des moment de vie où l'on peine à reprendre son souffle. Vous l’aurez donc compris, Nicole est au top et j’ajouterais juste qu’il en va de même avec les plus jeunes, ma fille l’adore. Merci Nicole",
              },
            ].map((t, i) => (
              <div key={i}>
                <p className="italic mb-4">“{t.text}”</p>
                <p className="font-semibold">{t.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        /* Préférence téléphone (prise de RDV à valider par téléphone) */
        <section id="contact" className="bg-white py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-teal-600 mb-4">Contact</h2>
            <p className="mb-2">
              Le Kube - Avenue d’Agen
              <br />
              47110 Sainte Livrade sur Lot
            </p>
            <p className="font-semibold mb-6">06.13.56.99.21</p>

            <form className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="Prénom"
                className="border p-3 rounded"
              />
              <input
                type="text"
                placeholder="Nom"
                className="border p-3 rounded"
              />
              <input
                type="email"
                placeholder="Adresse Mail"
                className="border p-3 rounded md:col-span-2"
              />
              <input
                type="text"
                placeholder="Téléphone"
                className="border p-3 rounded md:col-span-2"
              />
              <textarea
                rows={4}
                placeholder="Votre Message..."
                className="border p-3 rounded md:col-span-2"
              />
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition md:col-span-2"
              >
                Envoyer
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
