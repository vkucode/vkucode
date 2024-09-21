import { SiGithub } from "react-icons/si";
import { CalloutChip } from "../../utils/CalloutChip";
import { Card } from "../../utils/Card";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiAward,
  FiBell,
  FiGrid,
  FiMail,
  FiSettings,
  FiUser,
} from "react-icons/fi";
import { useEffect, useState } from "react";
import { CornerBlur } from "../../utils/CornerBlur";
import { PulseLine } from "../../utils/PulseLine";

export const Tower = () => {
  return (
    <div className="col-span-1 h-[600px] lg:col-span-4 lg:h-[600px]">
      <Card>
        <PulseLine />

        <CalloutChip>façon #1</CalloutChip>
        <p className="mb-2 text-2xl text-white">Hebergement <span className="bg-gradient-to-br from-purple-300 to-purple-700 bg-clip-text text-transparent">web</span></p>
        <p className="mb-8 text-zinc-400 text-base">
          <span className="text-white">Profitez d'un hebergement web</span> <span className="bg-gradient-to-br from-purple-300 to-purple-700 bg-clip-text text-transparent">securise</span> et performant, adapte a vos besoins specifiques. Selectionez et securisez le nom de domaine ideal pour votre projet.
        </p>

        <CornerBlur />
        <MockUpVku />
        {/* <Mockup /> */}
      </Card>
    </div>
  );
};


const MockUpVku = () => (
  <div className="relative bottom-0 left-0 h-[340px] w-full rounded-xl sm:h-[370px]">
    <div className="relative">
      <Image
        className="relative w-full max-w-[250px] z-20"
        src="/img/accueil/header/carteciffre.png"
        width={500}
        height={500}
        alt="kasperVKU"
      />
      <motion.div
        className="absolute z-30 top-5 w-full max-w-[220px]"
        initial={{ top: "2rem" }}
        animate={{ top: "1.25rem" }} // Ajustează valorile de la `top` pentru efectul de mișcare
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1.5,
          ease: "easeInOut",
        }}
      >
        <Image
          className="w-full"
          src="/img/accueil/header/cartekasper.png"
          width={500}
          height={500}
          alt="kasperVKU"
        />
      </motion.div>
      <Image
        className="absolute z-10 w-full max-w-[150px] right-0 bottom-20"
        src="/img/accueil/header/cartevku.png"
        width={500}
        height={500}
        alt="vkucode"
      />
    </div>
  </div>
);
