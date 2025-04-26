export default function Footer() {
	return (
		<footer className='py-[15vmin] bg-[#121212]'>
			<div className='container mx-auto px-4'>
				<div className='flex flex-col md:flex-row items-center justify-center'>
					<div className='flex-1 text-5xl'>
						<h3 className='font-bold text-5xl max-w-md'>
							<span className='font-parisienne text-7xl font-normal'>
								C
							</span>
							HASE FOREVER OR FINALLY MOVE TOWARDS
						</h3>
					</div>
					<div className='flex-1 text-9xl text-primary uppercase font-bold'>
						Success
					</div>
				</div>

				<div className='flex items-center justify-between mt-16 opacity-50'>
					<p>
						Terms of refund <br />© 2025 www.cashmachine.io - All rights
						reserved.
					</p>
					<p>Terms and conditions</p>
					<p>Contact</p>
				</div>
			</div>
		</footer>
	);
}
