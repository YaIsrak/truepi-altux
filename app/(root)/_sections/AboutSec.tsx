import UnderlineAnimation from '@/components/ui/UnderlineAnimation';
import Word from '@/components/ui/Word';
import Image from 'next/image';
import CTATitle from './_components/CTATitle';

export default function AboutSec() {
	return (
		<section className='py-[15vmin]'>
			<div className='container mx-auto px-4 text-center max-w-8xl'>
				<CTATitle />
			</div>

			<div className='container mx-auto px-4 mt-[15vmin] grid grid-cols-1 md:grid-cols-2'>
				<div>
					<Image
						className='w-full h-auto'
						src='/ezgif-4c13cc0c46fb58.gif'
						alt='hero'
						width={500}
						height={500}
					/>
				</div>
				<div className='flex flex-col justify-center items-start text-left pb-12'>
					<Word
						className='text-lg lg:text-xl xl:text-2xl'
						wordClassName='mr-3'>
						REVEAL THE FORBIDDEN SALES SYSTEM. CRAFT A BRAND THAT DOESN'T
						JUST STAND OUT, IT DOMINATES. THIS ISN'T JUST AN EBOOK, IT'S
						YOUR BACKSTAGE PASS TO CREATING IRRESISTIBLE OFFERS, BUILDING
						KILLER SALES FUNNELS, AND MAKING A REAL BUSINESS THAT ACTUALLY
						PAYS LIKE A MACHINE.
					</Word>
				</div>
			</div>

			<div className='container mx-auto px-2 md:px-4 max-w-8xl mt-[15vmin] grid grid-cols-2 lg:grid-cols-4 gap-8'>
				<UnderlineAnimation className='col-span-2 pb-4 '>
					<p className='text-2xl md:text-3xl font-regular w-full md:w-[80%]'>
						<span className='font-euphoria font-bold'>Y</span>OU ARE NEVER
						LEFT ALONE WITH JUST THE EBOOK. IT IS IS ONLY THE BEGINNING
					</p>
				</UnderlineAnimation>
				<UnderlineAnimation className=' pb-4'>
					<p className='text-xl md:text-2xl xl:text-3xl font-light  xl:w-[80%]'>
						Unimaginable Lockstep Mentorship
					</p>
				</UnderlineAnimation>
				<UnderlineAnimation className='pb-4  xl:w-[80%]'>
					<p className='text-xl md:text-2xl xl:text-3xl  font-light'>
						A Whole Community to Back You Up
					</p>
				</UnderlineAnimation>
			</div>
		</section>
	);
}
