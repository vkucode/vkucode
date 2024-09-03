'use client'
import styles from '../services.module.scss';
import Image from 'next/image';

export default function Software(){
    return(
        <>
            <section className={styles.serviceSlide}>
                <div className={styles.softSlide}>
                    <Image src="/img/services/degradeSoft.png" className={styles.bgImgDeg} width={1500} height={1500} alt=' vkucode' />
                    <div className='animate__animated animate__fadeInDown'>
                        <h1>software</h1>
                        <h3><span>&#123;</span>sur&nbsp;mesure<span>&#125;</span></h3>
                        <h2>Optimisez vos opérations avec <span>nos logiciels.</span></h2>
                        <p> <b>Chez V<span>K</span>U CODE,</b> nous offrons des solutions logicielles innovantes pour optimiser et transformer vos opérations. Nos logiciels sur mesure sont conçus pour répondre aux besoins spécifiques de votre entreprise et propulser votre succès. Découvrez l’efficacité et la performance avec nous.</p>
                        <a href="/contact">Nous contacter</a>
                    </div>
                    <div className={`${styles.divImagesWeb} animate__animated animate__fadeInUp`}>
                        <Image src="/img/services/tel2.png" className='!max-w-[280px] top-[70px] -mr-[500px] z-30' width={500} height={500} alt='vkucode' />
                        <Image src="/img/services/ordi2.png" className='scale-100' width={1000} height={1000} alt='vkucode' />
                    </div>
                </div>
            </section>
        </>
    )
}