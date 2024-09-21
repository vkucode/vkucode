import React from "react";
import { SiGoogle, SiApple} from "react-icons/si";
import { FiArrowLeft } from "react-icons/fi";
import Image from "next/image";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const DarkGridAuth = () => {
  return (
    <div className="bg-zinc-950 w-screen h-screen flex flex-col justify-center items-center py-20 text-zinc-200 selection:bg-zinc-600">
      <BubbleButton className="absolute left-4 top-6 text-sm" link="/accueil">
        <FiArrowLeft />
        Retourner
      </BubbleButton>

      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.25,
          ease: "easeInOut",
        }}
        className="relative z-10 mx-auto w-full max-w-xl p-4"
      >
        <Heading />

        <SocialOptions />
        <Or />
        <Email />
        <Terms />
      </motion.div>

      <CornerGrid />
    </div>
  );
};

const Heading = () => (
  <div>
    <NavLogo />
    <div className="mb-9 mt-6 space-y-1.5">
      <h1 className="text-2xl font-semibold">Connectez-vous à votre compte</h1>
      <p className="text-zinc-400">
        Vous n'avez pas de compte ?{" "}
        <a href="#" className="text-purple-400">
          Créez-en un.
        </a>
      </p>
      <h2 className="mt-4 bg-gradient-to-r from-purple-200 to-purple-500 bg-clip-text text-transparent">PS: Attention cette partie est en cours de development !</h2>
    </div>
  </div>
);

const SocialOptions = () => (
  <div>
    <div className="mb-3 flex gap-3">
      <BubbleButton link="#" className="flex w-full justify-center py-3">
        <SiGoogle />
      </BubbleButton>
      <BubbleButton link="#" className="flex w-full justify-center py-3">
        <SiApple />
      </BubbleButton>
    </div>
    <BubbleButton link="#" className="flex w-full justify-center py-3">
        Connectez-vous avec votre adresse email
    </BubbleButton>
  </div>
);

const Or = () => {
  return (
    <div className="my-6 flex items-center gap-3">
      <div className="h-[1px] w-full bg-zinc-700" />
      <span className="text-zinc-400">OU</span>
      <div className="h-[1px] w-full bg-zinc-700" />
    </div>
  );
};

const Email = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="mb-3">
        <label htmlFor="email-input" className="mb-1.5 block text-zinc-400">
          Email
        </label>
        <input
          id="email-input"
          type="email"
          placeholder="votre.email@fournisseur.com"
          className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 placeholder-zinc-500 ring-1 ring-transparent transition-shadow focus:outline-0 focus:ring-purple-700"
        />
      </div>
      <div className="mb-6">
        <div className="mb-1.5 flex items-end justify-between">
          <label htmlFor="password-input" className="block text-zinc-400">
            Mot de passe
          </label>
          <a href="#" className="text-sm text-purple-400">
            Oublié ?
          </a>
        </div>
        <input
          id="password-input"
          type="password"
          placeholder="••••••••••••"
          className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 placeholder-zinc-500 ring-1 ring-transparent transition-shadow focus:outline-0 focus:ring-purple-700"
        />
      </div>
      <SplashButton type="submit" className="w-full">
        Se connecter
      </SplashButton>
    </form>
  );
};

const Terms = () => (
  <p className="mt-9 text-xs text-zinc-400">
    En vous connectant, vous acceptez nos{" "}
    <a href="#" className="text-purple-400">
      Termes et conditions
    </a>{" "}
    et notre{" "}
    <a href="#" className="text-purple-400">
      Politique de confidentialité.
    </a>
  </p>
);

const SplashButton = ({ children, className, ...rest }) => {
  return (
    <button
      className={twMerge(
        "rounded-md bg-gradient-to-br from-purple-400 to-purple-700 px-4 py-2 text-lg text-zinc-50 ring-2 ring-purple-500/50 ring-offset-2 ring-offset-zinc-950 transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:purple-blue-500/70",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

const BubbleButton = ({ children, link, className, ...rest }) => {
  return (
    <a href={link}
      className={twMerge(
        `relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-md 
        border border-zinc-700 bg-gradient-to-br from-zinc-800 to-zinc-950
        px-3 py-1.5
        text-zinc-50 transition-all duration-300
        
        before:absolute before:inset-0
        before:-z-10 before:translate-y-[200%]
        before:scale-[2.5]
        before:rounded-[100%] before:bg-zinc-100
        before:transition-transform before:duration-500
        before:content-[""]

        hover:scale-105 hover:text-zinc-900
        hover:before:translate-y-[0%]
        active:scale-100`,
        className
      )}
      {...rest}
    >
      {children}
    </a>
  );
};

const CornerGrid = () => {
  return (
    <div
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='rgb(255 255 255 / 0.3)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
      }}
      className="absolute right-0 top-0 z-0 size-[50vw]"
    >
      <div
        style={{
          backgroundImage:
            "radial-gradient(100% 100% at 100% 0%, rgba(9,9,11,0), rgba(9,9,11,1))",
        }}
        className="absolute inset-0"
      />
    </div>
  );
};

const NavLogo = () => {
  return (
    <a href="#">
      <Image className="w-full max-w-[80px]" src="/img/logoVKU.png" width={200} height={200} alt="logoVKU" />
    </a>
  );
};
