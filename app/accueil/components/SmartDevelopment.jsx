'use client'
import styles from '../accueil.module.scss';
import Image from 'next/image';
import BandText from './BandText';
import { SimpleGrid } from '@/app/components/features/grid/SimpleGrid';

export default function SmartDevelopment(){

    const BandTextSmart = () =>{
        return(
            <div className={styles.bandText}>
                <div className='flex flex-row justify-center items-center'>
                    <h1>the&nbsp;sky&nbsp;is&nbsp;not&nbsp;the&nbsp;<span>limit</span>&nbsp;</h1>
                    <h1>the&nbsp;sky&nbsp;is&nbsp;not&nbsp;the&nbsp;<span>limit</span>&nbsp;</h1>
                    <h1>the&nbsp;sky&nbsp;is&nbsp;not&nbsp;the&nbsp;<span>limit</span>&nbsp;</h1>
                    <h1>the&nbsp;sky&nbsp;is&nbsp;not&nbsp;the&nbsp;<span>limit</span>&nbsp;</h1>
                    <h1>the&nbsp;sky&nbsp;is&nbsp;not&nbsp;the&nbsp;<span>limit</span>&nbsp;</h1>
                    <h1>the&nbsp;sky&nbsp;is&nbsp;not&nbsp;the&nbsp;<span>limit</span>&nbsp;</h1>
                    <h1>the&nbsp;sky&nbsp;is&nbsp;not&nbsp;the&nbsp;<span>limit</span>&nbsp;</h1>
                    <h1>the&nbsp;sky&nbsp;is&nbsp;not&nbsp;the&nbsp;<span>limit</span>&nbsp;</h1>
                    <h1>the&nbsp;sky&nbsp;is&nbsp;not&nbsp;the&nbsp;<span>limit</span>&nbsp;</h1>
                    <h1>the&nbsp;sky&nbsp;is&nbsp;not&nbsp;the&nbsp;<span>limit</span>&nbsp;</h1>
                    <h1>the&nbsp;sky&nbsp;is&nbsp;not&nbsp;the&nbsp;<span>limit</span>&nbsp;</h1>
                    <h1>the&nbsp;sky&nbsp;is&nbsp;not&nbsp;the&nbsp;<span>limit</span>&nbsp;</h1>
                    <h1>the&nbsp;sky&nbsp;is&nbsp;not&nbsp;the&nbsp;<span>limit</span>&nbsp;</h1>
                    <h1>the&nbsp;sky&nbsp;is&nbsp;not&nbsp;the&nbsp;<span>limit</span>&nbsp;</h1>
                    <h1>the&nbsp;sky&nbsp;is&nbsp;not&nbsp;the&nbsp;<span>limit</span>&nbsp;</h1>
                    <h1>the&nbsp;sky&nbsp;is&nbsp;not&nbsp;the&nbsp;<span>limit</span>&nbsp;</h1>
                    <h1>the&nbsp;sky&nbsp;is&nbsp;not&nbsp;the&nbsp;<span>limit</span>&nbsp;</h1>
                    <h1>the&nbsp;sky&nbsp;is&nbsp;not&nbsp;the&nbsp;<span>limit</span>&nbsp;</h1>
                    <h1>the&nbsp;sky&nbsp;is&nbsp;not&nbsp;the&nbsp;<span>limit</span>&nbsp;</h1>
                    <h1>the&nbsp;sky&nbsp;is&nbsp;not&nbsp;the&nbsp;<span>limit</span>&nbsp;</h1>
                </div>
            </div>
        )
    }



    return(
        <>
            <section className={styles.smartDev}>
                <div className={styles.headerSmart}>
                    <h2><span>&#123;</span>&nbsp;smart&nbsp;<span>&#125;</span></h2>
                    <h1>DéVELOPPEMENT</h1>
                    <p>Les avantages de l'<span>abonnement</span> avec V<span>K</span>U</p>
                </div>
                <div className={styles.smart}>
                    <div className={styles.smartDivImg}>
                        <Image src="/img/accueil/dev.png" className='w-full relative z-20 max-w-[800px]' width={1000} height={1000} alt='vkucode' />
                        <BandTextSmart />
                    </div>
                    <div className='w-full max-w-7xl'>
                        <SimpleGrid />
                    </div>
                    
                </div>
            </section>
        </>
    )
}