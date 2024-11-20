'use client'
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import { GridHoverHero } from "./Maintenance"

export default function SolutionsContent(){
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