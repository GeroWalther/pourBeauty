import { useMemo } from 'react';
import { SHIPPING } from '../../consts';
import { CartItem } from './use-cart-hook';

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

  const toPay = useMemo(() => discountedPrice + SHIPPING, [discountedPrice]);

  return {
    itemCount,
    subItemTotal,
    totalCart,
    toPay,
    discountedPrice,
  };
};

export default useCartTotals;
