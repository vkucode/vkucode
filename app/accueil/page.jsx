'use client'
import styles from './accueil.module.scss'
import Spline from '@splinetool/react-spline/next';
import Image from 'next/image';
import Expertise from './components/Expertise';

export default function HomePage(){



    return(
        <>
        <section className={styles.homePage}>
            <div className={styles.background}></div>
            <div className='h-screen relative flex flex-col justify-center items-center'>
                <h1>excellence</h1>
                <h2>design&nbsp;studio</h2>
                <Spline
                    scene="https://prod.spline.design/2BCNR58pu2keJYMM/scene.splinecode"  
                />
                <Image src="/img/vector.png" className='mt-[70px]' width={40} height={40}  />
            </div>
            <div className="h-screen relative flex flex-col justify-center items-center">
                <h1>qui&nbsp;sommes nous</h1>
                <p>Basée à PARIS , notre agence combine innovation, design et technologie pour offrir des solutions sur mesures à nos clients.</p>
            </div>
            <Expertise />
        </section>
        </>
    )
}