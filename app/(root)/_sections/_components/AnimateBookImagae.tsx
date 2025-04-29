'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function AnimatedBookImage() {
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['center end', 'start center'],
	});

	const rotateY = useTransform(scrollYProgress, [0, 0.3], [90, 0]);
	const x = useTransform(scrollYProgress, [1.6, 6], [45, 90]);

	return (
		<div
			ref={ref}
			className='relative col-span-4 md:col-span-1 perspective-1000'>
			<div className='bg-[#68402e] rounded-2xl h-[445px] w-[316px] p-6 z-10 relative'>
				<h4 className='uppercase text-white text-3xl'>
					packed in 100+ pages
				</h4>
			</div>

			<motion.div
				style={{ rotateY, x }}
				className='absolute top-12 w-full h-full z-20 transform-style-3d'>
				<Image
					src='/book.png'
					alt='card'
					width={800}
					height={800}
					className='rounded-2xl -rotate-6'
				/>
			</motion.div>
		</div>
	);
}
