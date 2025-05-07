import UnderlineAnimation from "@/components/ui/UnderlineAnimation";
import Word from "@/components/ui/Word";
import AnimatedBookImage from "./_components/AnimateBookImagae";
import FeatureCardDeck from "./_components/FeatureCardDeck";

export default function FeaturesSection() {
  return (
    <section className="py-[15vmin]">
      <div className="container mx-auto px-4 lg:px-0 relative">
        <UnderlineAnimation className="max-w-xl pb-2 flex items-center flex-wrap text-left sm:text-left">
          <Word className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl  font-euphoria">
            W
          </Word>
          <Word className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase ">
            hats in side
          </Word>
        </UnderlineAnimation>

        {/* Content */}
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-8 mt-16">
          <div className="flex justify-center">
            <AnimatedBookImage />
          </div>

          {/* Column 1 */}
          <div className="flex justify-between items-center col-span-2">
            <div className="lg:col-span-2 px-4 sm:px-8 flex flex-col gap-8 text-left sm:text-left uppercase">
              <div>
                <p className="text-[12px] text-gray-400 font-light">
                  the product blueprint
                </p>
                <p className=" text-sm sm:text-2xl uppercase font-bold">
                  product Creation to sourcing from 20+ marketplace
                </p>
              </div>
              <div>
                <p className="text-[12px] text-gray-400 font-light">
                  automated sales strategy
                </p>
                <p className=" text-sm sm:text-2xl uppercase font-bold">
                  store creation customize and optimization
                </p>
              </div>
              <div>
                <p className="text-[12px] text-gray-400 font-light">
                  high converting funnel
                </p>
                <p className=" text-sm sm:text-2xl uppercase font-bold">
                  upsell sequence to double the order value
                </p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="lg:col-span-2 px-4 sm:px-8 flex flex-col gap-8 text-left sm:text-left uppercase">
              <div>
                <p className="text-[12px] text-gray-400 font-light">
                  free customer magnet
                </p>
                <p className=" text-sm sm:text-2xl uppercase font-bold">
                  secret loopholes to get 50k+ targeted visitors
                </p>
              </div>
              <div>
                <p className="text-[12px] text-gray-400 font-light">
                  ads that convert crazy
                </p>
                <p className=" text-sm sm:text-2xl uppercase font-bold">
                  5-day meta strategy that outsells 100s per day
                </p>
              </div>
              <div>
                <p className="text-[12px] text-gray-400 font-light">
                  exclusive resources
                </p>
                <p className=" text-sm sm:text-2xl uppercase font-bold">
                  more than $10k products & 100k+ contents
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative py-[12vmin] overflow-hidden">
        <div className="container mx-auto px-4 lg:px-0 flex flex-col lg:flex-row items-center lg:items-stretch relative">
          {/* Left - Centered Top Text */}
          <div className=" flex justify-center items-center text-left absolute top-44 z-20 ">
            <div className="space-y-6">
              <div>
                <div className="flex items-start gap-4 ">
                  <div className="flex  ">
                    <Word className="text-2xl md:text-6xl font-bold font-euphoria  uppercase">
                      N
                    </Word>
                    <Word className="text-2xl md:text-4xl font-bold   uppercase">
                      o
                    </Word>
                  </div>
                  <Word className="text-2xl md:text-4xl font-bold   uppercase">
                    More Guessing game.
                  </Word>
                </div>
                <h3 className="text-2xl md:text-4xl  font-bold  mix-blend-exclusion uppercase">
                  get strategies that guarantee
                  <br /> results
                </h3>
              </div>
            </div>
          </div>

          {/* Right - Card + Overlay */}
          <div className="w-full lg:w-1/2 relative ml-auto mt-28 md:mt-52 ">
            <FeatureCardDeck />

            {/* Overlapping Bottom Text */}
            <div className="absolute bottom-[-2px] md:bottom-[-80px]  right-0 z-40 text-right text-2xl md:text-4xl  font-bold uppercase mix-blend-exclusion">
              <div className="flex items-center">
                <Word className="text-4xl md:text-6xl  font-euphoria">M</Word>
                <Word
                  className="flex text-right justify-end"
                  wordClassName="mr-2 lg:mr-5"
                >
                  AKE MONEY
                </Word>
              </div>

              <div className="flex items-center text-right mt-2">
                <Word wordClassName="mr-2 lg:mr-5">OR GET</Word>
                <div className="flex items-center">
                  <Word className="text-2xl lg:text-4xl font-euphoria">R</Word>
                  <Word
                    className="flex text-right justify-end"
                    wordClassName="mr-2 lg:mr-5"
                  >
                    efunded
                  </Word>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
