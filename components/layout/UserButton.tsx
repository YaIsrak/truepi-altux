'use client';

import { cn } from '@/lib/utils';
import { UserIcon } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { Button } from '../ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu';

export default function UserButton({
	mobile,
	className,
}: {
	mobile?: boolean;
	className?: string;
}) {
	const { data: session } = useSession();

	if (!session?.user)
		return (
			<Button
				className={cn(
					'rounded-full',
					className,
					mobile && 'bg-white text-primary hover:bg-gray-200',
				)}
				asChild>
				<Link href={'/login'}>Login</Link>
			</Button>
		);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					size={mobile ? 'default' : 'icon'}
					className={cn(
						'rounded-full',
						className,
						mobile && 'bg-white text-primary hover:bg-gray-200',
					)}>
					<UserIcon className='size-4' />
					{mobile && (
						<span className='text-sm font-semibold text-primary'>
							{session.user.name}
						</span>
					)}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem>
					<Link href={'/dashboard'}>Dashboard</Link>
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => signOut()}
					className='text-red-600'>
					Logout
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
