import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface TabButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const TabButton = React.forwardRef<HTMLButtonElement, TabButton>(
	({ children, className, ...props }, ref) => {
		return (
			<button
				ref={ref}
				className={cn(
					'group relative w-auto cursor-pointer overflow-hidden rounded-full border data-[state=active]:bg-background p-2 px-6 text-center font-semibold',
					className,
				)}
				{...props}>
				<div className='flex items-center justify-center gap-2'>
					<div className='size-8 rounded-md bg-primary transition-all duration-300 group-hover:text-primary flex items-center justify-center absolute left-1 group-hover:w-full group-hover:left-0'>
						<ArrowRight />
					</div>
					<span className='inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0'>
						{children}
					</span>
				</div>
				<div
					id='later'
					className='data-[state=active]:bg-background absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-0 group-hover:opacity-100'>
					<span>{children}</span>
					<ArrowRight className='absolute group-hover:right-2' />
				</div>
			</button>
		);
	},
);

// export const TabButton = React.forwardRef<HTMLButtonElement, TabButton>(
// 	({ children, className, ...props }, ref) => {
// 		return (
// 			<button
// 				ref={ref}
// 				className={cn(
// 					'group relative w-auto cursor-pointer overflow-hidden rounded-full border bg-background p-2 px-6 text-center font-semibold',
// 					className,
// 				)}
// 				{...props}>
// 				<div className='flex items-center justify-center gap-2'>
// 					<div className='size-8 rounded-md bg-primary transition-all duration-300 group-hover:scale-[100.8] group-hover:text-primary flex items-center justify-center absolute left-1'>
// 						<ArrowRight />
// 					</div>
// 					<span className='inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0'>
// 						{children}
// 					</span>
// 				</div>
// 				<div className='absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-0 group-hover:opacity-100'>
// 					<span>{children}</span>
// 					<ArrowRight />
// 				</div>
// 			</button>
// 		);
// 	},
// );

TabButton.displayName = 'TabButton';
