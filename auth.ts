import { MongoDBAdapter } from '@auth/mongodb-adapter';
import bcrypt from 'bcrypt';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { User } from './lib/model/user.model';
import mongoClientPromise from './lib/mongoClientPromise';

export const {
	handlers: { GET, POST },
	auth,
	signIn,
	signOut,
} = NextAuth({
	adapter: MongoDBAdapter(mongoClientPromise, {
		databaseName: 'hotel',
	}),
	session: {
		strategy: 'jwt',
	},

	providers: [
		CredentialsProvider({
			credentials: {
				email: {},
				name: {},
				password: {},
			},

			async authorize(credentials) {
				if (credentials === null) return null;

				try {
					const user = await User.findOne({ email: credentials?.email });

					if (user) {
						const isMatch = await bcrypt.compare(
							credentials.password as string,
							user.password,
						);

						if (isMatch) {
							return user;
						} else {
							throw new Error('🔴 Email does not match');
						}
					} else {
						throw new Error('🔴 User does not exist');
					}
				} catch (error: any) {
					throw new Error('🔴 Invalid credentials', error);
				}
			},
		}),
	],
});
