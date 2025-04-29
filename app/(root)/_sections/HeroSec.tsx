'use client';

import AnimatedText from '@/components/ui/animated-text';
import Word from '@/components/ui/Word';
import CardDeck from './_components/CardDeck';

export default function HeroSec() {
	return (
		<section className='min-h-screen flex flex-col items-center justify-center relative overflow-hidden'>
			<div className='absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 mix-blend-exclusion w-full'>
				<div className='flex flex-col md:flex-row items-center justify-center gap-y-70 lg:gap-4  text-center'>
					{/* Left side */}
					<AnimatedText
						className='items-center md:items-end  text-4xl sm:text-5xl lg:text-7xl xl:text-8xl   font-bold font-hindMadurai md:leading-snug md:wide uppercase'
						direction='left'
						lines={[
							'HUSTLE IN',
							(
								<div
									key='withdraw'
									className='hidden md:block'>
									<span className='font-euphoria font-light text-5xl  md:text-7xl lg:text-8xl xl:text-9xl  '>
										W
									</span>
									ITHDRAW
								</div>
							) as unknown as string,
							(
								<div
									key='withdraw'
									className='  md:hidden block'>
									silence
								</div>
							) as unknown as string,
						]}
					/>

					{/* Right side */}
					<AnimatedText
						className='items-center md:items-start text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold font-hindMadurai leading-snug uppercase'
						direction='right'
						lines={[
							(
								<div
									key='withdraw'
									className=' hidden md:block'>
									silence
								</div>
							) as unknown as string,
							(
								<div
									key='withdraw'
									className='md:hidden flex flex-row items-center '>
									<span className='font-euphoria font-light  text-5xl sm:text-6xl xl:text-8xl '>
										W{' '}
									</span>{' '}
									ITHDRAW
								</div>
							) as unknown as string,
							'IN PEACE',
						]}
					/>
				</div>
			</div>

			<div className='mt-16 md:mt-0'>
				<CardDeck />
			</div>

			<Word
				className='flex items-center justify-center text-center w-full max-w-3xl uppercase px-4 sm:px-6 md:px-10 lg:px-0 mx-auto text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed md:leading-loose'
				offset={['start 0.8', 'end 0.6']}>
				LEARN TO BUILD A DIGITAL PRODUCT RESELLING EMPIRE FROM SCRATCH
				STEP-BY-STEP GUIDE WITH REAL EXAMPLES, SCREENSHOTS, AND PROVEN
				STRATEGIES TO LAUNCH FAST.
			</Word>
		</section>
	);
}
