'use client';
import { createCheckoutSession } from '@/actions/create-checkout-session';
import { getStripe } from '@/lib/stripe-client';
import { PRODUCTS_QUERYResult } from '@/sanity.types';
import { CreditCardIcon, Loader } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { SlidingNumber } from './ui/animated-counter';
import { Button } from './ui/button';

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
				product,
			});

			if (sessionId) {
				const stripe = await getStripe();
				await stripe?.redirectToCheckout({ sessionId });
			}
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
					Continue with Card
				</Button>
			</form>
			<div className='text-xs mt-2 text-muted-foreground flex items-center'>
				You'll pay $
				<SlidingNumber
					className='gap-0'
					value={amount}
				/>
			</div>

			{/* <PayPalButtons
				createOrder={(data, actions) => {
					return actions.order.create({
						purchase_units: [
							{
								amount: {
									currency_code: 'USD',
									value: '20',
								},
							},
						],
						intent: 'CAPTURE',
					});
				}}
				onApprove={(data, actions) => {
					if (actions.order) {
						return actions.order.capture().then((details) => {
							console.log('Payment Approved: ', details);
						});
					} else {
						console.error('Order actions are undefined.');
						return Promise.resolve(); // Ensure a Promise<void> is always returned
					}
				}}
			/> */}
		</div>
	);
}
