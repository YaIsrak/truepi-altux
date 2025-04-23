import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		require: true,
	},
	image: {
		type: String,
		require: false,
	},
	role: {
		type: String,
		require: true,
		default: 'user',
	},
});

export const User =
	mongoose.models.users ?? mongoose.model('users', userSchema);
