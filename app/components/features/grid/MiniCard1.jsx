import React from "react";
import { Card } from "../../utils/Card";
import { CalloutChip } from "../../utils/CalloutChip";
import { motion } from "framer-motion";
import { FiLink } from "react-icons/fi";
import { SiGoogleads } from "react-icons/si";
import BubbleButton from "../../buttons/BubbleButton";

export const MiniCard1 = () => {
  return (
    <div className="col-span-2 h-[375px] md:col-span-1">
      <Card>
        <div className="mx-auto w-fit">
          <CalloutChip>façon #2</CalloutChip>
        </div>
        <p className="mb-1.5 text-white text-center text-2xl">Référencement <span className="bg-gradient-to-br from-purple-300 to-purple-700 bg-clip-text text-transparent">naturel</span></p>
        <p className="mb-6 text-center text-zinc-400"><span className="text-white">Mettez en valeur</span> votre projet grace a notre expertise en SEO</p>
        <BubbleButton className="mx-auto">Nous contacter</BubbleButton>

        <Ping />
      </Card>
    </div>
  );
};

const LOOP_DURATION = 6;

const Ping = () => {
  return (
    <div className="absolute bottom-10 left-1/2 w-fit -translate-x-1/2 translate-y-1/2">
      <SiGoogleads className="relative z-10 text-7xl text-purple-200" />
      <Band delay={0} />
      <Band delay={LOOP_DURATION * 0.25} />
      <Band delay={LOOP_DURATION * 0.5} />
      <Band delay={LOOP_DURATION * 0.75} />
    </div>
  );
};

const Band = ({ delay }) => {
  return (
    <motion.span
      style={{
        translateX: "-50%",
        translateY: "-50%",
      }}
      initial={{
        opacity: 0,
        scale: 0.25,
      }}
      animate={{
        opacity: [0, 1, 1, 0],
        scale: 1,
      }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        times: [0, 0.5, 0.75, 1],
        duration: LOOP_DURATION,
        ease: "linear",
        delay,
      }}
      className="absolute left-[50%] top-[50%] z-0 size-60 rounded-full border border-purple-600 bg-gradient-to-br from-purple-600/50 to-blue-950/20"
    />
  );
};
