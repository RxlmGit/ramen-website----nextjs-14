import React from "react";

export const DiffMask = ({ setIsHovered }) => {
  return (
    <div className="flex flex-col gap-[25vh]">
      <div className="grid h-[70dvh] w-full grid-flow-dense grid-cols-12 grid-rows-5 px-10">
        <div className="col-span-3 col-start-2 row-span-5 h-full sm:col-span-8 sm:col-start-3 sm:row-span-4 sm:row-start-1 md:col-span-4 md:col-start-5 md:row-span-4 md:row-start-1 xs:col-span-10 xs:col-start-2 xs:row-span-4 xs:row-start-1"></div>

        <span
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className="col-span-4 col-start-6 row-start-3 self-center text-2xl sm:col-span-8 sm:col-start-3 sm:row-span-1 sm:text-center sm:text-xl md:col-span-4 md:col-start-5 md:row-span-1 md:row-start-5 md:text-center md:text-base xs:col-span-10 xs:col-start-2 xs:row-span-1 xs:text-center xs:text-base"
        >
          「長い一日の終わりに、温かいラーメンを食べてリラックスするのほど良いものはありません。一口ごとに心地よさを感じます。」
        </span>
      </div>

      <div className="grid h-[70dvh] w-full grid-flow-dense grid-cols-12 grid-rows-5 px-10">
        <div className="col-span-3 col-start-9 row-span-5 h-full sm:col-span-8 sm:col-start-3 sm:row-span-4 sm:row-start-1 md:col-span-4 md:col-start-5 md:row-span-4 md:row-start-1 xs:col-span-10 xs:col-start-2 xs:row-span-4 xs:row-start-1"></div>

        <span
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className="col-span-4 col-start-5 row-start-3 self-center text-2xl sm:col-span-8 sm:col-start-3 sm:row-span-1 sm:text-center sm:text-xl md:col-span-4 md:col-start-5 md:row-span-1 md:row-start-5 md:text-center md:text-base xs:col-span-10 xs:col-start-2 xs:row-span-1 xs:text-center xs:text-base"
        >
          「雨が降ったら、湯気の立つラーメンを食べて心地よいひとときを過ごしましょう。」
        </span>
      </div>

      <div className="grid h-[70dvh] w-full grid-flow-dense grid-cols-12 grid-rows-5 px-10">
        <div className="col-span-3 col-start-2 row-span-5 h-full sm:col-span-8 sm:col-start-3 sm:row-span-4 sm:row-start-1 md:col-span-4 md:col-start-5 md:row-span-4 md:row-start-1 xs:col-span-10 xs:col-start-2 xs:row-span-4 xs:row-start-1"></div>

        <span
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className="col-span-4 col-start-6 row-start-3 self-center text-2xl sm:col-span-8 sm:col-start-3 sm:row-span-1 sm:text-center sm:text-xl md:col-span-4 md:col-start-5 md:row-span-1 md:row-start-5 md:text-center md:text-base xs:col-span-10 xs:col-start-2 xs:row-span-1 xs:text-center xs:text-base"
        >
          「長い一日の終わりに、温かいラーメンを食べてリラックスするのほど良いものはありません。一口ごとに心地よさを感じます。」
        </span>
      </div>
    </div>
  );
};
