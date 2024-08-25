import React from "react";

export const HeroMask = ({ setIsHovered }) => {
  return (
    <div className="relative flex h-[100dvh] w-full flex-col items-center justify-center text-semiblack">
      <h1
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        className="mb-20 text-9xl sm:text-6xl md:text-7xl xs:text-5xl"
      >
        ラーメン
      </h1>
    </div>
  );
};
