import Navbar from '@/components/layout/Navbar';

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Navbar />
			<main>{children}</main>
		</>
	);
}
