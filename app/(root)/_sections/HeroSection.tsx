"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import CustomBtn from "@/components/ui/custom-btn";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.035,
    },
  }),
};
const AnimatedText = ({ text }: { text: string }) => (
  <>
    {text.split("").map((char, i) => (
      <motion.span
        key={i}
        custom={i}
        initial="hidden"
        animate="visible"
        variants={textVariants}
        className="inline-block"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </>
);

export default function HeroSection() {
  const redRef = useRef(null);
  const yellowRef = useRef(null);
  const greenRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

    tl.fromTo(
      redRef.current,
      { x: -100, y: 100, opacity: 0 },
      { x: 0, y: 0, opacity: 1 }
    )
      .fromTo(
        yellowRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1 },
        "-=0.7"
      )
      .fromTo(
        greenRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=0.7"
      );
  }, []);

  return (
    <section
      id="home"
      className="py-[10vmin] bg-[url('/bg-1.png')] bg-no-repeat bg-center bg-cover h-full"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <BlurFade className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <BlurFade
            delay={0.15}
            className="w-full text-center lg:text-left max-w-xl space-y-6"
          >
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold leading-snug md:leading-tight tracking-normal">
              <AnimatedText text=" Take The First " />
              <span className="relative inline-block">
                <Image
                  alt="underline"
                  src="/underline.png"
                  className="absolute w-full h-full translate-y-1/2 left-0 -z-10"
                  fill
                />
                <AnimatedText text="Big Step " />
              </span>
              <AnimatedText text="to Change The Course of your Life " />
              <span className="relative text-white inline-block">
                <Image
                  alt="brush"
                  src="/brush_stroke.png"
                  className="absolute w-full h-full top-0 left-0 -z-10 scale-x-125"
                  fill
                />
                <AnimatedText text="Forever" />
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg font-medium">
              Created with care. Backed by research. Built for results.
            </p>

            {/* Stars */}
            <div className="flex justify-center lg:justify-start gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill="#efb100" className="text-yellow-500" />
              ))}
            </div>

            {/* CTA Button */}
            <a href="#products">
              {" "}
              <CustomBtn title="Get Started" />
            </a>
          </BlurFade>

          {/* Right Images with GSAP Animations */}
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] flex items-center justify-center">
            {/* Red Book */}
            <div
              ref={redRef}
              className="absolute left-4 top-0 sm:left-8 sm:top-4 w-[100px] sm:w-[140px] md:w-[160px] opacity-0"
            >
              <Image
                src="/products/red.png"
                alt="Red Book"
                width={160}
                height={160}
                className="object-contain -rotate-12"
              />
            </div>

            {/* Yellow Book */}
            <div
              ref={yellowRef}
              className="absolute right-4 top-8 sm:right-12 sm:top-10 w-[100px] sm:w-[140px] md:w-[160px] opacity-0"
            >
              <Image
                src="/products/yellow.png"
                alt="Yellow Book"
                width={160}
                height={160}
                className="object-contain rotate-12"
              />
            </div>

            {/* Green Book */}
            <div
              ref={greenRef}
              className="w-[120px] sm:w-[160px] md:w-[180px] z-10 opacity-0"
            >
              <Image
                src="/products/green.png"
                alt="Green Book"
                width={180}
                height={180}
                className="object-contain"
              />
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
