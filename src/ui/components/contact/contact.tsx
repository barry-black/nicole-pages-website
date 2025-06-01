"use client";

/* Public Library */
import { useRef } from "react";
import { PhoneIcon } from "@heroicons/react/24/outline";

/* Component */
import { Typography } from "@/ui/design-system/typography/typography";
import { Button } from "@/ui/design-system/button/button";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const prenom = formData.get("prenom") as string;
    const nom = formData.get("nom") as string;
    const email = formData.get("email") as string;
    const telephone = formData.get("telephone") as string;
    const message = formData.get("message") as string;

    // Mail
    const mailto = `mailto:nicolepages.therapie@gmail.com?subject=Prise de rendez-vous&body=${encodeURIComponent(
      `Bonjour Nicole,\n\nJe m'appelle ${prenom} ${nom}.\n\nEmail : ${email}\nTéléphone : ${telephone}\n\nMessage :\n${message}`
    )}`;

    // SMS
    const sms = `sms:${telephone}?body=${encodeURIComponent(
      `Bonjour Nicole, j’ai envoyé un mail avec mes coordonnées et mon message :\n\n"${message}"`
    )}`;

    window.open(mailto);
    setTimeout(() => window.open(sms), 400);
  };

  return (
    <section id="contact" className="bg-white py-12 px-6">
      <div className="max-w-4xl mx-auto text-center px-4">
        <Typography
          variant="m-40"
          theme="ocean-blue"
          weight="semibold"
          component="h2"
          className="mb-4 mx-auto text-center leading-tight break-words max-w-[280px] sm:max-w-none"
        >
          Prendre rendez-vous
        </Typography>

        <p className="text-lg text-gray-700 mb-6">
          Pour toute prise de rendez-vous, un échange téléphonique est
          nécessaire afin de valider ensemble le créneau et vos besoins.
        </p>

        <div className="flex flex-col items-center mb-8">
          <Button
            variant="callPhone"
            icon={<PhoneIcon className="w-5 h-5" />}
            onClick={() => window.open("tel:0613569921")}
          >
            Appeler Nicole
          </Button>
          <p className="mt-2 text-sm text-gray-600">
            Appels du lundi au vendredi, de 9h à 18h
          </p>
        </div>

        <div className="text-left max-w-xl mx-auto">
          <p className="mb-2 font-semibold text-gray-800">
            Adresse du cabinet :
          </p>
          <p className="text-gray-700 mb-6">
            Le Kube - Avenue d’Agen
            <br />
            47110 Sainte-Livrade-sur-Lot
          </p>

          <p className="text-sm text-gray-500 italic">
            Vous pouvez également me laisser un message via le formulaire
            ci-dessous. Je vous rappellerai dans les plus brefs délais.
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSend}
          className="grid gap-4 md:grid-cols-2 mt-6 max-w-xl mx-auto"
        >
          <input
            name="prenom"
            type="text"
            placeholder="Prénom"
            className="border p-3 rounded"
            required
          />
          <input
            name="nom"
            type="text"
            placeholder="Nom"
            className="border p-3 rounded"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Adresse Mail"
            className="border p-3 rounded md:col-span-2"
            required
          />
          <input
            name="telephone"
            type="text"
            placeholder="Téléphone"
            className="border p-3 rounded md:col-span-2"
            required
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Votre Message..."
            className="border p-3 rounded md:col-span-2"
            required
          />
          <div className="md:col-span-2 flex justify-center">
            <Button type="submit" variant="sendMessage">
              Envoyer
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
