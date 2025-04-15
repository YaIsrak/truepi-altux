import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
	return (
		<>
			{/* Hero section */}
			<section className='py-[10vmin]'>
				<div className='container mx-auto px-2'>
					<div className='flex items-center justify-center flex-col text-center space-y-6'>
						<h1 className='max-w-xl text-5xl font-extrabold'>
							Take The First Big Step to Change The Course of your Life
							Forever
						</h1>

						<p>
							Created with care. Backed by research. Built for results.
						</p>

						<div className='flex items-center gap-1'>
							<Star
								fill='#efb100'
								className='text-yellow-500'
							/>
							<Star
								fill='#efb100'
								className='text-yellow-500'
							/>
							<Star
								fill='#efb100'
								className='text-yellow-500'
							/>
							<Star
								fill='#efb100'
								className='text-yellow-500'
							/>
							<Star
								fill='#efb100'
								className='text-yellow-500'
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Products display */}
			<section className='py-[10vmin]'>
				<div className='container mx-auto px-4 max-w-6xl'>
					<h1 className='text-4xl font-bold text-center'>
						Choose your Version
					</h1>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-8'>
						<ProductCard />
						<ProductCard />
						<ProductCard />
					</div>
				</div>
			</section>
		</>
	);
}

function ProductCard() {
	return (
		<div className='p-2 group'>
			<div className='relative rounded-2xl  overflow-hidden'>
				<Image
					src='/product.png'
					alt='Product'
					className='group-hover:scale-105 transition-all duration-150 ease-in-out'
					width={500}
					height={500}
				/>
			</div>

			<div className='mt-6'>
				<h2 className='text-2xl font-bold text-teal-500'>Product Name</h2>
				<div className='flex gap-2'>
					<p className='text-lg line-through text-muted-foreground'>
						$175
					</p>
					<p className='text-2xl font-bold'>$99</p>
				</div>
			</div>

			<div className='mt-4'>
				<Button
					className='w-full bg-blue-500 font-bold hover:shadow-md hover:shadow-blue-300 hover:bg-blue-600'
					size={'lg'}>
					Buy now
				</Button>
			</div>
		</div>
	);
}
