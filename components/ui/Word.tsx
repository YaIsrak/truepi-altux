'use client';

import { cn } from '@/lib/utils';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface Props {
	children: string;
	className?: string;
	wordClassName?: string;
	letterClassName?: string;
	offset?: any[];
	isParisienne?: boolean;
}

export default function Word({
	children,
	className,
	wordClassName,
	letterClassName,
	offset = ['start 0.8', 'end center'],
	isParisienne = false,
}: Props) {
	const elementRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: elementRef,
		offset: offset,
	});

	const words = (children as string).split(' ');

	const globalCharIndexRef = useRef(0);

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
						letterClassName={letterClassName}
						isParisienne={isParisienne}
						globalCharIndexRef={globalCharIndexRef}>
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
	isParisienne,
	globalCharIndexRef,
}: {
	children: string;
	range: number[];
	progress: MotionValue<number>;
	wordClassName?: string;
	letterClassName?: string;
	isParisienne?: boolean;
	globalCharIndexRef: React.MutableRefObject<number>;
}) {
	const characters = children.split('');
	const amount = range[1] - range[0];
	const step = amount / children.length;

	const firstCharIndex = globalCharIndexRef.current;
	globalCharIndexRef.current += characters.length; // move global pointer

	return (
		<span className={cn('mr-[2px] relative', wordClassName)}>
			{characters.map((character, i) => {
				const start = range[0] + step * i;
				const end = range[0] + step * (i + 1);

				const charGlobalIndex = firstCharIndex + i;
				const isFirstCharacter = charGlobalIndex === 0;

				const finalClassName = cn(
					letterClassName,
					isParisienne && isFirstCharacter && 'font-parisienne font-light',
				);

				return (
					<CharacterItem
						key={i}
						range={[start, end]}
						progress={progress}
						className={letterClassName}
						addNewClass={isParisienne && isFirstCharacter}>
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
	addNewClass,
}: {
	children: string;
	range: number[];
	progress: MotionValue<number>;
	className?: string;
	addNewClass?: boolean;
}) {
	const opacity = useTransform(progress, range, [0, 1]);

	return (
		<span
			className={cn(addNewClass && 'font-parisienne font-light', className)}>
			<span className='absolute opacity-20'>{children}</span>
			<motion.span style={{ opacity }}>{children}</motion.span>
		</span>
	);
}
