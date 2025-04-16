'use client';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import { CreditCardIcon, Loader } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { SlidingNumber } from './ui/animated-counter';
import { Button } from './ui/button';

export default function CardPaymentForm({ amount }: { amount: number }) {
	const [loading, setLoading] = useState(false);
	const [cardComplete, setCardComplete] = useState(false);
	const stripe = useStripe();
	const elements = useElements();

	const handleStripeCheckout = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);

		const cardElement = elements?.getElement('card');

		try {
			if (!stripe || !cardElement) return null;
			const { data } = await axios.post('/api/create-payment-intent', {
				amount,
			});

			const clientSecret = data;

			await stripe?.confirmCardPayment(clientSecret, {
				payment_method: { card: cardElement },
			});
		} catch (error: any) {
			toast.error('Something went wrong', {
				description: error.message,
			});
		} finally {
			setLoading(false);
		}
	};

	const handleCardChange = (event: any) => {
		setCardComplete(event.complete);
	};

	return (
		<form
			onSubmit={handleStripeCheckout}
			className='flex items-center flex-col justify-center py-[5vmin]'>
			<CardElement
				onChange={handleCardChange}
				className='py-2 px-4 border rounded-md w-full'
				options={{
					hidePostalCode: true,
				}}
			/>
			<Button
				type='submit'
				className='text-sm border border-green-500  px-6 py-4 hover:bg-green-500 hover:text-white flex items-center gap-4 transition cursor-pointer'
				disabled={loading}>
				{loading ? (
					<Loader className='size-4 animate-spin' />
				) : (
					<CreditCardIcon className='size-4' />
				)}
				Continue with card
			</Button>
			<div className='text-xs mt-2 text-muted-foreground flex items-center'>
				You'll pay $
				<SlidingNumber
					className='gap-0'
					value={amount}
				/>
			</div>
		</form>
	);
}
