import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Galerie de Réalisations - VKU CODE | Projets Web et IT",
  description:
    "Explorez les réalisations de VKU CODE : sites web modernes, applications performantes et solutions IT sur mesure. Découvrez nos projets et notre expertise en développement digital.",
  keywords:
    "galerie de réalisations, projets VKU CODE, création de sites web, développement d'applications, solutions IT, transformation digitale, agence digitale, exemples de projets, design web sur mesure, innovation technologique",
  openGraph: {
    title: "Galerie de Réalisations - VKU CODE | Projets Web et IT",
    description:
      "Parcourez notre galerie et découvrez les projets réalisés par VKU CODE : sites internet, applications et solutions digitales sur mesure pour startups et entreprises.",
    type: "website",
    url: "https://vkucode.com/galerie", // URL exactă a paginii Galerie
    images: [
      {
        url: "https://vkucode.com/images/galerie.jpg", // URL al unei imagini reprezentative
        width: 1200,
        height: 630,
        alt: "Découvrez les réalisations de VKU CODE en matière de sites web et solutions IT",
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
