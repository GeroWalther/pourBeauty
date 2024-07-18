'use client';
import { Button, buttonVariants } from '@/components/ui/button';
import { Product, useCart } from '@/hooks/use-cart-hook';
import React, { FormEvent, useEffect, useState } from 'react';
import { toast } from 'sonner';
import useCartTotals from '@/hooks/use-to-pay';
import { formatCurrency } from '@/lib/formatters';
import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Loader2 } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
);

export default function CheckoutStripe() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [clientSecret, setClientSecret] = useState<string>('');
  const { items } = useCart();
  const { toPay } = useCartTotals(items);
  const itemsToCheckout = items.map((item) => item.product);
  console.log(clientSecret);

  useEffect(() => {
    async function checkout(products: Product[]) {
      setIsLoading(true);
      try {
        const response = await fetch('/api/checkout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            totalAmountinCents: toPay * 100,
            products,
          }),
        });
        if (response.ok) {
          const data = await response.json();
          console.log('Payment intent created:', data);
          setClientSecret(data.client_secret);
          toast.success('Erfolgreich bezahlt!');
        } else {
          const errorData = await response.json();
          console.error('Error creating payment intent:', errorData.error);
          toast.message('Ein Fehler bei der Bezahlung ist aufgetreten.');
        }
      } catch (error) {
        console.error('Failed to fetch:', error);
        toast.message('Ein Fehler ist aufgetreten.');
      } finally {
        setIsLoading(false);
      }
    }
    checkout(itemsToCheckout);
  }, []);

  return (
    <div>
      {isLoading && (
        <Loader2 size={50} color='#f23cce' className=' animate-spin ' />
      )}
      {clientSecret && (
        <Elements options={{ clientSecret }} stripe={stripePromise}>
          <Form toPay={toPay} />
        </Elements>
      )}
    </div>
  );
}

function Form({ toPay }: { toPay: number }) {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (stripe == null || elements == null) {
      return;
    }

    setIsLoading(true);

    // check for existing order

    stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY}/stripe/purchase-success`,
      },
    });
  }

  return (
    <form>
      <Card>
        <CardHeader>
          <span className=' font-semibold text-md text-primary -mb-4'>
            Persönliche Informationen
          </span>
        </CardHeader>
        <CardContent>
          <Label htmlFor='name'>Name</Label>
          <Input type='text' id='name' name='name' required />
          <Label htmlFor='email'>Email</Label>
          <Input type='text' id='email' name='email' required />
          <Label htmlFor='address'>Versandadresse</Label>
          <Input type='text' id='address' name='address' required />
        </CardContent>
      </Card>
      <Card className='mt-5'>
        <CardHeader>
          <span className=' font-semibold text-md text-primary -mb-4'>
            Zahlung
          </span>
        </CardHeader>
        <CardDescription className='text-destructive-foreground'>
          Error
        </CardDescription>
        <CardContent>
          <PaymentElement />
        </CardContent>
        <CardFooter>
          <Button
            disabled={stripe === null || elements === null || isLoading}
            className={buttonVariants({
              className: 'w-full bg-orange-500 mt-4 font-semibold text-lg',
            })}>
            {isLoading
              ? 'Ladevorgang...'
              : `Jetzt Zahlen' - ${formatCurrency(toPay)}`}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
