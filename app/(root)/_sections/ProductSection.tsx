import ProductCard from '@/components/ProductCard';
import { sanityFetch } from '@/sanity/lib/live';
import { PRODUCTS_QUERY } from '@/sanity/lib/query';
import { Suspense } from 'react';

export default function ProductSection() {
	return (
		<section className='py-[5vmin]'>
			<div className='container mx-auto px-4 max-w-6xl'>
				<h1 className='text-4xl font-bold text-center'>
					Choose your Version
				</h1>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-8'>
					<Suspense fallback={<div>Loading...</div>}>
						<ProductList />
					</Suspense>
				</div>
			</div>
		</section>
	);
}

async function ProductList() {
	const { data: products } = await sanityFetch({
		query: PRODUCTS_QUERY,
	});

	return (
		<>
			{products.map((product) => (
				<ProductCard
					key={product._id}
					product={product}
				/>
			))}
		</>
	);
}
