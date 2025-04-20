'use server';

import { PRODUCTS_QUERYResult } from '@/sanity.types';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
	apiVersion: '2025-03-31.basil',
});

export async function createCheckoutSession({
	product,
	amount,
	quantity,
}: {
	product: PRODUCTS_QUERYResult[0];
	amount: number; // in cents
	quantity: number;
}) {
	try {
		const session = await stripe.checkout.sessions.create({
			payment_method_types: ['card'],
			line_items: [
				{
					price_data: {
						currency: 'usd',
						product_data: {
							name: product.title!,
							metadata: {
								id: product._id,
							},
						},

						unit_amount: amount,
					},
					quantity,
				},
			],
			mode: 'payment',
			success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
			cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
			metadata: {
				productName: product.title!,
				productId: product._id,
				quantity: quantity.toString(),
				amount: amount.toString(),
			},
		});

		return { sessionId: session.id };
	} catch (error) {
		console.error('Error creating Stripe Checkout session:', error);
		return { sessionId: null };
	}
}
