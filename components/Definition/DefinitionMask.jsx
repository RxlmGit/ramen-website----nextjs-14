import React from "react";

export const DefinitionMask = ({ setIsHovered }) => {
  return (
    <div className="grid h-[80dvh] w-full grid-flow-dense grid-cols-11 gap-2 p-4 px-14 xs:grid-cols-12 xs:grid-rows-5 xs:gap-1 xs:gap-y-10">
      <h2
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        className="col-span-5 h-fit w-full self-center p-4 text-5xl sm:col-span-12 sm:text-center sm:text-4xl md:text-2xl lg:text-3xl xs:col-span-12 xs:text-center xs:text-2xl"
      >
        楽しむ人と同じくらい多様な料理。
      </h2>

      <div className="col-span-6 grid h-full grid-cols-10 gap-x-4 sm:col-span-12 sm:row-span-4 xs:col-span-12 xs:row-span-4">
        <div className="relative col-span-3 col-start-1 h-[60%] self-center"></div>
        <div className="relative col-span-4 col-start-4 h-[80%] self-center"></div>
        <div className="relative col-span-3 col-start-8 h-[60%]"></div>
      </div>
    </div>
  );
};
