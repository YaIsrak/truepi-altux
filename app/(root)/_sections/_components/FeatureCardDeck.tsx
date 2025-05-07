"use client";

import Card3 from "@/public/card2.png";
import Card2 from "@/public/card3.png";
import Card1 from "@/public/card4.png";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function FeatureCardDeck({
  className,
  spread = 10, // Reduced vertical fall amount
}: {
  className?: string;
  spread?: number;
}) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["center end", "end start"],
  });

  // Cards rotate left like they're falling
  const rotate1 = useTransform(scrollYProgress, [0, 1], [10, -45]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [15, -60]);
  const rotate3 = useTransform(scrollYProgress, [0, 1], [20, -75]);

  const x = useTransform(scrollYProgress, [0, 1], [0, 0]); // stay centered
  const y1 = useTransform(scrollYProgress, [0, 1], [-10, spread * 1]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-20, spread * 2]);
  const y3 = useTransform(scrollYProgress, [0, 1], [-30, spread * 3]);

  const cards = [
    {
      title: "Unique",
      image: Card1,
      x,
      y: y1,
      rotate: rotate1,
    },
    {
      title: "Working",
      image: Card2,
      x,
      y: y2,
      rotate: rotate2,
    },
    {
      title: "Transparent",
      image: Card3,
      x,
      y: y3,
      rotate: rotate3,
    },
  ];

  return (
    <div ref={containerRef} className={className}>
      <div className="relative w-full flex items-center justify-start min-h-[600px] ml-[-40px]">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              x: card.x,
              y: card.y,
              rotate: card.rotate,
              zIndex: cards.length - index,
            }}
            transition={{ type: "spring", stiffness: 80, damping: 18 }}
          >
            <div className="relative w-[220px] md:w-[280px] xl:w-[320px] shadow-xl rounded-2xl overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                width={320}
                height={400}
                className="rounded-2xl w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
