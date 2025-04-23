import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import PaypalProvider from '@/components/layout/paypal-provider';
import { SanityLive } from '@/sanity/lib/live';

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<PaypalProvider>
			<Navbar />
			<main>{children}</main>
			<Footer />

			<SanityLive />
		</PaypalProvider>
	);
}
