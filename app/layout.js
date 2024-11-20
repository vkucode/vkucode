import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAdsense from "./components/GoogleAdSense";
import GoogleAnalytics from "./components/GoogleAnalytics";
import LinkedInTag from "./components/LinkedIn";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "VKU CODE - Expert en Création de Sites Web sur Mesure & Cybersécurité Avancée",
  description:
    "Découvrez les solutions digitales sur mesure de VKU CODE : développement de sites web, applications mobiles et intégration IT pour répondre aux besoins des startups et entreprises. Faites le choix de la performance et de l'innovation.",
  keywords:
    "création de sites web, conception web personnalisée, cybersécurité avancée, solutions IT, développement web, sécurité informatique, VKU CODE, sites web sécurisés, services IT, design web sur mesure",
  openGraph: {
    title:
      "VKU CODE - Expert en Création de Sites Web sur Mesure & Cybersécurité Avancée",
    description:
      "Découvrez les solutions digitales sur mesure de VKU CODE : développement de sites web, applications mobiles et intégration IT pour répondre aux besoins des startups et entreprises. Faites le choix de la performance et de l'innovation.",
    type: "website",
    url: "https://vkucode.com/", // URL de la page
    images: [
      {
        url: "https://vkucode.com/images/original.jpg", // Remplacez par l'URL de votre image
        width: 1200,
        height: 630,
        alt: "Solutions digitales adaptées aux entreprises par VKU CODE",
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
      <GoogleAdsense adClient="ca-pub-7749798055627661" />
      <GoogleAnalytics trackingId="G-7YJQ16HXTK" />
      <LinkedInTag />

      <body className={inter.className}>{children}</body>
    </html>
  );
}
