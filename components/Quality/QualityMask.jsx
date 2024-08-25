import React from "react";

export const QualityMask = ({ setIsHovered }) => {
  return (
    <div className="grid h-[140vh] w-full grid-flow-dense grid-cols-12 grid-rows-2 gap-4 overflow-hidden p-4 text-semiblack">
      <div className="relative col-span-4 col-start-2 sm:col-span-5 xs:col-span-5 xs:col-start-1"></div>
      <div className="relative col-span-6 col-start-6 h-[80%] self-center sm:col-span-7"></div>
      <div className="relative col-span-3 col-start-4 h-[100%] sm:col-span-7 xs:col-span-7"></div>

      <h2
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        className="col-span-4 col-start-8 self-center text-xl sm:text-lg xs:text-xs"
      >
        "どの丼も品質の傑作で、ゆっくりと煮込まれた濃厚なスープから完璧に調理された麺まで、すべての要素が精密かつ丁寧に作られ、比類のない食事体験をお届けします。"
      </h2>
    </div>
  );
};
