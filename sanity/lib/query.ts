import { defineQuery } from 'next-sanity';

export const PRODUCTS_QUERY = defineQuery(
	`*[_type == "product"] | order(_createdAt asc)`,
);

export const BLOGS_QUERY = defineQuery(
	`*[_type == "blog"] | order(_createdAt desc)`,
);

export const REVIEWS_QUERY = defineQuery(
	`*[_type == "review"] | order(_createdAt desc)`,
);

export const SALE_QUERY = defineQuery(
	`*[_type == "sale" && stripeId == $stripeId][0]{
		...,
		product->
	}`,
);

export const USER_SALES_QUERY = defineQuery(
	`*[_type == "sale" && customerEmail == $customerEmail] | order(_createdAt desc){
	...,
		product->{..., "downloadLink": file.asset->url},
	}`,
);

export const SALES_QUERY = (duration: string) => {
	const now = new Date();
	const from =
		new Date(now.getTime() - parseDuration(duration))
			.toISOString()
			.split('.')[0] + 'Z';

	console.log('Generated "from" date:', from);
	return `
    *[
      _type == "sale" &&
      dateTime(_createdAt) >= dateTime("${from}")
    ]{
      ...,
      product->
    }
  `;
};
function parseDuration(duration: string): number {
	const num = parseInt(duration);
	if (isNaN(num)) return 0;

	if (duration.endsWith('d')) return num * 24 * 60 * 60 * 1000; // Days in milliseconds
	if (duration.endsWith('h')) return num * 60 * 60 * 1000; // Hours in milliseconds
	if (duration.endsWith('w')) return num * 7 * 24 * 60 * 60 * 1000; // Weeks in milliseconds
	if (duration.endsWith('m')) {
		// Assuming 'm' means months (approximately 30 days)
		return num * 30 * 24 * 60 * 60 * 1000;
	}
	return 0;
}
