import Image from "next/image";
import React from "react";

export const End = () => {
  return (
    <div className="relative flex h-[100dvh] w-full flex-col items-center justify-center">
      <Image width={96}
        height={96}
          src="/accentsSvgs/noodles.svg"
          alt=""
          className="absolute bottom-10 right-10 h-24 w-24 blur-[1px] xs:h-10 xs:w-10"
        />
      <h4 className="text-3xl font-semibold text-lightbeige sm:text-2xl xs:text-xl">
        What are you waiting for?
      </h4>
      <h4 className="text-3xl font-semibold text-lightbeige sm:text-2xl xs:text-xl">
        Treat yourself to a bowl of ramen now!
      </h4>
    </div>
  );
};
