import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const Card = ({ className, children, style = {} }) => {
  return (
    <motion.div
      initial={{
        filter: "blur(2px)",
      }}
      whileInView={{
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        delay: 0.25,
      }}
      style={style}
      className={twMerge(
        "relative h-full w-full overflow-hidden rounded-2xl border border-purple-700 bg-gradient-to-br from-purple-950/50 to-purple-900/80 p-6",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
