'use client'
import styles from '../services.module.scss'
import Image from 'next/image'


export default function WebSite(){
    return(
        <>
            <section className={styles.serviceSlide}> 
                <div className={styles.slideWeb}>
                    <Image src="/img/services/degradeWeb.png" width={2000} height={2000} alt='vkucode' className={styles.bgImgDeg} />
                    <div className='animate__animated animate__fadeInUp'>
                        <h1>WEB SITE</h1>
                        <h3><span>&#123;</span>sur&nbsp;mesure<span>&#125;</span> </h3>
                        <h2>Votre présence en ligne, <span>notre priorité.</span></h2>
                        <p>
                            <b>Chez V<span>K</span>U CODE</b>, nous sommes experts en création de sites web personnalisés qui propulse notre entreprise en ligne. De la conception à la mise en ligne, nous développons des sites performants, esthétiques et adaptés à vos besoins. Que ce soit pour une vitrine, un e-commerce, ou une plateforme sur mesure, nous transformons votre vision en une expérience web engageante et efficace.
                        </p>
                            <a href="/contact">Nous contacter</a>
                    </div>
                    <div className={`${styles.divImagesWeb} animate__animated animate__fadeInDown`}>
                        <Image src="/img/services/tel1.png" className='!max-w-[200px] top-[100px] -mr-[50px] z-30' width={500} height={500} alt='vkucode' />
                        <Image src="/img/services/ordi.png" className='scale-150' width={1000} height={1000} alt='vkucode' />
                    </div>
                </div>
            </section>
        </>
    )
}