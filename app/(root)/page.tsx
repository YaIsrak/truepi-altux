import AboutSection from './_sections/AboutSection';
import FeatureSection from './_sections/FeatureSection';
import HeroSection from './_sections/HeroSection';
import ProductSection from './_sections/ProductSection';
import TestimonialSection from './_sections/TestimonialSection';

export default function Home() {
	return (
		<>
			<HeroSection />
			<AboutSection />
			<ProductSection />
			<TestimonialSection />
			<FeatureSection />
		</>
	);
}
