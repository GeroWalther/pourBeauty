'use client';
import CartItem from '@/app/(customerFacing)/_components/CartItem';
import { useLanguage } from '@/contexts/LanguageProvider';
import { Product } from '@/hooks/use-cart-hook';
import { formatCurrency } from '@/lib/formatters';
import { Separator } from '@radix-ui/react-dropdown-menu';
import React from 'react';
import { SHIPPING, FREE_SHIPPING_THRESHOLD } from '../../../../../../consts';

export default function ProductOredered({
  products,
  pricePaidInCents,
}: {
  products: Product[];
  pricePaidInCents: number;
}) {
  const { language } = useLanguage();

  const subTotal = products.reduce(
    (total, p) => total + p.price * p.quantity,
    0
  );

  const totalPaid = pricePaidInCents / 100;
  // Derive shipping shown on thank-you page: totalPaid - subTotal (assumes no tax)
  const derivedShipping = Math.max(0, totalPaid - subTotal);
  const shippingCost = derivedShipping > 0 ? derivedShipping : (subTotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING);

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
            {shippingCost > 0 && (
              <div className='flex'>
                <span className='flex-1'>
                  {language == 'de' && 'Versand'}
                  {language == 'en' && 'Shipping'}
                </span>
                <span>{formatCurrency(shippingCost)}</span>
              </div>
            )}
            <div className='flex'>
              <span className='flex-1'>Total</span>
              <span>{formatCurrency(totalPaid)}</span>
            </div>
          </div>
        </div>
      </>
    </section>
  );
}
