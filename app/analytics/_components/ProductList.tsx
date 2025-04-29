import { SALES_QUERYResult } from '@/sanity.types';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';

export default function ProductList({ sales }: { sales: SALES_QUERYResult }) {
	return (
		<table className='bg-white w-full text-sm text-left'>
			<thead className='bg-gray-100 text-gray-600 uppercase text-xs'>
				<tr>
					<th className='px-2 py-3'>Ebook Title</th>
					<th className='px-2 py-3'>Purchase Time</th>
					<th className='px-2 py-3'>Transaction ID</th>
					<th className='px-2 py-3'>Email</th>
					<th className='px-2 py-3'>Amount</th>
				</tr>
			</thead>
			<tbody>
				{sales.map((book) => (
					<tr
						key={book._id}
						className='border-b hover:bg-gray-50'>
						<td className='px-2 py-4'>
							<div className='flex items-center flex-col justify-center text-current'>
								{book.product?.image && (
									<Image
										src={urlFor(book.product?.image).url()}
										alt={book.product?.title as string}
										width={40}
										height={40}
										className='object-cover rounded'
									/>
								)}
								<span>{book.product?.title}</span>
							</div>
						</td>
						<td className='px-2 py-4'>
							{new Date(book._createdAt).toISOString()}
						</td>
						<td className='px-2 py-4 text-blue-600 text-sm break-all'>
							{book.stripeId}
						</td>
						<td className='px-2 py-4'>{book.customerEmail}</td>
						<td className='px-2 py-4'>${book.amount}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
