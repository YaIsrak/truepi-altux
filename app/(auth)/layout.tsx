export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className='fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center'>
			{children}
		</div>
	);
}
