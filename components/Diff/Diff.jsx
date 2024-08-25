import Image from "next/image";
import React, { useEffect, useRef } from "react";
import ramenWork from "/public/imgs/DiffSection/ramen-after-work.png";
import ramenRain from "/public/imgs/DiffSection/ramen-in-the-rain.png";
import ramenSolo from "/public/imgs/DiffSection/ramen-solo.png";
import { useAnimation, motion, useInView } from "framer-motion";

export const Diff = () => {
  const image1Ref = useRef(null);

  const isImage1InView = useInView(image1Ref);

  const image1Controls = useAnimation();

  const image2Ref = useRef(null);

  const isImage2InView = useInView(image2Ref);

  const image2Controls = useAnimation();

  const image3Ref = useRef(null);

  const isImage3InView = useInView(image3Ref);

  const image3Controls = useAnimation();

  useEffect(() => {
    if (isImage1InView) {
      image1Controls.start("visible");
    }
  }, [isImage1InView, image1Controls]);

  useEffect(() => {
    if (isImage2InView) {
      image2Controls.start("visible");
    }
  }, [isImage2InView, image2Controls]);

  useEffect(() => {
    if (isImage3InView) {
      image3Controls.start("visible");
    }
  }, [isImage3InView, image3Controls]);

  return (
    <div className="flex flex-col gap-[25vh]">
      <div className="grid h-[70dvh] w-full grid-flow-dense grid-cols-12 grid-rows-5 px-10 text-lightbeige">
        <motion.div
          ref={image1Ref}
          initial="hidden"
          animate={image1Controls}
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative col-span-3 col-start-2 row-span-5 h-full sm:col-span-8 sm:col-start-3 sm:row-span-4 sm:row-start-1 md:col-span-4 md:col-start-5 md:row-span-4 md:row-start-1 xs:col-span-10 xs:col-start-2 xs:row-span-4 xs:row-start-1"
        >
          <Image
            fill
            placeholder="blur"
            sizes="(min-width: 1640px) 364px, (min-width: 1040px) calc(21.38vw + 18px), (min-width: 780px) calc(33.33vw - 27px), (min-width: 640px) calc(66.67vw - 54px), calc(83.44vw - 67px)"
            alt="an image of an old man enjoying ramen after work"
            src={ramenWork}
          />
        </motion.div>

        <span className="col-span-4 col-start-6 row-start-3 self-center text-2xl font-semibold sm:col-span-8 sm:col-start-3 sm:row-span-1 sm:text-center sm:text-xl md:col-span-4 md:col-start-5 md:row-span-1 md:row-start-5 md:text-center md:text-base xs:col-span-10 xs:col-start-2 xs:row-span-1 xs:text-center xs:text-base">
           	&ldquo;After a long day, nothing beats unwinding with a warm bowl of
          ramen—comfort in every slurp. 	&ldquo;
        </span>
      </div>

      <div className="grid h-[70dvh] w-full grid-flow-dense grid-cols-12 grid-rows-5 px-10 text-lightbeige">
        <motion.div
          ref={image2Ref}
          initial="hidden"
          animate={image2Controls}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative col-span-3 col-start-9 row-span-5 h-full sm:col-span-8 sm:col-start-3 sm:row-span-4 sm:row-start-1 md:col-span-4 md:col-start-5 md:row-span-4 md:row-start-1 xs:col-span-10 xs:col-start-2 xs:row-span-4 xs:row-start-1"
        >
          <Image
            fill
            placeholder="blur"
            sizes="(min-width: 1640px) 364px, (min-width: 1040px) calc(21.38vw + 18px), (min-width: 780px) calc(33.33vw - 27px), (min-width: 640px) calc(66.67vw - 54px), calc(83.44vw - 67px)"
            alt="an image of a man in a ramen shop slurping ramen soup while it is raining outside"
            src={ramenRain}
          />
        </motion.div>

        <span className="col-span-4 col-start-5 row-start-3 self-center text-2xl font-semibold sm:col-span-8 sm:col-start-3 sm:row-span-1 sm:text-center sm:text-xl md:col-span-4 md:col-start-5 md:row-span-1 md:row-start-5 md:text-center md:text-base xs:col-span-10 xs:col-start-2 xs:row-span-1 xs:text-center xs:text-base">
           	&ldquo;When the rain pours, let a steaming bowl of ramen be your cozy
          escape. 	&ldquo;
        </span>
      </div>

      <div className="grid h-[70dvh] w-full grid-flow-dense grid-cols-12 grid-rows-5 px-10 text-lightbeige">
        <motion.div
          ref={image3Ref}
          initial="hidden"
          animate={image3Controls}
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative col-span-3 col-start-2 row-span-5 h-full sm:col-span-8 sm:col-start-3 sm:row-span-4 sm:row-start-1 md:col-span-4 md:col-start-5 md:row-span-4 md:row-start-1 xs:col-span-10 xs:col-start-2 xs:row-span-4 xs:row-start-1"
        >
          <Image
            fill
            placeholder="blur"
            sizes="(min-width: 1640px) 364px, (min-width: 1040px) calc(21.38vw + 18px), (min-width: 780px) calc(33.33vw - 27px), (min-width: 640px) calc(66.67vw - 54px), calc(83.44vw - 67px)"
            alt="an image of a table with a bowl of finished ramen"
            src={ramenSolo}
          />
        </motion.div>

        <span className="col-span-4 col-start-6 row-start-3 self-center text-2xl font-semibold sm:col-span-8 sm:col-start-3 sm:row-span-1 sm:text-center sm:text-xl md:col-span-4 md:col-start-5 md:row-span-1 md:row-start-5 md:text-center md:text-base xs:col-span-10 xs:col-start-2 xs:row-span-1 xs:text-center xs:text-base">
           	&ldquo;After a long day, nothing beats unwinding with a warm bowl of
          ramen—comfort in every slurp. 	&ldquo;
        </span>
      </div>
    </div>
  );
};
