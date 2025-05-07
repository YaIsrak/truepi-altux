import LeftShowScroll from "@/components/ui/LeftShowScroll";
import Word from "@/components/ui/Word";
import Image from "next/image";

// TURN DIGITAL DOWNLOADS INTO DAILY DOLLARS — BY RESELLING PDF COURSES
// JOURNALS TOOL KITS TEMPLATES + MORE START CONFIDENTLY SCALE FAST
// WITH PROVEN STRATEGIES

export default function CTATitle() {
  return (
    <div className="text-center text-xl sm:text-2xl lg:text-4xl xl:text-6xl font-bold uppercase w-full px-4">
      {/* Row 1 */}
      <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4">
        <Word wordClassName="mr-1">TURN DIGITAL</Word>
        <div className="flex items-center">
          <Word className="text-3xl sm:text-5xl lg:text-8xl font-euphoria font-light">
            d
          </Word>
          <Word wordClassName="">OWNLOADS</Word>
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mt-2">
        <Word>INTO DAILY</Word>
        <Word>DOLLARS</Word>
        <LeftShowScroll>
          <Image
            src="/sale.png"
            alt="sale"
            width={110}
            height={60}
            className="inline-block rounded-md"
          />
        </LeftShowScroll>
      </div>

      {/* Row 3 */}
      <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mt-2">
        <div className="flex items-center">
          <Word className="text-3xl sm:text-5xl lg:text-8xl font-euphoria font-light">
            B
          </Word>
          <Word>Y</Word>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mt-2">
          <Word>RESELLING</Word>
          <Word>PDF</Word>
          <Word>COURSES</Word>
        </div>
        <Word>JOURNALS</Word>
      </div>

      {/* Row 4 */}
      <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mt-2">
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mt-2">
          <Word>Tool</Word>
          <Word>Kits</Word>
        </div>
        <Word>TEMPLATES</Word>
        <Word>+</Word>
        <Word>MORE</Word>
      </div>

      {/* Row 5 */}
      <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mt-2">
        <Word>START</Word>
        <LeftShowScroll>
          <Image
            src="/pp.png"
            alt="card"
            width={120}
            height={60}
            className="inline-block rounded-md"
          />
        </LeftShowScroll>
        <Word>CONFIDENTLY</Word>
      </div>

      {/* Row 6 */}
      <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mt-2">
        <Word>SCALE FAST</Word>
        <Word>WITH PROVEN</Word>
        <div className="flex items-center">
          <Word className="text-3xl sm:text-5xl lg:text-8xl font-euphoria font-light">
            S
          </Word>
          <Word>TRATEGIES</Word>
        </div>
      </div>
    </div>
  );
}
