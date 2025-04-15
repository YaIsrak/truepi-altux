import { featuresList } from '@/lib/constant';

export default function FeatureSection() {
	return (
		<section className='py-[10vmin] bg-muted'>
			<div className='container mx-auto px-4 max-w-6xl'>
				<h3 className='text-4xl font-bold text-center'>Features</h3>

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
			</div>
		</section>
	);
}
