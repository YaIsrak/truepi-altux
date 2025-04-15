import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<div className='min-h-screen bg-background text-foreground'>
			<header className='container mx-auto p-4 flex justify-between items-center'>
				<Link href='/'>
					<div className='font-extrabold text-xl text-foreground'>
						TRUEPI
					</div>
				</Link>
				<div className='bg-primary text-foreground p-1 px-2 rounded-md flex items-center gap-1'>
					<span>f</span>
					<span>5</span>
				</div>
			</header>

			{/* main */}
			<main className='container mx-auto px-4 py-8 '>
				{/* Hero Section */}
				<div className='text-center mb-12'>
					<h1 className='text-7xl tracking-tight md:text-9xl line- font-extrabold text-primary leading-tighter mb-2'>
						THE
						<br />
						RESELLER&apos;S
						<br />
						<span className='relative'>
							<span className='absolute -left-6 top-1/2 transform -translate-y-1/2'>
								{/* <Image
									src='/placeholder.svg?height=50&width=50'
									alt='Cash icon'
									width={50}
									height={50}
									className='opacity-80'
								/> */}
							</span>
							CASH
						</span>
						<br />
						MACHINE
					</h1>
					<h2 className='text-2xl md:text-3xl font-extrabold mt-6 md:mt-10'>
						THE SET &amp; FORGET WEALTH SECRET
					</h2>
				</div>

				{/* books cover section */}
				<div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-16'>
					<div className='bg-gray-200 overflow-hidden border border-primary'>
						<Image
							src='/placeholder.svg?height=400&width=300'
							alt='Ebook Cover'
							width={300}
							height={400}
							className='w-full h-auto'
						/>
					</div>
					<div className='bg-gray-200 overflow-hidden border border-primary'>
						<Image
							src='/placeholder.svg?height=400&width=300'
							alt='Ebook Cover'
							width={300}
							height={400}
							className='w-full h-auto'
						/>
					</div>
					<div className='bg-gray-200 overflow-hidden border border-primary'>
						<Image
							src='/placeholder.svg?height=400&width=300'
							alt='Ebook Cover'
							width={300}
							height={400}
							className='w-full h-auto'
						/>
					</div>
					<div className='bg-gray-200 overflow-hidden border border-primary'>
						<Image
							src='/placeholder.svg?height=400&width=300'
							alt='Ebook Cover'
							width={300}
							height={400}
							className='w-full h-auto'
						/>
					</div>
				</div>

				{/* Highlight Box */}
				<div className='bg-primary text-primary-foreground p-6 rounded-lg mb-12 text-center border-3 border-gray-200 text-shadow-lg'>
					<p className='text-3xl font-bold'>
						It is <span className='text-destructive'>NOT</span> just an
						eBook. It&apos;s a weapon.
						<br />A silent sales machine built for rebels who want
						<br />
						profit without permission.
					</p>
				</div>

				{/* Author Note */}
				<div className='mb-12'>
					<p className='text-2xl md:text-3xl font-bold'>
						I carefully wrote this ebook over three months to include
						every detailed step that brought me:
					</p>
				</div>

				{/* Success Section */}
				<div className='mb-32 mt-22'>
					<h2 className='text-7xl text-foreground font-extrabold tracking-tight text-center mb-8'>
						SUCCESS LIKE THIS:
					</h2>

					<div className='grid grid-cols-1 md:grid-cols-5 gap-6'>
						<div className='relative border border-primary w-full h-96 overflow-hidden col-span-3'>
							<Image
								src='/placeholder.svg?height=400&width=200'
								alt='Ebook Cover'
								width={300}
								height={200}
								className='w-full h-auto'
							/>
						</div>
						<div className='relative border border-primary w-full h-96 overflow-hidden col-span-2'>
							<Image
								src='/placeholder.svg?height=400&width=200'
								alt='Ebook Cover'
								width={300}
								height={200}
								className='w-full h-auto'
							/>
						</div>
						<div className='relative border border-primary w-full h-96 overflow-hidden col-span-2'>
							<Image
								src='/placeholder.svg?height=400&width=200'
								alt='Ebook Cover'
								width={300}
								height={200}
								className='w-full h-auto'
							/>
						</div>
						<div className='relative border border-primary w-full h-96 overflow-hidden col-span-3'>
							<Image
								src='/placeholder.svg?height=400&width=200'
								alt='Ebook Cover'
								width={300}
								height={200}
								className='w-full h-auto'
							/>
						</div>
					</div>
				</div>

				{/* If I Can Do It Section */}
				<div className='text-center mb-32'>
					<h2 className='text-5xl font-bold text-primary mb-8'>
						IF I CAN DO IT, THEN YOU CAN DO IT TOO
					</h2>

					<div className='flex justify-center mb-8'>
						<div className='relative w-40 h-40'>
							<Image
								src='/placeholder.svg?height=160&width=160'
								alt='Person on moon'
								width={160}
								height={160}
								className='w-full h-auto'
							/>
						</div>
					</div>

					<div className='space-y-4 max-w-3xl mx-auto text-xl font-regular tracking-tight'>
						<p>
							If you&apos;ve ever had a subconscious dream of
							establishing a
							<span className='font-bold'> REAL BUSINESS </span>
							and a<span className='font-bold'> REAL IDENTITY </span>
							online.
						</p>
						<p>
							If you&apos;ve ever wanted to build an enormous income
							system where you never have to worry about being broke
							again.
						</p>
						<p className='font-bold'>
							Then this is exactly what you have been looking for!
						</p>
					</div>
				</div>

				{/* What's Inside This Ebook Section */}
				<div className='mb-32'>
					<h2 className='text-5xl font-bold text-center text-primary mb-12'>
						WHAT'S INSIDE THIS EBOOK
					</h2>

					<div className='space-y-6'>
						{/* The Product Blueprint */}
						<div className='bg-background text-foreground rounded-lg overflow-hidden border-2 border-primary py-6 px-8'>
							<li className='text-xl font-extrabold text-primary'>
								The Product Blueprint
							</li>
							<ul className='mt-2 ml-4'>
								<li>• How to create your own product from scratch</li>
								<li>
									• How to find high-demand, low-competition digital
									products (without guessing)
								</li>
								<li>
									• 6 proven product formats for faster and profitable
									products
								</li>
							</ul>
						</div>

						{/* Customers That Doesn't Cost $1 */}
						<div className='bg-primary text-primary-foreground rounded-lg overflow-hidden border-2 border-primary py-6 px-8'>
							<li className='text-xl font-extrabold text-primary-foreground'>
								Customers That Doesn't Cost $1
							</li>
							<ul className='mt-2 ml-4'>
								<li>
									• A secret foothold to get 90% targeted visitors/day
									(no posting required)
								</li>
								<li>
									• The Collective Purchase Strategy you never even
									heard of
								</li>
								<li>
									• The "invisible guidance" method to get 70% more
									sales from forums without getting banned
								</li>
							</ul>
						</div>

						{/* Automated Sales Formula */}
						<div className='bg-background text-foreground rounded-lg overflow-hidden border-2 border-primary py-6 px-8'>
							<li className='text-xl font-extrabold text-primary'>
								Automated Sales Formula
							</li>
							<ul className='mt-2 ml-4'>
								<li>
									• 3-line section-by-section optimization hand to hand
									guide from scratch
								</li>
								<li>• Affiliate program setup in 5 minutes</li>
								<li>
									• The "upsell sequence" to double order value (works
									for any product)
								</li>
								<li>
									• How to turn buyers into affiliates (so they can
									sell for you for free)
								</li>
							</ul>
						</div>

						{/* Ads That Actually Work */}
						<div className='bg-background text-foreground rounded-lg overflow-hidden border-2 border-primary py-6 px-8'>
							<li className='text-xl font-extrabold text-primary'>
								Ads That Actually Work
							</li>
							<ul className='mt-2 ml-4'>
								<li>
									• 6-day "Wale strategy that outputs 100s per day
									broad targeting (screenshots inside)"
								</li>
								<li>
									• How to "borrow" advertising creatives without
									stealing (100% backbg-background hat)
								</li>
								<li>
									• The "Budget sharing trick" to slash ad costs by 70%
								</li>
							</ul>
						</div>

						{/* More than $10,000 worth resources */}
						<div className='bg-background text-foreground rounded-lg overflow-hidden border-2 border-primary py-6 px-8'>
							<li className='text-xl font-extrabold text-primary'>
								More than $10,000 worth resources
							</li>
							<ul className='mt-2 ml-4'>
								<li>
									• Ultimate content library with 60% niche-specific
									DFY tools to upload on social media
								</li>
								<li>
									• Ready to read premium products, unlocked to get
									started results instantly
								</li>
								<li>
									• From product ideas, mockups to deliveries - every
									template you need is inside
								</li>
							</ul>
						</div>
					</div>
				</div>

				{/* Why This Works */}
				<div className='mb-32'>
					<h2 className='text-5xl font-extrabold tracking-tight text-center text-primary mb-8'>
						WHY THIS WORKS
					</h2>

					<div className='flex mb-6'>
						<div className='mr-8'>
							<div className='size-22 bg-primary rounded-full flex items-center justify-center'>
								<Image
									src='/placeholder.svg?height=40&width=40'
									alt='Award icon'
									width={40}
									height={40}
									className='w-10 h-10'
								/>
							</div>
						</div>
						<div className='space-y-1 text-lg'>
							<li>
								No inventory, no shipping, no customer service hell -
								Pure digital = pure profit
							</li>
							<li>Sell the SAME product 1000x - Zero extra cost</li>
							<li>Leverage FREE traffic (or scale with paid ads)</li>
							<li>
								Works in ANY niche - Fitness, business, gaming, crypto,
								etc.
							</li>
						</div>
					</div>
				</div>

				{/* What You Will Get Section */}
				<div className='mb-32'>
					<h2 className='text-5xl font-extrabold text-center text-primary mb-8'>
						WHAT YOU WILL GET
					</h2>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
						<div className='border border-primary rounded-lg p-4 flex justify-center'>
							<Image
								src='/placeholder.svg'
								alt='Ebook'
								width={80}
								height={120}
								className='w-20 h-56'
							/>
						</div>
						<div className='border border-primary rounded-lg p-4 flex justify-center'>
							<Image
								src='/placeholder.svg?height=100&width=100'
								alt='Person'
								width={100}
								height={100}
								className='w-24 h-auto rounded-full'
							/>
						</div>
						<div className='border border-primary rounded-lg p-4 flex justify-center'>
							<Image
								src='/placeholder.svg?height=100&width=150'
								alt='Resources'
								width={150}
								height={100}
								className='w-32 h-auto'
							/>
						</div>
					</div>

					<p className='mt-8 text-center text-xl'>
						If you think you're the I in 100 who's ready to take the
						challenge <br />
						and never worry about being broke again-
					</p>
				</div>

				{/* Pricing Section */}
				<div className='mb-32'>
					<h2 className='text-5xl font-extrabold text-center text-primary mb-4'>
						CHOOSE YOUR WEAPON
					</h2>
					<p className='text-center text-destructive mb-8 font-bold'>
						Launch access Discount! Ending after 5 copies is sold!
					</p>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
						{/* Alpha Tier */}
						<div className='bg-muted relative text-foreground rounded-lg overflow-hidden border-2 border-primary'>
							<div className='p-6 text-center'>
								<h3 className='text-2xl font-bold mb-2'>Alpha</h3>
								<div className='flex items-center justify-center'>
									<span className='text-muted-foreground line-through mr-2'>
										$97
									</span>
									<span className='text-3xl font-bold text-primary'>
										$47
									</span>
								</div>
							</div>
							<div className='p-6'>
								<ul className='space-y-3'>
									<li>
										• Full access to "The Reseller's Cash Machine"
									</li>
									<li>
										• Access to premium digital products (20 digital
										worth $100 to start reselling)
									</li>
									<li>• Unlimited updates of the guide</li>
									<li>• Access to the community</li>
									<li>• Alpha role in the community</li>
									<li>• Daily resources and tools</li>
									<li>
										• Access to the challenge game (active monitoring
										of your progress and personalized support)
									</li>
								</ul>
							</div>
							<div className='p-4 flex justify-center absolute bottom-0 left-1/2 -translate-x-1/2'>
								<Image
									src='/placeholder.svg?height=40&width=120'
									alt='Alpha weapon'
									width={120}
									height={40}
									className='h-10 w-auto'
								/>
							</div>
						</div>

						{/* Aura Tier */}
						<div className='bg-primary relative text-background rounded-lg overflow-hidden border-2 border-primary transform'>
							<div className='p-6 text-center'>
								<h3 className='text-2xl font-bold mb-2'>Aura</h3>
								<div className='flex items-center justify-center'>
									<span className='text-muted-foreground line-through mr-2'>
										$197
									</span>
									<span className='text-3xl font-bold'>$97</span>
								</div>
							</div>
							<div className=' text-primary-foreground p-6'>
								<ul className='space-y-3'>
									<li>• Everything mentioned in Alpha</li>
									<li>
										• Access to exclusive digital products of 25
										category worth $5000 (instant reselling)
									</li>
									<li>
										• Access to exclusive premium copyright right
										video content library
									</li>
									<li>• Aura role in the community</li>
									<li>
										• Access to exclusive exclusive channel in the
										server with exclusive benefits
									</li>
									<li>• Basic directional support</li>
								</ul>
							</div>
							<div className='p-4 flex justify-center absolute bottom-0 left-1/2 -translate-x-1/2'>
								<Image
									src='/placeholder.svg?height=40&width=120'
									alt='Aura weapon'
									width={120}
									height={40}
									className='h-10 w-auto'
								/>
							</div>
						</div>

						{/* Sigma Tier */}
						<div className='bg-muted relative text-foreground rounded-lg overflow-hidden border-2 border-primary'>
							<div className='p-6 text-center'>
								<h3 className='text-2xl font-bold mb-2'>Sigma</h3>
								<div className='flex items-center justify-center'>
									<span className='text-muted-foreground line-through mr-2'>
										$397
									</span>
									<span className='text-3xl font-bold text-primary'>
										$147
									</span>
								</div>
							</div>
							<div className='p-6'>
								<ul className='space-y-3'>
									<li>• Everything mentioned in Aura</li>
									<li>
										• Access to 50 million+ digital products and
										services worth $10000 to start reselling right
										away
									</li>
									<li>• Sigma role in the community</li>
									<li>• 1-on-1 mentorship</li>
								</ul>
							</div>
							<div className='p-4 flex justify-center absolute bottom-0 left-1/2 -translate-x-1/2'>
								<Image
									src='/placeholder.svg?height=40&width=120'
									alt='Sigma weapon'
									width={120}
									height={40}
									className='h-10 w-auto'
								/>
							</div>
						</div>
					</div>
				</div>

				{/* Features Section */}
				<div className='mb-32'>
					<h2 className='text-5xl font-extrabold text-center text-primary mb-12'>
						FEATURES
					</h2>

					<div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
						{/* Endless Earnings */}
						<div className='border border-primary rounded-lg py-6 px-2'>
							<h3 className='text-xl font-bold text-center mb-4'>
								Endless Earnings
							</h3>
							<p className='text-center'>
								With the right resources, you can unlock the direct path
								to unlimited earnings and have a real goal in business.
							</p>
						</div>

						{/* 24/7 Dedicated Support */}
						<div className='border border-primary rounded-lg py-6 px-2'>
							<h3 className='text-xl font-bold text-center mb-4'>
								24/7 Dedicated support
							</h3>
							<p className='text-center'>
								We will personally support you with anything you need
								help with. We provide you with feedback, suggestions and
								a complete step plan.
							</p>
						</div>

						{/* Beginner Friendly */}
						<div className='border border-primary rounded-lg py-6 px-2'>
							<h3 className='text-xl font-bold text-center mb-4'>
								Beginner Friendly
							</h3>
							<p className='text-center'>
								The whole system is designed for all levels. We will
								provide exclusive guidance as you work. Whatever you
								feel, I handle we handle that.
							</p>
						</div>

						{/* Refund Guaranteed */}
						<div className='border border-primary rounded-lg py-6 px-2'>
							<h3 className='text-xl font-bold text-center mb-4'>
								Refund Guaranteed
							</h3>
							<p className='text-center'>
								The whole system is working that is guaranteed, but if
								you do not make any money. You get your refund. No
								questions asked.
							</p>
						</div>
					</div>
				</div>

				{/* Why 97% Fail Section */}
				<div className='mb-32'>
					<h2 className='text-5xl font-extrabold text-center text-primary mb-8'>
						WHY DO 97% FAIL AT MAKING MONEY ONLINE?
					</h2>

					<div className='max-w-3xl mx-auto text-center text-xl'>
						<p className='mb-4'>
							Because they miss the ONE crucial step—getting traffic,
							customers and sales. Without traffic, there's no money. No
							sales, no success, no business.
						</p>
						<p className='mb-4'>
							But this guide changes everything. It solves your biggest
							challenge: how to get traffic, customers, and sales on
							demand. If you've struggled before, this is the missing
							piece.
						</p>
						<p className='font-bold'>
							Get your first sale in as soon as a few hours or days!
						</p>
					</div>
				</div>

				{/* Why Selling Goldmine Section */}
				<div className='mb-32'>
					<h2 className='text-5xl font-extrabold text-center text-primary mb-12'>
						BUT WHY ARE YOU SELLING YOUR GOLDMINE?
					</h2>

					<div className='flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto'>
						<div className='md:w-1/3'>
							<Image
								src='/placeholder.svg?height=300&width=150'
								alt='Author'
								width={150}
								height={300}
								className='w-full h-auto'
							/>
						</div>
						<div className='md:w-2/3 text-lg'>
							<p className='mb-4'>
								When you start making money, you want to make money too.
								To achieve my own goals, I'll educate you enough and
								provide you with every resource and guide so you can
								reach a minimum of $10k per month.
							</p>
							<p>
								Once you hit $10k/month, I'll introduce you to my most
								effective high-ticket products and services that will
								help you scale to $100k/month and beyond.
							</p>
						</div>
					</div>
				</div>

				{/* Who This is for  */}
				<div className='mb-32'>
					<h2 className='text-5xl font-extrabold tracking-tight text-center text-primary mb-8'>
						WHO THIS IS FOR
					</h2>

					<div className='flex mb-6'>
						<div className='mr-8'>
							<div className='size-22 bg-primary rounded-full flex items-center justify-center'>
								<Image
									src='/placeholder.svg?height=40&width=40'
									alt='Award icon'
									width={40}
									height={40}
									className='w-10 h-10'
								/>
							</div>
						</div>
						<div className='space-y-1 text-lg'>
							<li>
								Want a real business - Not a fly-by-night "scheme."
							</li>
							<li>
								Are ready to put in work - Because real success takes
								strategy, not wishes.
							</li>
							<li>
								Know wealth is built, not stumbled upon - And are
								willing to learn, test, and scale.
							</li>
							<li>
								No matter your business, if you want secret hacks for
								traffic, sales, customers, or going viral, this is for
								you!
							</li>
						</div>
					</div>
				</div>

				{/* Who This is not for  */}
				<div className='mb-32'>
					<h2 className='text-5xl font-extrabold tracking-tight text-center text-primary mb-8'>
						WHO THIS IS <span className='text-destructive'>NOT</span> FOR
					</h2>

					<div className='flex mb-6'>
						<div className='mr-8'>
							<div className='size-22 bg-primary rounded-full flex items-center justify-center'>
								<Image
									src='/placeholder.svg?height=40&width=40'
									alt='Award icon'
									width={40}
									height={40}
									className='w-10 h-10'
								/>
							</div>
						</div>
						<div className='space-y-1 text-lg'>
							<li>
								You believe in fairy tales- get rich overnight with a
								magic button scams.
							</li>
							<li>
								You want old recycled shady tricks that get your Bank
								frozen in 72 hours.
							</li>
							<li>
								You want results with zero effort—this isn't an
								earn-watching YouTube video scheme; it's a real system
								that requires grind and strategy.
							</li>
							<li>
								You are degenerated and stupid enough to scam yourself
								by purchasing old recycles trash
							</li>
						</div>
					</div>
				</div>

				{/* Note Section */}
				<div className='mb-32 border-2 border-primary rounded-xl p-6'>
					<p className='text-xl leading-tight'>
						If you still think those 5 to 10 years old, $20 priced random
						trash methods can make you $$$ a day, which are shady in
						nature, where you have no clue what you're even buying until
						you've already paid, and then comes the real slap. You open
						it, hoping for gold, and instead you're staring at some dull,
						frustrating nonsense you'd never even want to do. The kind of
						strategy that makes you question your sanity. They promise
						"exciting opportunities" that sound good on paper but are
						practically too hard or impossible to try. And if they work,
						it's just once or twice before they pop like a bubble. If
						you're still holding onto that...
					</p>
					<p className='text-xl leading-tight mt-4'>
						<span className='font-bold'>YOU'RE SERIOUSLY TRIPPIN</span>,
						And I do not suggest you to buy this eBook.
					</p>
				</div>
			</main>
		</div>
	);
}
