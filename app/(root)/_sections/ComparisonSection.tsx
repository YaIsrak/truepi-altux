"use client";
import Image from "next/image";
import { FaAngry, FaCheckCircle } from "react-icons/fa";

const leftItems = [
  "A shady loophole that promises to make money overnight, but in reality, you instantly realize it's all BS after one read.",
  "Another recycled PDF from 2018 with zero originality, scammy tactic that sounds too good to be true.",
  "“Zero effort” promise designed to scam lazy buyers. In reality ‘Seller’ is the only person making money NOT you.",
  "No mentorship. Even if they promise, they will leave you chasing mirages in a desert of false hope.",
  "No community. No connection. You're isolated - Just you alone, bearing all the risk, hoping it doesn’t all collapse.",
];

const rightItems = [
  "A step-by-step system to build a real online business, completely transparent and impactful enough to satisfy you.",
  "A fresh, original guide packed with real value and actionable strategies that deliver genuine results.",
  "When you make money I make money too. Check the ‘But why are you selling your Goldmine?’ section.",
  "I’m committed to guiding you every step of the way, ensuring you never feel left in the dark.",
  "You're part of a real community - You're never alone; we've got your back like a family supporting you always.",
];

export default function ComparisonSection() {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800  text-white py-20 px-6 md:px-20 " id="comparison">
      <div className="container max-w-8xl mx-auto">
        <h2 className="text-center text-4xl font-extrabold text-primary mb-12 capitalize">
          What Make its Different?
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-center">
              Other Methods On Forum
            </h3>
            <ul className="space-y-5">
              {leftItems.map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <FaAngry className="text-secondary mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="bg-white/20 border-primary border p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-6 text-center ">
              The Reseller’s Cash Machine
            </h3>
            <ul className="space-y-5">
              {rightItems.map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <FaCheckCircle className="text-primary mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Box */}
        <div className="mt-16 bg-gray-800 border border-cyan-400 rounded-xl p-6 md:p-10 text-center relative">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-900 px-4 py-2 rounded-full border border-cyan-400">
            <Image src={"/dollar.gif"} alt="" width={50} height={50} />
          </div>
          <p className="text-sm md:text-base mb-4 leading-relaxed text-gray-300">
            If you still think those 5 to 10-year-old, $20 priced random trash
            methods can make you $$$ a day, which are shady in nature, where you
            have no clue what you're even buying until you've already paid, and
            then comes the real slap. You open it, hoping for gold, and instead,
            you're staring at some dull, frustrating nonsense you’d never even
            want to do. The kind of strategy that makes you question your
            sanity. They promise “exciting opportunities” that sound good on
            paper but are practically too hard or impossible to try. And if they
            work, it’s just once or twice before they pop like a bubble. If
            you're still holding onto that...
          </p>
          <p className="font-bold text-white text-lg">
            YOU'RE SERIOUSLY TRIPPIN,{" "}
            <span className="font-normal text-gray-400">
              And I do not suggest you buy this eBook.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
