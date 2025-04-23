import { dbConnect } from '../db';
import { User } from '../model/user.model';

export async function getCurrentUserByEmail(email: string) {
	try {
		await dbConnect();

		const user = await User.findOne({ email });

		return user;
	} catch (error) {
		throw error;
	}
}
