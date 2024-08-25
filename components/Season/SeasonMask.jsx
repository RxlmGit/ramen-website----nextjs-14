import { NoodlesJapanese } from "@/utils/NoodleCard";
import React from "react";
import { NoodleCardJp } from "./Card/NoodleCardJp";

export const SeasonMask = ({ setIsHovered }) => {
  return (
    <div className="flex h-[480vh] w-full flex-col items-center justify-center bg-lightbeige">
      <div
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        className="my-10 text-center"
      >
        <h2 className="text-6xl md:text-center md:text-3xl lg:text-4xl xs:text-2xl">
          季節に合わせたラーメン
        </h2>
      </div>
      <div className="h-full w-[85%]">
        {NoodlesJapanese.map((item) => {
          return (
            <NoodleCardJp setIsHovered={setIsHovered} {...item} key={item.id} />
          );
        })}
      </div>
    </div>
  );
};
