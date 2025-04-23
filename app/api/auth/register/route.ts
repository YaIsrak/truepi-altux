import { dbConnect } from '@/lib/db';
import { User } from '@/lib/model/user.model';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

export const GET = async (req: Request) => {
	const { name, email, password } = await req.json();
	if (!name || !email || !password) {
		throw new Error('Missing required fields');
	}

	// await dbConnect();

	// const hashedPassword = await bcrypt.hash(password, 10);

	// const newUser = {
	// 	name,
	// 	email,
	// 	password: hashedPassword,
	// };

	try {
		// await User.create(newUser);

		return NextResponse.json(
			{ message: 'User created successfully' },
			{ status: 201 },
		);
	} catch (error: any) {
		return NextResponse.json(
			{ error: (error as Error).message },
			{ status: 500 },
		);
	}
};

export async function POST(req: Request) {
	try {
		const { name, email, password } = await req.json();

		if (!name || !email || !password)
			throw new Error('Missing required fields');

		await dbConnect();
		const existingUser = await User.findOne({ email });

		if (existingUser) throw new Error('User already exists');

		const hashedPassword = await bcrypt.hash(password, 10);

		const newUser = {
			name,
			email,
			password: hashedPassword,
		};

		const user = await User.create(newUser);

		return NextResponse.json(
			{ message: 'User created successfully', user },
			{ status: 201 },
		);
	} catch (error) {
		return NextResponse.json(
			{ error: (error as Error).message },
			{ status: 500 },
		);
	}
}
