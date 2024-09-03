'use client'
import styles from '../services.module.scss';
import Image from 'next/image';
import 'animate.css'

export default function CyberSecurite(){
    return(
        <>
            <section className={styles.serviceSlide}>
                <div className={styles.cyberSlide}>
                    <Image src="/img/services/kasper.png" className={`${styles.bgImgDeg} animate__animated animate__fadeIn`} width={3000} height={3000} alt='kaspersky' />
                    <div className='animate__animated animate__fadeIn'>
                        <Image src="/img/services/kasperLogo.png" className={styles.logoKasper} width={700} height={700} alt='kaspersky logo' />
                        <h4>partenaire</h4>
                        <h2>
                            Un monde plus sûr et sans <span>frontières.</span>
                        </h2>
                        <p>
                            <b></b>Nous sommes ravis de vous proposer une solution optimale en associant notre expertise en développement web à celle de <strong>Kaspersky</strong>. Nos développeurs certifiés Kaspersky garantissent des projets numériques innovants et parfaitement sécurisés. Profitez de notre savoir-faire pour allier performance et protection maximale.
                        </p>
                        <a href="/contact">Nous contacter</a>
                    </div>
                    <div>
                    </div>
                </div>
            </section>
        </>
    )
}