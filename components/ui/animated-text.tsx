'use client';

import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

interface AnimatedTextProps {
	lines: string[];
	className?: string;
	direction?: 'left' | 'right';
}

export default function AnimatedText({
	lines,
	className,
	direction = 'left',
}: AnimatedTextProps) {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			const isMobile = window.innerWidth < 768;
			const linesEls = gsap.utils.toArray<HTMLDivElement>('.animated-line');

			const tl = gsap.timeline();

			if (isMobile) {
				// Step 1: Slide in from opposite sides
				linesEls.forEach((el, index) => {
					gsap.set(el, {
						x: index % 2 === 0 ? -100 : -100, // alternate: right, left
						opacity: 0,
					});
				});

				tl.to(linesEls, {
					x: 0,
					opacity: 1,
					duration: 1,
					ease: 'power3.out',
					stagger: 0.2,
				});

				// Step 2: Fill gradient
				tl.to(
					linesEls,
					{
						backgroundPositionX: '0%',
						duration: 1.5,
						stagger: 0.2,
						ease: 'power2.out',
					},
					'-=0.8',
				);
			} else {
				// Desktop animation (same as before)
				tl.from(linesEls, {
					y: 50,
					opacity: 0,
					duration: 1,
					stagger: 0.2,
					ease: 'power3.out',
				});

				tl.to(
					linesEls,
					{
						backgroundPositionX: '0%',
						duration: 2,
						stagger: 0.2,
						ease: 'power2.out',
					},
					'-=1',
				);

				tl.to(
					linesEls,
					{
						x: direction === 'left' ? -140 : 80,
						duration: 1.2,
						stagger: 0.2,
						ease: 'power2.out',
					},
					'-=1',
				);
			}
		}, containerRef);

		return () => ctx.revert();
	}, [direction]);

	return (
		<div
			ref={containerRef}
			className={`flex flex-col items-center ${className}`}>
			{lines.map((line, index) => (
				<div
					key={index}
					className='animated-line text-transparent bg-clip-text'
					style={{
						backgroundImage:
							'linear-gradient(90deg, white 50%, #888888 50%)',
						backgroundSize: '200% 100%',
						backgroundPositionX: '100%',
						WebkitBackgroundClip: 'text',
						color: 'transparent',
					}}>
					{line}
				</div>
			))}
		</div>
	);
}
