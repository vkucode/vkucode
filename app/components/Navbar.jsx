'use client'
import React, { useState } from "react";
import { FiMenu, FiArrowRight, FiX, FiChevronDown } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import Image from "next/image";
import {
  useMotionValueEvent,
  AnimatePresence,
  useScroll,
  motion,
} from "framer-motion";
import useMeasure from "react-use-measure";

const Navbar = () => {
  return (
    <>
      <FlyoutNav />
    </>
  );
};

const FlyoutNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 250 ? true : false);
  });

  return (
    <nav
      className={`fixed top-0 z-50 w-full px-6 text-white 
      transition-all duration-300 ease-out lg:px-12
      ${
        scrolled
          ? "bg-[var(--color-bg-black)] py-3 shadow-xl"
          : "bg-[var(--color-bg-black)]/0 py-5 shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Logo />
        <div className="hidden gap-6 lg:flex">
          <Links />
          <CTAs />
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
};

const Logo = () => {
  return (
    <a href="/accueil">
      <Image src="/img/logoVKU.png" className="w-full max-w-[70px] lg:max-w-[80px]" width={100} height={100} />
    </a>
  );
};

const Links = () => {
  return (
    <div className="flex items-center gap-6">
      {LINKS.map((l) => (
        <NavLink key={l.text} href={l.href} FlyoutContent={l.component}>
          {l.text}
        </NavLink>
      ))}
    </div>
  );
};

const NavLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative h-fit w-fit"
    >
      <a href={href} className="relative">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-[#B787F5] transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-[#B787F5] text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#B787F5]" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CTAs = () => {
  return (
    <div className="flex items-center gap-3">
      {/* <button className="flex items-center gap-2 rounded-lg border-2 border-white px-4 py-2 font-semibold text-white transition-colors hover:bg-white hover:text-black">
        <FaUserCircle />
        <span>Sign in</span>
      </button> */}
      <a href="/contact" className="rounded-3xl bg-gradient-to-b from-[#B787F5] to-[#55367E] px-4 py-2 font-semibold text-white transition-colors hover:text-white">
        Contact
      </a>
    </div>
  );
};

const AboutUsContent = () => {
  return (
    <div className="grid h-fit w-full rounded-xl lg:border-2 lg:border-[#B787F5] grid-cols-12 shadow-xl lg:h-72 lg:w-[600px] lg:shadow-none xl:w-[750px]">
      <div className="col-span-12 flex flex-col justify-between bg-[var(--color-bg-black)] p-6 lg:col-span-4">
        <div>
          <h2 className="mb-2 text-xl font-semibold text-white">Services</h2>
          <p className="mb-6 max-w-xs text-sm text-neutral-400">
          Nos solutions numériques innovantes répondent parfaitement à vos besoins.
          </p>
        </div>
        <a
          href="#"
          className="flex items-center gap-1 text-xs text-[#B787F5] hover:underline"
        >
          En savoir plus <FiArrowRight />
        </a>
      </div>
      <div className="col-span-12 grid grid-cols-2 grid-rows-2 gap-3 bg-[var(--color-bg-black)] p-6 lg:col-span-8">
        <a
          href="#"
          className="rounded-xl text-white border-[1px] border-[#55367E] bg-transparent p-3 transition-colors hover:bg-[#55367E] hover:text-white"
        >
          <h3 className="font-semibold">WebSite</h3>
          <span className="-ml-[2px] text-sm">&#123;sur&nbsp;mesure&#125;</span><br />
          <p className="text-xs mt-1">
          Votre présence en ligne, notre priorité.
          </p>
        </a>
        <a
          href="#"
          className="rounded-xl text-white border-[1px] border-[#55367E] bg-transparent p-3 transition-colors hover:bg-[#55367E] hover:text-white"
        >
          <h3 className="font-semibold">Applications</h3>
          <span className="-ml-[2px] text-sm">&#123;sur&nbsp;mesure&#125;</span><br />
          <p className="text-xs mt-1">
            Des applications qui concrétisent vos visions.
          </p>
        </a>
        <a
          href="#"
          className="rounded-xl text-white border-[1px] border-[#55367E] bg-transparent p-3 transition-colors hover:bg-[#55367E] hover:text-white"
        >
          <h3 className="mb-1 font-semibold">Design</h3>
          <p className="text-xs">
          Le design au service de votre vision.
          </p>
        </a>
        <a
          href="#"
          className="rounded-xl text-white border-[1px] border-[#55367E] bg-transparent p-3 transition-colors hover:bg-[#55367E] hover:text-white"
        >
          <h3 className="font-semibold">CyberSecurite</h3>
          <span className="-ml-[2px] text-sm">&#123;kaspersky&#125;</span><br />
          <p className="text-xs mt-1">
          A safer world without borders.
          </p>
        </a>
      </div>
    </div>
  );
};



const MobileMenuLink = ({ children, href, FoldContent, setMenuOpen }) => {
  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative text-white">
      {FoldContent ? (
        <div
          className="flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold"
          onClick={() => setOpen((pv) => !pv)}
        >
          <a
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(false);
            }}
            href={href}
          >
            {children}
          </a>
          <motion.div
            animate={{ rotate: open ? "180deg" : "0deg" }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <FiChevronDown />
          </motion.div>
        </div>
      ) : (
        <a
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(false);
          }}
          href="#"
          className="flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold"
        >
          <span>{children}</span>
          <FiArrowRight />
        </a>
      )}
      {FoldContent && (
        <motion.div
          initial={false}
          animate={{
            height: open ? height : "0px",
            marginBottom: open ? "24px" : "0px",
            marginTop: open ? "12px" : "0px",
          }}
          className="overflow-hidden"
        >
          <div ref={ref}>
            <FoldContent />
          </div>
        </motion.div>
      )}
    </div>
  );
};

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="block lg:hidden">
      <button onClick={() => setOpen(true)} className="block text-3xl">
        <FiMenu />
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw" }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed left-0 top-0 flex h-screen w-full flex-col bg-[var(--color-bg-black)]"
          >
            <div className="flex items-center justify-between p-6">
              <Logo color="black" />
              <button onClick={() => setOpen(false)}>
                <FiX className="text-3xl text-white" />
              </button>
            </div>
            <div className="h-screen overflow-y-scroll bg-[var(--color-bg-black)] p-6">
              {LINKS.map((l) => (
                <MobileMenuLink
                  key={l.text}
                  href={l.href}
                  FoldContent={l.component}
                  setMenuOpen={setOpen}
                >
                  {l.text}
                </MobileMenuLink>
              ))}
            </div>
            <div className="flex justify-end bg-neutral-950 p-6">
              <CTAs />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;

const LINKS = [
  {
    text: "Services",
    href: "/services",
    component: AboutUsContent,
  },
  // {
  //   text: "Careers",
  //   href: "#",
  //   component: CareersContent,
  // },
  {
    text: "Developpement",
    href: "#",
  },
];