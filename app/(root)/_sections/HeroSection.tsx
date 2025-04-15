import { Star } from 'lucide-react';

export default function HeroSection() {
	return (
		<section className='py-[10vmin]'>
			<div className='container mx-auto px-2'>
				<div className='flex items-center justify-center flex-col text-center space-y-6'>
					<h1 className='max-w-xl text-5xl font-extrabold'>
						Take The First Big Step to Change The Course of your Life
						Forever
					</h1>

					<p>Created with care. Backed by research. Built for results.</p>

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
	);
}
