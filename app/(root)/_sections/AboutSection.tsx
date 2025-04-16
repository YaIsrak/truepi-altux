import RedImage from '@/public/products/red.png';
import Image from 'next/image';

export default function AboutSection() {
	return (
		<section
			className='py-[10vmin]'
			id='about'>
			<div className='container mx-auto px-4  max-w-6xl'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
					<div>
						<div className='relative w-full h-[50vmin]'>
							<Image
								src={RedImage}
								alt='Product'
								className='w-full h-full object-contain'
								fill
								placeholder='blur'
							/>
						</div>
					</div>
					<div className='flex items-center justify-center'>
						<p className='text-4xl font-semibold text-center relative'>
							<span className='text-8xl absolute top-0 left-0 -translate-y-1/2 text-primary'>
								"
							</span>
							It's not an ebook; it's a weapon—an automated sales tool
							designed for rebels seeking to profit without permission.
							<span className='text-8xl absolute bottom-0 right-0 translate-y-1/2 text-primary'>
								"
							</span>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
