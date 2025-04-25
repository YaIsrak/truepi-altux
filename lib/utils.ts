import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function convertToSubCurrentcy(amount: number, factor = 100) {
	return Math.floor(amount * factor);
}

// geneatre random string
export function generateRandomString(length: number) {
	let result = '';
	const characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const charactersLength = characters.length;
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}

export function groupVisitorsByDate(visitors: any[]) {
	const counts: Record<string, number> = {};

	for (const v of visitors) {
		const date = new Date(v.visitedAt).toISOString().split('T')[0]; // yyyy-mm-dd
		counts[date] = (counts[date] || 0) + 1;
	}

	// Convert to array for chart
	return Object.entries(counts).map(([date, count]) => ({
		date,
		count,
	}));
}
