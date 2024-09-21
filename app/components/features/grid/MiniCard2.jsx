import React from "react";
import { Card } from "../../utils/Card";
import { CalloutChip } from "../../utils/CalloutChip";
import Image from "next/image";
import { SiX } from "react-icons/si";
import { CornerBlur } from "../../utils/CornerBlur";
import BubbleButton from "../../buttons/BubbleButton";

export const MiniCard2 = () => {



  return (
    <div className="col-span-2 h-[415px] sm:h-[375px] md:col-span-1">
      <Card>
        <CalloutChip>façon #3</CalloutChip>
        <p className="mb-1.5 text-2xl text-white">Statistique <span className="bg-gradient-to-br from-purple-300 to-purple-700 bg-clip-text text-transparent">du projet</span></p>
        <p className="text-zinc-400">
          Suivez le trafic de votre site via l'espace client pour une analyse detaillee.
        </p>
        <BubbleButton className="mt-2" link="/espace-client">Espace Client</BubbleButton>

        <div className="absolute bottom-0 left-2 right-2 z-10 h-40 rounded-xl border border-zinc-700 bg-zinc-800/50">
          <Image className="w-full rounded-xl" src="/img/accueil/header/chart.png" width={400} height={400} alt="chart VKU" />
        </div>
        <CornerBlur />
      </Card>
    </div>
  );
};
