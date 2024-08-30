'use client'
import styles from './accueil.module.scss'
import BandText from './components/BandText'
import HeaderAccueil from './components/Header'
import IntroPage from './components/IntroPage'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SmartDevelopment from './components/SmartDevelopment'
import Partners from './components/Partners'
import GalleryAcc from './components/GalleryAcc'
import AccContactForm from './components/AccContactForm'

export default function Accueil() {

    return (
        <>
            <section className={styles.accueilPage}>
                {/* <IntroPage /> */}
                <HeaderAccueil />
                <BandText />
                <SmartDevelopment />
                <Partners />
                <GalleryAcc />
                <BandText />
                <AccContactForm />
            </section>
        </>
    )
}
