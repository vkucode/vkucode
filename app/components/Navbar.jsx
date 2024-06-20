'use client'
import Image from "next/image"
import styles from './components.module.scss'
import { useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import 'animate.css';

export default function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuAnimating, setMenuAnimating] = useState(false);

    const handleMenuToggle = () => {
        if (menuOpen) {
            setMenuAnimating(true);
            setTimeout(() => {
                setMenuOpen(false);
                setMenuAnimating(false);
            }, 500); // durata animației fadeOutLeft
        } else {
            setMenuOpen(true);
        }
    };

    return(
        <>
        <div className={styles.navbar}>
            <NavbarOnPc menuOpen={menuOpen} setMenuOpen={handleMenuToggle} />
            {/* <NavbarOnMobile /> */}
            {menuOpen && <MenuOnPc menuAnimating={menuAnimating} setMenuOpen={handleMenuToggle} />}
        </div>
        </>
    )
}

const Logo = () =>{
    return(
        <a href="#">
          <Image src="/img/logo.svg" alt="vku code" className="scale-95 hover:scale-100 transition-all ease-in-out duration-200" width={100} height={100} />
        </a>
    )
}

const NavbarOnPc = ({ menuOpen, setMenuOpen }) => {
  return(
    <div className={styles.navbarPc}>
      <Logo />
      <AnimatedHamburgerButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  )
}

const MenuOnPc = ({ menuAnimating, setMenuOpen }) => {
  return(
    <div className={`${styles.menuPc} ${menuAnimating ? 'animate__animated animate__fadeOutRight' : 'animate__animated animate__fadeInRight'}`}>
      <LinkMenu link="#" text="projet" image="/img/nav/projet.jpg" rotation="rotate-6" />
      <LinkMenu link="#" text="contact" image="/img/nav/contact.jpg" rotation="-rotate-6" />
      <LinkMenu link="#" text="a&nbsp;propos" image="/img/nav/apropos.jpg" rotation="rotate-6" />
      <CloseButton setMenuOpen={setMenuOpen} />
    </div>
  )
}

const LinkMenu = ({ link, text, image, rotation }) => {
  const [hover, setHover] = useState(false);

  return (
    <a
      href={link}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={styles.linkMenu}
    > 
      <p>{text}</p>
      <div className={`${hover ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeOut'} ${hover ? '' : 'hidden'}`}>
        <span>{text}&nbsp;</span>
        <span>{text}&nbsp;</span>
        <span>{text}&nbsp;</span>
        <span>{text}&nbsp;</span>
        <span>{text}&nbsp;</span>
        <span>{text}&nbsp;</span>
        <span>{text}&nbsp;</span>
        <span>{text}&nbsp;</span>
      </div>
      <Image
        className={`${hover ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeOut'} ${hover ? '' : 'hidden'} ${hover ? rotation : ''}`}
        src={image}
        width={300}
        height={300}
        alt={text}
      />
    </a>
  )
}


const AnimatedHamburgerButton = ({ menuOpen, setMenuOpen }) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={menuOpen ? "open" : "closed"}
        onClick={setMenuOpen}
        className="relative z-[50] h-20 w-20 rounded-full bg-white/0 transition-colors hover:bg-white/20"
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-1 w-10 bg-[#EEDDFF]"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-1 w-10 bg-[#EEDDFF]"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-1 w-5 bg-[#EEDDFF]"
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

const CloseButton = ({ setMenuOpen }) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={"open"}
        onClick={setMenuOpen}
        className="absolute z-[50] h-20 top-[40px] right-[40px] w-20 rounded-full bg-white/0 transition-colors hover:bg-white/20"
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-1 w-10 bg-[#EEDDFF]"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-1 w-10 bg-[#EEDDFF]"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-1 w-5 bg-[#EEDDFF]"
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
