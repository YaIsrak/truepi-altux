'use client';

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { groupVisitorsByDate } from '@/lib/utils';
import {
	CartesianGrid,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';

export default function Visitor({
	duration,
	visitors,
}: {
	duration: string;
	visitors: any[];
}) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Visitor</CardTitle>
				<CardDescription>Visitor of last {duration}</CardDescription>
			</CardHeader>
			<CardContent className='space-y-4 px-4'>
				<VisitorChart data={visitors} />
				{visitors && visitors.length === 0 ? (
					<div className='flex items-center justify-center h-96'>
						<p className='text-gray-500'>No visitors found</p>
					</div>
				) : (
					<VisitorList data={visitors} />
				)}
			</CardContent>
		</Card>
	);
}

function VisitorList({ data }: { data: any[] }) {
	return (
		<table className='bg-white w-full text-sm text-left'>
			<thead className='bg-gray-100 text-gray-600 uppercase text-xs'>
				<tr>
					<th className='px-6 py-3'>IP</th>
					<th className='px-6 py-3'>Route</th>
					<th className='px-6 py-3'>Email</th>
					<th className='px-6 py-3'>Time</th>
				</tr>
			</thead>
			<tbody>
				{data.map((item) => (
					<tr
						key={item._id}
						className='border-b hover:bg-gray-50'>
						<td className='px-6 py-4 text-blue-600'>{item.ip}</td>
						<td className='px-6 py-4'>{item.page}</td>
						<td className='px-6 py-4'>{item.email && item.email}</td>
						<td className='px-6 py-4'>{item.visitedAt}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

function VisitorChart({ data }: { data: any[] }) {
	const chartData = groupVisitorsByDate(data);

	return (
		<Card className='w-full h-[350px]'>
			<ResponsiveContainer
				width='100%'
				height='100%'>
				<LineChart data={chartData}>
					<XAxis dataKey='date' />
					<YAxis allowDecimals={false} />
					<Tooltip />
					<CartesianGrid stroke='#ccc' />
					<Line
						type='monotone'
						dataKey='count'
					/>
				</LineChart>
			</ResponsiveContainer>
		</Card>
	);
}
