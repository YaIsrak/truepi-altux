'use client';

import Card3 from '@/public/card0.png';
import Card2 from '@/public/card10.png';
import Card1 from '@/public/card8.png';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function FeatureCardDeck({ className }: { className?: string }) {
	const containerRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['center end', 'end start'],
	});

	const x1 = useTransform(
		scrollYProgress,
		[0, 0.3, 0.7, 1],
		[0, -150, -150, -150],
	);
	const x3 = useTransform(
		scrollYProgress,
		[0, 0.3, 0.7, 1],
		[0, 150, 150, 150],
	);
	const zIndex1 = useTransform(
		scrollYProgress,
		[0, 0.3, 0.7, 1],
		[1, 2, 2, 2],
	);
	const zIndex2 = useTransform(
		scrollYProgress,
		[0, 0.3, 0.7, 1],
		[3, 3, 3, 3],
	);
	const zIndex3 = useTransform(
		scrollYProgress,
		[0, 0.3, 0.7, 1],
		[2, 1, 1, 1],
	);

	const cards = [
		{
			title: 'Unique',
			image: Card1,
			x: x1,
			zIndex: zIndex1,
		},
		{
			title: 'Working',
			image: Card2,
			zIndex: zIndex2,
		},
		{
			title: 'Transparent',
			image: Card3,
			x: x3,
			zIndex: zIndex3,
		},
	];

	return (
		<div
			ref={containerRef}
			className={`${className}`}>
			<div className='relative w-full flex items-center justify-center'>
				{cards.map((card, index) => (
					<motion.div
						key={index}
						className={`absolute`}
						style={{
							x: card.x,
							zIndex: card.zIndex,
						}}>
						<div className='relative w-96'>
							<Image
								src={card.image}
								alt={card.title}
								width={500}
								height={500}
								className='rounded-3xl'
								placeholder='blur'
							/>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
}
