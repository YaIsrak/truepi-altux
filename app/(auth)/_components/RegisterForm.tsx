'use client';

import axios from 'axios';
import { Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

export default function RegisterForn() {
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		try {
			const formData = new FormData(e.target as HTMLFormElement);

			const name = formData.get('fullname');
			const email = formData.get('email');
			const password = formData.get('password');
			const confirmPassword = formData.get('confirmPassword');

			// Check if passwords match
			if (password !== confirmPassword) {
				toast.error('Passwords do not match');
			} else {
				// Send registration request
				const res = await axios.post('/api/auth/register', {
					name,
					email,
					password,
				});

				if (res.status === 201) {
					router.push('/login');
					toast.success('Registration successful 😉');
				}
			}
		} catch (error: any) {
			toast.error('There is an error in registration', {
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
				type='text'
				name='fullname'
				placeholder='Full name'
				className='w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary'
			/>

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
			<input
				name='confirmPassword'
				type='password'
				placeholder='Confirm Password'
				className='w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary'
			/>
			<button
				type='submit'
				disabled={loading}
				className='w-full bg-primary text-white rounded-full py-3 hover:bg-primary transition disabled:bg-gray-500 flex items-center justify-center gap-2'>
				{loading && <Loader className='animate-spin' />}
				Continue
			</button>
		</form>
	);
}
