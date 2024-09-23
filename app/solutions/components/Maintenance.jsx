import React, { useEffect, useState } from "react";
import { useAnimate } from "framer-motion";

export const GridHoverHero = () => {
  const [scope, animate] = useAnimate();

  const [size, setSize] = useState({ columns: 0, rows: 0 });

  useEffect(() => {
    generateGridCount();
    window.addEventListener("resize", generateGridCount);

    return () => window.removeEventListener("resize", generateGridCount);
  }, []);

  const generateGridCount = () => {
    const columns = Math.floor(document.body.clientWidth / 75);
    const rows = Math.floor(document.body.clientHeight / 75);

    setSize({
      columns,
      rows,
    });
  };

  const handleMouseLeave = (e) => {
    // @ts-ignore
    const id = `#${e.target.id}`;
    animate(id, { background: "rgba(129, 140, 248, 0)" }, { duration: 1.5 });
  };

  const handleMouseEnter = (e) => {
    // @ts-ignore
    const id = `#${e.target.id}`;
    animate(id, { background: "rgba(129, 140, 248, 1)" }, { duration: 0.15 });
  };

  return (
    <div className="bg-neutral-950">
      <div
        ref={scope}
        className="grid h-screen w-full grid-cols-[repeat(auto-fit,_minmax(75px,_1fr))] grid-rows-[repeat(auto-fit,_minmax(75px,_1fr))]"
      >
        {[...Array(size.rows * size.columns)].map((_, i) => (
          <div
            key={i}
            id={`square-${i}`}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            className="h-full w-full border-[1px] border-neutral-900"
          />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center p-8">
        <h1 className="text-center text-2xl font-black uppercase text-white sm:text-5xl md:text-5xl">
          Cette partie est en cours de development
        </h1>
        <p className="mb-6 mt-4 max-w-3xl text-center text-lg font-light text-neutral-500 md:text-xl">
        Notre équipe travaille actuellement à la création de cette section. Toutefois, n'hésitez pas à nous contacter via notre formulaire de contact pour toute question ou demande d'information. Nous restons à votre disposition pour vous accompagner dans vos besoins.
        </p>
        <button className="pointer-events-auto bg-indigo-400 px-4 py-2 text-xl font-bold uppercase text-neutral-950 mix-blend-difference">
          nous contacter
        </button>
      </div>
    </div>
  );
};