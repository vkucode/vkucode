'use client'
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { GridHoverHero } from "./components/Maintenance"


export default function Solutions(){
    return(
        <>
            <Navbar />
            <section className="w-screen h-dvh bg-[var(--color-bg-black)]">
                <GridHoverHero />
            </section>
            <Footer />
        </>
    )
}