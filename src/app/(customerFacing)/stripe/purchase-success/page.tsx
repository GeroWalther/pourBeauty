import React from 'react';
import Stripe from 'stripe';
import { notFound } from 'next/navigation';
import ProductOredered from './_component/ProductOredered';
import Image from 'next/image';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
  apiVersion: '2024-06-20',
});

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: { payment_intent: string };
}) {
  const paymentIntent = await stripe.paymentIntents.retrieve(
    searchParams.payment_intent
  );
  const isSuccess = paymentIntent.status === 'succeeded';

  if (!paymentIntent.metadata.products || !isSuccess) {
    return notFound();
  }
  // Parse the products string to an array
  const products = JSON.parse(paymentIntent.metadata.products);

  // I did it with webhook instead
  // if (isSuccess) {
  //   // const city = paymentIntent.shipping?.address?.city;
  //   // const country = paymentIntent.shipping?.address?.country;
  //   // const line1 = paymentIntent.shipping?.address?.line1;
  //   // const line2 = paymentIntent.shipping?.address?.line2;
  //   // const postalCode = paymentIntent.shipping?.address?.postal_code;
  //   // const state = paymentIntent.shipping?.address?.state;
  //   // const address = `${line1}, ${line2}, ${city}, ${state}, ${postalCode}, ${country}`;

  //   // const email = paymentIntent.receipt_email;
  //   // console.log('EMAIL from succPAge: ', email);

  //   // const priceInCents = paymentIntent.amount_received;
  //   // const stripePaymentIntentId = paymentIntent.id;

  //   // saveOrder(address, email!, products, priceInCents, stripePaymentIntentId);
  // }

  return (
    <main className='flex justify-around md:mt-14 pb-20'>
      <div className='md:p-4 px-6'>
        {isSuccess ? (
          <h2 className='4xl font-semibold text-pink-950'>
            Vielen Dank für deine Bestellung!
          </h2>
        ) : (
          <h2 className='4xl font-bold text-red-500'>
            Error! Etwas ist schiefgegangen.
          </h2>
        )}

        <p className=' font-semibold text-pink-900 text-sm'>
          Wir haben deine Bestellung erhalten und werden sie bald bearbeiten.
        </p>
        <div className='flex-col justify-between items-center mt-4'>
          <p className=' font-semibold text-pink-900'>Deine Bestellung: </p>
          <ProductOredered products={products} />
        </div>
      </div>

      <Image
        src={'/512.jpg'}
        alt='thanks for your purchase image'
        height={500}
        width={500}
        className='hidden md:block rounded-md'
      />
    </main>
  );
}
