import ProductTabs from './_components/ProductTabs';
import { Testimonials } from './_components/Testimonials';

export default function ProductSection() {
	return (
		<section
			className='py-[15vmin]'
			id='products'>
			<div
				className='container mx-auto flex flex-col items-center justify-center text-center max-w-4xl space-y-16'
				id='compare'>
				{/* header */}
				<div>
					<h2 className='text-6xl font-bold mb-8 uppercase'>
						Take The First <span className='text-8xl'>BIG</span> Step
						Change The Course of Your Life Forever
					</h2>

					<div className='flex items-center justify-center text-xl divide-x-2 opacity-50'>
						<p className='px-4'>Created with care</p>
						<p className='px-4'>Backed by research</p>
						<p className='px-4'>Built for results</p>
					</div>
				</div>

				<ProductTabs />
			</div>

			<div className='pt-[15vmin]'>
				<Testimonials />
			</div>
		</section>
	);
}
