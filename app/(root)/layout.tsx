import Navbar from '@/components/layout/Navbar';
import { SanityLive } from '@/sanity/lib/live';

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Navbar />
			<main>{children}</main>
			<SanityLive />
		</>
	);
}
