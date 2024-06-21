'use client'
import Image from "next/image"

export default function Loading(){
    return(
        <>
            <section className="fixed z-[99999999999] w-full h-screen bg-[#1B1B1B] flex flex-col justify-center items-center">
            <div
                className="p-3 animate-spin drop-shadow-2xl bg-gradient-to-bl from-pink-400 via-purple-400 to-indigo-600 md:w-48 md:h-48 h-32 w-32 aspect-square rounded-full"
                >
                <div className="relative rounded-full h-full w-full bg-slate-100 dark:bg-zinc-900 background-blur-md"
                >
                </div>
            </div>
                <Image className="fixed top-[50.5%] translate-y-[-50%] left-[50%] translate-x-[-50%]" src="/img/logo.png" width={100} height={100} alt="logo"/>
                
            </section>
        </>
    )
}