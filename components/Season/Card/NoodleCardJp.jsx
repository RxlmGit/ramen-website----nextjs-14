import React from "react";
import Image from "next/image";

export const NoodleCardJp = ({
  title,
  id,
  jp,
  ramen,
  ramenDef,
  gradientColor,
  setIsHovered,
}) => {
  return (
    <div
      style={{
        width: "100%",
        color: "#ffff",
        backgroundColor: "#1f1f1f",
        top: `calc(-10.5vh + ${id * 4.9}em)`,
        marginBottom: `calc(15em / ${id})`,
      }}
      className="sticky top-0 mt-10 h-[540px] rounded-xl border-t-2 border-t-borderaccent"
    >
      <div className="h-full p-4">
        <div className="grid h-full w-full grid-cols-12 grid-rows-8 xs:grid-rows-8">
          <span
            style={{
              background: gradientColor,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              display: "inline-block",
            }}
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
            className="col-span-6 place-content-center text-5xl sm:text-2xl md:text-3xl lg:text-4xl xs:text-xl"
          >{`(${jp}) ${title}`}</span>
          <span
            style={{
              background: gradientColor,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              display: "inline-block",
            }}
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
            className="col-span-6 place-content-center text-5xl sm:text-2xl md:text-3xl lg:text-4xl xs:text-xl"
          >
            {ramen.toUpperCase()}
          </span>
          <span
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
            className="col-span-5 row-span-7 row-start-2 ml-4 mt-4 text-justify text-xl sm:col-span-12 sm:row-span-3 sm:text-lg md:col-span-12 md:row-span-3 md:text-lg lg:text-xl xs:col-span-12 xs:row-span-2 xs:ml-0 xs:text-center xs:text-xs"
          >
            {ramenDef}
          </span>
        </div>
      </div>
    </div>
  );
};
