'use client';

import UserButton from '@/components/layout/UserButton';
import { Button } from '@/components/ui/button';
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { MenuIcon } from 'lucide-react';
import Link from 'next/link';

interface NavItemProps {
	name: string;
	href: string;
}

export default function MobileNav({ navitems }: { navitems: NavItemProps[] }) {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant='ghost'>
					<MenuIcon />
				</Button>
			</SheetTrigger>
			<SheetContent className='bg-black text-white'>
				<SheetHeader>
					<SheetTitle>
						<Link
							href={'/'}
							className='text-2xl text-white'>
							CashMachine.
							<span className='font-parisienne text-4xl font-bold ml-1 text-primary'>
								iO
							</span>
						</Link>
					</SheetTitle>

					<div className='flex flex-col gap-2 mt-8'>
						{navitems.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className='text-white/50 hover:text-primary transition-all text-2xl'>
								{item.name}
							</Link>
						))}

						<UserButton className='mt-4' />
					</div>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	);
}
