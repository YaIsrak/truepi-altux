"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AnimatedBigWord() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.15]); // reduced max scale for safety

  return (
    <span ref={ref}>
      <motion.span
        style={{ display: "inline-block", scale }}
        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl inline-block origin-center leading-tight"
      >
        BIG
      </motion.span>
    </span>
  );
}
