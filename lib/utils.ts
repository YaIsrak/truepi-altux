import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function convertToSubCurrentcy(amount: number, factor = 100) {
	return Math.floor(amount * factor);
}
