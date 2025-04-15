import { Button } from '@/components/ui/button';
import Image from 'next/image';
import ProductDialogContent from './ProductDialogContent';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';

export default function ProductCard() {
	return (
		<div className='p-2 group'>
			<div className='relative rounded-2xl  overflow-hidden'>
				<Image
					src='/product.png'
					alt='Product'
					className='group-hover:scale-105 transition-all duration-150 ease-in-out'
					width={500}
					height={500}
				/>
			</div>

			<div className='mt-6'>
				<h2 className='text-2xl font-bold text-teal-500'>Product Name</h2>
				<div className='flex gap-2'>
					<p className='text-lg line-through text-muted-foreground'>
						$175
					</p>
					<p className='text-2xl font-bold'>$99</p>
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
						<ProductDialogContent />
					</DialogContent>
				</Dialog>
			</div>
		</div>
	);
}
