'use client'
import styles from '../accueil.module.scss'
import Image from 'next/image'
import { motion } from "framer-motion";
import RoundedSlideButton from '@/app/components/buttons/RoundedSlideButton';

export default function GalleryAccV2(){

    const scrollVariants = {
        up: {
            y: ["30%", '-30%'], // Move up
            transition: {
                repeat: Infinity,
                duration: 100,
                ease: 'linear'
            }
        },
        down: {
            y: ['-30%', "30%"], // Move down
            transition: {
                repeat: Infinity,
                duration: 100,
                ease: 'linear'
            }
        }
    };


    const ElementsUpGallery = ({ img1, img2, img3 }) => {
        return (
            <motion.div
                className={styles.elementsUp}
                variants={scrollVariants}
                animate="up"
            >
                <Image src={img1} width={450} height={450} alt='vkucode project' />
                <Image src={img2} width={450} height={450} alt='vkucode project' />
                <Image src={img3} width={450} height={450} alt='vkucode project' />
                <Image src={img1} width={450} height={450} alt='vkucode project' />
                <Image src={img2} width={450} height={450} alt='vkucode project' />
                <Image src={img3} width={450} height={450} alt='vkucode project' />
                <Image src={img1} width={450} height={450} alt='vkucode project' />
                <Image src={img2} width={450} height={450} alt='vkucode project' />
                <Image src={img3} width={450} height={450} alt='vkucode project' />
                <Image src={img1} width={450} height={450} alt='vkucode project' />
                <Image src={img2} width={450} height={450} alt='vkucode project' />
                <Image src={img3} width={450} height={450} alt='vkucode project' />
            </motion.div>
        );
    };

    const ElementsDownGallery = ({ img1, img2, img3 }) => {
        return (
            <motion.div
                className={styles.elementsDown}
                variants={scrollVariants}
                animate="down"
            >
                <Image src={img1} width={450} height={450} alt='vkucode project' />
                <Image src={img2} width={450} height={450} alt='vkucode project' />
                <Image src={img3} width={450} height={450} alt='vkucode project' />
                <Image src={img1} width={450} height={450} alt='vkucode project' />
                <Image src={img2} width={450} height={450} alt='vkucode project' />
                <Image src={img3} width={450} height={450} alt='vkucode project' />
                <Image src={img1} width={450} height={450} alt='vkucode project' />
                <Image src={img2} width={450} height={450} alt='vkucode project' />
                <Image src={img3} width={450} height={450} alt='vkucode project' />
                <Image src={img1} width={450} height={450} alt='vkucode project' />
                <Image src={img2} width={450} height={450} alt='vkucode project' />
                <Image src={img3} width={450} height={450} alt='vkucode project' />
            </motion.div>
        );
    };


    return(
        <>
            <section className={styles.galleryAccV2}>
                <div className={styles.galleryContent}>
                    <div className={styles.galleryBGProjects}>
                        <ElementsUpGallery img1="/img/accueil/gallery/luciole.png" img2="/img/accueil/gallery/larbre.png" img3="/img/accueil/gallery/bills.png" />
                        <ElementsDownGallery img1="/img/accueil/gallery/cvs.png" img2="/img/accueil/gallery/like-up.png" img3="/img/accueil/gallery/woodtouch.png" />
                        <ElementsUpGallery img1="/img/accueil/gallery/ornissa.png" img2="/img/accueil/gallery/greco.png" img3="/img/accueil/gallery/excellence.png" />
                        <ElementsDownGallery img1="/img/accueil/gallery/delta.png" img2="/img/accueil/gallery/ehc.png" img3="/img/accueil/gallery/crousti.png" />
                        <ElementsUpGallery img1="/img/accueil/gallery/pizzalif.png" img2="/img/accueil/gallery/jby.png" img3="/img/accueil/gallery/perdamaian.png" />
                    </div>
                    <div className={styles.galleryTitle}>
                        <div className='flex flex-col justify-center items-center py-20 px-20 shadow-xl bg-gradient-radial from-[#000] to-transparent bg-opacity-5 w-full h-full rounded-3xl'>
                            <h1>galerie</h1>
                            <RoundedSlideButton link="/galerie" text="en voir plus" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}