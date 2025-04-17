// import { testimonials } from '@/lib/constant';
import { sanityFetch } from '@/sanity/lib/live';
import { REVIEWS_QUERY } from '@/sanity/lib/query';
import { TestimonialCard } from './TestimonialCard';

export default async function TestimonialMarquee() {
	const { data: testimonials } = await sanityFetch({ query: REVIEWS_QUERY });

	// console.log(data[0]);

	return (
		<>
			{[...Array(4)].map((_, setIndex) =>
				testimonials.map((testimonial, i) => (
					<TestimonialCard
						key={`${setIndex}-${i}`}
						{...testimonial}
					/>
				)),
			)}
		</>
	);
}
