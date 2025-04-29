'use client';

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { groupVisitorsByDate } from '@/lib/utils';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {
	CartesianGrid,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';

export default function Visitor() {
	const [data, setData] = useState([]);
	const [selectedDuration, setSelectedDuration] = useState('1m');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const fetchData = async () => {
			const { data } = await axios.get(
				`/api/visitor?duration=${selectedDuration}`,
			);
			setData(data);
			setLoading(false);
		};

		fetchData();
	}, [selectedDuration]);

	return (
		<Card>
			<CardHeader>
				<CardTitle>Visitor</CardTitle>
				<CardDescription>
					Visitor of last {selectedDuration}
				</CardDescription>
			</CardHeader>
			<CardContent className='space-y-4 px-4'>
				<Select
					defaultValue={selectedDuration}
					onValueChange={setSelectedDuration}>
					<SelectTrigger className='w-[180px] border-primary '>
						<SelectValue
							placeholder='Select duration'
							className='text-black'
						/>
					</SelectTrigger>
					<SelectContent>
						<SelectItem value='1d'>Last 1 day</SelectItem>
						<SelectItem value='1w'>Last 1 week</SelectItem>
						<SelectItem value='1m'>Last 1 month</SelectItem>
					</SelectContent>
				</Select>

				{loading && <div className='text-center'> Loading...</div>}

				<VisitorChart data={data} />

				{/* list */}
				{data && data.length === 0 ? (
					<div className='flex items-center justify-center h-96'>
						<p className='text-gray-500'>No visitors found</p>
					</div>
				) : (
					<VisitorList data={data} />
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
