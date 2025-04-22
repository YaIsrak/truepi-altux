import { defineField, defineType } from 'sanity';

export const salesType = defineType({
	name: 'sale',
	title: 'Sale',
	type: 'document',
	fields: [
		defineField({
			name: 'customerEmail',
			title: 'Customer Email',
			type: 'string',
			validation: (Rule) => Rule.required().email(),
		}),
		defineField({
			name: 'stripeId',
			title: 'Stripe Payment ID',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'product',
			title: 'Product',
			type: 'reference',
			to: [{ type: 'product' }],
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'amount',
			title: 'Amount Paid',
			type: 'number',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'quantity',
			title: 'Quantity',
			type: 'number',
			validation: (Rule) => Rule.required().min(1),
		}),
		defineField({
			name: 'createdAt',
			title: 'Created At',
			type: 'datetime',
			initialValue: () => new Date().toISOString(),
			readOnly: true,
		}),
	],

	preview: {
		select: {
			email: 'customerEmail',
			title: 'product.title',
			media: 'product.image',
			quantity: 'quantity',
			price: 'amount',
		},

		prepare(selection) {
			const { email, title, media, quantity, price } = selection;
			return {
				title: `${title} $${price}`,
				subtitle: `by ${email} - Quantity: ${quantity}`,
				media,
			};
		},
	},
});
