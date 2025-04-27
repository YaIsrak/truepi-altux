'use client';

import { cn } from '@/lib/utils';
import { useScroll } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

interface Props {
	children: React.ReactNode;
	className?: string;
	offset?: any[];
}

export default function LeftShowScroll({
	children,
	offset = ['start 0.8', 'end center'],
	className,
}: Props) {
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
		<span
			ref={elementRef}
			className={cn(
				'overflow-hidden flex flex-col justify-center items-center w-fit',
				className,
			)}>
			<div
				className='overflow-hidden relative'
				style={{
					width: `${progress * 100}%`,
					opacity: progress,
				}}>
				{children}
			</div>
		</span>
	);
}
