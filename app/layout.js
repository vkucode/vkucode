import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "VKU CODE - Expert en Création de Sites Web sur Mesure & Cybersécurité Avancée",
  description:
    "VKU CODE, votre partenaire IT pour la création de sites web sur mesure, performants et sécurisés. Spécialistes en conception web personnalisée et en cybersécurité avancée, nous offrons des solutions numériques innovantes pour protéger et développer votre entreprise en ligne.",
  keywords:
    "création de sites web, conception web personnalisée, cybersécurité avancée, solutions IT, développement web, sécurité informatique, VKU CODE, sites web sécurisés, services IT, design web sur mesure",
  icons: {
    icon: "/img/favicon.ico",
    shortcut: "/img/favicon.ico",
    apple: "/img/favicon.ico",
  },
};

export const viewport = {
  themeColor: "#0a0a0f",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
