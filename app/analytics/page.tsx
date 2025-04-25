import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { sanityFetch } from '@/sanity/lib/live';
import { SALES_QUERY } from '@/sanity/lib/query';
import { Suspense } from 'react';
import ProductChart from './_components/ProductChart';
import ProductList from './_components/ProductList';
import Visitor from './_components/Visitor';

export default async function AnalyticsPage() {
	return (
		<section className='py-[5vmin]'>
			<div className='container mx-auto px-4 w-full'>
				<Tabs
					defaultValue='sales'
					className='w-full'>
					<TabsList className='w-full'>
						<TabsTrigger value='sales'>Sales</TabsTrigger>
						<TabsTrigger value='visitor'>Visitor</TabsTrigger>
					</TabsList>
					<TabsContent value='sales'>
						<Suspense fallback={<div>Loading...</div>}>
							<ProductSales />
						</Suspense>
					</TabsContent>
					<TabsContent value='visitor'>
						<Suspense fallback={<div>Loading...</div>}>
							<Visitor />
						</Suspense>
					</TabsContent>
				</Tabs>
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
