import Image from 'next/image';

type SuccessMessageProps = {
	customerEmail: string;
	productName: string;
	productImage: string;
	amount: number;
	quantity: number;
	stripeId: string;
};

export default function SuccessMessage({
	customerEmail,
	productName,
	productImage,
	amount,
	quantity,
	stripeId,
}: SuccessMessageProps) {
	return (
		<div className='flex items-center justify-center flex-col space-y-4'>
			<h1 className='text-2xl font-bold text-green-600'>✅ Thank You!</h1>
			<p className='text-gray-700'>
				Your purchase has been processed successfully.
			</p>

			<div className='mt-4'>
				<Image
					src={productImage}
					alt={productName}
					width={200}
					height={200}
					className='mx-auto rounded-xl border'
				/>
				<h2 className='mt-2 font-semibold text-lg'>{productName}</h2>
				<p className='text-sm text-gray-500'>Quantity: {quantity}</p>
			</div>

			<div className='border-t pt-4 text-left'>
				<p>
					<strong>Receipt ID:</strong>{' '}
					<span className='text-gray-600'>{stripeId}</span>
				</p>
				<p>
					<strong>Email:</strong>{' '}
					<span className='text-gray-600'>{customerEmail}</span>
				</p>
				<p>
					<strong>Total Paid:</strong> ${amount.toFixed(2)}
				</p>
			</div>
		</div>
	);
}
