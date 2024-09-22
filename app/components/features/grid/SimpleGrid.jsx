import React from "react";
import {
  FiCalendar,
  FiCheck,
  FiCloud,
  FiDollarSign,
  FiMoon,
  FiWatch,
} from "react-icons/fi";

export const SimpleGrid = () => (
  <div className="relative z-10 grid grid-cols-2 gap-y-9 gap-x-5 px-3 md:grid-cols-3 md:gap-12 md:px-6">
    <Item
      Icon={FiCalendar}
      title="Libérez votre emploi du temps"
      subtitle="Nous nous occupons de tout, afin que vous puissiez vous concentrer sur l'essentiel."
    />
    <Item
      Icon={FiWatch}
      title="Gagnez des dizaines d'heures"
      subtitle="Optimisez votre temps avec des solutions rapides et efficaces."
    />
    <Item
      Icon={FiMoon}
      title="Dormez sur vos deux oreilles"
      subtitle="Nous assurons une gestion fluide et sans souci de votre projet."
    />
    <Item
      Icon={FiDollarSign}
      title="Économisez des milliers"
      subtitle="Des solutions rentables qui respectent votre budget."
    />
    <Item
      Icon={FiCloud}
      title="Hébergement simplifié"
      subtitle="Des services d'hébergement performants et faciles à gérer."
    />
    <Item
      Icon={FiCheck}
      title="Tout ce dont vous avez besoin"
      subtitle="Des solutions complètes pour garantir la réussite de votre projet."
    />
  </div>
);

const Item = ({ Icon, title, subtitle }) => {
  return (
    <div>
      <h4 className="mb-1.5 flex items-start text-white text-lg font-medium md:text-xl">
        <Icon className="mr-1.5 h-[26px] text-purple-400" />
        {title}
      </h4>
      <p className="text-sm text-zinc-400 md:text-base">{subtitle}</p>
    </div>
  );
};
