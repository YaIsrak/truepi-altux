export const metadata = {
  title: "Truepi | Discover & Download Powerful eBooks Instantly",
  description:
    "Welcome to Truepi – your all-in-one digital bookstore for high-impact eBooks. Instantly access exclusive digital products designed to help you grow, earn, and learn smarter.",
};

import AboutSection from "./_sections/AboutSection";
import Ad from "./_sections/Ad";
import ComparisonSection from "./_sections/ComparisonSection";
import EbookContent from "./_sections/EbookContent";
import FeatureSection from "./_sections/FeatureSection";
import HeroSection from "./_sections/HeroSection";
import ProductSection from "./_sections/ProductSection";
import TestimonialSection from "./_sections/TestimonialSection";
import WhatYouWillGet from "./_sections/WhatYouWillGet";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProductSection />
      <WhatYouWillGet />
      <EbookContent />
      <Ad />
      <ComparisonSection />
      <TestimonialSection />
      <FeatureSection />
    </>
  );
}
