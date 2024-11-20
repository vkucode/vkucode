import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VKU CODE - Services Digitaux : Création de Sites Web & Solutions IT",
  description:
    "Explorez les services de VKU CODE : création de sites web modernes, développement d'applications mobiles, cybersécurité avancée, et solutions IT sur mesure pour répondre aux besoins des entreprises.",
  keywords:
    "services digitaux, création de sites web, développement d'applications mobiles, solutions IT, cybersécurité, maintenance web, transformation digitale, VKU CODE, agence digitale, sites web sécurisés",
  openGraph: {
    title:
      "VKU CODE - Services Digitaux : Création de Sites Web & Solutions IT",
    description:
      "VKU CODE propose des services digitaux sur mesure : conception de sites internet, développement d'applications mobiles, cybersécurité avancée et solutions IT pour startups et entreprises.",
    type: "website",
    url: "https://vkucode.com/services", // URL de la page Services
    images: [
      {
        url: "https://vkucode.com/images/original.jpg", // Lien vers une image pertinente
        width: 1200,
        height: 630,
        alt: "Services digitaux sur mesure proposés par VKU CODE",
      },
    ],
  },
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
