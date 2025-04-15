import ProductCard from '@/components/ProductCard';
import { featuresList } from '@/lib/constant';
import { Star } from 'lucide-react';
// *[_type == "product"] | order(_createdAt asc)

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
			<section className='py-[5vmin]'>
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

			{/* Feature Section */}
			<section className='py-[10vmin] bg-muted'>
				<div className='container mx-auto px-4 max-w-6xl'>
					<h3 className='text-4xl font-bold text-center'>Features</h3>

					<div className='grid grid-cols-2 md:grid-cols-4 gap-4 space-y-4 mt-16'>
						{featuresList.map(({ title, description, icon: Icon }) => (
							<div
								key={title}
								className='flex items-center flex-col justify-center text-center space-y-2'>
								<Icon className='size-8' />
								<h3 className='text-xl font-bold mt-4'>{title}</h3>
								<p className='text-lg'>{description}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
