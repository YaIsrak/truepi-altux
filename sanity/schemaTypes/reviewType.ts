import { CheckIcon } from 'lucide-react';
import { defineField, defineType } from 'sanity';

export const reviewType = defineType({
	name: 'review',
	title: 'Review',
	type: 'document',
	icon: CheckIcon,
	fields: [
		defineField({
			name: 'author',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'rating',
			type: 'number',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'description',
			type: 'text',
			validation: (Rule) => Rule.required(),
		}),
	],
	preview: {
		select: {
			title: 'author',
		},
		prepare(selection) {
			return {
				...selection,
			};
		},
	},

	// plugins: [colorInput()],
});
