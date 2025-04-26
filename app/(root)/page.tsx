import AboutSec from './_sections/AboutSec';
import FaqSec from './_sections/FaqSec';
import FeaturesSec from './_sections/FeaturesSec';
import HeroSec from './_sections/HeroSec';
import ProductSec from './_sections/ProductSec';

export const metadata = {
	title: 'Truepi | Discover & Download Powerful eBooks Instantly',
	description:
		'Welcome to Truepi – your all-in-one digital bookstore for high-impact eBooks. Instantly access exclusive digital products designed to help you grow, earn, and learn smarter.',
};

export default function Home() {
	return (
		<>
			<HeroSec />
			<AboutSec />
			<ProductSec />
			<FeaturesSec />
			<FaqSec />
		</>
	);
}
