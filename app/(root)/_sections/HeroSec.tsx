"use client";
import AnimatedText from "@/components/ui/animated-text";
import CardDeck from "./_components/CardDeck";

export default function HeroSec() {
  return (
    <section className=" flex flex-col  relative overflow-hidden max-w-5xl mx-auto">
      <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 mix-blend-exclusion max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-center text-center mt-20">
          {/* Left side */}
          <AnimatedText
            className="items-center md:items-end text-xl  md:text-5xl font-bold font-hindMadurai leading-tight md:leading-tight uppercase"
            direction="left"
            lines={[
              "HUSTLE IN",
              (
                <div key="withdraw" className="hidden md:block leading-none">
                  <span className="font-euphoria font-light text-xl  md:text-5xl leading-none">
                    W
                  </span>
                  ITHDRAW
                </div>
              ) as unknown as string,
              (
                <div key="withdraw" className="md:hidden block">
                  silence
                </div>
              ) as unknown as string,
            ]}
          />

          {/* Right side */}
          <AnimatedText
            className="items-center md:items-start text-xl  md:text-5xl font-bold font-hindMadurai leading-snug uppercase"
            direction="right"
            lines={[
              (
                <div key="withdraw" className=" hidden md:block">
                  silence
                </div>
              ) as unknown as string,
              (
                <div
                  key="withdraw"
                  className="md:hidden flex flex-row items-center "
                >
                  <span className="font-euphoria font-light  text-xl  md:text-5xl ">
                    W
                  </span>
                  ITHDRAW
                </div>
              ) as unknown as string,
              "IN PEACE",
            ]}
          />
        </div>
      </div>

      <div className="mt-16 md:mt-0">
        <CardDeck />
      </div>

      <h2 className="flex items-center justify-center text-center w-full max-w-2xl uppercase px-4 sm:px-6 md:px-10 lg:px-0 mx-auto text-sm sm:text-base md:text-lg  font-extralight mt-8">
        LEARN TO BUILD A DIGITAL PRODUCT RESELLING EMPIRE FROM
        <br /> SCRATCH STEP-BY-STEP GUIDE WITH REAL EXAMPLES,
        <br /> SCREENSHOTS, AND PROVEN STRATEGIES TO LAUNCH FAST.
      </h2>
    </section>
  );
}
