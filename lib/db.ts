import mongoose from 'mongoose';

export async function dbConnect() {
	try {
		const connect = await mongoose.connect(String(process.env.MONGO_URI));
		return connect;
	} catch (error) {
		console.error('🔴 Error connecting to MongoDB:', error);
	}
}
