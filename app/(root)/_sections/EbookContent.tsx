"use client";
import { motion } from "framer-motion";
import { sections } from "@/lib/constant";


export default function EbookContent() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-12 xl:px-24 max-w-screen-2xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 text-center sm:text-left">
          What's Inside The Book?
        </h2>
        <p className="text-gray-700 text-base sm:text-lg max-w-2xl text-center sm:text-left mx-auto sm:mx-0">
          Your step-by-step guide to building, selling, and scaling digital
          products — without the guesswork.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ rotate: index === 0 ? -12 : 0 }}
            whileHover={{
              rotate: 0,
              backgroundColor: "#0F172A",
              color: "#FFFFFF",
            }}
            transition={{ duration: 0.3 }}
            className={`rounded-xl p-6 transition-all duration-300 border-2 border-gray-200 ${section.color}`}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              {section.title}
            </h3>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
              {section.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
