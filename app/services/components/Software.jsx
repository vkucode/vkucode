'use client'
import styles from '../services.module.scss';
import Image from 'next/image';
import 'animate.css'

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
                        <p><b>Chez V<span>K</span>U CODE,</b> nous créons des solutions logicielles sur mesure pour optimiser vos opérations et stimuler votre succès.</p>
                        <a href="/contact">Nous contacter</a>
                    </div>
                    <div className={`${styles.divImagesWeb} animate__animated animate__fadeInUp`}>
                        <Image src="/img/services/tel2.png" className='!max-w-[100px] lg:!max-w-[280px] top-[10px] lg:top-[70px] -mr-[180px] lg:-mr-[500px] z-30' width={500} height={500} alt='vkucode' />
                        <Image src="/img/services/ordi2.png" className='scale-100 lg:-mr-0 -mr-[80px]' width={1000} height={1000} alt='vkucode' />
                    </div>
                </div>
            </section>
        </>
    )
}