'use client'
import Image from "next/image"
import styles from './components.module.scss'
import { useState } from "react";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import { MotionConfig, motion } from "framer-motion";


export default function Navbar(){
    return(
        <>
        <div className={styles.navbar}>
            <NavbarOnPc />
            <NavbarOnMobile />
        </div>
        </>
    )
}

const Logo = () =>{
    return(
        <div className="w-full">
            <Image src="/img/logo.svg" alt="vku code" width={100} height={100} />
        </div>
    )
}

const NavbarOnPc = () =>{
    return(
        <div className={styles.navbarPc}>
            <div className={styles.pcNav}>
                <a href="#">contactez-nous</a>
                <AnimatedHamburgerButton />
            </div>
            <div className={styles.pcLogo}>
                <Image src="/img/logo.svg" alt="vku code" width={100} height={100} />
            </div>
        </div>
    )
}
const NavbarOnMobile = () =>{
    return(
        <div>

        </div>
    )
}




const AnimatedHamburgerButton = () => {
  const [active, setActive] = useState(false);
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={() => setActive((pv) => !pv)}
        className="relative h-20 w-20 rounded-full bg-white/0 transition-colors hover:bg-white/20"
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-1 w-10 bg-white"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-1 w-10 bg-white"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-1 w-5 bg-white"
          style={{
            x: "-50%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 10px)",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};