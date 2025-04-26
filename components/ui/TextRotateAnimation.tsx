'use client';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

export default function TextRotateAnimation({
	children,
	className,
}: {
	children: string;
	className?: string;
}) {
	return (
		<motion.span
			initial='initial'
			whileHover='hovered'
			className={cn(
				'relative block overflow-hidden whitespace-nowrap',
				className,
			)}>
			<motion.div
				variants={{
					initial: { y: 0 },
					hovered: { y: '-100%' },
				}}>
				{children}
			</motion.div>
			<motion.div
				className='absolute inset-0'
				variants={{
					initial: { y: '100%' },
					hovered: { y: 0 },
				}}>
				{children}
			</motion.div>
		</motion.span>
	);
}
