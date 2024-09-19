'use client'
import styles from './accueil.module.scss'
import BandText from './components/BandText'
import HeaderAccueil from './components/Header'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SmartDevelopment from './components/SmartDevelopment'
import Partners from './components/Partners'
import GalleryAcc from './components/GalleryAcc'
import AccContactForm from './components/AccContactForm'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Accueil() {
    return (
        <>
            <section className={styles.accueilPage}>
                <Navbar />
                <HeaderAccueil />
                <BandText />
                <SmartDevelopment />
                <Partners />
                <BandText />
                <AccContactForm />
                <Footer />
            </section>
        </>
    )
}
