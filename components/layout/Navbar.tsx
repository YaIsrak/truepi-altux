'use client';

import { navLinks } from '@/lib/constant';
import { cn } from '@/lib/utils';
import { MenuIcon, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className='w-full py-4 border-b md:border-0 md:bg-transparent bg-muted'>
			<div className='container mx-auto flex items-center justify-between px-4'>
				<Link href={'/'}>
					<h1 className='font-extrabold text-2xl text-primary'>Truepi</h1>
				</Link>

				<div className='md:flex items-center gap-6 hidden '>
					{navLinks.map((link) => (
						<Link
							href={link.href}
							key={link.name}
							className='text-sm'>
							{link.name}
						</Link>
					))}
				</div>

				{/* Mobile Hamburger */}
				<div
					className='md:hidden block cursor-pointer'
					onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? <X /> : <MenuIcon />}
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				className={cn(
					'h-0 overflow-hidden transition-all',
					isOpen && 'h-auto',
				)}>
				<div className='container mx-auto px-4 mt-10 md:hidden'>
					<div className='flex flex-col space-y-2 mt-4'>
						{navLinks.map((link) => (
							<Link
								href={link.href}
								key={link.name}
								className='text-lg'>
								{link.name}
							</Link>
						))}
					</div>
				</div>
			</div>
		</nav>
	);
}
