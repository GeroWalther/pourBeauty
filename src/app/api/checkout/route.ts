import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
  apiVersion: '2024-06-20',
});

async function POST(req: NextRequest): Promise<NextResponse | undefined> {
  try {
    const { totalAmountinCents } = req.body as any;
    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalAmountinCents,
      currency: 'eur',
      description: 'Miss Glow Bestellung',
      metadata: {
        integration_check: 'accept_a_payment',
      },
    });
    return NextResponse.json(
      { success: 'PaymentIntent created successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error creating payment intent:', error);
    return NextResponse.json(
      { error: 'Failed to create payment intent' },
      { status: 500 }
    );
  }
}
// return NextResponse.json({ success: 'implemented' }, { status: 200 });

function GET(): NextResponse {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
}

export { POST, GET };
