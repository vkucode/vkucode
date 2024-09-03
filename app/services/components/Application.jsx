'use client'
import styles from '../services.module.scss';
import Image from 'next/image';
import 'animate.css';

export default function Application(){
    return(
        <>
            <section className={styles.serviceSlide}>
                <div className={styles.appSlide}>
                    <Image src="/img/services/degradeApps.png" className={styles.bgImgDeg} width={1500} height={1500} alt='vkucode' />
                    <div className='animate__animated animate__fadeInLeft'>
                        <h1>Application</h1>
                        <h3><span>&#123;</span>sur&nbsp;mesure<span>&#125;</span></h3>
                        <h2>Des applications qui concrétisent <span>vos visions.</span></h2>
                        <p><b>Chez V<span>K</span>U CODE,</b> nous créons des applications sur mesure pour donner vie à vos projets numériques. Experts en solutions mobiles et web. Nous transformons vos idées en outils performants et adaptés à vos besoins. Avec nous, développez L'avenir de votre entreprise.</p>
                        <a href="/contact">Nous contacter</a>
                    </div>
                    <div className='animate__animated animate__fadeInRight'>
                        <Image src="/img/services/apps.png" width={1500} height={1500} alt='vkucode apps'/>
                    </div>
                </div>
            </section>
        </>
    )
}