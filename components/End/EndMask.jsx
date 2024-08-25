import React from "react";

export const EndMask = ({ setIsHovered }) => {
  return (
    <div className="relative flex h-[100dvh] w-full flex-col items-center justify-center">
      <h4
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        className="text-3xl sm:text-2xl xs:text-xl font-semibold"
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
        className="text-3xlsm:text-2xl xs:text-xl font-semibold"
      >
        今すぐラーメンを一杯食べましょう！
      </h4>
    </div>
  );
};
