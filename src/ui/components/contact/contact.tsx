"use client";

import { Typography } from "@/ui/design-system/typography/typography";

export function Contact() {
  return (
    <section id="contact" className="bg-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <Typography
          variant="m-40"
          theme="ocean-blue"
          weight="semibold"
          component="h2"
          className="mb-4"
        >
          Contact
        </Typography>

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
  );
}
