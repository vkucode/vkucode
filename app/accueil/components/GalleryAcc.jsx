'use client'
import styles from '../accueil.module.scss';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function GalleryAcc(){
    useEffect(() => {
        let mm = gsap.matchMedia();

        mm.add("(max-width: 767px)", () => {
            // Aici se definește animația pentru ecrane sub 768px
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#handAnim",
                    start: "top-=50px center", 
                    end: "top+=660px center+=50px",
                    pin: "#hand",
                    scrub: true,
                    // markers: true,
                }
            });
        });

        mm.add("(min-width: 768px)", () => {
            // Aici se definește animația pentru ecrane peste 768px
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#handAnim",
                    start: "top center-=100px",
                    end: "center+=320px center",
                    pin: "#hand",
                    scrub: true,
                    // markers: true,
                }
            });
        });

        // Cleanup pentru a elimina orice animații sau scrollTriggers când componenta se demontează
        return () => mm.revert();
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
