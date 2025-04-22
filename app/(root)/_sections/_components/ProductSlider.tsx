'use client';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ProductCard from '@/components/ProductCard';
import { BlurFade } from '@/components/ui/blur-fade';
import { Product } from '@/sanity.types';

type Props = {
	products: Product[];
};

export function ProductSlider({ products }: Props) {
	return (
		<div className='relative'>
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				spaceBetween={20}
				navigation={true}
				pagination={{ clickable: true }}
				autoplay={{ delay: 3000, disableOnInteraction: false }}
				breakpoints={{
					640: { slidesPerView: 1 },
					768: { slidesPerView: 2 },
					1024: { slidesPerView: 3 },
				}}>
				{products.map((product, i) => (
					<SwiperSlide key={product._id}>
						<BlurFade delay={i * 0.1}>
							<ProductCard product={product} />
						</BlurFade>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
