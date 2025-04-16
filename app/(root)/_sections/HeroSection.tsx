import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
	return (
		<section
			className='py-[10vmin]'
			id='home'>
			<div className='container mx-auto px-2'>
				<div className='flex items-center justify-center flex-col text-center space-y-6'>
					<h1 className='max-w-xl text-5xl font-extrabold'>
						Take The First Big Step to Change The Course of your Life
						Forever
					</h1>

					<p>Created with care. Backed by research. Built for results.</p>

					<div className='flex items-center gap-1'>
						{[...Array(5)].map((_, i) => (
							<Star
								key={i}
								fill='#efb100'
								className='text-yellow-500'
							/>
						))}
					</div>

					<div>
						{/* todo:  */}
						<h1>Image hobe</h1>
					</div>
					<div>
						<Button
							className='w-96 text-2xl py-6 rounded-2xl'
							size='lg'
							asChild>
							<Link href={'/#products'}>Get Started</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
