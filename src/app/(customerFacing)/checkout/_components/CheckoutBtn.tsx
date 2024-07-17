'use client';
import { Button, buttonVariants } from '@/components/ui/button';
import { Product, useCart } from '@/hooks/use-cart-hook';
import React, { useState } from 'react';
import { toast } from 'sonner';
import useCartTotals from '@/hooks/use-to-pay';
import { formatCurrency } from '@/lib/formatters';

export default function CheckoutBtn() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { items } = useCart();
  const { toPay } = useCartTotals(items);
  const itemsToCheckout = items.map((item) => item.product);

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
        toast.success('Erfolgreich bezahlt!');
      } else {
        const errorData = await response.json();
        console.error('Error creating payment intent:', errorData.error);
        toast.message('Ein Fehler bei der Bezahlung ist aufgetreten.');
      }
    } catch (error) {
      console.error('Failed to fetch:', error);
      toast.message('Ein Fehler bei der Bezahlung ist aufgetreten.');
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <>
      <p>Gesamtsumme: {formatCurrency(toPay)}</p>
      <Button
        disabled={isLoading}
        onClick={() => checkout(itemsToCheckout)}
        className={buttonVariants({
          className: 'w-full bg-orange-500',
        })}>
        {isLoading ? 'In Bearbeitung...' : 'Zahlen'}
      </Button>
    </>
  );
}
