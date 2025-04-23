'use client';

import { login } from '@/actions/auth.action';
import { Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

export default function LoginForm() {
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		try {
			const formData = new FormData(e.target as HTMLFormElement);

			const email = formData.get('email') as string | null;
			const password = formData.get('password') as string | null;

			if (!email || !password) {
				toast.error('Email and password are required');
				return;
			}

			const res = await login({ email, password });

			if (!!res?.error) {
				toast.error('Error in login', {
					description: res.error.message,
				});
			} else {
				toast.success('Login successful');
				// router.refresh();
				router.push('/');
			}
		} catch (error: any) {
			toast.error('There is an error', {
				description: error.message,
			});
		} finally {
			setLoading(false);
		}
	};

	return (
		<form
			className='space-y-4'
			onSubmit={handleSubmit}>
			<input
				name='email'
				type='email'
				placeholder='Email'
				className='w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary'
			/>
			<input
				name='password'
				type='password'
				placeholder='Password'
				className='w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary'
			/>
			<button
				type='submit'
				disabled={loading}
				className='w-full bg-primary text-white rounded-full py-3 hover:bg-primary transition flex items-center justify-center gap-2'>
				{loading && <Loader className='animate-spin' />}
				Continue
			</button>
		</form>
	);
}
