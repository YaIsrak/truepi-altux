import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import Word from '@/components/ui/Word';

const faq = [
	{
		question: 'Does this works worldwide?',
		answer: 'Yes, you can do it from any country in the world.',
	},
	{
		question: 'What does it require?',
		answer:
			'It requires a PC/phone with an internet connection, a mindset and a dream.',
	},
	{
		question: 'Is it completely legal?',
		answer: '100% of this eBook is completely legal to apply',
	},
	{
		question: 'Do I need special skills?',
		answer:
			'No special skills are required. If you need extra help, we are always there for you.',
	},
	{
		question: 'Do I need any further investment?',
		answer:
			'You can completely do it without any further investment. But a few bucks of investment is recommended to make your business more solid.',
	},
	{
		question: 'Do I need to make websites?',
		answer:
			"You need to create a Shopify store. But if that's a bit too much hassle, no worries! You can also explore other ready-to-launch systems I’ve mentioned inside. Plus, if you want to skip the stress altogether, we offer our Premium Done-For-You service. From product rebranding to full Shopify store creation and customization, we’ve got you covered.",
	},
	{
		question: 'How much time do I need to Invest per day?',
		answer:
			'It really depends on how fast you want to scale. The first few setups will cost you some hours. But when you automate it. You can invest as little as 20 minutes to check and maintain the business.',
	},
];

export default function FaqSec() {
	return (
		<section className='py-[15vmin]'>
			<div className='container max-w-8xl mx-auto px-4'>
				<div className='grid grid-cols-1 lg:grid-cols-4 gap-10 md:gap-6'>
					{/* Heading */}
					<div className='text-center md:text-left space-y-2'>
						<Word className='text-3xl md:text-4xl xl:text-5xl  font-medium uppercase'>
							your questions,
						</Word>
						<Word className='text-3xl md:text-4xl xl:text-5xl  font-medium uppercase'>
							answered
						</Word>
					</div>

					{/* FAQ Accordion */}
					<div className='md:col-span-3'>
						<Accordion
							type='single'
							collapsible
							className='w-full space-y-4'>
							{faq.map((item, index) => (
								<AccordionItem
									key={index}
									value={`item-${index}`}
									className='border-none bg-white/5 px-4 py-3 rounded-2xl'>
									<AccordionTrigger className='text-base sm:text-lg font-medium cursor-pointer text-left'>
										{item.question}
									</AccordionTrigger>
									<AccordionContent className='opacity-60 font-medium text-sm sm:text-base leading-relaxed'>
										{item.answer}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</div>
			</div>
		</section>
	);
}
