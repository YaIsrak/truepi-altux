'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const AnimatedText = ({ text }: { text: string }) => {
	const [visibleChars, setVisibleChars] = useState(0);

	useEffect(() => {
		const total = text.length;
		let current = 0;

		const interval = setInterval(() => {
			setVisibleChars((prev) => {
				if (prev >= total) {
					current++;
					if (current >= 30) return 0; // pause before reset
					return prev;
				}
				return prev + 1;
			});
		}, 60); // speed

		return () => clearInterval(interval);
	}, [text]);

	return (
		<span className='whitespace-nowrap'>
			{text.split('').map((char, i) => (
				<motion.span
					key={i}
					className='inline-block leading-none align-baseline'
					initial={{ opacity: 0 }}
					animate={{ opacity: i < visibleChars ? 1 : 0 }}>
					{char === ' ' ? '\u00A0' : char}
				</motion.span>
			))}
		</span>
	);
};
