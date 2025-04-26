'use client';

import { cn } from '@/lib/utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function Word({
	children,
	className,
	wordClassName,
	offset = ['start 0.8', 'end center'],
	isUnderline = false,
}: {
	children: string;
	className?: string;
	wordClassName?: string;
	offset?: any[];
	isUnderline?: boolean;
}) {
	const elementRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: elementRef,
		offset: offset,
	});

	const [progress, setProgress] = useState(0);

	useEffect(() => {
		return scrollYProgress.onChange((latest) => {
			setProgress(latest);
		});
	});

	const words = (children as string).split(' ');

	return (
		<span
			className={cn('flex flex-wrap relative w-fit', className)}
			ref={elementRef}>
			{isUnderline && (
				<motion.div
					className={cn(
						'absolute left-0 -bottom-1 h-0.5 bg-white w-full',
						className,
					)}
					initial={{ scaleX: 1, transformOrigin: 'left' }}
					animate={{
						scaleX: progress,
						transformOrigin: 'left',
					}}
					transition={{
						duration: 0.5,
						ease: [1, 0, 0, 1],
					}}
				/>
			)}
			{words.map((word, i) => {
				const start = i / words.length;
				const end = start + 1 / words.length;

				return (
					<WordItem
						key={i}
						word={word}
						range={[start, end]}
						progress={scrollYProgress}
						wordClassName={wordClassName}
					/>
				);
			})}
		</span>
	);
}

function WordItem({
	word,
	range,
	progress,
	wordClassName,
}: {
	word: string;
	range: number[];
	progress: any;
	wordClassName?: string;
}) {
	const opacity = useTransform(progress, range, [0, 1]);

	return (
		<span className={cn('mr-[2px] relative', wordClassName)}>
			<span className='absolute opacity-20'>{word}</span>
			<motion.span style={{ opacity }}>{word}</motion.span>
		</span>
	);
}
