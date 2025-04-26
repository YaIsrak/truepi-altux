'use client';

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from '@/components/ui/chart';
import { SALES_QUERYResult } from '@/sanity.types';
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

const chartConfig = {
	desktop: {
		label: 'Amount',
		color: 'hsl(var(--chart-1))',
	},
} satisfies ChartConfig;

export default function ProductChart({ sales }: { sales: SALES_QUERYResult }) {
	const chartData = sales.map((sale) => ({
		date: new Date(sale._createdAt).toLocaleDateString('en-US', {
			month: 'short',
			day: 'numeric',
		}),
		desktop: sale.amount,
	}));

	return (
		<Card>
			<CardHeader>
				<CardTitle>Sales</CardTitle>
				<CardDescription>Sales over the last 6 months</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<AreaChart
						accessibilityLayer
						data={chartData}
						margin={{ left: 12, right: 12 }}>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey='date'
							tickLine={false}
							axisLine={false}
							tickMargin={8}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent indicator='line' />}
						/>
						<Area
							dataKey='desktop'
							type='natural'
							fill='var(--color-primary)'
							fillOpacity={0.4}
							stroke='var(--color-primary)'
						/>
					</AreaChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
