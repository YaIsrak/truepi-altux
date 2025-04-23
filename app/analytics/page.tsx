import { sanityFetch } from '@/sanity/lib/live';
import { SALES_QUERY } from '@/sanity/lib/query';
import ProductChart from './_components/ProductChart';

export default async function AnalyticsPage() {
	const { data } = await sanityFetch({
		query: SALES_QUERY,
	});

	return (
		<section className='py-[15vmin]'>
			<div className='container mx-auto px-4 grid grid-cols-6 h-full divide-x-2'>
				<div className='col-span-1 p-4'>
					<div className='bg-blue-500 py-3 px-4 rounded-2xl text-white'>
						Product
					</div>
				</div>
				<div className='col-span-5 p-4'>
					<ProductChart sales={data} />
				</div>
			</div>
		</section>
	);
}
