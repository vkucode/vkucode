'use client'
import styles from '../accueil.module.scss';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function GalleryAcc(){
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#handAnim",
                start: "top center-=100px", // Începe când partea de sus a div-ului este la începutul viewport-ului
                end: "center+=480px center", // Se termină cu 200px înainte de finalul div-ului
                pin: "#hand",
                scrub: true,
                // markers: true,
            }
        });

        // Poți adăuga aici mai multe animații în timeline dacă e necesar

        return () => {
            if(tl.scrollTrigger) tl.scrollTrigger.kill(); // Cleanup dacă componenta este demontată
        };
    }, []);

    return(
        <section className={styles.galleryAcc}>
            <div className={styles.devWrapperScreens} id='handAnim'>
                <div className={styles.galleryDevScreens}>
                    <ul className={styles.devScreenList}>
                        <li>
                            <div>
                                <Image src="/img/accueil/gallery/luciole.png" width={400} height={450} alt="VKU CODE" />
                            </div>
                        </li>
                        <li>
                            <div>
                                <Image src="/img/accueil/gallery/cvs.png" width={400} height={450} alt="VKU CODE" />
                            </div>
                        </li>
                        <li>
                            <div></div>
                        </li>
                        <li>
                            <div>
                                <Image src="/img/accueil/gallery/delta.png" width={400} height={450} alt="VKU CODE" />
                            </div>
                        </li>
                        <li>
                            <div>
                                <Image src="/img/accueil/gallery/pizzalif.png" width={400} height={450} alt="VKU CODE" />
                            </div>
                        </li>
                    </ul>
                    <ul className={styles.devScreenList}>
                        <li>
                            <div>
                                <Image src="/img/accueil/gallery/larbre.png" width={400} height={450} alt="VKU CODE" />
                            </div>
                        </li>
                        <li>
                            <div>
                                <Image src="/img/accueil/gallery/like-up.png" width={400} height={450} alt="VKU CODE" />
                            </div>
                        </li>
                        <li>
                            <div></div>
                        </li>
                        <li>
                            <div>
                                <Image src="/img/accueil/gallery/ehc.png" width={400} height={450} alt="VKU CODE" />
                            </div>
                        </li>
                        <li>
                            <div>
                                <Image src="/img/accueil/gallery/jby.png" width={400} height={450} alt="VKU CODE" />
                            </div>
                        </li>
                    </ul>
                    <ul className={styles.devScreenList}>
                        <li>
                            <div>
                                <Image src="/img/accueil/gallery/greco.png" width={400} height={450} alt="VKU CODE" />
                            </div>
                        </li>
                        <li>
                            <div>
                                <Image src="/img/accueil/gallery/ornissa.png" width={400} height={450} alt="VKU CODE" />
                            </div>
                        </li>
                        <li>
                            <div></div>
                        </li>
                        <li>
                            <div>
                                <Image src="/img/accueil/gallery/bills.png" width={400} height={450} alt="VKU CODE" />
                            </div>
                        </li>
                        <li>
                            <div>
                                <Image src="/img/accueil/gallery/woodtouch.png" width={400} height={450} alt="VKU CODE" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.galleryHandWrapper}>
                <div className={styles.galleryHand} id='hand'>
                    <Image src="/img/accueil/gallery/hand.webp" className={styles.handImg} width={1900} height={1900} alt='VKU CODE' />
                    <div className={styles.handContent}>
                        <Image src="/img/accueil/gallery/delta.png" width={400} height={400} alt='VKU CODE project' />
                    </div>
                </div>
            </div>
        </section>
    )
}
