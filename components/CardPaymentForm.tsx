'use client';
import { createCheckoutSession } from '@/actions/create-checkout-session';
import { getStripe } from '@/lib/stripe-client';
import { PRODUCTS_QUERYResult } from '@/sanity.types';
import { CreditCardIcon, Loader } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { SlidingNumber } from './ui/animated-counter';
import { Button } from './ui/button';

// import { CreditCardIcon } from 'lucide-react';
// import { SlidingNumber } from './ui/animated-counter';

export default function CardPaymentForm({
	amount,
	count,
	product,
}: {
	amount: number;
	count: number;
	product: PRODUCTS_QUERYResult[0];
}) {
	const [loading, setLoading] = useState(false);

	const handleStripeCheckout = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);

		try {
			const { sessionId } = await createCheckoutSession({
				productName: product.title!,
				amount,
				quantity: count,
			});

			if (sessionId) {
				const stripe = await getStripe();
				await stripe?.redirectToCheckout({ sessionId });
			}

			console.log('sessionId', sessionId);
		} catch (error) {
			console.error(error);

			toast.error('Something went wrong', {
				description: (error as Error).message,
			});
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='flex items-center flex-col justify-center py-[5vmin]'>
			<form onSubmit={handleStripeCheckout}>
				<Button
					className='border border-green-500 hover:bg-green-500 hover:text-white bg-transparent text-foreground '
					size={'lg'}
					disabled={loading}>
					{loading ? (
						<Loader className='size-4 animate-spin' />
					) : (
						<CreditCardIcon />
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
