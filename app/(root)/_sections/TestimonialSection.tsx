import { BlurFade } from "@/components/ui/blur-fade";
import { sanityFetch } from "@/sanity/lib/live";
import { REVIEWS_QUERY } from "@/sanity/lib/query";
import TestimonialSlider from "./_components/TestimonialSlider";

export default async function TestimonialSection() {
  const { data: testimonials } = await sanityFetch({
    query: REVIEWS_QUERY,
  });

  return (
    <section className="py-[10vmin] bg-white/10" id="testimonials">
      <BlurFade className="container mx-auto px-4 max-w-8xl">
        <h3 className="text-2xl md:text-4xl font-bold text-center">What our clients say</h3>

        <div className="flex items-center gap-1 justify-center mt-6">
          {[...Array(5)].map((_, i) => (
            <BlurFade key={i} delay={0.1 * i}>
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                fill="#efb100"
                className="w-5 h-5 text-yellow-500"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 5.861L19.336 24 12 19.896 4.664 24 6 15.611 0 9.75l8.332-1.595z" />
              </svg>
            </BlurFade>
          ))}
        </div>

        <div className="mt-12">
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </BlurFade>
    </section>
  );
}
