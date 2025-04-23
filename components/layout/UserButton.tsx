'use client';

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

export default function UserButton() {
	const { data: session } = useSession();

	if (!session?.user)
		return (
			<Button>
				<Link href={'/login'}>Login</Link>
			</Button>
		);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					size='icon'
					className='rounded-full'>
					<UserIcon className='size-4' />
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
