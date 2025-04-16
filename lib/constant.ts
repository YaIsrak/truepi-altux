import { FaUserCheck } from 'react-icons/fa6';
import { HiUsers } from 'react-icons/hi';
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import { MdSupport } from 'react-icons/md';

export const navLinks = [
	{
		name: 'Home',
		href: '/#home',
	},
	{
		name: 'Products',
		href: '/#products',
	},
	{
		name: 'Blog',
		href: '/blog',
	},
	{
		name: 'About',
		href: '#about',
	},
	{
		name: 'Contact',
		href: '#contact',
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

export const testimonials = [
	{
		author: {
			name: 'Emma Thompson',
			handle: '@emmaai',
			avatar:
				'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
		},
		text: 'Using this AI platform has transformed how we handle data analysis. The speed and accuracy are unprecedented.',
		href: 'https://twitter.com/emmaai',
	},
	{
		author: {
			name: 'David Park',
			handle: '@davidtech',
			avatar:
				'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
		},
		text: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution.",
		href: 'https://twitter.com/davidtech',
	},
	{
		author: {
			name: 'Sofia Rodriguez',
			handle: '@sofiaml',
			avatar:
				'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
		},
		text: 'Finally, an AI tool that actually understands context! The accuracy in natural language processing is impressive.',
	},
];
