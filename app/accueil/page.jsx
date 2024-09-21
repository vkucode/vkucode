'use client'
import styles from './accueil.module.scss'
import BandText from './components/BandText'
import HeaderAccueil from './components/Header'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SmartDevelopment from './components/SmartDevelopment'
import Partners from './components/Partners'
import GalleryAccV2 from './components/GalleryAccV2'
import AccContactForm from './components/AccContactForm'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import CustomersSection from '../components/customers/CustomersSection'

export default function Accueil() {
    return (
        <>
            <section className={styles.accueilPage}>
                <Navbar />
                <HeaderAccueil />
                <GalleryAccV2 />
                <BandText />
                <SmartDevelopment />
                <CustomersSection />
                <AccContactForm />
                <Footer />
            </section>
        </>
    )
}
