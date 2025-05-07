/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import Card1 from "@/public/card1.png";
import Card2 from "@/public/card2.png";
import Card3 from "@/public/card3.png";
import Card4 from "@/public/card4.png";
import Card5 from "@/public/card5.png";

export default function CardDeck({
  className,
}: {
  className?: string;
  start?: boolean;
}) {
  const containerRef = useRef(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const [animateCards, setAnimateCards] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      setIsTablet(width >= 640 && width < 1024);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["center end", "end start"],
  });

  // Define transform ranges based on screen size
  const getTransforms = (
    mobileVal: number,
    tabletVal: number,
    desktopVal: number
  ) => {
    return isMobile ? mobileVal : isTablet ? tabletVal : desktopVal;
  };

  const rotateValues = [
    getTransforms(-6, -8, -9),
    getTransforms(-3, -4, -4.5),
    0,
    getTransforms(3, 4, 4.5),
    getTransforms(6, 8, 9),
  ];

  const xValues = [
    getTransforms(-80, -120, -160), // Decreased more
    getTransforms(-40, -70, -90), // Decreased more
    0,
    getTransforms(40, 70, 90), // Decreased more
    getTransforms(80, 120, 160), // Decreased more
  ];

  const rotate = rotateValues.map((v) =>
    useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [v, v, v * 8.7, v * 8.7])
  );
  const x = xValues.map((v) =>
    useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 0, v, v])
  );

  const cards = [
    {
      title: "Card 1",
      color: "bg-blue-500",
      x: x[0],
      rotate: rotate[0],
      image: Card1,
    },
    {
      title: "Card 2",
      color: "bg-red-500",
      x: x[1],
      rotate: rotate[1],
      image: Card2,
    },
    {
      title: "Card 3",
      color: "bg-green-500",
      x: x[2],
      rotate: rotate[2],
      image: Card3,
    },
    {
      title: "Card 4",
      color: "bg-yellow-500",
      x: x[3],
      rotate: rotate[3],
      image: Card4,
    },
    {
      title: "Card 5",
      color: "bg-purple-500",
      x: x[4],
      rotate: rotate[4],
      image: Card5,
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateCards(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (animateCards && cardRefs.current.length) {
      gsap.from(cardRefs.current, {
        y: -300,
        rotate: 20,
        opacity: 0,
        stagger: 0.3,
        duration: 1.5,
        ease: "power3.out",
      });
    }
  }, [animateCards]);

  return (
    <div ref={containerRef} className={`w-max-5xl ${className}`}>
      <div className="relative w-full h-[75vh] flex items-center justify-center">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className={`aspect-[6/8] w-40 md:w-52 lg:w-56 ${card.color} rounded-xl absolute`}
            style={{
              x: card.x,
              rotate: card.rotate,
              originY: 1,
              originX: 0.5,
              opacity: animateCards ? 1 : 0,
            }}
            ref={(el) => {
              if (el) cardRefs.current[index] = el;
            }}
          >
            <div className="flex items-center justify-center h-full text-white text-xl font-bold">
              <Image
                src={card.image}
                alt={card.title}
                className="rounded-xl object-cover w-full h-full"
                placeholder="blur"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
