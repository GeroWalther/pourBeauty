import { saveOrder } from '@/app/actions/orders';

import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Resend } from 'resend';
import PurchaseReceiptEmail from '@/email/PurchaseReceipt';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_dummy', {
  apiVersion: '2024-06-20',
});
const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy');

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    const sig = req.headers.get('stripe-signature') as string;

    const event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET as string
    );

    // Helper to send emails + save order
    const processOrder = async (params: {
      products: any[];
      email: string;
      customerName: string;
      address: string;
      pricePaidInCents: number;
      discountCode?: string;
    }) => {
      const { products, email, customerName, address, pricePaidInCents, discountCode } = params;

      const { order } = await saveOrder(
        address,
        customerName,
        email,
        products,
        pricePaidInCents,
        discountCode || '-'
      );

      try {
        await resend.emails.send({
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
        await resend.emails.send({
          from: `Bestellung PUREBEAUTY <${process.env.SENDER_EMAIL}>`,
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
    };

    switch (event.type) {
      case 'payment_intent.succeeded': {
        const pi = event.data.object as Stripe.PaymentIntent;
        const productsStr = pi.metadata?.products || '';
        const products = productsStr ? JSON.parse(productsStr) : [];

        const pricePaidInCents = pi.amount_received ?? pi.amount;
        const email = pi.receipt_email || pi.charges?.data?.[0]?.billing_details?.email || '';
        const customerName =
          pi.shipping?.name || pi.charges?.data?.[0]?.billing_details?.name || '';
        const addr = pi.shipping?.address || pi.charges?.data?.[0]?.shipping?.address;
        const address = addr
          ? `${addr.line1 || ''}${addr.line2 ? ', ' + addr.line2 : ''}, ${addr.city || ''}, ${
              addr.state || ''
            }, ${addr.postal_code || ''}, ${addr.country || ''}`
          : '';

        if (!email || !customerName || !products.length) {
          console.warn('Missing data on payment_intent.succeeded – skipping.');
          break;
        }

        await processOrder({
          products,
          email,
          customerName,
          address,
          pricePaidInCents,
          discountCode: pi.metadata?.discountCode,
        });
        break;
      }
      case 'charge.succeeded': {
        const charge = event.data.object as Stripe.Charge;

        // Try to read products directly from charge, else fetch PI metadata
        let products: any[] = [];
        let discountCode: string | undefined;
        if (charge.metadata?.products) {
          products = JSON.parse(charge.metadata.products);
          discountCode = charge.metadata.discountCode;
        } else if (charge.payment_intent) {
          const pi = await stripe.paymentIntents.retrieve(
            typeof charge.payment_intent === 'string'
              ? charge.payment_intent
              : charge.payment_intent.id
          );
          const productsStr = pi.metadata?.products || '';
          products = productsStr ? JSON.parse(productsStr) : [];
          discountCode = pi.metadata?.discountCode;
        }

        const pricePaidInCents = charge.amount;
        const email = charge.billing_details?.email || '';
        const customerName = charge.billing_details?.name || '';
        const addr = charge.shipping?.address || charge.billing_details?.address;
        const address = addr
          ? `${addr.line1 || ''}${addr.line2 ? ', ' + addr.line2 : ''}, ${addr.city || ''}, ${
              addr.state || ''
            }, ${addr.postal_code || ''}, ${addr.country || ''}`
          : '';

        if (!email || !customerName || !products.length) {
          console.warn('Missing data on charge.succeeded – skipping.');
          break;
        }

        await processOrder({
          products,
          email,
          customerName,
          address,
          pricePaidInCents,
          discountCode,
        });
        break;
      }
      default: {
        // Ignore other events to avoid 4xx in Stripe dashboard
        break;
      }
    }

    return new NextResponse('ok', { status: 200 });
  } catch (error) {
    console.error('Stripe webhook error:', error);
    return new NextResponse('Internal Server Error!', { status: 500 });
  }
}
