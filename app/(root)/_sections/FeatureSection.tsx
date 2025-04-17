import { BlurFade } from '@/components/ui/blur-fade';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { featuresList } from '@/lib/constant';
import Image from 'next/image';

export default function FeatureSection() {
	return (
		<section className='py-[10vmin] bg-muted'>
			<BlurFade className='container mx-auto px-4 max-w-6xl'>
				<h3 className='text-4xl font-bold text-center'>Features</h3>

				{/* features */}
				<BlurFade
					delay={0.15}
					className='grid grid-cols-2 md:grid-cols-4 gap-4 space-y-4 mt-16'>
					{featuresList.map(({ title, description, icon: Icon }, i) => (
						<BlurFade
							key={title}
							delay={0.15 * i}
							className='flex items-center flex-col justify-center text-center space-y-2'>
							<Icon className='size-8' />
							<h3 className='text-xl font-bold mt-4'>{title}</h3>
							<p className='text-lg'>{description}</p>
						</BlurFade>
					))}
				</BlurFade>

				<Separator className='my-[10vmin]' />

				{/* stay update */}
				<BlurFade
					delay={0.3}
					className='flex items-center justify-center flex-col space-y-4'>
					<h1 className='text-4xl font-medium'>Stay Updated</h1>
					<p>
						Subscribe to our newsletter for the latest updates and
						exclusive offers
					</p>

					<div className='flex items-center justify-center gap-2 w-full'>
						<Input
							className='w-[350px]'
							placeholder='Enter your email'
						/>
						<Button className='bg-gray-800 hover:bg-black'>
							Subscribe
						</Button>
					</div>
				</BlurFade>

				{/* features again */}

				<BlurFade className='pt-[15vmin]'>
					<h3 className='text-4xl font-bold text-center uppercase'>
						Features
					</h3>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-4 space-y-4 mt-16 items-center'>
						<BlurFade
							delay={0.55}
							className='flex items-start md:items-center justify-start md:justify-end text-start md:text-end flex-col space-y-4 md:space-y-8'>
							<div>
								<p>genuine</p>
								<h4 className='text-3xl md:text-4xl uppercase'>
									ENDLESS PASSIVE INCOME
								</h4>
							</div>
							<div>
								<p>you get</p>
								<h4 className='text-3xl md:text-4xl uppercase'>
									RESULTS OR EFUND GUARANTEED
								</h4>
							</div>
							<div>
								<p>your product</p>
								<h4 className='text-3xl md:text-4xl uppercase'>
									ACCESS IN SECONDS
								</h4>
							</div>
						</BlurFade>
						<BlurFade
							delay={0.65}
							className='flex items-center justify-center relative h-[400px] my-16'>
							<Image
								alt=''
								src='/products/blue.png'
								width={300}
								height={300}
								className='object-contain rounded-lg'
							/>
						</BlurFade>
						<BlurFade
							delay={0.75}
							className='flex items-start md:items-center justify-start text-start flex-col space-y-4 md:space-y-8'>
							<div>
								<p>Specially</p>
								<h4 className='text-3xl md:text-4xl uppercase'>
									DESIGNED FOR NEWBIES
								</h4>
							</div>
							<div>
								<p>unmatched</p>
								<h4 className='text-3xl md:text-4xl uppercase'>
									LOCKSTEP I-on-I MENTORSHIP
								</h4>
							</div>
							<div>
								<p>Exciting</p>
								<h4 className='text-3xl md:text-4xl uppercase'>
									PRIVATE COMMUNITY
								</h4>
							</div>
						</BlurFade>
					</div>

					<div className='mt-16 text-center space-y-4'>
						<h4 className='text-3xl uppercase font-bold'>
							Loaded in 100+ page
						</h4>
						<Button
							className='uppercase text-xl w-56 shadow-md shadow-primary/50'
							size={'lg'}>
							Get now
						</Button>
					</div>
				</BlurFade>
			</BlurFade>
		</section>
	);
}
