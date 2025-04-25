// models/visitor.ts
import mongoose from 'mongoose';

const visitorSchema = new mongoose.Schema({
	ip: String,
	email: { type: String },
	page: { type: String, default: '/' },
	visitedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Visitor ||
	mongoose.model('Visitor', visitorSchema);
