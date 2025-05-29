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
        <section id="who-i-am" className="bg-[#d6f1f1] py-12 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-teal-600 text-2xl font-bold mb-4">
                Qui suis-je ?
              </h2>
              <p className="mb-4">
                Bonjour, je suis Nicole. <br />
                <br />
                Thérapeute diplômée en Hypnothérapie, Reiki et PNL, je suis là
                pour vous aider à surmonter les épreuves de la vie et à mieux
                vous comprendre. <br />
                <br />
                Le bien-être de mes patients est ma priorité. J’attache une
                grande importance à l’accueil et à la qualité d’écoute. <br />
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
        </section>

        {/* Citation */}
        <section className="text-center mx-3 py-8 bg-white text-lg italic text-[#008398]">
          <p>
            Et si vous décidiez d’être heureux, parce que c’est bon pour vous...
          </p>
        </section>

        <section className="text-center py-8 bg-white">
          <blockquote className="text-2xl font-semibold text-[#008398] mb-2">
            “La paix vient de l’intérieur. Ne la cherchez pas à l’extérieur.”
          </blockquote>
          <p className="text-[#008398] italic">Bouddah</p>
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
                text: "Nicole est très a l'écoute des gens et donne énormément de son temps et d'énergie. Elle n'est pas dans le jugement et pour moi c'est une personne magnifique qui aime les gens... Dès mon premier rdv, elle m'a beaucoup aidé et apaisé.",
              },
              {
                name: "Christelle B.",
                text: "Bienveillance et sérénité sont les mots qui résument le mieux chaque instant passé avec Nicole. Les séances d'hypnose que j'ai réalisé avec elle ont été très efficaces et enrichissantes puisque Nicole complète ces séances avec d'autres techniques de relaxation et des précieux conseils.",
              },
              {
                name: "Hélène M.",
                text: "Bienveillance et sérénité sont les mots qui résument le mieux chaque instant passé avec Nicole. Les séances d'hypnose que j'ai réalisé avec elle ont été très efficaces et enrichissantes puisque Nicole complète ces séances avec d'autres techniques de relaxation et des précieux conseils.",
              },
              {
                name: "Julia",
                text: "Nicole est un véritable 'ange gardien'. On va la voir pour recharger nos batteries, avoir un soutien, des mots gentils; tout ce dont on a besoin pour aller de l'avant. Toujours avec un beau sourire et son regard bienveillant, elle est une thérapeute formidable ♥.",
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
