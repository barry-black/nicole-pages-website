"use client";

/* Public Library */
import { useRef, useState } from "react";
import { PhoneIcon } from "@heroicons/react/24/outline";

/* Component */
import { Typography } from "@/ui/design-system/typography/typography";
import { Button } from "@/ui/design-system/button/button";
import { ModalConfirm } from "@/ui/components/modal/modalConfirm";
import { ModalSuccess } from "@/ui/components/modal/modalSuccess";
import { ButterflyLoader } from "@/ui/components/butterflyLoader/butterflyLoader";

/* Hook */
import { usePhoneInput } from "@/hooks/usePhoneInput";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const phone = usePhoneInput();

  const [showConfirm, setShowConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData | null>(null);
  const [isSending, setIsSending] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const data = new FormData(form);
    const prenom = data.get("prenom")?.toString().trim();
    const nom = data.get("nom")?.toString().trim();
    const message = data.get("message")?.toString().trim();
    const cleanedPhone = phone.value.replace(/\D/g, "");

    if (!prenom || !nom || !message || !cleanedPhone) {
      alert("Merci de renseigner les champs obligatoires (email non requis).");
      return;
    }

    if (!/^0\d{9}$/.test(cleanedPhone)) {
      alert(
        "Merci d’indiquer un numéro de téléphone valide (10 chiffres commençant par 0)."
      );
      return;
    }

    data.set("telephone", cleanedPhone);
    setFormData(data);
    setShowConfirm(true);
  };

  const confirmSend = async () => {
    if (!formData) return;

    const prenom = formData.get("prenom")?.toString();
    const nom = formData.get("nom")?.toString();
    const email = formData.get("email")?.toString();
    const telephone = formData.get("telephone")?.toString();
    const message = formData.get("message")?.toString();

    setIsSending(true);

    try {
      const response = await fetch(
        "https://europe-west1-nicolepages-website.cloudfunctions.net/sendMail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Secret-Key": "FzR90j$z@mu9h4pJtZ!s",
          },
          body: JSON.stringify({ prenom, nom, email, telephone, message }),
        }
      );

      if (!response.ok) {
        const errText = await response.text();
        console.error("Réponse serveur :", errText);
        throw new Error(`Erreur serveur (${response.status})`);
      }

      setShowConfirm(false);
      setShowSuccess(true);

      formRef.current?.reset(); // 🧽 Réinitialise les champs
      phone.setValue(""); // 🧽 Réinitialise le champ téléphone
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'e-mail :", error);
      alert("Une erreur est survenue. Merci de réessayer plus tard.");
    } finally {
      setIsSending(false);
    }
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
          Un appel est nécessaire pour convenir ensemble d’un rendez-vous adapté
          à vos besoins.
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

        <p className="text-sm text-gray-500 italic">
          Vous pouvez aussi me laisser un message ici, je vous contacterai dès
          que possible.
        </p>

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
            placeholder="Adresse mail (facultatif)"
            className="border p-3 rounded md:col-span-2"
          />
          <input {...phone.inputProps} />
          <textarea
            name="message"
            rows={4}
            placeholder="Votre message..."
            className="border p-3 rounded md:col-span-2"
            required
          />
          <div className="md:col-span-2 flex justify-center">
            <Button type="submit" variant="sendMessage">
              Envoyer mon message
            </Button>
          </div>
        </form>

        <div className="mt-10 text-left max-w-xl mx-auto">
          <p className="mb-2 font-semibold text-gray-800">
            Adresse du cabinet :
          </p>
          <p className="text-gray-700">
            Le Kube - Avenue d’Agen
            <br />
            47110 Sainte-Livrade-sur-Lot
          </p>

          <p className="mt-4 font-semibold text-gray-800">Téléphone :</p>
          <p className="text-gray-700 mb-4">06 13 56 99 21</p>
        </div>
      </div>

      {showConfirm && (
        <ModalConfirm
          onCancel={() => setShowConfirm(false)}
          onConfirm={confirmSend}
          title="Souhaitez-vous envoyer ce message ?"
          message="Nicole vous rappellera très prochainement pour convenir avec vous d’un rendez-vous adapté à vos besoins."
        />
      )}

      {showSuccess && (
        <ModalSuccess
          onClose={() => setShowSuccess(false)}
          title="Message envoyé !"
          message="Nicole vous contactera très prochainement pour convenir d’un rendez-vous adapté à vos besoins."
        />
      )}

      {isSending && <ButterflyLoader />}
    </section>
  );
}
