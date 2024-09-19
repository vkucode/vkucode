import React from "react";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"] });

export const CalloutChip = ({ children }) => {
  return (
    <span className={`${orbitron.className} mb-4 inline-block w-fit tracking-widest text-white rounded-full border border-zinc-500 bg-gradient-to-br from-purple-300/15 to-purple-800 px-2 py-0.5 text-xs font-medium uppercase`}>
      {children}
    </span>
  );
};
