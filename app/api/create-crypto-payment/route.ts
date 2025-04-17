import crypto from 'crypto';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
	try {
		const body = await req.json();

		const res = await fetch('https://api.cryptomus.com/v1/payment', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				...(process.env.CRYPTOMUS_MERCHANT_UUID && {
					merchant: process.env.CRYPTOMUS_MERCHANT_UUID,
				}),
				sign: generateSignature(body), // See below
			},
			body: JSON.stringify(body),
		});

		const data = await res.json();
		return NextResponse.json(data, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{ error: (error as Error).message },
			{ status: 500 },
		);
	}
}

function generateSignature(body: any) {
	const rawData = JSON.stringify(body);
	const sign = crypto
		.createHmac('sha256', process.env.CRYPTOMUS_API_KEY || '')
		.update(rawData)
		.digest('hex');
	return sign;
}
