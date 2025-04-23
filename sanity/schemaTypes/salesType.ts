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
			name: 'amount',
			title: 'Amount Paid',
			type: 'number',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'quantity',
			type: 'number',
			validation: (Rule) => Rule.required().min(1),
		}),
		defineField({
			name: 'approved',
			type: 'boolean',
			initialValue: () => false,
		}),
		defineField({
			name: 'product',
			type: 'reference',
			to: [{ type: 'product' }],
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'stripeId',
			title: 'Stripe Payment ID',
			type: 'string',
			validation: (Rule) => Rule.required(),
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
			approved: 'approved',
		},

		prepare(selection) {
			const { email, title, media, quantity, price } = selection;
			const approved = selection.approved ? 'Approved' : 'Pending';
			return {
				title: `${title} - ${approved} - $${price.toFixed(2)}`,
				subtitle: `by ${email} - Quantity: ${quantity}`,
				media,
			};
		},
	},
});
