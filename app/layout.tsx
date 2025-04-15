import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
});

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
		<html lang='en'>
			<body className={`${poppins.className}`}>{children}</body>
		</html>
	);
}
