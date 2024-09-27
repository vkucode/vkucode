'use client'
import styles from '../accueil.module.scss';
import Image from 'next/image';
import 'animate.css'
import { Stars } from '@react-three/drei';
import { Canvas } from "@react-three/fiber";
import { FeatureGrid } from '@/app/components/features/grid/FeatureGrid';
import Partners from './Partners';
import GradientShadowButton from './GradientBTN';
import { AuroraHero } from './Stars';

export default function HeaderAccueil(){




    return(
        <>
            <section className={styles.headerAccueil}>
                <div className="absolute inset-0 z-0">
                    <Canvas>
                    <Stars radius={100} count={2500} factor={7} fade speed={2} />
                    </Canvas>
                </div>
                <div className={styles.headerTitle}>
                    <h1>
                        for&nbsp;us&nbsp;the&nbsp;sky<br />
                        is&nbsp;not&nbsp;the&nbsp;<span>limit</span>
                    </h1>
                </div>
                <div className={styles.textHeader}>
                    <h2>Chez&nbsp;V<span>K</span>U code, nous sommes des spécialistes du développement web sur mesure.</h2>
                    <p>Creez <span>de solutions Web</span> pour vos startups, clients et projets, sans avoir a penser au design</p>
                    <div className='flex flex-row justify-center items-center gap-5 mt-5'>
                        <GradientShadowButton text="Contact" link="/contact" />
                        <a href="/services" className='text-white capitalize text-sm lg:text-base border-2 border-zinc-500 py-2 px-5 scale-95 rounded-md bg-opacity-20 hover:bg-opacity-50 bg-zinc-700 hover:scale-100 duration-200 ease-in-out'>nos&nbsp;services</a>
                    </div>
                </div>
                <Partners />
                <FeatureGrid />
            </section>
        </>
    )
}