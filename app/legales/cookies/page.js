import styles from "../legales.module.scss";

export const metadata = {
  title: "Politique de Cookies - VKU CODE",
  description:
    "Découvrez comment VKU CODE utilise les cookies pour améliorer votre expérience utilisateur et optimiser les performances de notre site. Consultez notre politique complète.",
  keywords:
    "politique de cookies, utilisation des cookies, optimisation de site, VKU CODE, cookies utilisateur, expérience utilisateur, gestion des cookies",
  openGraph: {
    title: "Politique de Cookies - VKU CODE",
    description:
      "VKU CODE détaille sa politique d'utilisation des cookies pour garantir la transparence et optimiser l'expérience des visiteurs. Apprenez-en plus sur la gestion des cookies.",
    type: "website",
    url: "https://vkucode.com/politique-de-cookies", // URL de la page Politique de cookies
    images: [
      {
        url: "https://vkucode.com/images/cookies-banner.jpg", // Lien vers une image pertinente
        width: 1200,
        height: 630,
        alt: "Politique de Cookies de VKU CODE",
      },
    ],
  },
  icons: {
    icon: "/img/favicon.ico",
    shortcut: "/img/favicon.ico",
    apple: "/img/favicon.ico",
  },
};

export default function Cookies() {
  return (
    <>
      <section className={styles.sectionLegales}>
        <div className="w-full max-w-7xl">
          <h1>Politique de cookies</h1>
          <div className={styles.separateur}></div>
          <div>
            <p>
              Le site peut vous demander d'accepter les cookies pour des raisons
              liées aux statistiques et à l'affichage. Un cookie est un fichier
              texte déposé sur votre disque dur par le serveur du site que vous
              visitez. Il contient diverses informations qui sont enregistrées
              sur votre appareil et auxquelles le serveur peut accéder pour lire
              et stocker des données. Certaines fonctionnalités de ce site ne
              peuvent pas fonctionner correctement sans l'acceptation des
              cookies.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
