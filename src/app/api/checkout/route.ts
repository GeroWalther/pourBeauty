import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
  apiVersion: '2024-06-20',
});

async function POST(req: NextRequest): Promise<NextResponse | undefined> {
  try {
    const { totalAmountinCents, products } = req.body as any;
    const paymentIntent = await stripe.paymentIntents.create({
      // TODO : amount does not work with totalAmountinCents but why?
      amount: 1000,
      currency: 'EUR',
      description: 'Miss Glow Bestellung',
      metadata: {
        products,
      },
    });
    if (paymentIntent.client_secret === null) {
      throw new Error('Stripe failed to create payment intent.');
    }

    return NextResponse.json(
      {
        message: 'PaymentIntent created successfully',
        client_secret: paymentIntent.client_secret,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error creating payment intent on server: ', error);

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
