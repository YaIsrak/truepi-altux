import ProductCard from '@/components/ProductCard';
import { BlurFade } from '@/components/ui/blur-fade';
import { sanityFetch } from '@/sanity/lib/live';
import { PRODUCTS_QUERY } from '@/sanity/lib/query';
import { Suspense } from 'react';

export default function ProductSection() {
	return (
		<section
			className='py-[5vmin]'
			id='products'>
			<BlurFade className='container mx-auto px-4 max-w-6xl'>
				<h1 className='text-4xl font-bold text-center'>
					Choose your Version
				</h1>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-8'>
					<Suspense fallback={<div>Loading...</div>}>
						<ProductList />
					</Suspense>
				</div>
			</BlurFade>
		</section>
	);
}

async function ProductList() {
	const { data: products } = await sanityFetch({
		query: PRODUCTS_QUERY,
	});

	return (
		<>
			{products.map((product, i) => (
				<BlurFade
					key={i}
					delay={i * 0.1}>
					<ProductCard
						key={product._id}
						product={product}
					/>
				</BlurFade>
			))}
		</>
	);
}
