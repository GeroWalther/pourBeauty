'use client';
import { ShoppingCart } from 'lucide-react';

import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/button';
import Image from 'next/image';
import { Product, useCart } from '@/hooks/use-cart-hook';
import CartItem from './CartItem';
import { useEffect, useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { formatCurrency } from '@/lib/formatters';

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { toast } from 'sonner';
const SHIPPING = 15;
export default function Cart() {
  const { items } = useCart();
  const itemsToCheckout = items.map((item) => item.product);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  // console.log('ITEMS: ', items);

  const itemCount = items.reduce((acc, item) => acc + item.product.quantity, 0);

  const subItemTotal = items.reduce(
    (total: any, { product }: any) => total + product.price,
    0
  );
  const totalCart = subItemTotal * itemCount;
  const toPay = totalCart + SHIPPING;

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
    <Sheet>
      <SheetTrigger className='group -m-2 flex items-center p-2'>
        <ShoppingCart
          aria-hidden='true'
          className='h-6 w-6 flex-shrink-0 text-stone-100 group-hover:text-orange-200'
        />
        <span className='ml-2 text-sm font-medium text-orange-100 group-hover:text-orang-200'>
          {isMounted ? itemCount : 0}
        </span>
      </SheetTrigger>

      <SheetContent
        setOpen={setOpen}
        className='flex w-full flex-col pr-0 sm:max-w-lg'>
        <SheetHeader className='space-y-2.5 pr-6'>
          <SheetTitle>Warenkorb ({itemCount})</SheetTitle>
        </SheetHeader>
        {itemCount > 0 ? (
          <>
            <ScrollArea>
              <div className='flex w-full flex-col pr-6'>
                {items.map(({ product }: any) => (
                  <CartItem key={product.id} product={product} />
                ))}
              </div>
            </ScrollArea>
            <div className='space-y-4 pr-6'>
              <Separator />
              <div className='space-y-1-5 text-sm'>
                <div className='flex'>
                  <span className='flex-1'>Subtotal</span>
                  <span>{formatCurrency(totalCart)}</span>
                </div>
                <div className='flex'>
                  <span className='flex-1'>Versand</span>
                  <span>{formatCurrency(SHIPPING)}</span>
                </div>
                <div className='flex'>
                  <span className='flex-1'>Total</span>
                  <span>{formatCurrency(toPay)}</span>
                </div>
              </div>
              <SheetFooter>
                <SheetTrigger asChild>
                  <Button
                    disabled={isLoading}
                    onClick={() => checkout(itemsToCheckout)}
                    className={buttonVariants({
                      className: 'w-full bg-orange-500',
                    })}>
                    {isLoading ? 'In Bearbeitung...' : 'Zahlen'}
                  </Button>
                </SheetTrigger>
              </SheetFooter>
            </div>
          </>
        ) : (
          <div className='flex h-full flex-col items-center justify-center space-y-1'>
            <div
              aria-hidden='true'
              className='relative mb-4 h-60 w-60 text-muted-foreground'>
              <Image
                src={process.env.NEXT_PUBLIC_SERVER_URL + '/emptyCart.png'}
                fill
                alt='empty shopping cart image'
              />
            </div>
            <div className='text-xl font-semibold'>Der Warenkorb ist leer.</div>
            <SheetTrigger asChild>
              <Link
                href='/missGlow'
                className={buttonVariants({
                  variant: 'link',
                  size: 'sm',
                  className: 'text-sm text-muted-foreground text-stone-600',
                })}>
                Füge Produkte hinzu.
              </Link>
            </SheetTrigger>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
