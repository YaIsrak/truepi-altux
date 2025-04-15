import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const getPrimaryFont = Inter({
	variable: '--font-primary',
	subsets: ['latin'],
});

// const neueHaas = localFont({
// 	variable: '--font-neue-haas',
// 	src: [
// 		{
// 			path: '../public/fonts/Neue-Haas-Unica-Pro/NeueHaasUnicaPro-Bold.ttf',
// 			weight: '700',
// 			style: 'normal',
// 		},
// 		{
// 			path: '../public/fonts/Neue-Haas-Unica-Pro/NeueHaasUnicaPro-Regular.ttf',
// 			weight: '400',
// 			style: 'normal',
// 		},
// 	],
// });

export const metadata: Metadata = {
	title: 'Truepi',
	description: 'Welcome to Social. Hit us up if you need anything!',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			suppressHydrationWarning>
			<body className={`${getPrimaryFont.variable} dark antialiased`}>
				{children}
			</body>
		</html>
	);
}
