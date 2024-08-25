"use client";
import Lenis from "lenis";
import useMousePosition from "@/utils/useMousePosition";
import { Hero } from "@/components/Hero/Hero";
import { HeroMask } from "@/components/Hero/HeroMask";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Season } from "@/components/Season/Season";
import { SeasonMask } from "@/components/Season/SeasonMask";
import { Quality } from "@/components/Quality/Quality";
import { DefinitionMask } from "@/components/Definition/DefinitionMask";
import { QualityMask } from "@/components/Quality/QualityMask";
import { Definition } from "@/components/Definition/Definition";
import { Diff } from "@/components/Diff/Diff";
import { DiffMask } from "@/components/Diff/DiffMask";
import { End } from "@/components/End/End";
import { EndMask } from "@/components/End/EndMask";

export default function Home() {
  const { x, y } = useMousePosition();

  const [isHovered, setIsHovered] = useState(false);

  const size = isHovered ? 400 : 40;

  const [scrollOffset, setScrollOffset] = useState({ scrollX: 0, scrollY: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset({
        scrollX: window.scrollX,
        scrollY: window.scrollY,
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const [isJapanese, setIsJapanese] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleSize();

    window.addEventListener("resize", handleSize);

    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return (
    <main className="h-[1235dvh] max-w-[1536px] text-balance">
      {!isMobile && isJapanese && (
        <motion.div
          aria-hidden="true"
          animate={{
            WebkitMaskPosition: `${x - size / 2 + scrollOffset.scrollX}px ${
              y - size / 2 + scrollOffset.scrollY
            }px`,
            WebkitMaskSize: `${size}px`,
            maskSize: `${size}`,
          }}
          transition={{
            type: "tween",
            ease: "backOut",
            duration: 0.4,
          }}
          className="mask absolute h-[1235dvh] w-full bg-lightbeige"
        >
          <section>
            <HeroMask setIsHovered={setIsHovered} />
          </section>

          <section>
            <DefinitionMask setIsHovered={setIsHovered} />
          </section>

          <section className="h-[15dvh]"></section>

          <section>
            <QualityMask setIsHovered={setIsHovered} />
          </section>

          <section className="h-[30dvh]"></section>

          <section>
            <SeasonMask setIsHovered={setIsHovered} />
          </section>

          <section className="h-[20dvh]"></section>

          <section>
            <DiffMask setIsHovered={setIsHovered} />
          </section>

          <section className="h-[10dvh]"></section>

          <section>
            <EndMask setIsHovered={setIsHovered} />
          </section>
        </motion.div>
      )}

      <div className="h-[1235dvh] w-full bg-semiblack">
        <section>
          <Hero
            isMobile={isMobile}
            isHovered={isHovered}
            setIsHovered={setIsHovered}
            isJapanese={isJapanese}
            setIsJapanese={setIsJapanese}
          />
        </section>

        <section>
          <Definition />
        </section>

        <section className="h-[15dvh]"></section>

        <section>
          <Quality />
        </section>

        <section className="h-[30dvh]"></section>

        <section>
          <Season />
        </section>

        <section className="h-[20dvh]"></section>

        <section>
          <Diff />
        </section>

        <section className="h-[10dvh]"></section>

        <section>
          <End />
        </section>
      </div>
    </main>
  );
}
