import { dbConnect } from '@/lib/db';
import Visitor from '@/lib/model/visitor.model';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
	const { email, page } = await req.json();

	const ip =
		req.headers.get('x-forwarded-for') ||
		req.headers.get('x-real-ip') ||
		req.headers.get('host');
	try {
		dbConnect();

		const visitor = await Visitor.create({
			ip,
			email: email || null,
			page: page || '/',
			visitedAt: new Date(),
		});

		return NextResponse.json({ visitor }, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{ error: (error as Error).message },
			{ status: 500 },
		);
	}
}

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
	const duration = searchParams.get('duration');

	const query: any = {};

	if (duration) {
		const now = new Date();
		switch (duration) {
			case '1d':
				query.visitedAt = {
					$gte: new Date(now.setDate(now.getDate() - 1)),
				};
				break;
			case '1w':
				query.visitedAt = {
					$gte: new Date(now.setDate(now.getDate() - 7)),
				};
				break;
			case '1m':
				query.visitedAt = {
					$gte: new Date(now.setMonth(now.getMonth() - 1)),
				};
				break;
			case '1y':
				query.visitedAt = {
					$gte: new Date(now.setFullYear(now.getFullYear() - 1)),
				};
				break;
		}
	}

	try {
		dbConnect();

		const visitors = await Visitor.find(query).sort({ visitedAt: -1 });

		return NextResponse.json(visitors, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{ error: (error as Error).message },
			{ status: 500 },
		);
	}
}
