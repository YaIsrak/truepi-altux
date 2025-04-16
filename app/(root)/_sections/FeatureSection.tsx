import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { featuresList } from '@/lib/constant';

export default function FeatureSection() {
	return (
		<section className='py-[10vmin] bg-muted'>
			<div className='container mx-auto px-4 max-w-6xl'>
				<h3 className='text-4xl font-bold text-center'>Features</h3>

				{/* features */}
				<div className='grid grid-cols-2 md:grid-cols-4 gap-4 space-y-4 mt-16'>
					{featuresList.map(({ title, description, icon: Icon }) => (
						<div
							key={title}
							className='flex items-center flex-col justify-center text-center space-y-2'>
							<Icon className='size-8' />
							<h3 className='text-xl font-bold mt-4'>{title}</h3>
							<p className='text-lg'>{description}</p>
						</div>
					))}
				</div>

				<Separator className='my-[10vmin]' />

				{/* stay update */}
				<div className='flex items-center justify-center flex-col space-y-4'>
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
				</div>
			</div>
		</section>
	);
}
