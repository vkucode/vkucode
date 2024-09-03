'use client'
import styles from '../accueil.module.scss';
import Image from 'next/image';
import 'animate.css'

export default function HeaderAccueil(){
    return(
        <>
            <section className={styles.headerAccueil}>
                <div className='w-screen overflow-x-hidden h-[40vh] pt-20 animate__animated animate__fadeInUp flex flex-col justify-center items-center'>
                    <h1>
                        for&nbsp;us&nbsp;the&nbsp;sky<br />
                        is&nbsp;not&nbsp;the&nbsp;<span>limit</span>
                    </h1>
                </div>
               
                <div className={styles.textHeader}>
                    {/* <Image src="/img/effects/lumiereHeader.png" className={styles.bgImg} width={500} height={500} /> */}
                    <div className='flex flex-col-reverse lg:flex-row justify-center items-center'>
                        <div className={`${styles.carteImgs} animate__animated animate__fadeIn`}>
                            <Image src="/img/accueil/header/carte.png" width={400} height={400} />
                            <Image src="/img/accueil/header/cartelogo.png" className='absolute top-0 left-0 hover:-rotate-12 transition-all ease-in-out duration-300' width={350} height={350} />
                        </div>
                        <div className={`${styles.contentCarte} animate__animated animate__fadeInUp`}>
                            <h3>services</h3>
                            <h2><b className='ml-5'>Chez</b>&nbsp;V<span>K</span>U code, nous sommes des spécialistes du développement web sur mesure.</h2>
                            <p><span>Nos&nbsp;solutions</span>&nbsp;numériques innovantes répondent parfaitement à vos besoins. Nous créons des sites internet à la fois fonctionnels et esthétiques, assurant ainsi une expérience utilisateur optimale.</p>
                            <a href="#">en&nbsp;savoir&nbsp;plus</a>
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    )
}