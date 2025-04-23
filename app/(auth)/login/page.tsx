import Link from 'next/link';
import LoginForm from '../_components/LoginForm';

export default function LoginPage() {
	return (
		<div className='bg-white rounded-xl shadow-2xl w-96 p-6 relative shadow-black/50'>
			{/* Modal Header */}
			<div className='text-center mb-6'>
				<h2 className='text-2xl font-bold text-gray-800'>
					Log in to Truepi
				</h2>
				<p className='text-gray-600 text-sm mt-2'>
					Welcome back! Let's get you signed in.
				</p>
			</div>

			{/* Social Login */}
			<div className='space-y-4 mb-4'>
				{/* Email Login Form */}
				<LoginForm />
			</div>
			{/* Footer */}
			<div className='text-center text-sm text-gray-600'>
				<p>
					Don't have an account?{' '}
					<Link
						href='/register'
						className='text-primary hover:underline'>
						Register
					</Link>
				</p>
			</div>
		</div>
	);
}
