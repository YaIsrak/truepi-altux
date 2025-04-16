import { testimonials } from '@/lib/constant';
import { TestimonialCard } from './TestimonialCard';

export default function TestimonialMarquee() {
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
