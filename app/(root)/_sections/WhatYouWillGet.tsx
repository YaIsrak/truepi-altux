"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const benefits = [
  {
    icon: "/guidence.png", // Replace with your actual image path or use <svg>
    title: "Step-by-Step Guide",
    description:
      "From product creation to scaling to 10K/month even if you’re a beginner",
  },
  {
    icon: "/mentor.png", // Replace with your actual image path or use <svg>
    title: "Experienced Mentor",
    description:
      "Me as a mentor who has 4+ years of experience in reselling digital products.",
  },
  {
    icon: "/bonding.png", // Replace with your actual image path or use <svg>
    title: "Supportive Community",
    description:
      "A community of like-minded people sharing insights, case studies, and new opportunities to scale together.",
  },
];

export default function WhatYouWillGet() {
  return (
    <section className=" text-black py-20 px-4 md:px-20 container max-w-8xl mx-auto">
      <h2 className="text-center text-4xl font-extrabold text-black mb-16">
        WHAT YOU WILL GET
      </h2>

      {/* Card Section */}
      <div className="py-12 px-4 rounded-2xl">
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800  border border-gray-700 rounded-xl p-6 text-center space-y-4 transition-shadow hover:shadow-xl"
            >
              <div className="flex justify-center">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={60}
                  height={60}
                />
              </div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Community Section
      <div className="mt-24 text-center relative">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex justify-center items-center gap-2">
          <span role="img" aria-label="emoji">
            💸
          </span>
          JOIN OUR EXCITING COMMUNITY
          <span role="img" aria-label="emoji">
            💸
          </span>
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
          Connect with like-minded people who are serious about building real
          online businesses. Inside, we share powerful insights, fresh ideas,
          real case studies, and exclusive tools you won’t find anywhere else.
          Discover new methods, swap insider resources, and grow your network
          with people who get it. Track what others are doing and how. So you
          can learn, adapt, and level up faster.
        </p>
      </div> */}
    </section>
  );
}
