import styles from "../legales.module.scss";

export const metadata = {
  title: "Mentions Légales - VKU CODE",
  description:
    "Consultez les mentions légales de VKU CODE pour en savoir plus sur l'éditeur du site, l'hébergement et nos obligations légales.",
  keywords:
    "mentions légales, éditeur de site, informations légales, hébergement, VKU CODE, site internet, obligations légales",
  openGraph: {
    title: "Mentions Légales - VKU CODE",
    description:
      "Retrouvez toutes les informations légales sur VKU CODE : éditeur du site, hébergement, et cadre légal. Consultez nos mentions légales complètes.",
    type: "website",
    url: "https://vkucode.com/mentions-legales", // URL de la page Mentions légales
    images: [
      {
        url: "https://vkucode.com/images/original.jpg", // Lien vers une image pertinente
        width: 1200,
        height: 630,
        alt: "Mentions Légales de VKU CODE",
      },
    ],
  },
  icons: {
    icon: "/img/favicon.ico",
    shortcut: "/img/favicon.ico",
    apple: "/img/favicon.ico",
  },
};

export default function MentionsLegales() {
  return (
    <>
      <section className={styles.sectionLegales}>
        <div className="w-full max-w-7xl">
          <h1>mentions legales</h1>
          <div className={styles.separateur}></div>
          <div>
            <p>
              <h2>VKU CODE SAS</h2>
              <br />
              Numéro de SIRET : 984902858 00013
              <br />
              Capital social : 10 000€
              <br />
              Responsable éditorial : Ungurean Victor
              <br />
              108 BOULEVARD SUCHET, 75016 Paris, France
              <br />
              Téléphone : 06 75 71 09 52
              <br />
              Email : serviceclient@vkucode.com
              <br />
              Site Web : vkucode.com
              <br />
            </p>
            <br />
            <br />
            <p>
              <h2>DEVELOPPEMENT</h2>
              Développé en interne par l'équipe VKU CODE
            </p>
            <br />
            <br />
            <p>
              <h2>CONDITIONS D'UTILISATION</h2>
              Ce site (vkucode.com) utilise divers langages web (HTML, HTML5,
              Javascript, CSS, etc.) afin de vous offrir une expérience
              utilisateur optimale et un design agréable. Pour un meilleur
              confort de navigation, nous vous recommandons d'utiliser des
              navigateurs modernes tels qu'Internet Explorer, Safari, Firefox,
              Google Chrome, etc.
            </p>
            <br />
            <br />
            <p>
              <h2>PROPRIÉTÉ INTELLECTUELLE</h2>
              Tout le contenu du présent site vkucode.com, incluant, de façon
              non limitative, les graphismes, images, textes, vidéos,
              animations, sons, logos, gifs et icônes ainsi que leur mise en
              forme sont la propriété exclusive de la société à l'exception des
              marques, logos ou contenus appartenant à d'autres sociétés
              partenaires ou auteurs. Toute reproduction, distribution,
              modification, adaptation, retransmission ou publication, même
              partielle, de ces différents éléments est strictement interdite
              sans l'accord exprès par écrit de VKU CODE. Cette représentation
              ou reproduction, par quelque procédé que ce soit, constitue une
              contrefaçon sanctionnée par les articles L.335-2 et suivants du
              Code de la propriété intellectuelle. Le non-respect de cette
              interdiction constitue une contrefaçon pouvant engager la
              responsabilité civile et pénale du contrefacteur. En outre, les
              propriétaires des Contenus copiés pourraient intenter une action
              en justice à votre encontre.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
