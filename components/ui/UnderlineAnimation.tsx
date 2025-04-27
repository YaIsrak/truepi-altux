'use client';

import { cn } from '@/lib/utils';
import { motion, useScroll } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function UnderlineAnimation({
	children,
	className,
	offset = ['start 0.8', 'end center'],
}: {
	children: React.ReactNode;
	className?: string;
	offset?: any[];
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

	return (
		<div
			className={cn('relative', className)}
			ref={elementRef}>
			<motion.div
				className={cn('absolute left-0 -bottom-1 h-1 bg-white w-full')}
				initial={{ scaleX: 1, transformOrigin: 'left' }}
				animate={{
					scaleX: progress,
					transformOrigin: 'left',
				}}
				transition={{
					duration: 0.5,
				}}
			/>
			{children}
		</div>
	);
}
