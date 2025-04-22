'use client';

import { useEffect, useState } from 'react';

interface Props {
	session_id: string;
	productId: string;
	email: string;
	amount: number;
	quantity: number;
}

export default function CreateSale({
	session_id,
	productId,
	email,
	amount,
	quantity,
}: Props) {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const saveSale = async () => {
			setLoading(true);

			try {
				const response = await fetch('/api/create-sale', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						email,
						amount,
						quantity,
						productId,
						stripeId: session_id,
					}),
				});

				await response.json();

				if (response.status !== 200)
					throw new Error('Failed to create sale');
			} catch (error) {
				throw new Error((error as Error).message);
			} finally {
				setLoading(false);
			}
		};

		saveSale();
	}, [amount, email, productId, quantity, session_id]);

	return <>{loading && <p>Loading...</p>}</>;
}
