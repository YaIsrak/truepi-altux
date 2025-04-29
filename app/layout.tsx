import TrackVisitor from '@/components/TrackVisitor';
import { Toaster } from '@/components/ui/sonner';
import type { Metadata } from 'next';
import { SessionProvider } from 'next-auth/react';
import { Euphoria_Script, Hind_Madurai, Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
	variable: '--font-outfit',
	subsets: ['latin'],
});
const hindMadurai = Hind_Madurai({
	variable: '--font-hind_madurai',
	subsets: ['latin'],
	weight: ['700'],
});

const euphoria_script = Euphoria_Script({
	variable: '--font-euphoria_script',
	subsets: ['latin'],
	weight: ['400'],
});
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
			className='scrollbar-thin h-4 scrollbar-thumb-primary scrollbar-track-gray-700 scroll-smooth'
			suppressHydrationWarning>
			<body
				className={`${outfit.className} ${euphoria_script.variable} ${hindMadurai.variable}`}>
				<SessionProvider>
					<TrackVisitor />
					{children}
					<Toaster richColors />
				</SessionProvider>
			</body>
		</html>
	);
}
