import { navLinks } from '@/lib/constant';
import { FaFacebookF, FaGithub, FaTwitter } from 'react-icons/fa6';

export default function Footer() {
	return (
		<footer
			className='bg-gray-900 text-gray-300 py-12'
			id='contact'>
			<div className='container mx-auto px-4 max-w-6xl'>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-8'>
					{/* Logo + Description */}
					<div>
						<h2 className='text-white text-lg font-semibold mb-2 flex items-center gap-2'>
							Truepi
						</h2>
						<p className='text-sm'>
							Transforming businesses through Innovation
						</p>
					</div>

					{/* Products */}
					<div>
						<h3 className='text-white font-medium mb-3'>Products</h3>
						<ul className='space-y-2 text-sm'>
							<li>
								<a
									href='#'
									className='hover:text-white'>
									Features
								</a>
							</li>
							<li>
								<a
									href='#'
									className='hover:text-white'>
									Solutions
								</a>
							</li>
							<li>
								<a
									href='#'
									className='hover:text-white'>
									Enterprise
								</a>
							</li>
							<li>
								<a
									href='#'
									className='hover:text-white'>
									Pricing
								</a>
							</li>
						</ul>
					</div>

					{/* Company */}
					<div>
						<h3 className='text-white font-medium mb-3'>Company</h3>
						<ul className='space-y-2 text-sm'>
							{navLinks.map((link) => (
								<li key={link.href}>
									<a
										href={link.href}
										className='hover:text-white'>
										{link.name}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Connect */}
					<div>
						<h3 className='text-white font-medium mb-3'>Connect</h3>
						<div className='flex space-x-4'>
							<a
								href='#'
								className='hover:text-white'>
								<FaTwitter />
							</a>
							<a
								href='#'
								className='hover:text-white'>
								<FaFacebookF />
							</a>
							<a
								href='#'
								className='hover:text-white'>
								<FaGithub />
							</a>
						</div>
					</div>
				</div>

				{/* Bottom Copyright */}
				<div className='border-t border-gray-700 pt-4 text-center text-sm'>
					&copy; {new Date().getFullYear()} Company. All rights reserved.
				</div>
			</div>
		</footer>
	);
}
