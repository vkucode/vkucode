import { MaxWidthWrapper } from "../../utils/MaxWidthWrapper";
import React from "react";
import { Tower } from "./Tower";
import { MiniCard1 } from "./MiniCard1";
import { MiniCard2 } from "./MiniCard2";
import { LongCard } from "./LongCard";
import { SimpleGrid } from "./SimpleGrid";
import { SectionHeading } from "../../utils/SectionHeading";
import { SectionSubheading } from "../../utils/SectionSubheading";
import { SectionHeadingSpacing } from "../../utils/SectionHeadingSpacing";

export const Content = () => {
  return (
    <section>
      <MaxWidthWrapper className="relative z-20 pb-20 pt-20 md:pb-28 md:pt-40">
        <SectionHeadingSpacing>
          <SectionHeading>
            Montrez aux gens
            <br />
            <span className="bg-gradient-to-tr from-purple-300 to-purple-700 bg-clip-text text-transparent">
              ce qui vous rend superbe.
            </span>
          </SectionHeading>
          <SectionSubheading>
          <span className="text-white">Voici une bonne façon</span> de montrer à des professionnels de haut niveau ce que fait votre produit et à qui il s'adresse.
          </SectionSubheading>
        </SectionHeadingSpacing>

        <Grid />
        {/* <div className="my-12 h-[1px] w-full bg-gradient-to-r from-blue-800/0 via-purple-400/50 to-purple-800/0 md:my-20" />
        <SimpleGrid /> */}
      </MaxWidthWrapper>
    </section>
  );
};

const Grid = () => (
  <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
    <Tower />
    <div className="col-span-1 grid grid-cols-2 gap-4 lg:col-span-8 lg:grid-cols-2">
      <MiniCard1 />
      <MiniCard2 />
      <LongCard />
    </div>
  </div>
);
