import styles from "../legales.module.scss";

export const metadata = {
  title: "Politique de Confidentialité - VKU CODE",
  description:
    "Découvrez comment VKU CODE protège vos données personnelles et respecte la réglementation RGPD. Consultez notre politique de confidentialité.",
  keywords:
    "politique de confidentialité, protection des données, RGPD, VKU CODE, données personnelles, confidentialité en ligne",
  openGraph: {
    title: "Politique de Confidentialité - VKU CODE",
    description:
      "VKU CODE s'engage à protéger vos données personnelles conformément au RGPD. Découvrez nos pratiques en matière de confidentialité et de sécurité.",
    type: "website",
    url: "https://vkucode.com/politique-de-confidentialite", // URL de la page Politique de confidentialité
    images: [
      {
        url: "https://vkucode.com/images/original.jpg", // Lien vers une image pertinente
        width: 1200,
        height: 630,
        alt: "Politique de Confidentialité de VKU CODE",
      },
    ],
  },
  icons: {
    icon: "/img/favicon.ico",
    shortcut: "/img/favicon.ico",
    apple: "/img/favicon.ico",
  },
};

export default function PolitiqueDeConf() {
  return (
    <>
      <section className={styles.sectionLegales}>
        <div className="w-full max-w-7xl">
          <h1>Politique de confidentialite</h1>
          <div className={styles.separateur}></div>
          <div>
            <p>
              En règle générale, vous n'êtes pas obligé de nous communiquer vos
              données personnelles lorsque vous visitez notre site Internet.
              Cependant, certaines exceptions existent. En effet, pour accéder à
              certains services proposés sur notre site, il peut vous être
              demandé de nous fournir certaines informations telles que : votre
              nom, votre fonction, le nom de votre entreprise, votre adresse
              e-mail, ainsi que votre numéro de téléphone. Cela s'applique
              notamment lorsque vous remplissez le formulaire disponible dans la
              section « contact ».
            </p>{" "}
            <p>
              Dans tous les cas, vous avez la possibilité de refuser de fournir
              vos données personnelles. Toutefois, cela peut vous empêcher
              d'accéder à certains services du site, comme la demande
              d'informations sur notre entreprise ou l'abonnement à notre
              newsletter.
            </p>{" "}
            <p>
              Enfin, lors de votre navigation sur notre site, certaines
              informations peuvent être collectées automatiquement, telles que :
              des données concernant votre utilisation du site (zones visitées
              et services consultés), votre adresse IP, le type de navigateur
              utilisé, ainsi que vos heures d'accès.
            </p>{" "}
            <p>
              Ces informations sont utilisées exclusivement à des fins de
              statistiques internes, dans le but d'améliorer la qualité des
              services qui vous sont offerts. Les bases de données sont
              protégées conformément aux dispositions de la loi du 1er juillet
              1998, transposant la directive 96/9 du 11 mars 1996 relative à la
              protection juridique des bases de données.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
