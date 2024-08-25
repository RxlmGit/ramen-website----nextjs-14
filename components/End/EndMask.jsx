import Image from "next/image";
import React from "react";

export const EndMask = ({ setIsHovered }) => {
  return (
    <div className="relative flex h-[100dvh] w-full flex-col items-center justify-center">
            <Image width={96}
        height={96}
          src="/accentsSvgs/noodles.svg"
          alt=""
          className="absolute bottom-10 right-10 h-24 w-24 blur-[1px] xs:h-10 xs:w-10"
        />
      <h4
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        className="text-3xl sm:text-2xl xs:text-xl"
      >
        何を待っていますか?
      </h4>
      <h4
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        className="text-3xlsm:text-2xl xs:text-xl"
      >
        今すぐラーメンを一杯食べましょう！
      </h4>
    </div>
  );
};
