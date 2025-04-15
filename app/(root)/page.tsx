import FeatureSection from './_sections/FeatureSection';
import HeroSection from './_sections/HeroSection';
import ProductSection from './_sections/ProductSection';
// *[_type == "product"] | order(_createdAt asc)

export default function Home() {
	return (
		<>
			<HeroSection />
			<ProductSection />
			<FeatureSection />
		</>
	);
}
