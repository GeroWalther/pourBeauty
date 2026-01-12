import { useMemo } from 'react';
import { SHIPPING } from '../../consts';
import { CartItem } from './use-cart-hook';

import { FREE_SHIPPING_THRESHOLD } from '../../consts';

const useCartTotals = (items: CartItem[], discount: number) => {
  const itemCount = useMemo(() => {
    return items.reduce((acc, item) => acc + item.product.quantity, 0);
  }, [items]);

  const subItemTotal = useMemo(() => {
    return items.reduce(
      (total, { product }) => total + product.price * product.quantity,
      0
    );
  }, [items]);

  const totalCart = useMemo(() => subItemTotal, [subItemTotal]);

  const discountedPrice =
    discount == 0 ? totalCart : totalCart - (discount / 100) * totalCart;

  // Free shipping threshold is based on subtotal after discount
  const shippingCost = discountedPrice >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING;

  const toPay = useMemo(() => discountedPrice + shippingCost, [discountedPrice, shippingCost]);

  return {
    itemCount,
    subItemTotal,
    totalCart,
    toPay,
    discountedPrice,
    shippingCost,
  };
};

export default useCartTotals;
