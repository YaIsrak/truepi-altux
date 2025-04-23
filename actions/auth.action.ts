'use server';

import { signIn } from '@/auth';

export async function login({
	email,
	password,
}: {
	email: string;
	password: string;
}) {
	try {
		const res = await signIn('credentials', {
			email,
			password,
			redirect: false,
		});

		return res;
	} catch (error: any) {
		throw new Error(error);
	}
}
