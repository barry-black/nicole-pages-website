"use client";

/* Public Library */
import { useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

/* Component */
import { Seo } from "@/ui/components/seo/seo";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Accueil } from "@/ui/components/accueil/accueil";
import { Modal } from "@/ui/components/modal/modal";
import { Footer } from "@/ui/components/footer/footer";
import { Button } from "@/ui/design-system/button/button";

/* API */
import { scrollToSection } from "@/api/scrollToSection";

export default function MainPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const [activeSoin, setActiveSoin] = useState<number | null>(null);

  const searchParams = useSearchParams();
  const scrollToId = searchParams.get("scrollTo");

  useEffect(() => {
    if (scrollToId) {
      scrollToSection(scrollToId);
      // Nettoyage de l'URL sans recharger la page
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, [scrollToId]);

  const soins = [
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
        <section id="soins" className="bg-[#d6f1f1] py-12 px-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-teal-700 mb-2">Soins</h2>
            <p className="text-sm text-gray-600 max-w-xl mx-auto">
              Ces thérapies ne se substituent en aucun cas à un traitement
              médical et ne dispensent en aucun cas de consulter et/ou de suivre
              les recommandations allopathiques
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
        </section>

        {/* Modal de description du soin */}
        {activeSoin !== null && (
          <Modal soin={soins[activeSoin]} onClose={() => setActiveSoin(null)} />
        )}

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
