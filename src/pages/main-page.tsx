"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

/* Component */
import { Navigation } from "@/ui/components/navigation/navigation";
import { Seo } from "@/ui/components/seo/seo";

export default function MainPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const [activeSoins, setActiveSoins] = useState<number | null>(null);

  const soins = [
    {
      title: "Reiki",
      description: "Le Reiki favorise l'harmonisation du corps et de l'esprit.",
      image: "/assets/images/reiki.webp",
    },
    {
      title: "Hypnose",
      description:
        "L’hypnose aide à dépasser les blocages et accéder à l’inconscient.",
      image: "/assets/images/hypnose.webp",
    },
    {
      title: "PNL",
      description:
        "La PNL améliore la communication et le bien-être intérieur.",
      image: "/assets/images/accueil.webp",
      objectPosition: "center 40%",
    },
  ];

  return (
    <>
      <Seo
        title="Nicole Pagès Thérapie"
        description="Thérapeute spécialisée en Hypnose, Reiki et PNL à Sainte-Livrade-sur-Lot."
      />

      <main className="text-gray-800">
        {/* Sticky Navbar */}
        <Navigation menuOpen={menuOpen} toggleMenu={toggleMenu} />

        {/* Hero */}
        <section className="bg-teal-600 text-white">
          <div className="flex flex-col items-center text-center px-4 py-12 md:py-20">
            <img
              src="/assets/images/accueil.webp"
              alt="Canapé"
              className="rounded-lg shadow-lg mb-6 w-full max-w-3xl"
            />
            <h2 className="text-xl md:text-2xl italic mb-2">Thérapeute</h2>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Hypnose Reiki PNL
            </h1>
            <button className="border border-white px-6 py-2 rounded hover:bg-white hover:text-teal-600 transition">
              + d'info
            </button>
          </div>
        </section>

        <section className="text-center py-8 bg-white">
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
            Prendre rendez-vous
          </button>
        </section>

        {/* Qui suis-je */}
        <section id="cabinet" className="bg-[#d6f1f1] py-12 px-6">
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
              <img
                src="/assets/images/photo_nicole.jpg"
                alt="Portrait Nicole"
                className="rounded-lg shadow-lg w-48 h-auto"
              />
            </div>
          </div>
        </section>

        {/* Citation */}
        <section className="text-center py-8 bg-white text-lg italic text-[#008398]">
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
        <section id="soins" className="bg-[#d6f1f1] py-12 px-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-teal-700 mb-2">Soins</h2>
            <p className="text-sm text-gray-600 max-w-xl mx-auto">
              Ces thérapies ne se substituent en aucun cas à un traitement
              médical...
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto mt-8">
            {soins.map((soin, i) => (
              <div
                key={i}
                className="relative group cursor-pointer"
                onClick={() => setActiveSoins(activeSoins === i ? null : i)}
              >
                <img
                  src={soin.image}
                  alt={soin.title}
                  className="rounded-lg shadow w-full h-48 object-cover"
                  style={{ objectPosition: soin.objectPosition || "center" }}
                />
                <div
                  className={`absolute inset-0 bg-black bg-opacity-60 text-white flex items-center justify-center text-center text-sm p-4 transition duration-300 ${
                    activeSoins === i
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  {soin.description}
                </div>
                <div className="text-center mt-2 text-lg font-medium">
                  {soin.title}
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Témoignages */}
        <section className="bg-[#284a74] text-white py-12 px-6">
          <h2 className="text-2xl font-bold text-center mb-10">Témoignages</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-center">
            {[
              {
                name: "Anaïs",
                text: "Nicole est très à l’écoute... mon premier rv, elle m’a apaisé.",
              },
              {
                name: "Christelle B.",
                text: "Bienveillance et sérénité... précieux conseils.",
              },
              {
                name: "Hélène M.",
                text: "Les séances d’hypnose... efficaces et enrichissantes.",
              },
              {
                name: "Julia",
                text: "Nicole est un véritable “ange gardien”... regard bienveillant.",
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
                rows="4"
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
        <footer className="bg-teal-600 text-white text-sm py-6 px-6 text-center">
          <p>©2025 by Nicole Pagès | Tous droits réservés</p>
          <p>Sainte Livrade sur Lot | contact@nicolepages.com</p>
          <p>Mentions légales | Politique de confidentialité</p>
        </footer>

        {/* Reste à compléter : témoignages, contact, footer */}
      </main>
    </>
  );
}
