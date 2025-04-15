import { BookIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const productType = defineType({
	name: 'product',
	title: 'Product',
	type: 'document',
	icon: BookIcon,
	fields: [
		defineField({
			name: 'title',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'image',
			type: 'image',
			options: { hotspot: true },
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'given_price',
			title: 'Given Price',
			description: 'The price of the product without discount',
			type: 'number',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'price',
			title: 'Selling Price',
			description: 'The price of the product with discount',
			type: 'number',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'stock',
			type: 'number',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'color',
			type: 'color',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'description',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
	],
	preview: {
		select: {
			title: 'title',
			media: 'image',
			price: 'price',
			stock: 'stock',
		},
		prepare(selection) {
			return {
				...selection,
				subtitle: `Price: ${selection.price} - Stock: ${selection.stock}`,
			};
		},
	},
	// plugins: [colorInput()],
});
