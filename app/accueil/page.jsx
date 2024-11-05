'use client'
import styles from './accueil.module.scss'
import { useEffect, useState } from 'react';
import Loading from './loading';
import HeaderAccueil from './components/Header'
import SmartDevelopment from './components/SmartDevelopment'
import GalleryAccV2 from './components/GalleryAccV2'
import AccContactForm from './components/AccContactForm'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import CustomersSection from '../components/customers/CustomersSection'

export default function Accueil() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulăm încărcarea tuturor componentelor
        const loadComponents = setTimeout(() => {
            setLoading(false);
        }, 3200); // Așteaptă 1 secundă sau ajustează timpul dorit

        return () => clearTimeout(loadComponents);
    }, []);

    if (loading) {
        return <Loading />;
    }
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
