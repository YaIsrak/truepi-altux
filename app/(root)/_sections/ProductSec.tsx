import AnimatedBigWord from "@/components/ui/animate-big-word";
import { Suspense } from "react";
import ProductTabs from "./_components/ProductTabs";
import { Testimonials } from "./_components/Testimonials";

export default function ProductSection() {
  return (
    <section className="py-[12vmin]" id="products">
      <div
        className="container max-w-8xl mx-auto flex flex-col items-center justify-center text-center max-w-5xl space-y-16"
        id="compare"
      >
        {/* header */}
        <div>
          <h2 className="text-4xl  font-bold mb-8 uppercase tracking-wider">
            Take The First <AnimatedBigWord /> Step
            <br /> Change The Course of Your Life
            <br /> Forever
          </h2>

          <div className="flex items-center justify-center text-xl divide-x-2 opacity-50">
            <p className="px-4">Created with care</p>
            <p className="px-4">Backed by research</p>
            <p className="px-4">Built for results</p>
          </div>
        </div>

        <div>
          <ProductTabs />
        </div>
      </div>

      <div className="pt-[15vmin]">
        <Suspense>
          <Testimonials />
        </Suspense>
      </div>
    </section>
  );
}
