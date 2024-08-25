import React from "react";

export const EndMask = ({ setIsHovered }) => {
  return (
    <div className="relative flex h-[100dvh] w-full flex-col items-center justify-center">
      <img
        src="/accentsSvgs/noodles.svg"
        alt=""
        className="absolute bottom-10 right-10 h-24 w-24 blur-[1px]"
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
