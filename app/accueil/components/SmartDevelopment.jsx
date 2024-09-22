'use client'
import styles from '../accueil.module.scss';
import Image from 'next/image';
import BandText from './BandText';
import { SimpleGrid } from '@/app/components/features/grid/SimpleGrid';

export default function SmartDevelopment(){
    return(
        <>
            <section className={styles.smartDev}>
                <div className={styles.headerSmart}>
                    <h2><span>&#123;</span>&nbsp;smart&nbsp;<span>&#125;</span></h2>
                    <h1>DéVELOPPEMENT</h1>
                    <p>Les avantages de l'<span>abonnement</span> avec V<span>K</span>U</p>
                </div>
                <div className={styles.smart}>
                    <SimpleGrid />
                </div>
            </section>
        </>
    )
}