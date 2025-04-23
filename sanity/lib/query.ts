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

export const SALES_QUERY = defineQuery(
	`*[_type == "sale"]{
		...,
		product->
	}`,
);
