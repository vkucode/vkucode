import React from "react";
import { MaxWidthWrapper } from "./utils/MaxWidthWrapper";
import Image from "next/image";
import { SiInstagram, SiAwwwards, SiLinkedin, SiTiktok } from "react-icons/si";
import Link from "next/link";

export default function Footer(){


    const LogoColumn = () => {
        return (
          <div className="col-span-6 md:col-span-4 flex flex-col justify-start items-start">
            <Image src="/img/logoVKU.png" className="w-full max-w-[70px] lg:max-w-[100px]" width={300} height={300} alt="vkucode" />
            <span className="mt-4 inline-block text-sm w-full max-w-[300px] text-zinc-400">
            Experts en Création de Sites Web sur Mesure & Cybersécurité Avancée.
            </span>
            <span className="mt-1 inline-block text-sm text-zinc-400">
              ©VKU CODE - Tous droits réservés.
            </span>
          </div>
        );
      };
      
      const GenericColumn = ({ title, links }) => {
        return (
          <div className="col-span-6 space-y-2 text-sm md:col-span-2">
            <span className="block text-zinc-50">{title}</span>
            {links.map((l) => (
              <Link
                key={l.title}
                href={l.href}
                className="flex items-center gap-1.5 text-zinc-400 transition-colors hover:text-zinc-200 hover:underline"
              >
                {l.Icon && <l.Icon />}
                {l.title}
              </Link>
            ))}
          </div>
        );
      };

      
  return (
    <footer className="relative overflow-hidden py-12 bg-zinc-900">
      <MaxWidthWrapper className="relative z-20 grid grid-cols-12 gap-x-1.5 gap-y-6">
        <LogoColumn />
        <GenericColumn
          title="Services"
          links={[
            {
              title: "Creation Site Web",
              href: "/services",
            },
            {
              title: "Design Web UI/UX",
              href: "/services#design",
            },
            {
              title: "Cybersecurite",
              href: "/services#cybersecurite",
            },
            {
              title: "Application Mobile",
              href: "/services#application",
            },
            {
              title: "Application Desktop",
              href: "/services#software",
            },
          ]}
        />
        <GenericColumn
          title="Solutions"
          links={[
            {
              title: "Application Web",
              href: "/solutions",
            },
            {
              title: "E-commerce",
              href: "/solutions",
            },
            {
              title: "For Devs",
              href: "/solutions",
            },
            {
              title: "YzEat",
              href: "/solutions",
            },
          ]}
        />
        <GenericColumn
          title="Legal"
          links={[
            {
              title: "Mentions Legales",
              href: "/legales/mentions-legales",
            },
            {
              title: "Politique de cookies",
              href: "/legales/cookies",
            },
            {
              title: "Politique de confidentialite",
              href: "/legales/politique-de-confidentialite",
            },
          ]}
        />

        <GenericColumn
          title="Socials"
          links={[
            {
              title: "Instagram",
              href: "/#",
              Icon: SiInstagram,
            },
            {
              title: "TikTok",
              href: "/#",
              Icon: SiTiktok,
            },
            {
              title: "Linkedin",
              href: "/#",
              Icon: SiLinkedin,
            }, 
            {
              title: "Awwwards",
              href: "/#",
              Icon: SiAwwwards,
            }, 
          ]}
        />
      </MaxWidthWrapper>
    </footer>
  );
};

