import { sanityFetch } from '@/sanity/lib/live';
import { SALES_QUERY } from '@/sanity/lib/query';

import { NextResponse } from 'next/server';

export async function GET(req: Request) {
	try {
		const { searchParams } = new URL(req.url);
		const duration = searchParams.get('duration') || '7d';

		const { data } = await sanityFetch({
			query: SALES_QUERY(duration),
		});

		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json(
			{ error: (error as Error).message },
			{ status: 500 },
		);
	}
}
