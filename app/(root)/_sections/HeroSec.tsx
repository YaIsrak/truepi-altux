import Word from '@/components/ui/Word';
import CardDeck from './_components/CardDeck';

export default function HeroSec() {
	return (
		<section className='min-h-screen flex flex-col items-center justify-center relative overflow-hidden'>
			<div className='absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center mix-blend-exclusion w-full'>
				<div className='flex items-center justify-center gap-48'>
					<div>
						<div className='text-8xl font-bold'>
							HUSTLE IN <br />{' '}
							<span className='font-parisienne font-light'>W</span>
							ITHDRAW
						</div>
					</div>

					<div>
						<div className='text-8xl font-bold text-start'>
							SILENCE IN
							<br />
							PEACE
						</div>
					</div>
				</div>
			</div>
			<CardDeck />
			<Word
				className='absolute bottom-12 left-1/2 z-0 -translate-x-1/2 text-center max-w-xl justify-center'
				offset={['start 0.8', 'end 0.6']}>
				LEARN TO BUILD A DIGITAL PRODUCT RESELLING EMPIRE FROM SCRATCH
				STEP-BY-STEP GUIDE WITH REAL EXAMPLES, SCREENSHOTS, AND PROVEN
				STRATEGIES TO LAUNCH FAST.
			</Word>
		</section>
	);
}
