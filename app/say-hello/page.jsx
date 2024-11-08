'use client'
import Image from "next/image"
import Navbar from "../components/Navbar"
import styles from '../components/components.module.scss'

export default function SayHello(){


    const ContactLink = ({link, notre, title }) =>{
        return(
            <a href={link} target="_blank" className="py-3 px-5 border rounded-xl border-[#55367E] scale-95 hover:scale-100 transition-all ease-in-out duration-200 text-center bg-gradient-to-r from-[#2B1942] to-[#55367E] backdrop-blur-md bg-opacity-30 w-full">
                <h1 className="text-[#EDEDED] font-light text-sm lg:text-xl">Contactez-nous avec {notre} <span className="font-bold text-[var(--color-main)]">{title}</span></h1>
            </a>
        )
    }

    return(
        <>
        <Navbar />
        <section className="bg-[var(--color-bg-black)] flex flex-col relative px-5 overflow-hidden justify-center items-center w-full h-dvh">
            <Image src="/img/accueil/planete.png" width={1500} height={1500} alt="background VKU" className="absolute z-0 lg:top-0 top-[40%] left-[40%] lg:left-[40%] !w-auto h-dvh lg:w-full lg:h-auto" />
            <div className="flex flex-col relative z-20 w-full max-w-4xl">
                 <h1 className={styles.titleSayHello}>
                    Contactez&nbsp;<span className="text-[var(--color-main)]">-</span>&nbsp;Nous
                 </h1>
                 <h2 className="text-white font-black text-sm lg:text-xl text-center">
                    <span className="text-[var(--color-main)]">Merci</span>&nbsp;de votre visite chez V<span className="text-[var(--color-main)]">K</span>U CODE
                 </h2>

                 <div className={styles.LinksSectionSayHello}>
                    <ContactLink link="https://vkucode.com/contact" notre="notre" title="Site Web" />
                    {/* <ContactLink link="https://wa.me/33675710952" notre="" title="Whatsapp" /> */}
                    <ContactLink link="mailto: contact@vkucode.com" notre="" title="E-mail" />
                    <ContactLink link="https://www.instagram.com/vkucode/" notre="" title="Instagram" />
                    <ContactLink link="https://www.linkedin.com/company/vkucode/" notre="" title="LinkedIn" />
                 </div>
            </div>
        </section>
        </>
    )
}