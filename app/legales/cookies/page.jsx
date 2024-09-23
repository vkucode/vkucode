'use client'
import styles from '../legales.module.scss';



export default function Cookies(){
    return(
        <>
        <section className={styles.sectionLegales}>
                <div className='w-full max-w-7xl'>
                    <h1>Politique de cookies</h1>
                    <div className={styles.separateur}></div>
                    <div>
                        <p>
                        Le site peut vous demander d'accepter les cookies pour des raisons liées aux statistiques et à l'affichage. Un cookie est un fichier texte déposé sur votre disque dur par le serveur du site que vous visitez. Il contient diverses informations qui sont enregistrées sur votre appareil et auxquelles le serveur peut accéder pour lire et stocker des données. Certaines fonctionnalités de ce site ne peuvent pas fonctionner correctement sans l'acceptation des cookies.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}