'use client';

import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import React from 'react';

const initialOptions = { clientId: 'test', currency: 'USD', intent: 'capture' };

export default function PaypalProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<PayPalScriptProvider options={initialOptions}>
			{children}
		</PayPalScriptProvider>
	);
}
