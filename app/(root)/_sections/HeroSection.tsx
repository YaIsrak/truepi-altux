import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
	return (
		<section
			className='py-[10vmin]'
			id='home'>
			<div className='container mx-auto px-2'>
				<div className='flex items-center justify-center flex-col text-center space-y-6'>
					<h1 className='max-w-xl text-5xl font-extrabold'>
						Take The First{' '}
						<span className='relative'>
							<Image
								alt=''
								src='/underline.png'
								className='absolute w-full h-full translate-y-1/2 left-0 -z-10 '
								fill
							/>
							Big Step
						</span>{' '}
						to Change The Course of your Life
						<span className='relative text-white'>
							<Image
								alt=''
								src='/brush_stroke.png'
								className='absolute w-full h-full top-0 left-0 -z-10 scale-x-125'
								fill
							/>
							Forever
						</span>
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

					<div className='relative w-full h-[350px]'>
						<Image
							src={'/showcase.png'}
							alt='showcase'
							fill
							className='w-full h-full object-contain'
						/>
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
