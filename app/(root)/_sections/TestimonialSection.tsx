import { Star } from 'lucide-react';
import TestimonialMarquee from './_components/TestimonialMarquee';

export default function TestimonialSection() {
	return (
		<section
			className='py-[10vmin]'
			id='testimonials'>
			<div className='container mx-auto px-4 '>
				<h3 className='text-4xl font-bold text-center'>
					What our clients say
				</h3>

				<div className='flex items-center gap-1 justify-center mt-6'>
					{[...Array(5)].map((_, i) => (
						<Star
							key={i}
							fill='#efb100'
							className='text-yellow-500'
						/>
					))}
				</div>

				<div className='relative flex w-full flex-col items-center justify-center overflow-hidden mt-12'>
					<div className='group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]'>
						<div className='flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]'>
							<TestimonialMarquee />
						</div>
					</div>
					<div className='pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-background sm:block' />
					<div className='pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-background sm:block' />
				</div>
			</div>
		</section>
	);
}
