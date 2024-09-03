'use client'
import styles from '../services.module.scss';
import Image from 'next/image';

export default function Design(){
    return(
        <>
            <section className={styles.serviceSlide}>
                <div className={styles.designSlide}>
                    <Image src="/img/services/degradeDesign.png" className={styles.bgImgDeg} width={1500} height={1500} />
                    <div className='animate__animated animate__fadeIn'>
                        <Image className={styles.logoDesign} src="/img/services/logoGreco.png" width={300} height={300} alt='greco logo' />
                        <h4>partenaire</h4>
                        <h2>Le design au service de <span>votre vision.</span></h2>
                        <p>
                            <b></b>Nous combinons notre expertise en développement web avec les compétences en design et photographie de <span>Grec<strong>o</strong> design</span>. Ensemble, nous créons des solutions numériques sur-mesure, alliant performance, design attrayant et visuels photographiques de haute qualité pour sublimer votre projet.
                        </p>
                        <a href="/contact">Nous contacter</a>
                    </div>
                    <div className='animate__animated animate__fadeIn'>
                        <Image src="/img/services/greco.png" width={1500} height={1500} alt='greco Design' />
                    </div>
                </div>
            </section>
        </>
    )
}