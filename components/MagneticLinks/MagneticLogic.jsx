"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export const MagneticLogic = ({
  children,
  isJapanese,
  isHovered,
  setIsHovered,
}) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });

    if (isJapanese) {
      setIsHovered(true);
    }
  };

  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(!isHovered);
  };

  const { x, y } = position;

  return (
    <motion.div
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      ref={ref}
      animate={{ x, y }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 15,
        mass: 0.5,
        ease: "linear",
      }}
      className={`${isJapanese ? "hover:bg-lightbeige hover:text-5xl hover:text-black" : ""} rounded-full mix-blend-difference`}
    >
      {children}
    </motion.div>
  );
};
