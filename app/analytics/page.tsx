import { sanityFetch } from '@/sanity/lib/live';
import { SALES_QUERY } from '@/sanity/lib/query';
import { Suspense } from 'react';
import ConversionRate from './_components/ConversionRate';
import ProductChart from './_components/ProductChart';
import ProductList from './_components/ProductList';
import Visitor from './_components/Visitor';

export default async function AnalyticsPage() {
	return (
		<section className='py-[5vmin]'>
			<div className='container mx-auto px-4 w-full'>
				<div className='grid grid-cols-2 gap-2'>
					<Suspense>
						<ConversionRate />
					</Suspense>
					<Suspense fallback={<div>Loading...</div>}>
						<ProductSales />
					</Suspense>
					<Suspense fallback={<div>Loading...</div>}>
						<Visitor />
					</Suspense>
				</div>
			</div>
		</section>
	);
}

async function ProductSales() {
	const { data } = await sanityFetch({
		query: SALES_QUERY,
	});
	return (
		<div className='space-y-4'>
			<ProductChart sales={data} />
			<ProductList sales={data} />
		</div>
	);
}
