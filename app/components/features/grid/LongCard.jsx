import React, { useEffect, useState } from "react";
import { CalloutChip } from "../../utils/CalloutChip";
import { Card } from "../../utils/Card";
import { motion } from "framer-motion";
import {
  SiGithub,
  SiMongodb,
  SiReact,
  SiAdobe,
  SiFigma,
} from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill  } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";

export const LongCard = () => {
  return (
    <div className="col-span-2 h-fit sm:h-[209px]">
      <Card>
        <div className="relative z-20">
          <CalloutChip>façon #4</CalloutChip>
          <p className="mb-1.5 text-2xl text-white font-semibold">Nos <span className="bg-gradient-to-br from-purple-300 to-purple-700 bg-clip-text text-transparent">Technologies</span></p>
          <p className="max-w-md text-sm text-zinc-400">
            <span className="text-white">Afin de concevoir</span> des solutions performantes et adaptees a vos besoins, nous employons differentes technologies et outils avec nos partenaires. Afin de garantir le meilleur service.
          </p>
        </div>
        <div className="absolute bottom-0 right-0 top-0 z-10 w-48 bg-gradient-to-r from-zinc-950/0 to-zinc-950" />
        <SpinningLogos />
      </Card>
    </div>
  );
};

const SpinningLogos = () => {
  const { width } = useWindowSize();

  const [sizes, setSizes] = useState({
    radiusToCenterOfIcons: RADIUS_TO_CENTER_OF_ICONS.lg,
    iconWrapperWidth: ICON_WRAPPER_WIDTH.lg,
    ringPadding: RING_PADDING.lg,
    logoFontSize: LOGO_FONT_SIZE.lg,
  });

  useEffect(() => {
    if (!width) return;

    if (width < BREAKPOINTS.sm) {
      setSizes({
        radiusToCenterOfIcons: RADIUS_TO_CENTER_OF_ICONS.sm,
        iconWrapperWidth: ICON_WRAPPER_WIDTH.sm,
        ringPadding: RING_PADDING.sm,
        logoFontSize: LOGO_FONT_SIZE.sm,
      });
    } else if (width < BREAKPOINTS.md) {
      setSizes({
        radiusToCenterOfIcons: RADIUS_TO_CENTER_OF_ICONS.md,
        iconWrapperWidth: ICON_WRAPPER_WIDTH.md,
        ringPadding: RING_PADDING.md,
        logoFontSize: LOGO_FONT_SIZE.md,
      });
    } else {
      setSizes({
        radiusToCenterOfIcons: RADIUS_TO_CENTER_OF_ICONS.lg,
        iconWrapperWidth: ICON_WRAPPER_WIDTH.lg,
        ringPadding: RING_PADDING.lg,
        logoFontSize: LOGO_FONT_SIZE.lg,
      });
    }
  }, [width]);

  return (
    <div
      style={{
        width:
          sizes.radiusToCenterOfIcons +
          sizes.iconWrapperWidth +
          sizes.ringPadding,
        height:
          sizes.radiusToCenterOfIcons +
          sizes.iconWrapperWidth +
          sizes.ringPadding,
      }}
      className="absolute right-0 top-0 z-0 grid translate-x-1/3 place-content-center rounded-full bg-purple-900/50 shadow-inner"
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={TRANSITION}
        style={{
          width:
            sizes.radiusToCenterOfIcons -
            sizes.iconWrapperWidth -
            sizes.ringPadding,
          height:
            sizes.radiusToCenterOfIcons -
            sizes.iconWrapperWidth -
            sizes.ringPadding,
        }}
        className="relative grid place-items-center rounded-full shadow"
      >
        {ICON_DATA.map((icon, idx) => {
          const degrees = (360 / ICON_DATA.length) * idx;
          return (
            <motion.div
              key={idx}
              style={{
                marginTop:
                  sizes.radiusToCenterOfIcons *
                  Math.sin(degreesToRadians(degrees)),
                marginLeft:
                  sizes.radiusToCenterOfIcons *
                  Math.cos(degreesToRadians(degrees)),
                width: sizes.iconWrapperWidth,
                height: sizes.iconWrapperWidth,
              }}
              initial={{ rotate: 0 }}
              animate={{ rotate: -360 }}
              transition={TRANSITION}
              className="absolute grid place-content-center rounded-full bg-gradient-to-br from-purple-500 to-purple-800 text-blue-50 shadow-lg"
            >
              <icon.Icon
                style={{
                  fontSize: sizes.logoFontSize,
                }}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

const degreesToRadians = (degrees) => {
  return degrees * (Math.PI / 180);
};

const ICON_DATA = [
  {
    Icon: SiGithub,
  },
  {
    Icon: RiNextjsFill,
  },
  {
    Icon: SiReact,
  },
  {
    Icon: RiTailwindCssFill,
  },
  {
    Icon: FaNodeJs,
  },
  {
    Icon: SiMongodb,
  },
  {
    Icon: SiAdobe,
  },
  {
    Icon: SiFigma,
  },
];

// Defines the distance from the center of the circle to the center
// of the icons
const RADIUS_TO_CENTER_OF_ICONS = {
  sm: 150,
  md: 225,
  lg: 325,
};
// Defines the width of the icon circles
const ICON_WRAPPER_WIDTH = {
  sm: 40,
  md: 65,
  lg: 80,
};
// Defines the padding between the icon circles and the inner and outer rings
const RING_PADDING = {
  sm: 8,
  md: 12,
  lg: 24,
};
// Defines the font size for logos
const LOGO_FONT_SIZE = {
  sm: 18,
  md: 24,
  lg: 36,
};

const BREAKPOINTS = {
  sm: 480,
  md: 768,
};

const TRANSITION = {
  repeat: Infinity,
  repeatType: "loop",
  duration: 50,
  ease: "linear",
};
