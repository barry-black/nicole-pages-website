import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Empêche l'utilisation de <img>
      "@next/next/no-img-element": "error",
      // Empêche l'utilisation de <a href="/..."> pour la navigation interne
      "@next/next/no-html-link-for-pages": "error",
      // Évite les apostrophes non échappées dans le JSX
      "react/no-unescaped-entities": "error",
      // Supprime les imports inutilisés
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    },
  },
];

export default eslintConfig;
