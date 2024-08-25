import React from "react";
import { MdOutlineRamenDining } from "react-icons/md";
import { MagneticLogic } from "./MagneticLogic";
import Link from "next/link";

export const MagneticLogo = ({
  isMobile,
  isJapanese,
  setIsJapanese,
  isHovered,
  setIsHovered,
}) => {
  return (
    <nav className="fixed right-4 top-8 z-50 text-5xl">
      <MagneticLogic
        isMobile={isMobile}
        isJapanese={isJapanese}
        setIsJapanese={setIsJapanese}
        isHovered={isHovered}
        setIsHovered={setIsHovered}
      >
        <Link
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          href="/"
        >
          <MdOutlineRamenDining />
        </Link>
      </MagneticLogic>
    </nav>
  );
};
