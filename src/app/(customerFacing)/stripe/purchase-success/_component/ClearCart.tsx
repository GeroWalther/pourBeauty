'use client';

import { useCart } from '@/hooks/use-cart-hook';
import { useEffect } from 'react';

export default function ClearCart() {
  const { clearCart, setDiscount, setDiscountCode, setIsOpen } = useCart();

  useEffect(() => {
    // Clear cart and close the sheet when we land on the success page
    clearCart();
    setDiscount(0);
    setDiscountCode('');
    setIsOpen(false);
  }, [clearCart, setDiscount, setDiscountCode, setIsOpen]);

  return null;
}
