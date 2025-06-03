"use client";

/* Public Library */
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

/* Component */
import { Seo } from "@/ui/components/seo/seo";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Accueil } from "@/ui/components/accueil/accueil";
import { Button } from "@/ui/design-system/button/button";
import { Soins } from "@/ui/components/soins/soins";
import { Temoignages } from "@/ui/components/temoignage/temoignage";
import { Contact } from "@/ui/components/contact/contact";
import { Footer } from "@/ui/components/footer/footer";
import { Typography } from "@/ui/design-system/typography/typography";

/* API */
import { scrollToSection } from "@/api/scrollToSection";

export default function MainPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const searchParams = useSearchParams();
  const scrollToId = searchParams.get("scrollTo");

  const navRef = useRef<HTMLElement>(null);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    if (scrollToId) {
      scrollToSection(scrollToId);
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, [scrollToId]);

  useEffect(() => {
    const updateNavHeight = () => {
      if (navRef.current) {
        setNavHeight(navRef.current.offsetHeight);
      }
    };
    updateNavHeight();
    window.addEventListener("resize", updateNavHeight);
    return () => window.removeEventListener("resize", updateNavHeight);
  }, []);

  return (
    <>
      <Seo
        title="Nicole Pagès Thérapie"
        description="Thérapeute spécialisée en Hypnose, Reiki et PNL à Sainte-Livrade-sur-Lot."
      />

      <main className="text-gray-800">
        {/* Sticky Navbar */}
        <Navigation ref={navRef} menuOpen={menuOpen} toggleMenu={toggleMenu} />

        {/* Accueil */}
        <Accueil navHeight={navHeight} />
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
        <Temoignages />

        {/* Contact */}
        <Contact />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
