'use client'
import { useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Application from './components/Application'
import WebSite from './components/WebSite'
import styles from './services.module.scss'
import Image from 'next/image'
import Software from './components/Software'
import Design from './components/Greco'
import CyberSecurite from './components/Kasper'


export default function Services(){

    const [activeSection, setActiveSection] = useState('website');


    const Menu = ({ activeSection, setActiveSection }) =>{
        return(
            <>
            <nav className={styles.menuServices}>
                <ul>
                    <li
                        className={`${activeSection === 'website' ? `${styles.active} bg-[#B787F5] !text-black` : ''}`}
                        onClick={() => setActiveSection('website')}
                    >
                        Web Site
                    </li>
                    <li
                        className={`${activeSection === 'application' ? `${styles.active} bg-[#B787F5] !text-black` : ''}`}
                        onClick={() => setActiveSection('application')}
                    >
                        Application
                    </li>
                    <li
                        className={`${activeSection === 'software' ? `${styles.active} bg-[#B787F5] !text-black` : ''}`}
                        onClick={() => setActiveSection('software')}
                    >
                        Software
                    </li>
                    <li
                        className={`${activeSection === 'design' ? `${styles.active} hover:!bg-[#851A1A] bg-[#851A1A] !text-white` : ''}`}
                        onClick={() => setActiveSection('design')}
                    >
                        Design
                    </li>
                    <li
                        className={`${activeSection === 'cybersecurite' ? `${styles.active} bg-[#B787F5] !text-black` : ''}`}
                        onClick={() => setActiveSection('cybersecurite')}
                    >
                        Cyber sécurité
                    </li>

                </ul>
            </nav>

            </>
        )
    }

    const ContentPage = ({ activeSection }) => {
        return (
            <div className={styles.content}>
                {activeSection === 'website' && <WebSite />}
                {activeSection === 'application' && <Application />}
                {activeSection === 'software' && <Software />}
                {activeSection === 'design' && <Design />}
                {activeSection === 'cybersecurite' && <CyberSecurite />}
            </div>
        );
    };

    return(
        <>
            <Navbar />
            <section className={styles.servicesPres}>
                <Menu activeSection={activeSection} setActiveSection={setActiveSection} />
                <ContentPage activeSection={activeSection} />
            </section>
            <Footer />
        </>
    )
}
