import { motion } from "framer-motion";
import React from "react";
import { MagneticLinks } from "../MagneticLinks/MagneticLinks";
import { MagneticLogo } from "../MagneticLinks/MagneticLogo";

export const Hero = ({
  isMobile,
  isHovered,
  setIsHovered,
  isJapanese,
  setIsJapanese,
}) => {
  const name = "RAMEN";

  const defaultAnim = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative flex h-[100dvh] w-full flex-col items-center justify-center bg-semiblack text-lightbeige">
      <MagneticLogo
        isMobile={isMobile}
        isJapanese={isJapanese}
        setIsJapanese={setIsJapanese}
        isHovered={isHovered}
        setIsHovered={setIsHovered}
      />
      <MagneticLinks
        isMobile={isMobile}
        isJapanese={isJapanese}
        setIsJapanese={setIsJapanese}
        isHovered={isHovered}
        setIsHovered={setIsHovered}
      />
      <h1 className="mb-20 text-9xl sm:text-6xl md:text-7xl xs:text-5xl">
        <span className="sr-only">{name}</span>
        <motion.span
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
          aria-hidden="true"
        >
          {name.split("").map((char) => (
            <motion.span
              key={char}
              className="inline-block font-medium"
              variants={defaultAnim}
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      </h1>
    </div>
  );
};
