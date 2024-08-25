import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";
import { IoLogoFacebook } from "react-icons/io";
import { motion } from "framer-motion";
import { MagneticLogic } from "./MagneticLogic";

export const MagneticLinks = ({
  isMobile,
  isJapanese,
  setIsJapanese,
  isHovered,
  setIsHovered,
}) => {
  const icons = [
    {
      icon: <FaLinkedin className="z-50 cursor-default text-2xl" />,
      href: "https://www.linkedin.com/in/niki-benjamin-rebutiaco/",
    },
    {
      icon: <GrGithub className="z-50 cursor-default text-2xl" />,
      href: "https://github.com/RxlmGit",
    },
    {
      icon: <IoLogoFacebook className="z-50 cursor-default text-2xl" />,
      href: "https://www.facebook.com/niks.rebutiaco",
    },
  ];
  return (
    <div className="fixed bottom-10 left-5 z-50 flex h-52 w-fit flex-col items-center justify-evenly xs:bottom-24">
      <MagneticLogic
        isHovered={isHovered}
        setIsHovered={setIsHovered}
        isJapanese={isJapanese}
        setIsJapanese={setIsJapanese}
      >
        {!isMobile && (
          <motion.span
            onClick={() => {
              setIsJapanese(!isJapanese);
            }}
            className="z-50 cursor-default rounded-full text-2xl font-black"
          >
            よ
          </motion.span>
        )}
      </MagneticLogic>
      {icons.map((icon, index) => (
        <MagneticLogic
          key={index}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          isJapanese={isJapanese}
          setIsJapanese={setIsJapanese}
        >
          <span className="rounded-full">
            <a href={icon.href} target="_blank">
              {icon.icon}
            </a>
          </span>
        </MagneticLogic>
      ))}
    </div>
  );
};
