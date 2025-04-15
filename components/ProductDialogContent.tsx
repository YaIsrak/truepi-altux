'use client';

import { PRODUCTS_QUERYResult } from '@/sanity.types';
import { urlFor } from '@/sanity/lib/image';
import { MailIcon, Minus, Plus } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from './ui/button';
import { DialogHeader, DialogTitle } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export default function ProductDialogContent({
	product,
}: {
	product: PRODUCTS_QUERYResult[0];
}) {
	const [count, setCount] = useState(1);

	return (
		<>
			<DialogHeader className='flex flex-row'>
				<div className='relative mr-4'>
					<Image
						src={product.image ? urlFor(product.image).url() : ''}
						alt='Product'
						width={100}
						height={100}
					/>
				</div>
				<div>
					<DialogTitle className='space-y-2'>
						<p className='text-xl'>{product.title}</p>
						<p className='text-sm'>
							${(product.given_price as number) * count}
						</p>

						{/* counter button */}
						<div className='flex items-center border border-green-500 rounded-2xl overflow-hidden'>
							<Button
								className='rounded-r-none'
								variant='ghost'
								disabled={count === 1}
								size='icon'
								onClick={() => setCount(count - 1)}>
								<Minus />
							</Button>
							{/* todo: animated count */}
							<div className='w-8 text-center'>{count}</div>
							<Button
								className='rounded-l-none'
								variant='ghost'
								size='icon'
								onClick={() => setCount(count + 1)}>
								<Plus />
							</Button>
						</div>

						<p className='text-xs font-light'>
							{product.stock} Available
						</p>
					</DialogTitle>
				</div>
			</DialogHeader>

			<div className='mt-4'>
				{/* Email */}
				<div>
					<Label className='mb-2'>Email</Label>
					<div className='relative'>
						<div className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground'>
							<MailIcon className='h-4 w-4' />
						</div>
						<Input
							type='email'
							placeholder='Enter your email'
							className='w-full rounded-lg bg-background pl-8'
						/>
					</div>
				</div>

				<Tabs
					defaultValue='card'
					className='w-full mt-8 shadow-none'>
					<TabsList className='grid w-full grid-cols-2 p-0'>
						<TabsTrigger
							value='card'
							className='data-[state=active]:border data-[state=active]:border-green-500 data-[state=active]:bg-transparent data-[state=active]:shadow-none'>
							Credit & Debit
						</TabsTrigger>
						<TabsTrigger
							value='crypto'
							className='data-[state=active]:border data-[state=active]:border-green-500 data-[state=active]:bg-transparent data-[state=active]:shadow-none'>
							Crypto
						</TabsTrigger>
					</TabsList>
					{/* todo: */}
					<TabsContent value='card'>sdsdsd</TabsContent>
					<TabsContent value='crypto'>Crypto</TabsContent>
				</Tabs>
			</div>
		</>
	);
}
