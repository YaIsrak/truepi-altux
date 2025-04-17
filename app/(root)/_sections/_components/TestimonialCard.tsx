import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { REVIEWS_QUERYResult } from '@/sanity.types';

export function TestimonialCard({
	author,
	description,
}: REVIEWS_QUERYResult[0]) {
	return (
		<div
			className={cn(
				'flex flex-col rounded-lg border-t',
				'bg-gradient-to-b from-muted/50 to-muted/10',
				'p-4 text-start sm:p-6',
				'hover:from-muted/60 hover:to-muted/20',
				'max-w-[320px] sm:max-w-[320px]',
				'transition-colors duration-300',
			)}>
			<div className='flex items-center gap-3'>
				<Avatar className='h-12 w-12'>
					<AvatarImage
						src={'/placeholder_avatar.png'}
						alt={author}
					/>
				</Avatar>
				<div className='flex flex-col items-start'>
					<h3 className='text-md font-semibold leading-none'>{author}</h3>
				</div>
			</div>
			<p className='sm:text-md mt-4 text-sm text-muted-foreground line-clamp-3'>
				{description}
			</p>
			<Dialog>
				<DialogTrigger asChild>
					<Button
						variant='link'
						className='justify-start p-0 m-0'>
						See full review
					</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle className='flex items-center gap-4'>
							<Avatar>
								<AvatarImage src={'/placeholder_avatar.png'} />
							</Avatar>
							{author}
						</DialogTitle>
						<DialogDescription className='mt-4'>
							{description}
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		</div>
	);
}
