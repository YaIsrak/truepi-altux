import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { sanityFetch } from '@/sanity/lib/live';
import { REVIEWS_QUERY } from '@/sanity/lib/query';

export async function Testimonials() {
	const { data: testimonials } = await sanityFetch({
		query: REVIEWS_QUERY,
	});

	return (
		<div className='relative'>
			<InfiniteSlider
				durationOnHover={1000}
				duration={130}
				gap={24}>
				{testimonials.map((testimonial, index) => (
					<div
						key={index}
						className='w-full max-w-xl p-8 mx-auto bg-white/10 rounded-lg shadow-md'>
						<p className='text-xl mb-2 font-medium'>
							{testimonial.author}
						</p>
						<p className='opacity-50 tracking-tighter text-lg font-light line-clamp-6'>
							{testimonial.description}
						</p>
					</div>
				))}
			</InfiniteSlider>
			<div className='pointer-events-none absolute inset-y-0 left-0 hidden w-1/5 bg-gradient-to-r from-black sm:block' />
			<div className='pointer-events-none absolute inset-y-0 right-0 hidden w-1/5 bg-gradient-to-l from-black sm:block' />
		</div>
	);
}
