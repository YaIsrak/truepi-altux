"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { BlurFade } from "@/components/ui/blur-fade";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Review } from "@/sanity.types";
import { TestimonialCard } from "./TestimonialCard";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

type Props = {
  testimonials: Review[];
};
export default  function TestimonialSlider({ testimonials }: Props) {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1440: { slidesPerView: 4 },
        }}
      >
        {testimonials.map((testimonial, i) => (
          <SwiperSlide key={testimonial._id}>
            <BlurFade delay={i * 0.1}>
              <TestimonialCard {...testimonial} />
            </BlurFade>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Navigation Arrows */}
      <div className="flex justify-end gap-4 mt-8">
        <button className="custom-prev transform text-primary text-3xl cursor-pointer z-10 border p-2 border-primary rounded-xl">
          <IoIosArrowRoundBack className="hover:text-primary" />
        </button>
        <button className="custom-next transform text-primary text-3xl cursor-pointer z-10 border p-2 border-primary rounded-xl">
          <IoIosArrowRoundForward className="hover:text-primary" />
        </button>
      </div>
    </div>
  );
}
