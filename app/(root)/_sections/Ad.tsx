import Image from "next/image";
import React from "react";

const Ad = () => {
  return (
    <section className="container max-w-8xl mx-auto bg-primary/5 rounded-2xl p-10 md:p-16 my-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <Image
          src={"/products/blue.png"}
          alt="Book Cover"
          width={300}
          height={300}
          className="-rotate-12 drop-shadow-xl"
        />

        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold capitalize leading-snug text-black mb-6">
            Only ebook on the entire internet that won't{" "}
            <span className="text-secondary">disappoint</span> you.
          </h2>
          <p className="text-gray-800 text-base md:text-lg mb-4">
            Instead of charging you upfront, I only win when <span className="font-semibold">you start winning</span>.
            Once you hit <span className="text-secondary font-bold">$10K/month</span>, I’ll introduce you to my top
            high-ticket systems to scale even faster.
          </p>

          <div className="mt-8 bg-primary/5 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-primary mb-2">Who This Is For?</h3>
            <ul className="list-disc list-inside text-gray-800 space-y-2 text-sm md:text-base">
              <li>You're driven to scale fast and want to see real results</li>
              <li>You’re tired of guessing and want proven systems that work</li>
              <li>You want traffic, sales, or viral growth using secret strategies</li>
              <li>You dream of owning a real business and becoming a successful entrepreneur</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ad;
