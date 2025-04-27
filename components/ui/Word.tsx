'use client';

import { cn } from '@/lib/utils';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Word({
	children,
	className,
	wordClassName,
	letterClassName,
	offset = ['start 0.8', 'end center'],
}: {
	children: string;
	className?: string;
	wordClassName?: string;
	letterClassName?: string;
	offset?: any[];
	isUnderline?: boolean;
}) {
	const elementRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: elementRef,
		offset: offset,
	});

	const words = (children as string).split(' ');

	return (
		<span
			className={cn('flex flex-wrap relative w-fit', className)}
			ref={elementRef}>
			{words.map((word, i) => {
				const start = i / words.length;
				const end = start + 1 / words.length;

				return (
					<WordItem
						key={i}
						range={[start, end]}
						progress={scrollYProgress}
						wordClassName={wordClassName}
						letterClassName={letterClassName}>
						{word}
					</WordItem>
				);
			})}
		</span>
	);
}

// function WordItem({
// 	children,
// 	range,
// 	progress,
// 	wordClassName,
// }: {
// 	children: string;
// 	range: number[];
// 	progress: any;
// 	wordClassName?: string;
// }) {
// 	const opacity = useTransform(progress, range, [0, 1]);

// 	return (
// 		<span className={cn('mr-[2px] relative', wordClassName)}>
// 			<span className='absolute opacity-20'>{children}</span>
// 			<motion.span style={{ opacity }}>{children}</motion.span>
// 		</span>
// 	);
// }

function WordItem({
	children,
	range,
	progress,
	wordClassName,
	letterClassName,
}: {
	children: string;
	range: number[];
	progress: MotionValue<number>;
	wordClassName?: string;
	letterClassName?: string;
}) {
	const characters = children.split('');
	const amount = range[1] - range[0];
	const step = amount / children.length;

	return (
		<span className={cn('mr-[2px] relative', wordClassName)}>
			{characters.map((character, i) => {
				const start = range[0] + step * i;
				const end = range[0] + step * (i + 1);

				return (
					<CharacterItem
						key={i}
						range={[start, end]}
						progress={progress}
						className={letterClassName}>
						{character}
					</CharacterItem>
				);
			})}
		</span>
	);
}

function CharacterItem({
	children,
	range,
	progress,
	className,
}: {
	children: string;
	range: number[];
	progress: MotionValue<number>;
	className?: string;
}) {
	const opacity = useTransform(progress, range, [0, 1]);

	return (
		<span className={cn('', className)}>
			<span className='absolute opacity-20'>{children}</span>
			<motion.span style={{ opacity }}>{children}</motion.span>
		</span>
	);
}
