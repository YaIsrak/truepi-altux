import { BlurFade } from '@/components/ui/blur-fade';
import RedImage from '@/public/products/red.png';
import Image from 'next/image';

export default function AboutSection() {
	return (
		<section
			className='py-[10vmin]'
			id='about'>
			<div className='container mx-auto px-4  max-w-6xl'>
				<BlurFade className='grid grid-cols-1 md:grid-cols-2 gap-4 space-y-12'>
					<BlurFade delay={0.15}>
						<div className='relative w-full h-[400px]'>
							<Image
								src={RedImage}
								alt='Product'
								className='object-contain rounded-2xl'
								fill
								placeholder='blur'
							/>
						</div>
					</BlurFade>
					<BlurFade
						delay={0.3}
						className='flex items-center justify-center'>
						<p className='text-3xl md:text-4xl font-semibold text-center relative'>
							<span className='text-6xl md:text-8xl absolute top-0 left-0 -translate-y-1/2 text-primary'>
								"
							</span>
							It's not an ebook; it's a weapon—an automated sales tool
							designed for rebels seeking to{' '}
							<span className=' text-white relative'>
								<Image
									alt=''
									src='/brush_stroke.png'
									className='absolute w-full h-full top-0 left-0 -z-10 scale-x-125'
									fill
								/>
								profit
							</span>{' '}
							without permission.
							<span className='text-6xl md:text-8xl absolute bottom-0 right-0 translate-y-1/2 text-primary'>
								"
							</span>
						</p>
					</BlurFade>
				</BlurFade>
			</div>
		</section>
	);
}
