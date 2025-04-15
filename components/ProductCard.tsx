import { Button } from '@/components/ui/button';
import { PRODUCTS_QUERYResult } from '@/sanity.types';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import ProductDialogContent from './ProductDialogContent';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';

export default function ProductCard({
	product,
}: {
	product: PRODUCTS_QUERYResult[0];
}) {
	return (
		<div className='p-2 group'>
			<div className='relative rounded-2xl  overflow-hidden'>
				<Image
					src={product.image ? urlFor(product.image).url() : ''}
					alt='Product'
					className='group-hover:scale-105 transition-all duration-150 ease-in-out'
					width={500}
					height={500}
					placeholder='blur'
					blurDataURL={
						product.image ? urlFor(product.image).blur(20).url() : ''
					}
				/>
			</div>

			<div className='mt-6'>
				<h2
					className={`text-2xl font-bold text-[${product.color?.hex}]`}
					style={{ color: `${product.color?.hex}` }}>
					{product.title}
				</h2>
				<div className='flex gap-2'>
					<p className='text-lg line-through text-muted-foreground'>
						${product.given_price}
					</p>
					<p className='text-2xl font-bold'>${product.price}</p>
				</div>
			</div>

			<div className='mt-4'>
				<Dialog>
					<DialogTrigger asChild>
						<Button
							className='w-full bg-blue-500 font-bold hover:shadow-md hover:shadow-blue-300 hover:bg-blue-600'
							size={'lg'}>
							Buy now
						</Button>
					</DialogTrigger>
					<DialogContent>
						<ProductDialogContent product={product} />
					</DialogContent>
				</Dialog>
			</div>
		</div>
	);
}
