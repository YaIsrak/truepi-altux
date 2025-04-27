import MobileNav from '@/app/(root)/_sections/_components/MobileNav';
import TextRotateAnimation from '@/components/ui/TextRotateAnimation';
import Link from 'next/link';
import UserButton from './UserButton';

const navItems = [
	{
		name: 'Home',
		href: '/',
	},
	{
		name: 'Products',
		href: '#products',
	},
	{
		name: 'Compare',
		href: '#compare',
	},
	{
		name: 'Features',
		href: '#features',
	},
];

export default function Navbar() {
	return (
		<nav className='bg-transparent w-full top-0 left-0 py-4 z-50'>
			<div className='container mx-auto px-4'>
				<div className='flex items-center justify-between'>
					{/* logo */}
					<Link
						href={'/'}
						className='text-2xl text-white'>
						CashMachine.
						<span className='font-parisienne text-4xl font-bold ml-1 text-primary'>
							iO
						</span>
					</Link>
					{/* main menu */}
					<div className='hidden md:flex items-center gap-8'>
						{navItems.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className='text-white/50 hover:text-primary transition-all text-xl'>
								<TextRotateAnimation>{item.name}</TextRotateAnimation>
							</Link>
						))}
					</div>

					<div className='flex items-center gap-2'>
						{/* auth */}
						<UserButton />
						<div className='block md:hidden'>
							<MobileNav navitems={navItems} />
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
