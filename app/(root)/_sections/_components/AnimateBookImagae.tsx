"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function AnimatedBookImage() {
  const ref = useRef(null);

  return (
    <div
      ref={ref}
      className="relative col-span-4 md:col-span-1 perspective-1000 "
    >
      <div className="bg-[#68402e] rounded-2xl h-[350px] w-[250px] p-6 z-10 relative">
        <h4 className="uppercase text-white text-3xl">packed in 100+ pages</h4>
      </div>

      <motion.div className="absolute top-12 z-10 w-[300px] h-[400px] ml-[-16]">
        <div className="flex items-center justify-center w-full h-full">
          <Image
            src="/book.png"
            alt="card"
            width={600}
            height={400}
            className="rounded-2xl w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
}
