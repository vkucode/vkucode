'use client'
import styles from '../accueil.module.scss';
import Image from 'next/image';

export default function SmartDevelopment(){
    return(
        <>
            <section className={styles.smartDev}>
                <div className={styles.headerSmart}>
                    <h2><span>&#123;</span>&nbsp;smart&nbsp;<span>&#125;</span></h2>
                    <h1>DéVELOPPEMENT</h1>
                </div>
                <div className={styles.smart}>
                    <div className={styles.smartText}>
                        <h3>Développement</h3>
                        <h2>Découvrez&nbsp;notre&nbsp;<span>univers&nbsp;!</span></h2>
                        <p><span>Nous&nbsp;utilisons</span>&nbsp;une variété de technologies comme Node React, NextJS et Python pour développer des sites Web et des applications. En intégrant ces outils et ceux de nos partenaires, nous créons des Solutions performantes et adaptées aux besoins de nos clients.</p>
                        <a href="#">en&nbsp;savoir&nbsp;plus</a>
                    </div>
                    <div className={styles.smartCarts}>
                        <div className='relative w-[60%] z-20 h-full'>
                            <Image src="/img/accueil/header/carteciffre.png" className='absolute' width={350} height={350} />
                            <Image src="/img/accueil/header/cartekasper.png" className='absolute hover:rotate-6 transition-all ease-in-out duration-200' width={350} height={350} />
                        </div>
                        <Image className='z-10 w-[40%] relative -ml-20' src="/img/accueil/header/cartevku.png" width={350} height={350} />
                    </div>
                </div>
            </section>
        </>
    )
}