import { saveOrder } from '@/app/actions/orders';

import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Resend } from 'resend';
import PurchaseReceiptEmail from '@/email/PurchaseReceipt';

// console.log('process.env.RESEND_API_KEY', process.env.RESEND_API_KEY);
// console.log('process.env.STRIPE_SECRET_KEY', process.env.STRIPE_SECRET_KEY);
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const event = stripe.webhooks.constructEvent(
      await req.text(),
      req.headers.get('stripe-signature') as string,
      process.env.STRIPE_WEBHOOK_SECRET as string
    );
    if (event.type !== 'charge.succeeded') {
      return new NextResponse('Event type not supported', { status: 400 });
    }

    if (event.type === 'charge.succeeded') {
      const charge = event.data.object;
      const productsAsString = charge.metadata.products;
      const products = JSON.parse(productsAsString);
      //console.log('PRODUCTS:', products);

      const email = charge.billing_details.email;
      const pricePaidInCents = charge.amount;
      const customerName = charge.billing_details.name;
      const discountCode = charge.metadata.discountCode;

      const city = charge.shipping?.address?.city;
      const country = charge.shipping?.address?.country;
      const line1 = charge.shipping?.address?.line1;
      const line2 = charge.shipping?.address?.line2;
      const postalCode = charge.shipping?.address?.postal_code;
      const state = charge.shipping?.address?.state;
      const address = `${line1}, ${
        line2 ? line2 + ', ' : ''
      } ${city}, ${state}, ${postalCode}, ${country}`;

      if (email == null || address == null || customerName == null) {
        return new NextResponse('Bad Request', { status: 400 });
      }

      //  Save order in DB
      const { order } = await saveOrder(
        address,
        customerName,
        email!,
        products,
        pricePaidInCents,
        discountCode
      );

      try {
        // email to admin
        console.log('EMAIL DISCOCODE: ', order.discountCode);
        const sendEmail = await resend.emails.send({
          from: `BESTELLUNGSEINGANG <${process.env.SENDER_EMAIL}>`,
          to: process.env.SHOP_EMAIL as string,
          subject: 'Neue Bestellung eingegangen',
          react: (
            <PurchaseReceiptEmail
              products={products}
              order={{
                id: order.id,
                createdAt: order.createdAt,
                customerName,
                address,
                email,
                pricePaidInCents,
                shippingCost: order.shippingCost,
                discountCode: order.discountCode,
              }}
            />
          ),
        });
      } catch (error) {
        console.log('Error to admin email:', error);
      }

      try {
        // send email to customer
        await resend.emails.send({
          from: `Bestellung PURE BEAUTY BIOLOGICAL <${process.env.SENDER_EMAIL}>`,
          to: email,
          subject: 'Vielen Dank für deine Bestellung',
          react: (
            <PurchaseReceiptEmail
              isAdmin={false}
              products={products}
              order={{
                id: order.id,
                createdAt: order.createdAt,
                customerName,
                address,
                email,
                pricePaidInCents,
                shippingCost: order.shippingCost,
                discountCode: order.discountCode,
              }}
            />
          ),
        });
      } catch (e) {
        console.error('Error to customer email:', e);
      }
    }
    return new NextResponse('Webhook processed successfully!', { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return new NextResponse('Internal Server Error!', { status: 500 });
  }
}
