import Image from "next/image";
import React from "react";

export const NoodleCard = ({
  title,
  id,
  link,
  ramen,
  ramenDef,
  gradientColor,
  alt,
  size,
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
        <div className="grid h-full w-full grid-cols-12 grid-rows-8 text-lightbeige xs:grid-rows-8">
          <span
            style={{
              background: gradientColor,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              display: "inline-block",
            }}
            className="col-span-6 place-content-center text-5xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl xs:text-xl"
          >{`(0${id}) ${title}`}</span>
          <span
            style={{
              background: gradientColor,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              display: "inline-block",
            }}
            className="col-span-6 place-content-center text-5xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl xs:text-xl"
          >
            {ramen.toUpperCase()}
          </span>
          <span className="col-span-5 row-span-7 row-start-2 ml-4 mt-4 text-justify text-xl sm:col-span-12 sm:row-span-3 sm:text-lg md:col-span-12 md:row-span-3 md:text-lg lg:text-xl xs:col-span-12 xs:row-span-2 xs:ml-0 xs:text-center xs:text-xs">
            {ramenDef}
          </span>

          <div className="relative col-span-6 col-start-7 row-span-6 mr-4 mt-4 sm:col-span-12 md:col-span-12 md:col-start-1 xs:col-span-12 xs:row-span-5 xs:mr-0">
            <Image
              className="rounded-lg"
              src={link}
              alt={alt}
              sizes={size}
              style={{ objectFit: "cover" }}
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
};
