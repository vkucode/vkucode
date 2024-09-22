'use client'
import styles from './accueil.module.scss'
import HeaderAccueil from './components/Header'
import SmartDevelopment from './components/SmartDevelopment'
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
                <SmartDevelopment />
                <CustomersSection />
                <AccContactForm />
                <Footer />
            </section>
        </>
    )
}
