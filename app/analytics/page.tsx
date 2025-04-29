'use client';

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import axios from 'axios';
import { Suspense, useEffect, useState } from 'react';
import ProductChart from './_components/ProductChart';
import ProductList from './_components/ProductList';
import Visitor from './_components/Visitor';

export default function AnalyticsPageWrapper() {
	const [selectedDuration, setSelectedDuration] = useState('1m');

	return (
		<section className='py-[5vmin]'>
			<div className='container mx-auto px-4 w-full space-y-4'>
				<Select
					defaultValue={selectedDuration}
					onValueChange={setSelectedDuration}>
					<SelectTrigger className='w-[180px] border-primary'>
						<SelectValue placeholder='Select duration' />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value='1d'>Last 1 day</SelectItem>
						<SelectItem value='1w'>Last 1 week</SelectItem>
						<SelectItem value='1m'>Last 1 month</SelectItem>
					</SelectContent>
				</Select>

				<Suspense>
					<AnalyticsPage selectedDuration={selectedDuration} />
				</Suspense>
			</div>
		</section>
	);
}

function AnalyticsPage({ selectedDuration }: { selectedDuration: string }) {
	const [visitors, setVisitors] = useState([]);
	const [sales, setSales] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get(
				`/api/visitor?duration=${selectedDuration}`,
			);
			setVisitors(data);
		};
		fetchData();
	}, [selectedDuration]);

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get(
				`/api/sales?duration=${selectedDuration}`,
			);
			setSales(data);
		};
		fetchData();
	}, [selectedDuration]);

	return (
		<div className='grid grid-cols-2 gap-2'>
			<Suspense>
				<ConversionRate
					sales={sales}
					visitors={visitors}
				/>
			</Suspense>
			<Suspense fallback={<div>Loading...</div>}>
				<ProductSales sales={sales} />
			</Suspense>
			<Suspense fallback={<div>Loading...</div>}>
				<Visitor
					duration={selectedDuration}
					visitors={visitors}
				/>
			</Suspense>
		</div>
	);
}

function ProductSales({ sales }: { sales: any[] }) {
	return (
		<div className='space-y-4'>
			<ProductChart sales={sales} />
			<ProductList sales={sales} />
		</div>
	);
}

export function ConversionRate({
	sales,
	visitors,
}: {
	sales: any[];
	visitors: any[];
}) {
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
				<p className='font-medium text-2xl text-center'>Conversion rate</p>
			</div>
		</>
	);
}
