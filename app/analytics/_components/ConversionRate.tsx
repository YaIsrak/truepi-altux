import { sanityFetch } from '@/sanity/lib/live';
import { SALES_QUERY } from '@/sanity/lib/query';
import axios from 'axios';

export default async function ConversionRate() {
	const { data: sales } = await sanityFetch({
		query: SALES_QUERY,
	});

	const { data: visitors } = await axios.get(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/visitor`,
	);

	const conversionRate = (sales.length / visitors.length) * 100;

	return (
		<>
			<div className='bg-primary p-6 rounded-2xl text-white'>
				<p className='font-bold text-4xl text-center'>{sales.length}</p>
				<p className='font-medium text-2xl text-center'>Total Sales</p>
			</div>
			<div className='bg-primary p-6 rounded-2xl text-white'>
				<p className='font-bold text-4xl text-center'>
					{conversionRate.toFixed(2)}%
				</p>
				<p className='font-medium text-2xl text-center'>
					Conversation rate
				</p>
			</div>
		</>
	);
}
