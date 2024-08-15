'use client';
import CartItem from '@/app/(customerFacing)/_components/CartItem';
import { useLanguage } from '@/contexts/LanguageProvider';
import { Product, useCart } from '@/hooks/use-cart-hook';
import { formatCurrency } from '@/lib/formatters';
import { Separator } from '@radix-ui/react-dropdown-menu';
import React, { useEffect } from 'react';
import { SHIPPING } from '../../../../../../consts';

export default function ProductOredered({ products }: { products: Product[] }) {
  const { language } = useLanguage();
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []);
  const qty = products.map((p) => p.quantity);
  const subTotal = products.reduce(
    (total, p, index) => total + p.price * qty[index],
    0
  );

  return (
    <section className='flex w-full flex-col pr-0 sm:max-w-lg'>
      <div className='space-y-2.5 pr-6'></div>
      <>
        <div className='flex w-full flex-col pr-6'>
          {products.map((p) => (
            <CartItem key={p.id} product={p} invoice />
          ))}
        </div>

        <div className='space-y-4 pr-6'>
          <Separator />
          <div className='space-y-1-5 text-sm'>
            <div className='flex'>
              <span className='flex-1'>Subtotal</span>
              <span>{formatCurrency(subTotal)}</span>
            </div>
            <div className='flex'>
              <span className='flex-1'>
                {language == 'de' && ' Versand'}
                {language == 'en' && 'Shipping'}
              </span>
              <span>{formatCurrency(SHIPPING)}</span>
            </div>
            <div className='flex'>
              <span className='flex-1'>Total</span>
              <span>{formatCurrency(subTotal + SHIPPING)}</span>
            </div>
          </div>
        </div>
      </>
    </section>
  );
}
