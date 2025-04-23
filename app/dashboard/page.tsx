import { auth } from '@/auth';
import { Button } from '@/components/ui/button';
import { urlFor } from '@/sanity/lib/image';
import { sanityFetch } from '@/sanity/lib/live';
import { USER_SALES_QUERY } from '@/sanity/lib/query';
import Image from 'next/image';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
	const session = await auth();

	if (!session?.user) {
		redirect('/login');
	}

	const { data: purchases } = await sanityFetch({
		query: USER_SALES_QUERY,
		params: { customerEmail: session?.user?.email },
	});

	return (
		<div className='container mx-auto px-4'>
			<div className='p-6 min-h-screen'>
				<h2 className='text-2xl font-bold mb-6'>Ebook Purchase History</h2>
				<div className='rounded-xl border border-gray-200 overflow-x-auto'>
					<table className='bg-white w-full text-sm text-left'>
						<thead className='bg-gray-100 text-gray-600 uppercase text-xs'>
							<tr>
								<th className='px-6 py-3'>Ebook Title</th>
								<th className='px-6 py-3'>Purchase Time</th>
								<th className='px-6 py-3'>Transaction ID</th>
								<th className='px-6 py-3'>Amount</th>
								<th className='px-6 py-3'>Download</th>
							</tr>
						</thead>
						<tbody>
							{purchases.map((book) => (
								<tr
									key={book._id}
									className='border-b hover:bg-gray-50'>
									<td className='px-6 py-4'>
										<div className='flex items-center'>
											{book.product?.image && (
												<Image
													src={urlFor(book.product?.image).url()}
													alt={book.product?.title as string}
													width={40}
													height={40}
													className='object-cover rounded'
												/>
											)}
											<span className='ml-4'>
												{book.product?.title}
											</span>
										</div>
									</td>
									<td className='px-6 py-4'>
										{new Date(book._createdAt).toISOString()}
									</td>
									<td className='px-6 py-4 text-blue-600'>
										{book.stripeId}
									</td>
									<td className='px-6 py-4'>${book.amount}</td>
									<td className='px-6 py-4'>
										{book.approved ? (
											<a
												href={book.product?.downloadLink as string}
												target='_blank'
												rel='noopener noreferrer'>
												<Button variant='outline'>Download</Button>
											</a>
										) : (
											<span className='text-yellow-600 font-medium'>
												Pending Approval
											</span>
										)}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
