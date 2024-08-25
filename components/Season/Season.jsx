import { Noodles } from "@/utils/NoodleCard";
import React from "react";
import { NoodleCard } from "./Card/NoodleCard";

export const Season = () => {
  return (
    <div className="flex h-[480dvh] w-full flex-col items-center justify-center bg-semiblack text-lightbeige">
      <div className="my-10 text-center">
        <h2 className="text-6xl font-semibold md:text-center md:text-3xl lg:text-4xl xs:text-2xl">
          A RAMEN FOR EACH SEASON
        </h2>
      </div>
      <div className="h-full w-[85%]">
        {Noodles.map((item) => {
          return <NoodleCard {...item} key={item.id} />;
        })}
      </div>
    </div>
  );
};
