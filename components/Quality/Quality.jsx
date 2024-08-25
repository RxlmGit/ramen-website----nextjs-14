import Image from "next/image";
import chefBottom from "/public/imgs/QualitySection/chef-bottom.png";
import chefTopLeft from "/public/imgs/QualitySection/chef-topleft.png";
import chefTopRight from "/public/imgs/QualitySection/chef-topright.png";
import { useAnimation, motion, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

export const Quality = () => {
  const image1Ref = useRef(null);

  const isImage1InView = useInView(image1Ref, { once: true });

  const image1Controls = useAnimation();

  useEffect(() => {
    if (isImage1InView) {
      image1Controls.start("visible");
    }
  }, [isImage1InView, image1Controls]);

  return (
    <div className="grid h-[140vh] w-full grid-flow-dense grid-cols-12 grid-rows-2 gap-4 overflow-hidden p-4 text-lightbeige">
      <motion.div
        ref={image1Ref}
        initial="hidden"
        animate={image1Controls}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative col-span-4 col-start-2 sm:col-span-5 xs:col-span-5 xs:col-start-1"
      >
        <Image
          style={{
            objectFit: "cover",
          }}
          placeholder="blur"
          fill
          alt="an image of a man in the kitchen near the sink."
          sizes="(min-width: 1620px) 491px, (min-width: 780px) 30.73vw, calc(41.74vw - 23px)"
          src={chefTopLeft}
        />
      </motion.div>
      <motion.div
        ref={image1Ref}
        initial="hidden"
        animate={image1Controls}
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
        className="relative col-span-6 col-start-6 h-[80%] self-center sm:col-span-7"
      >
        <Image
          placeholder="blur"
          src={chefTopRight}
          fill
          alt="an image of 2 guys preparing food in the kitchen."
          sizes="(min-width: 1620px) 744px, (min-width: 780px) 46.1vw, (min-width: 640px) calc(58.33vw - 25px), calc(50vw - 24px)"
          style={{ objectFit: "cover" }}
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
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="relative col-span-3 col-start-4 h-[100%] sm:col-span-7 xs:col-span-7"
      >
        <Image
          fill
          placeholder="blur"
          alt="an image of a man roasting meat in the grill."
          sizes="(min-width: 1620px) 364px, (min-width: 780px) 23.05vw, calc(58.26vw - 25px)"
          src={chefBottom}
        />{" "}
      </motion.div>
      <motion.h2
        ref={image1Ref}
        initial="hidden"
        animate={image1Controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="col-span-4 col-start-8 self-center text-xl sm:text-lg xs:text-xs"
      >
        &quot;Each bowl is a masterpiece of quality, with every element—from the
        rich, slow-simmered broth to the perfectly cooked noodles—crafted with
        precision and care to deliver an unparalleled dining experience.&quot;
      </motion.h2>
    </div>
  );
};
