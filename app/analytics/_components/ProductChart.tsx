'use client';

import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from '@/components/ui/chart';
import { SALES_QUERYResult } from '@/sanity.types';
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

function formatSalesByDateAndProduct(sales: SALES_QUERYResult) {
	const dataMap: Record<string, Record<string, number>> = {};

	for (const sale of sales) {
		const date = new Date(sale._createdAt).toISOString().split('T')[0];
		const productName = sale.product?.title;

		if (!productName) continue;

		if (!dataMap[date]) dataMap[date] = {};
		if (!dataMap[date][productName]) dataMap[date][productName] = 0;

		dataMap[date][productName] += sale.amount ?? 0;
	}

	const chartData = Object.entries(dataMap).map(([date, products]) => ({
		month: date,
		...products,
	}));

	// Sort by date
	chartData.sort((a, b) => a.month.localeCompare(b.month));

	return chartData;
}

const chartConfig = {
	amount: {
		label: 'Total Amount',
		color: '#2563eb',
	},
};

export default function ProductChart({ sales }: { sales: SALES_QUERYResult }) {
	const chartData = formatSalesByDateAndProduct(sales);

	return (
		<ChartContainer config={chartConfig}>
			<AreaChart
				accessibilityLayer
				data={chartData}
				margin={{ left: 12, right: 12 }}>
				<CartesianGrid vertical={false} />
				<XAxis
					dataKey='month'
					tickLine={false}
					axisLine={false}
					tickMargin={8}
					tickFormatter={(value) => value.slice(5)} // e.g., "04-22"
				/>
				<ChartTooltip
					cursor={false}
					content={<ChartTooltipContent indicator='line' />}
				/>
				{/* Dynamically render each product area */}
				{['Sigma', 'Respect', 'Aura'].map((product) => (
					<Area
						key={product}
						dataKey={product}
						type='monotone' // <- more stable than "natural"
						fill={`var(--color-${product.toLowerCase()})`}
						fillOpacity={0.4}
						stroke={`var(--color-${product.toLowerCase()})`}
					/>
				))}
			</AreaChart>
		</ChartContainer>
	);
}
