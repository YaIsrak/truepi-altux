'use client';

import axios from 'axios';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function TrackVisitor() {
	const { data: session } = useSession();
	const pathname = usePathname();

	useEffect(() => {
		axios.post('/api/visitor', {
			email: session?.user ? session?.user?.email : '',
			page: pathname,
		});
	}, [pathname, session?.user]);

	return <></>;
}
