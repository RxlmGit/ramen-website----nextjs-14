import { useAnimation, motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import ramenleft from "/public/imgs/DefinitionSection/ramen-left.png";
import ramenmiddle from "/public/imgs/DefinitionSection/ramen-middle.png";
import ramenright from "/public/imgs/DefinitionSection/ramen-right.png";

export const Definition = () => {
  const image1Ref = useRef(null);

  const isImage1InView = useInView(image1Ref, { once: true });

  const image1Controls = useAnimation();

  useEffect(() => {
    if (isImage1InView) {
      image1Controls.start("visible");
    }
  }, [isImage1InView, image1Controls]);

  return (
    <div className="grid h-[80dvh] w-full grid-flow-dense grid-cols-11 gap-2 p-4 px-14 text-lightbeige xs:grid-cols-12 xs:grid-rows-5 xs:gap-1 xs:gap-y-10">
      <motion.h2
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="col-span-5 h-fit w-full self-center p-4 text-5xl font-semibold sm:col-span-12 sm:text-center sm:text-4xl md:text-2xl lg:text-3xl xs:col-span-12 xs:text-center xs:text-2xl"
      >
        A dish as diverse as the people who enjoy it.
      </motion.h2>

      <div className="col-span-6 grid h-full grid-cols-10 gap-x-4 sm:col-span-12 sm:row-span-4 xs:col-span-12 xs:row-span-4">
        <motion.div
          ref={image1Ref}
          initial="hidden"
          animate={image1Controls}
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative col-span-3 col-start-1 h-[60%] self-center xs:row-span-1 xs:h-[100%]"
        >
          <Image
            fill
            sizes="(min-width: 1620px) 221px, (min-width: 780px) calc(15.12vw - 21px), calc(30vw - 45px)"
            alt="An image of a bowl of ramen"
            src={ramenleft}
            style={{
              objectFit: "cover",
            }}
          />
        </motion.div>

        <motion.div
          ref={image1Ref}
          initial="hidden"
          animate={image1Controls}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          className="relative col-span-4 col-start-4 h-[80%] self-center"
        >
          <Image
            fill
            sizes="(min-width: 1620px) 300px, (min-width: 780px) calc(20.12vw - 22px), calc(40vw - 54px)"
            alt="An image of a bowl of ramen"
            src={ramenmiddle}
            style={{
              objectFit: "cover",
            }}
          />
        </motion.div>

        <motion.div
          ref={image1Ref}
          initial="hidden"
          animate={image1Controls}
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="relative col-span-3 col-start-8 h-[60%] self-center"
        >
          <Image
            fill
            sizes="(min-width: 1620px) 221px, (min-width: 780px) calc(15.12vw - 21px), calc(30vw - 45px)"
            alt="An image of a bowl of ramen"
            src={ramenright}
            style={{
              objectFit: "cover",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};
