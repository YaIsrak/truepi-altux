'use client';
import { createCheckoutSession } from '@/actions/create-checkout-session';
import { getStripe } from '@/lib/stripe-client';
import { convertToSubCurrentcy } from '@/lib/utils';
import { PRODUCTS_QUERYResult } from '@/sanity.types';
import { CreditCardIcon, Loader } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
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
	const { data: session } = useSession();
	const router = useRouter();

	const handleStripeCheckout = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);

		try {
			if (!session) {
				toast.error('Please sign in to continue', {
					description: 'You need to be signed in to make a purchase',
				});
				router.push('/login?redirect=/checkout');
				return;
			}

			const { sessionId } = await createCheckoutSession({
				productName: product.title!,
				amount: convertToSubCurrentcy(amount),
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
		</div>
	);
}
