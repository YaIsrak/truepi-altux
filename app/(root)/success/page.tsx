import { stripe } from '@/lib/stripe';
import { urlFor } from '@/sanity/lib/image';
import { sanityFetch } from '@/sanity/lib/live';
import { SALE_QUERY } from '@/sanity/lib/query';
import CreateSale from './_components/CreateSale';
import SuccessMessage from './_components/SuccessMassage';

export default async function SuccessPage({
	searchParams,
}: {
	searchParams: Promise<any>;
}) {
	const { session_id, productId } = await searchParams;
	const session = await stripe.checkout.sessions.retrieve(session_id);

	const { data: sale } = await sanityFetch({
		query: SALE_QUERY,
		params: { stripeId: session_id },
	});

	return (
		<section className='py-[10vmin]'>
			<div className='container max-w-6xl mx-auto px-4'>
				{sale ? (
					<SuccessMessage
						customerEmail={sale.customerEmail!}
						amount={sale.amount!}
						quantity={sale.quantity!}
						productName={sale?.product?.title ?? 'Unknown Product'}
						productImage={urlFor(
							sale.product?.image as unknown as string,
						).url()}
						stripeId={sale.stripeId!}
					/>
				) : (
					<CreateSale
						session_id={session_id}
						productId={productId}
						email={session.customer_details?.email as string}
						amount={session.amount_total as number}
						quantity={Number(session.metadata?.quantity ?? 0)}
					/>
				)}
			</div>
		</section>
	);
}

// test with query params
// ?session_id=cs_test_a1UBtc35z0K05paZfa41tnHIwpYR4fTfQfg8pydGmQaZtj4Cjmaq9rEKeE&productId=07b0edfb-d928-419f-addb-40defacb1e39
