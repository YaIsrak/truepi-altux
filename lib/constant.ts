import { FaUserCheck } from 'react-icons/fa6';
import { HiUsers } from 'react-icons/hi';
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import { MdSupport } from 'react-icons/md';

export const navLinks = [
	{
		name: 'Home',
		href: '/',
	},
	{
		name: 'Products',
		href: '/products',
	},
	{
		name: 'Blog',
		href: '/blog',
	},
	{
		name: 'About',
		href: '/about',
	},
	{
		name: 'Contact',
		href: '/contact',
	},
];

export const featuresList = [
	{
		title: 'Satisfaction',
		description: 'We’re confident you’ll love what you get.',
		icon: FaUserCheck,
	},
	{
		title: '24/7 support',
		description: "Need help? We're chronically online.",
		icon: MdSupport,
	},
	{
		title: 'Warranty',
		description: 'All purchases come with product warranty.',
		icon: HiOutlineClipboardDocumentList,
	},
	{
		title: 'Community',
		description: 'Join our community post-purchase for help.',
		icon: HiUsers,
	},
];
