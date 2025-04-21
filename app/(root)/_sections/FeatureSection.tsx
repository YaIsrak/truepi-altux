"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import CustomBtn from "@/components/ui/custom-btn";
import Image from "next/image";
import { motion } from "framer-motion";
import { features } from "@/lib/constant";



const zigzagVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    x: i % 2 === 0 ? -50 : 50,
    y: 30,
  }),
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function FeatureSection() {
  return (
    <section className="py-[10vmin] bg-white/20">
      <BlurFade className="container mx-auto px-4 max-w-6xl">
        <BlurFade className="pt-[5vmin]">
          <h3 className="text-4xl font-bold text-center uppercase">Features</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 items-center">
            {/* LEFT features */}
            <div className="flex flex-col items-end text-end space-y-8">
              {features
                .filter((_, i) => i % 2 === 0)
                .map((item, index) => (
                  <motion.div
                    key={index}
                    custom={index * 2}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={zigzagVariants}
                  >
                    <p>{item.label}</p>
                    <h4 className="text-3xl md:text-4xl uppercase">{item.text}</h4>
                  </motion.div>
                ))}
            </div>

            {/* IMAGE */}
            <BlurFade delay={0.65} className="flex items-center justify-center relative h-[400px] my-16">
              <Image
                alt="Book image"
                src="/products/blue.png"
                width={300}
                height={300}
                className="object-contain rounded-lg"
              />
            </BlurFade>

            {/* RIGHT features */}
            <div className="flex flex-col items-start text-start space-y-8">
              {features
                .filter((_, i) => i % 2 === 1)
                .map((item, index) => (
                  <motion.div
                    key={index}
                    custom={index * 2 + 1}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={zigzagVariants}
                  >
                    <p>{item.label}</p>
                    <h4 className="text-3xl md:text-4xl uppercase">{item.text}</h4>
                  </motion.div>
                ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center space-y-4">
            <h4 className="text-3xl uppercase font-bold">Loaded in 100+ page</h4>
            <a href="#products">
              <CustomBtn title="Get Now" />
            </a>
          </div>
        </BlurFade>
      </BlurFade>
    </section>
  );
}
