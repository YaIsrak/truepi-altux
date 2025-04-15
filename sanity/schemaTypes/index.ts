import { type SchemaTypeDefinition } from 'sanity';

import { authorType } from './authorType';
import { blockContentType } from './blockContentType';
import { blogType } from './blogType';
import { categoryType } from './categoryType';
import { productType } from './productType';

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [blockContentType, categoryType, blogType, authorType, productType],
};
