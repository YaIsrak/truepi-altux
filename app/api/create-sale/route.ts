import { NextResponse } from 'next/server';

const SANITY_PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const SANITY_DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET;
const SANITY_API_READ_TOKEN = process.env.SANITY_API_READ_TOKEN;
const SANITY_API_WRITE_TOKEN = process.env.SANITY_API_WRITE_TOKEN;

if (!SANITY_PROJECT_ID) throw new Error('Missing SANITY_PROJECT_ID');
if (!SANITY_DATASET) throw new Error('Missing SANITY_DATASET');
if (!SANITY_API_READ_TOKEN) throw new Error('Missing SANITY_API_READ_TOKEN');
if (!SANITY_API_WRITE_TOKEN) throw new Error('Missing SANITY_API_WRITE_TOKEN');

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const { email, amount, quantity, productId, stripeId } = body;

		if (!email || !amount || !quantity || !productId || !stripeId) {
			throw new Error(
				'Missing required email, amount, quantity, productId or stripeId',
			);
		}

		const saleDoc = {
			_type: 'sale',
			customerEmail: email,
			amount,
			quantity,
			stripeId,
			product: { _type: 'reference', _ref: productId },
			createdAt: new Date().toISOString(),
		};

		const createdSale = await fetch(
			`https://${SANITY_PROJECT_ID}.api.sanity.io/v1/data/mutate/${SANITY_DATASET}`,
			{
				method: 'post',
				headers: {
					'Content-type': 'application/json',
					Authorization: `Bearer ${SANITY_API_WRITE_TOKEN}`,
				},
				body: JSON.stringify({ mutations: [{ create: saleDoc }] }),
			},
		);

		if (!createdSale.ok) {
			const { error } = await createdSale.json();
			throw new Error(`${error.description || 'Unknown error'}`);
		}

		const saleResponse = await createdSale.json();

		return NextResponse.json(saleResponse, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{ error: (error as Error).message },
			{ status: 500 },
		);
	}
}
