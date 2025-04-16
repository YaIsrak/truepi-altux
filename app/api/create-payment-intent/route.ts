import stripe from '@/lib/stripe';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
	try {
		const { amount } = await req.json();

		const paymentIntent = await stripe.paymentIntents.create({
			payment_method_types: ['card'],
			amount: amount,
			currency: 'usd',
			automatic_payment_methods: { enabled: true, allow_redirects: 'never' },
			return_url: `${req.headers.get('origin')}/success?session_id={CHECKOUT_SESSION_ID}`,
		});

		return new NextResponse(paymentIntent.client_secret, { status: 200 });
	} catch (error: any) {
		console.error('Error creating payment intent:', error);
		return new NextResponse(error, {
			status: 400,
		});
	}
}
