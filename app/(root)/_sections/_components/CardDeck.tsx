'use client';

import Card1 from '@/public/card1.png';
import Card2 from '@/public/card2.png';
import Card3 from '@/public/card3.png';
import Card4 from '@/public/card4.png';
import Card5 from '@/public/card5.png';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function CardDeck({ className }: { className?: string }) {
	const containerRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['center end', 'end start'],
	});

	const rotate1 = useTransform(
		scrollYProgress,
		[0, 0.4, 0.6, 1],
		[-5, -5, -75, -75],
	);
	const rotate2 = useTransform(
		scrollYProgress,
		[0, 0.4, 0.6, 1],
		[-2.5, -2.5, -45, -45],
	);
	const rotate3 = useTransform(
		scrollYProgress,
		[0, 0.4, 0.6, 1],
		[0, 0, 0, 0],
	);
	const rotate4 = useTransform(
		scrollYProgress,
		[0, 0.4, 0.6, 1],
		[2.5, 2.5, 45, 45],
	);
	const rotate5 = useTransform(
		scrollYProgress,
		[0, 0.4, 0.6, 1],
		[5, 5, 75, 75],
	);

	const x1 = useTransform(
		scrollYProgress,
		[0, 0.4, 0.6, 1],
		[0, 0, -300, -300],
	);
	const x2 = useTransform(
		scrollYProgress,
		[0, 0.4, 0.6, 1],
		[0, 0, -150, -150],
	);
	const x3 = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 0, 0, 0]);
	const x4 = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 0, 150, 150]);
	const x5 = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 0, 300, 300]);

	const cards = [
		{
			title: 'Card 1',
			color: 'bg-blue-500',
			x: x1,
			rotate: rotate1,
			image: Card1,
		},
		{
			title: 'Card 2',
			color: 'bg-red-500',
			x: x2,
			rotate: rotate2,
			image: Card2,
		},
		{
			title: 'Card 3',
			color: 'bg-green-500',
			x: x3,
			rotate: rotate3,
			image: Card3,
		},
		{
			title: 'Card 4',
			color: 'bg-yellow-500',
			x: x4,
			rotate: rotate4,
			image: Card4,
		},
		{
			title: 'Card 5',
			color: 'bg-purple-500',
			x: x5,
			rotate: rotate5,
			image: Card5,
		},
	];

	return (
		<div
			ref={containerRef}
			className={`w-full h-screen ${className}`}>
			<div className='relative w-full h-screen flex items-center justify-center'>
				{cards.map((card, index) => (
					<motion.div
						key={index}
						className={`aspect-[6/8] w-64 md:w-80 ${card.color} rounded-3xl absolute`}
						style={{
							x: card.x,
							rotate: card.rotate,
							originY: 1, // <--- NEW
							originX: 0.5, // <--- NEW
						}}>
						<div className='flex items-center justify-center h-full text-white text-xl font-bold'>
							<Image
								src={card.image}
								alt={card.title}
								className='rounded-3xl object-cover'
								placeholder='blur'
								width={500}
								height={500}
							/>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
}
