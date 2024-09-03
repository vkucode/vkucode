'use client'
import styles from '../services.module.scss';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import 'animate.css'

export default function CyberSecurite(){

    const [imageSrc, setImageSrc] = useState('/img/services/kasper.png');

    useEffect(() => {
        const handleResize = () => {
            if (window.matchMedia("(max-width: 768px)").matches) {
                setImageSrc('/img/services/kasperMobile.png');
            } else {
                setImageSrc('/img/services/kasper.png');
            }
        };

        // Check initial screen size
        handleResize();

        // Add event listener to update image on resize
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return(
        <>
            <section className={styles.serviceSlide}>
                <div className={styles.cyberSlide}>
                    <Image src={imageSrc} className={`${styles.bgImgDeg} animate__animated animate__fadeIn`} width={3000} height={3000} alt='kaspersky' />
                    <div className='animate__animated animate__fadeIn'>
                        <Image src="/img/services/kasperLogo.png" className={styles.logoKasper} width={700} height={700} alt='kaspersky logo' />
                        <h4>partenaire</h4>
                        <h2>
                            Un monde plus sûr et sans <span>frontières.</span>
                        </h2>
                        <p>
                            <b></b>Nous sommes ravis de vous proposer une solution optimale en associant notre expertise en développement web à celle de <strong>Kaspersky</strong>. Profitez de notre savoir-faire pour allier performance et protection maximale.
                        </p>
                        <a href="/contact">Nous contacter</a>
                    </div>
                    <div className="h-[35vh] md:h-0">
                    </div>
                </div>
            </section>
        </>
    )
}
