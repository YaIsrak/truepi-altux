import Link from 'next/link';
import RegisterForm from '../_components/RegisterForm';

export default function RegisterPage() {
	return (
		<div className='bg-white rounded-xl shadow-2xl w-96 p-6 relative shadow-black/50'>
			<div className='text-center mb-6'>
				<h2 className='text-2xl font-bold text-gray-800'>
					Register in to Hotel Booking
				</h2>
				<p className='text-gray-600 text-sm mt-2'>
					Welcome back! Let's get you signed up.
				</p>
			</div>

			<div className='space-y-4 mb-4'>
				<RegisterForm />
			</div>
			{/* Footer */}
			<div className='text-center text-sm text-gray-600'>
				<p>
					Already have an account?{' '}
					<Link
						href='/login'
						className='text-primary hover:underline'>
						Login
					</Link>
				</p>
			</div>
		</div>
	);
}
