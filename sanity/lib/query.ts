import { defineQuery } from 'next-sanity';

export const PRODUCTS_QUERY = defineQuery(
	`*[_type == "product"] | order(_createdAt asc)`,
);

export const BLOGS_QUERY = defineQuery(
	`*[_type == "blog"] | order(_createdAt desc)`,
);
