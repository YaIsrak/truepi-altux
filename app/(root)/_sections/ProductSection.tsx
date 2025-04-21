import { sanityFetch } from "@/sanity/lib/live";
import { PRODUCTS_QUERY } from "@/sanity/lib/query";

import { BlurFade } from "@/components/ui/blur-fade";
import { ProductSlider } from "./_components/ProductSlider";

export default async function ProductSection() {
  const { data: products } = await sanityFetch({
    query: PRODUCTS_QUERY,
  });

  return (
    <section className="py-[5vmin] bg-white/20" id="products">
      <BlurFade className="container mx-auto px-4 max-w-6xl">

        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Choose your Version
        </h1>
        <div className="mt-8">
          <ProductSlider products={products} />
        </div>
      </BlurFade>
    </section>
  );
}
