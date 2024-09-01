'use client'
import Image from 'next/image';
import styles from '../accueil.module.scss'

export default function IntroPage(){
    return(
        <>
            <section className={styles.introPage}>
                <Image src="/img/ciel.png" width={1000} height={1000} />
                {/* <video autoPlay muted>
                    <source src='/video/logointro.webm' type='video/webm' />
                    Your browser does not support this video format.
                </video> */}
            </section>
        </>
    )
}
