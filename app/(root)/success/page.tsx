export default async function SuccessPage({
	searchParams,
}: {
	searchParams: Promise<any>;
}) {
	const { session_id } = await searchParams;

	return (
		<section className='py-[10vmin]'>
			<div className='container max-w-6xl mx-auto px-4'>
				sdsdsdhjh
				<p>{session_id}</p>
			</div>
		</section>
	);
}

// test with query params
// ?session_id=cs_test_a1Go16LMWR40OHAcWdzdnjvmsqDa3QhBJhjJvUt2y9oLbVGPmG6IOwUs5Q
