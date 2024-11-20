import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Contactez VKU CODE - Création de Sites Web & Solutions IT",
  description:
    "Besoin d'un site web performant ou de solutions IT sur mesure ? Contactez VKU CODE pour discuter de votre projet. Experts en développement web, conception personnalisée et cybersécurité, nous sommes là pour répondre à vos besoins.",
  keywords:
    "contact VKU CODE, création de sites web, solutions IT, développement web, cybersécurité, services numériques, conception personnalisée, agence digitale, assistance IT, expert en solutions digitales",
  openGraph: {
    title: "Contactez VKU CODE - Création de Sites Web & Solutions IT",
    description:
      "Entrez en contact avec VKU CODE pour des solutions digitales sur mesure : création de sites web, développement d'applications et cybersécurité avancée. Nous sommes à votre disposition pour répondre à vos questions.",
    type: "website",
    url: "https://vkucode.com/contact", // URL exactă a paginii de contact
    images: [
      {
        url: "https://vkucode.com/images/contact.jpg", // Înlocuiește cu URL-ul imaginii relevante
        width: 1200,
        height: 630,
        alt: "Contactez VKU CODE pour vos projets web et IT",
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
