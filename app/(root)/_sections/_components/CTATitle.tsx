import LeftShowScroll from '@/components/ui/LeftShowScroll';
import Word from '@/components/ui/Word';
import Image from 'next/image';

// TURN DIGITAL DOWNLOADS INTO DAILY DOLLARS — BY RESELLING PDF COURSES
// JOURNALS TOOL KITS TEMPLATES + MORE START CONFIDENTLY SCALE FAST
// WITH PROVEN STRATEGIES

export default function CTATitle() {
	return (
		<div className='text-6xl font-bold text-center justify-center'>
			<div className='flex items-center justify-center'>
				<Word
					className='justify-center'
					wordClassName='mr-5'>
					TURN DIGITAL
				</Word>
				<Word
					className='justify-center'
					wordClassName='mr-5'
					isParisienne>
					DOWNLOADS
				</Word>
			</div>
			<div className='flex items-center justify-center'>
				<Word
					className='justify-center'
					wordClassName='mr-5'>
					INTO DAILY
				</Word>
				<Word
					className='justify-center'
					wordClassName='mr-5'>
					DOLLARS
				</Word>
				<LeftShowScroll>
					<div className='relative'>
						<Image
							src='/sale.png'
							alt='sale'
							width={100}
							height={100}
						/>
					</div>
				</LeftShowScroll>
			</div>
			<div className='flex items-center justify-center'>
				<Word
					wordClassName='mr-5'
					isParisienne>
					BY RESELLING
				</Word>
				<Word wordClassName='mr-5'>PDF COURSES</Word>
				<Word
					className='justify-center'
					wordClassName='mr-5'>
					JOURNALS
				</Word>
			</div>
			<div className='flex items-center justify-center'>
				<Word
					className='justify-center'
					wordClassName='mr-5'>
					TOOL KITS
				</Word>
				<Word
					className='justify-center'
					wordClassName='mr-5'>
					TEMPLATES
				</Word>
				<Word
					className='justify-center'
					wordClassName='mr-5'>
					+
				</Word>
				<Word
					className='justify-center'
					wordClassName='mr-5'>
					MORE
				</Word>
			</div>
			<div className='flex items-center justify-center'>
				<Word
					className='justify-center'
					wordClassName='mr-5'>
					START
				</Word>
				<LeftShowScroll>
					<div className='relative'>
						<Image
							src='/pp.png'
							alt='card4'
							width={100}
							height={100}
							className='rounded-md'
						/>
					</div>
				</LeftShowScroll>
				<Word
					className='justify-center'
					wordClassName='mr-5'>
					CONFIDENTLY
				</Word>
			</div>
			<div className='flex items-center justify-center'>
				<Word
					className='justify-center'
					wordClassName='mr-5'>
					SCALE FAST
				</Word>
				<Word
					className='justify-center'
					wordClassName='mr-5'>
					WITH PROVEN
				</Word>
				<Word
					className='justify-center'
					wordClassName='mr-5'
					isParisienne>
					STRATEGIES
				</Word>
			</div>
		</div>
	);
}
