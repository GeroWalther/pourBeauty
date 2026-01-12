'use client';
import { ShoppingCart } from 'lucide-react';

import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import Image from 'next/image';
import { useCart } from '@/hooks/use-cart-hook';
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
import { useLanguage } from '@/contexts/LanguageProvider';
import { SHIPPING } from '../../../../consts';
import useCartTotals from '@/hooks/use-to-pay';
import CheckoutForm from '../checkout/_components/CheckoutForm';
import DiscountCodeInput from './DiscountCodeInput';

export default function Cart() {
  const { items, discount, isOpen, setIsOpen } = useCart();
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const { itemCount, totalCart, discountedPrice, shippingCost } = useCartTotals(
    items,
    discount
  );
  // console.log(
  //   'ITEMCOUNT: ',
  //   itemCount,
  //   'totalCart: ',
  //   totalCart,
  //   'total: ',
  //   toPay,
  //   'discountedPrice: ',
  //   discountedPrice
  // );

  const { language } = useLanguage();

  useEffect(() => {
    setIsMounted(true);
  }, []);
  // console.log('ITEMS: ', items);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className='group -m-2 flex items-center p-2 relative'>
        <ShoppingCart
          aria-hidden='true'
          className='h-6 w-6 flex-shrink-0 text-foreground group-hover:text-primary'
        />
        {isMounted && itemCount > 0 && (
          <span className='absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center'>
            {itemCount}
          </span>
        )}
      </SheetTrigger>

      <SheetContent
        setOpen={setIsOpen}
        className='flex w-full flex-col pr-0 sm:max-w-lg'>
        <SheetHeader className='space-y-2.5 pr-6'>
          <SheetTitle>
            {language == 'de' && ' Warenkorb'}
            {language == 'en' && 'Cart'} ({itemCount})
          </SheetTitle>
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
            <div className='space-y-4 px-6'>
              <Separator />
              <DiscountCodeInput />
              <div className='space-y-1-5 text-sm'>
                <div className='flex'>
                  <span className='flex-1'>Subtotal</span>
                  <span>{formatCurrency(totalCart)}</span>
                </div>
                {discount > 0 && (
                  <>
                    <div className='flex'>
                      <span className='flex-1 font-bold text-primary'>
                        {language == 'de' && 'Rabatt'}
                        {language == 'en' && 'Discount'}
                      </span>
                      <span className='font-bold text-primary'>
                        - {discount} %
                      </span>
                    </div>
                    <div className='flex'>
                      <span className='flex-1'></span>
                      <span>{formatCurrency(discountedPrice)}</span>
                    </div>
                  </>
                )}

                <div className='flex'>
                  <span className='flex-1'>
                    {language == 'de' && 'Versand'}
                    {language == 'en' && 'Shipping'}
                  </span>
                  <span>{shippingCost === 0 ? 'Kostenlos' : formatCurrency(shippingCost)}</span>
                </div>

                <div className='flex'>
                  <span className='flex-1'>Total</span>
                  <span>{formatCurrency(discountedPrice + shippingCost)}</span>
                </div>
              </div>
              <SheetFooter>
                <SheetTrigger asChild>
                  <CheckoutForm />
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
                src='/emptyCart.png'
                fill
                alt='empty shopping cart image'
              />
            </div>
            <div className='text-xl font-semibold'>
              {language == 'de' && 'Der Warenkorb ist leer.'}
              {language == 'en' && 'Your cart is empty.'}
            </div>
            <SheetTrigger asChild>
              <Link
                href='/shop'
                className={buttonVariants({
                  variant: 'link',
                  size: 'sm',
                  className: 'text-sm text-primary hover:text-primary/80',
                })}>
                {language == 'de' && 'Zum Shop'}
                {language == 'en' && 'Go to Shop'}
              </Link>
            </SheetTrigger>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
