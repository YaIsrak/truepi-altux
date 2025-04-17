import { BlurFade } from '@/components/ui/blur-fade';
import { Button } from '@/components/ui/button';
import showcase from '@/public/showcase.png';
import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
	return (
		<section
			className='py-[10vmin]'
			id='home'>
			<div className='container mx-auto px-2 max-w-6xl'>
				<BlurFade className='flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:space-x-12'>
					{/* Left Content */}
					<BlurFade
						delay={0.15}
						className='text-center lg:text-left max-w-xl space-y-6 '>
						<h1 className='text-4xl lg:text-5xl font-extrabold'>
							Take The First{' '}
							<span className='relative inline-block'>
								<Image
									alt=''
									src='/underline.png'
									className='absolute w-full h-full translate-y-1/2 left-0 -z-10'
									fill
								/>
								Big Step
							</span>{' '}
							to Change The Course of your Life{' '}
							<span className='relative text-white inline-block'>
								<Image
									alt=''
									src='/brush_stroke.png'
									className='absolute w-full h-full top-0 left-0 -z-10 scale-x-125'
									fill
								/>
								Forever
							</span>
						</h1>

						<p className='text-base font-medium'>
							Created with care. Backed by research. Built for results.
						</p>

						{/* Stars */}
						<div className='flex justify-center lg:justify-start gap-1'>
							{[...Array(5)].map((_, i) => (
								<Star
									key={i}
									fill='#efb100'
									className='text-yellow-500'
								/>
							))}
						</div>

						{/* CTA Button */}
						<Button
							className='w-72 text-2xl py-6 rounded-2xl'
							size='lg'
							asChild>
							<Link href={'/#products'}>Get Started</Link>
						</Button>
					</BlurFade>

					{/* Right Image */}
					<BlurFade
						delay={0.3}
						className='relative w-full h-[400px] lg:h-[500px]'>
						<Image
							src={showcase}
							alt='showcase'
							fill
							className='object-contain'
						/>
					</BlurFade>
				</BlurFade>
			</div>
		</section>
	);
}
