import "../globals.css";
import SolutionsContent from "./components/Solutions";

export const metadata = {
  title: "Solutions digitales sur mesure - Développement web et IT | VKU CODE",
  description:
    "Découvrez les solutions digitales sur mesure de VKU CODE : développement de sites web, applications mobiles et intégration IT pour répondre aux besoins des startups et entreprises. Faites le choix de la performance et de l'innovation.",
  keywords:
    "Solutions digitales, Développement web, Applications sur mesure, Intégration IT, Optimisation digitale, Transformation digitale, Plateformes web modernes",
  openGraph: {
    title:
      "Solutions digitales sur mesure - Développement web et IT | VKU CODE",
    description:
      "Découvrez les solutions digitales sur mesure de VKU CODE : développement de sites web, applications mobiles et intégration IT pour répondre aux besoins des startups et entreprises. Faites le choix de la performance et de l'innovation.",
    type: "website",
    url: "https://vkucode.com/solutions", // URL de la page
    images: [
      {
        url: "https://vkucode.com/images/solutions-banner.jpg", // Remplacez par l'URL de votre image
        width: 1200,
        height: 630,
        alt: "Solutions digitales adaptées aux entreprises par VKU CODE",
      },
    ],
  },
};

export default function Solutions() {
  return (
    <>
      <SolutionsContent />
    </>
  );
}
