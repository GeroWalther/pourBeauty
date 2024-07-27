import { saveOrder } from '@/app/actions/orders';

import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Resend } from 'resend';

import { SHIPPING } from '../../../../consts';
import { Product } from '@/hooks/use-cart-hook';
import db from '@/db';

console.log('process.env.RESEND_API_KEY', process.env.RESEND_API_KEY);
console.log('process.env.STRIPE_SECRET_KEY', process.env.STRIPE_SECRET_KEY);
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const event = stripe.webhooks.constructEvent(
    await req.text(),
    req.headers.get('stripe-signature') as string,
    process.env.STRIPE_WEBHOOK_SECRET as string
  );

  if (event.type === 'charge.succeeded') {
    const charge = event.data.object;
    console.log(charge);
    const productsAsString = charge.metadata.products;
    const products = JSON.parse(productsAsString);

    const email = charge.billing_details.email;
    const pricePaidInCents = charge.amount;
    // const customerName = charge.billing_details.name;

    const city = charge.shipping?.address?.city;
    const country = charge.shipping?.address?.country;
    const line1 = charge.shipping?.address?.line1;
    const line2 = charge.shipping?.address?.line2;
    const postalCode = charge.shipping?.address?.postal_code;
    const state = charge.shipping?.address?.state;
    const address = `${line1}, ${
      line2 ? line2 + ', ' : ''
    } ${city}, ${state}, ${postalCode}, ${country}`;

    if (email == null || address == null) {
      return new NextResponse('Bad Request', { status: 400 });
    }

    //  Save order in DB
    await saveOrder(address, email!, products, pricePaidInCents);

    // send email to customer
    // await resend.emails.send({
    //   from: `Support <${process.env.SENDER_EMAIL}>`,
    //   to: email,
    //   subject: 'Order Confirmation',
    //   react: <h1>Hi</h1>,
    // });
  }
  return new NextResponse();
}
