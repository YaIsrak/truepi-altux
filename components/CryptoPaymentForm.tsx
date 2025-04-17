'use client';

import { generateRandomString } from '@/lib/utils';
import axios from 'axios';
import { DiamondIcon, Loader } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { SlidingNumber } from './ui/animated-counter';
import { Button } from './ui/button';

export default function CryptoPaymentForm({ amount }: { amount: number }) {
	const [loading, setLoading] = useState(false);

	const handleCryptoCheckout = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);

		try {
			const { data } = await axios.post('/api/create-crypto-payment', {
				amount: '10', // USD or your preferred currency
				currency: 'USD',
				order_id: generateRandomString(10),
				url_return: `${process.env.NEXT_PUBLIC_BASE_URL}/success?order_id={ORDER_ID}`,
				url_callback: `${process.env.NEXT_PUBLIC_BASE_URL}/callback?order_id={ORDER_ID}`,
			});

			if (data.result.url) {
				window.location.href = data.result.url;
			} else {
				toast.error('Failed to create payment');
			}
		} catch (error) {
			toast.error('Something went wrong', {
				description: (error as Error).message,
			});
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='flex items-center flex-col justify-center py-[5vmin]'>
			<form onSubmit={handleCryptoCheckout}>
				<Button
					className='border border-green-500 hover:bg-green-500 hover:text-white bg-transparent text-foreground '
					size={'lg'}
					disabled={loading}>
					{loading ? (
						<Loader className='size-4 animate-spin' />
					) : (
						<DiamondIcon />
					)}
					Continue with Crypto
				</Button>
			</form>
			<div className='text-xs mt-2 text-muted-foreground flex items-center'>
				You'll pay $
				<SlidingNumber
					className='gap-0'
					value={amount}
				/>
			</div>
		</div>
	);
}
