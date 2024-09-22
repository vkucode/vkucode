import React, { useState } from "react";
import { MaxWidthWrapper } from "../utils/MaxWidthWrapper";
import { Card } from "../utils/Card";
import { SiX } from "react-icons/si";
import BubbleButton from "../buttons/BubbleButton";
import { motion } from "framer-motion";
import { useWindowSize } from "../utils/useWindowSize";
import { CornerGrid } from "../utils/CornerGrid";
import { SectionHeading } from "../utils/SectionHeading";
import { SectionSubheading } from "../utils/SectionSubheading";
import { SectionHeadingSpacing } from "../utils/SectionHeadingSpacing";
import { BGGrid } from "../features/grid/BgGrid";

export default function Customers(){
  const { width } = useWindowSize();
  const [open, setOpen] = useState(false);

  const shouldCollapseColumns = width ? width <= 768 : false;

  return (
    <>
    <section id="testimonials" className="relative overflow-hidden bg-zinc-950">
      <MaxWidthWrapper className="relative z-10 py-20 md:py-40">
        <SectionHeadingSpacing>
          <SectionHeading>Les avis de nos <span className="text-purple-500">clients !</span></SectionHeading>
          <SectionSubheading>
            Découvrez ce disent nos clients sur la qualité, l'innovation et le respect des délais qui font la force de notre équipe.
          </SectionSubheading>
        </SectionHeadingSpacing>
        <motion.div
          initial={false}
          animate={open ? "open" : "closed"}
          style={{
            overflow: "hidden",
          }}
          variants={{
            open: {
              height: "fit-content",
            },
            closed: {
              height: 400,
            },
          }}
          className="relative grid grid-cols-1 gap-3 md:grid-cols-3"
        >
          {shouldCollapseColumns ? (
            <>
              <ReviewsColumn
                reviews={[...REVIEWS.left, ...REVIEWS.center, ...REVIEWS.right]}
              />
            </>
          ) : (
            <>
              <ReviewsColumn reviews={REVIEWS.left} />
              <ReviewsColumn reviews={REVIEWS.center} />
              <ReviewsColumn reviews={REVIEWS.right} />
            </>
          )}

          <motion.div
            variants={{
              open: {
                top: "100%",
              },
              closed: {
                top: "0%",
              },
            }}
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-b from-zinc-950/0 to-zinc-950"
          />
        </motion.div>
        <BubbleButton
          onClick={() => setOpen((pv) => !pv)}
          className="mx-auto mt-12"
        >
          {open ? "View less" : "View more"}
        </BubbleButton>
      </MaxWidthWrapper>
      <BGGrid />
    </section>

    </>
    
  );
};

const ReviewsColumn = ({ reviews }) => {
  return (
    <div className="h-fit space-y-3">
      {reviews.map((r) => (
        <Card
          style={{
            padding: "20px",
          }}
          key={r.name}
        >
          <div className="mb-1.5 flex items-center justify-between">
            <div className="relative flex items-center gap-2 py-2 text-xs">
              <img
                src={r.src}
                width={200}
                height={200}
                alt={`image client ${r.name}`}
                className="size-8 rounded-full"
              />
              <div>
                <span className="block font-medium text-zinc-300">
                  {r.name}
                </span>
              </div>
            </div>

          </div>
          <p className="text-white">{r.review}</p>
        </Card>
      ))}
    </div>
  );
};

const REVIEWS = {
  left: [
    {
      src: "/img/accueil/clients/larbre.ico",
      name: "L'arbre a Pains",
      handle: "@johns6",
      review:
        "Nous sommes extrêmement satisfaits des services offerts par cette entreprise pour la création de notre site web. Les délais ont été respectés, et les technologies utilisées sont à la pointe de l'innovation. Un travail impeccable!",
    },
    {
      src: "/img/accueil/clients/jby.png",
      name: "JBY Renovation",
      handle: "@DannyD",
      review:
        "Une prestation de haute qualité! Notre site est moderne et répond parfaitement à nos besoins. Les délais ont été respectés, et le service a été excellent du début à la fin.",
    },
    {
      src: "/img/accueil/clients/optilog.png",
      name: "Optilog",
      handle: "@phillipsp55104",
      review:
        "Le travail réalisé sur notre site web dépasse nos attentes. L’équipe a utilisé des technologies innovantes, respecté les délais et nous a fourni un site de qualité supérieure.",
    },
    {
      src: "/img/accueil/clients/ehc.png",
      name: "Groupe EHC",
      handle: "@andyandyandy",
      review:
        "L'expérience avec cette entreprise a été excellente. Ils ont respecté les délais et livré un site web qui utilise les dernières technologies. Très satisfait!",
    },
  ],
  center: [
    {
      src: "/img/accueil/clients/excellence.png",
      name: "Excellence BTP",
      handle: "@steves",
      review:
        "Un service rapide et de qualité. Le site web est à la hauteur de nos attentes, et les délais ont été parfaitement respectés.",
    },
    {
      src: "/img/accueil/clients/bills.png",
      name: "Bill's Burger",
      handle: "@petey.pete",
      review:
        "Une équipe professionnelle qui a su répondre à toutes nos attentes. Le site livré est moderne, innovant, et respectueux des délais impartis.",
    },
    {
      src: "/img/accueil/clients/platane.png",
      name: "Platane Pizza",
      handle: "@p.paulson44",
      review:
        "Des services de grande qualité. Le site livré est rapide, esthétique, et très fonctionnel, tout en respectant les délais annoncés.",
    },
    {
      src: "/img/accueil/clients/ornissa.png",
      name: "Ornissa",
      handle: "@andrewA",
      review:
        "Un excellent partenariat pour la création de notre site web. Le travail a été fait en temps voulu, avec des technologies modernes et une approche très professionnelle.",
    },
  ],
  right: [
    {
      src: "/img/accueil/clients/perdamaian.png",
      name: "Perdamaian",
      handle: "@jeffJ99",
      review:
        "Je recommande vivement cette entreprise! Le projet a été réalisé dans les délais avec un souci constant de qualité et d'innovation. Très satisfait du résultat final.",
    },
    {
      src: "/img/accueil/clients/like-up.png",
      name: "Like-Up",
      handle: "@jess",
      review:
        "Une expérience formidable du début à la fin. Le site livré est conforme à nos attentes et utilise des technologies de pointe. Les délais ont été respectés.",
    },
    {
      src: "/img/accueil/clients/delta.png",
      name: "Delta Invested",
      handle: "@banjamin4491",
      review:
        "L'équipe a respecté les délais et nous a fourni un site web de grande qualité. Les technologies utilisées sont modernes et efficaces. Nous sommes très contents du résultat.",
    },
    {
      src: "/img/accueil/clients/contaexact.png",
      name: "Contaexact",
      handle: "@frankyf00",
      review:
        "Un service rapide, de qualité et respectueux des délais. Le site livré est moderne et très bien conçu. Merci pour ce travail impeccable!",
    },
  ],
};
