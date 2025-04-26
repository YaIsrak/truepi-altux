import Word from '@/components/ui/Word';
import Image from 'next/image';
import FeatureCardDeck from './_components/FeatureCardDeck';

export default function FeaturesSection() {
	return (
		<section className='py-[15vmin]'>
			<div className='container mx-auto px-4 lg:px-0 relative'>
				<Word
					className='text-6xl font-bold uppercase'
					wordClassName='mr-5'
					isUnderline>
					Whats in side
				</Word>

				{/* content */}
				<div className='grid grid-cols-3 md:grid-cols-5 mt-16'>
					<div className='relative'>
						<Image
							src='/card5.png'
							alt='card'
							className='rounded-2xl'
							width={500}
							height={500}
						/>
					</div>
					{/* grid-2 */}
					<div className='col-span-2 p-8 flex flex-col max-w-lg uppercase gap-8 items-center justify-center'>
						<div>
							<p className='text-sm font-light'>the product blueprint</p>
							<p className='font-light text-2xl'>
								product Creation to sourcing from 20+ marketplace
							</p>
						</div>
						<div>
							<p className='text-sm font-light'>
								automated sales strategy
							</p>
							<p className='font-light text-2xl'>
								STORE CREATION CUSTOMIZE AND OPTIMIZATION
							</p>
						</div>
						<div>
							<p className='text-sm font-light'>
								high converting funnel
							</p>
							<p className='font-light text-2xl'>
								UPSELL SEQUENCE TO DOUBLE THE ORDER VALUE
							</p>
						</div>
					</div>
					{/* grid-3 */}
					<div className='col-span-2 p-8 flex flex-col max-w-lg uppercase gap-8 items-center justify-center'>
						<div>
							<p className='text-sm font-light'>free customer magnet </p>
							<p className='font-light text-2xl'>
								SECRET LOOPHOLES TO GET 50K+ TARGETED VISITIORS
							</p>
						</div>
						<div>
							<p className='text-sm font-light'>
								ads that converts crazy
							</p>
							<p className='font-light text-2xl'>
								5-DAY META STRATEGY THAT OUTSELLS 100S PER DAY
							</p>
						</div>
						<div>
							<p className='text-sm font-light'>exclusive resources</p>
							<p className='font-light text-2xl'>
								MORE THAN $10K PRODUCTS & 100K+ CONTENTS
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className='my-[15vmin]'></div>

			<div className='container mx-auto px-4 lg:px-0 space-y-32'>
				<div className='flex justify-start'>
					<Word
						className='text-6xl font-bold max-w-md'
						wordClassName='mr-5'>
						START A REAL BUSINESS ONLINE
					</Word>
				</div>
				<div>
					<FeatureCardDeck />
				</div>
				<div className='flex justify-end'>
					<Word
						className='text-6xl font-bold max-w-md text-right justify-end'
						wordClassName='mr-5'>
						MAKE MONEY OR GET REFUNDED
					</Word>
				</div>
			</div>
		</section>
	);
}
