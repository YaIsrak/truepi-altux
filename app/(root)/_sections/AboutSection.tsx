"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { BlurFade } from "@/components/ui/blur-fade";
import RedImage from "@/public/products/red.png";
import Image from "next/image";
import { BookOpen, Target, Users, Zap } from "lucide-react";
import Typewriter from "typewriter-effect";
export default function AboutSection() {
  const bgRef = useRef<HTMLDivElement | null>(null);
  const yellowRef = useRef<HTMLImageElement | null>(null);
  const redRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(bgRef.current, {
      x: -200,
      opacity: 0,
      duration: 1,
    })
      .from(
        yellowRef.current,
        {
          x: -100,
          opacity: 0,
          duration: 1,
        },
        "+=0.2"
      )
      .from(
        redRef.current,
        {
          x: 100,
          opacity: 0,
          duration: 1,
        },
        "-=0.6"
      );
  }, []);

  return (
    <section
      className="py-20 relative flex flex-col-reverse md:flex-col"
      id="about  "
    >
      {/* Background shapes */}
      <div
        ref={bgRef}
        className="absolute bg-blue-300/20 rounded-r-full w-[85%] md:w-[40%] h-44 md:h-80 top-[550px] md:top-52 left-0"
      ></div>
      <div className="absolute border-primary/20 border-3 border-l-0 rounded-r-full w-[90%] md:w-[45%] top-[530px] h-52 md:h-96  md:top-44 left-0"></div>

      <div className="container mx-auto px-4 max-w-7xl">
        <BlurFade className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Images */}
          <BlurFade delay={0.15}>
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] mt-12">
              <Image
                ref={yellowRef}
                src="/products/yellow.png"
                alt="Product Yellow"
                className="object-contain absolute left-16 sm:left-24 top-0 rotate-[-4deg] w-[140px] sm:w-[200px] md:w-[250px]"
                width={300}
                height={300}
              />
              <Image
                ref={redRef}
                src={RedImage}
                alt="Product Red"
                className="object-contain absolute right-8 sm:right-20 bottom-16 rotate-[12deg] z-10 w-[130px] sm:w-[200px] md:w-[250px]"
                width={300}
                height={300}
                placeholder="blur"
              />
            </div>
          </BlurFade>

          {/* Text Content */}
          <BlurFade delay={0.3}>
            <div>
              <span className="text-primary font-bold text-xl">About</span>
              <div className="border-b-2 border-gray-300 w-32 sm:w-44 mt-1" />
              <p className="text-base sm:text-lg text-gray-900 mt-6">
                After 3 months of meticulous research and real-world testing,
                I've created the ultimate guide for digital entrepreneurs. This
                isn't your average "get-rich-quick" scheme - it's a
                comprehensive system for building a sustainable digital product
                business.
              </p>

              <div className="space-y-4 mt-6">
                {[
                  {
                    icon: (
                      <BookOpen className="w-8 h-8 md:w-12 md:h-12  text-primary mt-1" />
                    ),
                    text: "Actionable Insights: Clear, step-by-step guidance tailored for digital creators and solo entrepreneurs.",
                  },
                  {
                    icon: (
                      <Target className="w-8 h-8 md:w-12 md:h-12  text-primary mt-1" />
                    ),
                    text: "Know Your Audience: Learn exactly how to define, understand, and attract your ideal customer.",
                  },
                  {
                    icon: (
                      <Users className="w-8 h-8 md:w-12 md:h-12  text-primary mt-1" />
                    ),
                    text: "Real-World Frameworks: Use frameworks that have been tested by real digital product entrepreneurs.",
                  },
                  {
                    icon: (
                      <Zap className="w-8 h-8 md:w-12 md:h-12  text-primary mt-1" />
                    ),
                    text: "Launch Fast: Get your first product live within days using clear, guided steps.",
                  },
                ].map(({ icon, text }, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-2 rounded-xl"
                  >
                    {icon}
                    <p className="text-gray-700 text-sm sm:text-base">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>
        </BlurFade>
      </div>

      {/* Bottom Quote and Stats */}
      <div className="text-center px-4 md:mt-20 max-w-5xl mx-auto">
        <h2 className="text-xl sm:text-3xl md:text-4xl leading-normal md:leading-relaxed font-bold text-black mb-10">
          “It is <span className="text-red-500 font-bold">NOT</span> just an
          eBook.{" "}
          <span>
            <Typewriter
              options={{
                strings: [
                  "It’s a weapon. A silent sales machine built for rebels.",
                ],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 50,
              }}
            />
          </span>{" "}
          who want <span className="text-primary">profit</span> without
          permission.”
        </h2>

        <div className="flex flex-wrap justify-center gap-6 text-center">
          {[
            { title: "35+", desc: "Battle-Tested Templates" },
            { title: "24/7", desc: "Run a Business Anytime, Anywhere" },
            { title: "5+", desc: "Digital Product Models" },
            { title: "100%", desc: "Built for Freedom & Impact" },
          ].map((item, i) => (
            <div
              key={i}
              className={`flex-1 min-w-[140px] sm:min-w-[160px] px-4 ${
                i === 1
                  ? "border-none md:border-r md:border-primary" // 2nd item: only border on lg+
                  : i === 3
                    ? "border-none " // 4th item: no border at all
                    : "border-r border-primary" // 1st and 3rd: always show border
              }`}
            >
              <h3 className="text-4xl font-bold text-black mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
