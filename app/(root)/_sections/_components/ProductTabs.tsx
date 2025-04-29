import ProductDialogContent from '@/components/ProductDialogContent';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/moving-border';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TextRotateAnimation from '@/components/ui/TextRotateAnimation';
import { ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import { TabButton } from './TabButton';

const plans = [
	{
		_id: '2fb35a5b-9d64-4d0f-9dee-130fc25ceb43',
		name: 'RESPECT',
		price: 47,
		color: '#dc822b',
		image: '/card4.png',
		originalPrice: 475,
		features: [
			"Access to 'The Reseller's Cash Machine'",
			'Access to premium digital products of 20 categories worth $1000',
			'Access to the community',
			'Basic directional mentorship',
			'X',
			'X',
			'X',
			'X',
		],
	},
	{
		_id: '07b0edfb-d928-419f-addb-40defacb1e39',
		name: 'AURA',
		price: 97,
		color: '#13c984',
		image: '/card3.png',
		originalPrice: 275,
		features: [
			"Access to 'The Reseller's Cash Machine'",
			'Access to exclusive digital products of 28 categories worth $5000',
			'Access to the community',
			'Basic+ directional mentorship',
			'Access to exclusive TOOK+ DFY no copyright content library',
			'Access to separate exclusive channel in the community with exclusive resources',
			'X',
			'X',
		],
	},
	{
		_id: '71f6440e-7700-4e94-8966-9d52717a723f',
		name: 'SIGMA',
		price: 147,
		color: '#dc2e41',
		image: '/card2.png',
		originalPrice: 375,
		features: [
			"Full access to 'The Reseller's Cash Machine'",
			'Access to 50 million+ digital products and assets worth $10000',
			'Access to the community',
			'1-to-1 mentorship',
			'Access to exclusive TOOK+ DFY no copyright content library',
			'Access to separate exclusive channel in the community with exclusive resources',
			'Private monitoring of your progress',
			'Access to sigma club',
		],
	},
];

export default function ProductTabs() {
	return (
		<Tabs
			defaultValue='choose'
			className='w-full'>
			<TabsList className='grid w-full grid-cols-2 bg-transparent mb-12 max-w-md justify-center mx-auto'>
				{/* data-[state=active]:shadow-sm */}
				<TabsTrigger
					className='text-white text-2xl data-[state=active]:text-black transition-all group/icon '
					value='choose'
					asChild>
					<TabButton>Choose</TabButton>
				</TabsTrigger>
				<TabsTrigger
					className='text-white text-2xl data-[state=active]:text-black transition-all py-5 px-2'
					value='compare'
					asChild>
					<TabButton>Compare</TabButton>
				</TabsTrigger>
			</TabsList>
			<TabsContent value='choose'>
				<ProductTab />
			</TabsContent>
			<TabsContent value='compare'>
				<PricingTable />
			</TabsContent>
		</Tabs>
	);
}

function ProductTab() {
	return (
		<div className='max-w-7xl'>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-start gap-12'>
				{plans.map((plan, i) => (
					<div key={i}>
						{/* header */}
						<div>
							<h3
								className='text-2xl pb-4 px-6 font-bold'
								style={{ color: plan.color }}>
								{plan.name}
							</h3>
						</div>
						<Button
							borderRadius='0.80rem'
							className=''>
							<Image
								src={plan.image}
								alt={plan.name}
								width={600}
								height={600}
								className='w-full h-auto rounded-2xl object-cover'
							/>
						</Button>
						<div></div>
						{/* footer */}
						<div className='flex justify-between px-4'>
							{/* button */}
							<Dialog>
								<DialogTrigger asChild>
									<div className='flex items-center gap-2 cursor-pointer'>
										<ShoppingBag className='size-4' />
										<TextRotateAnimation className='text-lg font-bold'>
											Buy Now
										</TextRotateAnimation>
									</div>
								</DialogTrigger>
								<DialogContent>
									<ProductDialogContent product={plan} />
								</DialogContent>
							</Dialog>

							{/* price */}
							<div className='flex items-end gap-2'>
								<span className='text-xl font-light line-through opacity-50'>
									{plan.price}
								</span>
								<span className='text-4xl font-medium'>
									{plan.price}
								</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

function PricingTable() {
	return (
		<div className='w-full'>
			<div className='grid grid-cols-1 md:grid-cols-3 divide-x-2 text-start'>
				{plans.map((plan, i) => (
					<div key={i}>
						<div className='divide-y-2'>
							<h3
								className='text-2xl pb-8 px-6 font-bold'
								style={{ color: plan.color }}>
								{plan.name}
							</h3>
							{plan.features.map((feature, i) => (
								<div
									key={i}
									className='px-6 h-20 pt-4 text-sm'>
									{feature}
								</div>
							))}
						</div>

						{/* footer */}
						<div className='flex justify-between px-4'>
							{/* button */}
							<div className='flex items-center gap-2 cursor-pointer'>
								<ShoppingBag className='size-4' />
								<TextRotateAnimation className='text-lg font-bold'>
									Buy Now
								</TextRotateAnimation>
							</div>

							{/* price */}
							<div className='flex items-end gap-2'>
								<span className='text-xl font-light line-through opacity-50'>
									{plan.price}
								</span>
								<span className='text-4xl font-medium'>
									{plan.price}
								</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
