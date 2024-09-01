'use client'
import styles from './components.module.scss'

export default function Footer(){
    return(
        <>
            <section className={styles.footerSection}>
                <div>
                    <a href="/legales/politique-de-confidentialite">Politique de confidentialite</a>&nbsp;<span>-</span>&nbsp;
                    <a href="/legales/cookies">Cookies</a>&nbsp;<span>-</span>&nbsp;
                    <a href="/legales/mentions-legales">Mentions légales</a>
                </div>
                <div>
                    <h1>©2024&nbsp;vkucode</h1>
                </div>
            </section>
        </>
    )
}