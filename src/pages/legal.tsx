"use client";

/* Public Library */
import { useState } from "react";

/* Components */
import { Typography } from "@/ui/design-system/typography/typography";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Footer } from "@/ui/components/footer/footer";

export default function LegalPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <main className="bg-white text-black">
      {/* Sticky Navbar */}
      <Navigation menuOpen={menuOpen} toggleMenu={toggleMenu} />

      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        <div>
          <Typography
            variant="m-32"
            component="h2"
            weight="semibold"
            className="mb-6"
          >
            Mentions Légales
          </Typography>

          <p>
            Siège social : Le Cube – Route d&apos;Agen – 47110 Sainte-Livrade-sur-Lot
          </p>
          <p className="mt-4">Contact téléphonique : 06 13 56 99 21</p>
          <p>
            Contact mail :{" "}
            <a
              href="mailto:nicolepages.therapie@gmail.com"
              className="underline"
            >
              nicolepages.therapie@gmail.com
            </a>
          </p>

          <p className="mt-4">
            Nicole Pagès est inscrite sous le numéro SIRET 75044186700017
            <br />
            La TVA est non applicable conformément à l&apos;article 293B du CGI
          </p>

          <p className="mt-4">Directrice de la publication : Nicole PAGÈS</p>
        </div>

        <div>
          <Typography
            variant="m-32"
            component="h2"
            weight="semibold"
            className="mb-6"
          >
            Hébergement
          </Typography>

          <p>Le présent site est hébergé par :</p>
          <p className="mt-2 font-medium">Google LLC (Firebase Hosting)</p>
          <p className="mt-2">
            1600 Amphitheatre Parkway
            <br />
            Mountain View, CA 94043 – États-Unis
          </p>
          <p className="mt-2">
            Site :{" "}
            <a
              href="https://firebase.google.com"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://firebase.google.com
            </a>
          </p>

          <p className="mt-4 text-sm text-gray-600 italic">
            Firebase est un service d’hébergement de Google permettant la
            diffusion rapide et sécurisée de contenus web. L’infrastructure est
            conforme aux standards de sécurité actuels (certificats SSL,
            protection DDoS, etc.).
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <Typography
          variant="m-32"
          component="h2"
          weight="semibold"
          className="mb-6"
        >
          Politique de confidentialité
        </Typography>

        <p className="mb-4">
          Le site ne collecte aucune donnée personnelle sans votre consentement.
          Les informations transmises via le formulaire de contact sont
          utilisées uniquement pour répondre à vos demandes. Elles ne sont ni
          revendues, ni utilisées à d’autres fins commerciales.
        </p>

        <p className="mb-4">
          Conformément à la loi Informatique et Libertés et au RGPD, vous
          disposez d’un droit d’accès, de rectification et de suppression des
          données vous concernant. Pour exercer ces droits, vous pouvez envoyer
          un e-mail à :
          <a
            href="mailto:nicolepages.therapie@gmail.com"
            className="underline ml-1"
          >
            nicolepages.therapie@gmail.com
          </a>
        </p>

        <p className="mb-4">
          Ce site peut utiliser des cookies strictement nécessaires à son bon
          fonctionnement (analyse de trafic anonyme, sécurité, etc.). Vous
          pouvez désactiver les cookies dans les paramètres de votre navigateur.
        </p>
      </section>

      <Footer />
    </main>
  );
}
