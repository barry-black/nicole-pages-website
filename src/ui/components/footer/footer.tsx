"use client";

import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-[var(--color-sky-blue)] text-white text-sm py-6 px-6 text-center space-y-1">
      <p>
        ©2025 by Nicole Pagès | Tous droits réservés
      </p>
      <p>
        Sainte Livrade sur Lot | contact@nicolepages.com
      </p>
      <p>
        <Link href="/design-system" className="underline hover:text-gray-200 mx-2">
          Mentions légales
        </Link>{" "}
        | Politique de confidentialité
      </p>
    </footer>
  );
};
