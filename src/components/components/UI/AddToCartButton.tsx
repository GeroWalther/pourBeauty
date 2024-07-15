'use client';

import { useCartStore } from '@/store/useCartStore';
import { ProductType } from '@/types/productTypes';
import PrimaryBtn from './reusable/PrimaryBtn';

export default function AddToCartButton({
  name,
  image,
  unit_amount,
  id,
  quantity,
}: ProductType) {
  const cartStore = useCartStore();
  return (
    <>
      <PrimaryBtn
        onClick={() =>
          cartStore.addToCart({ id, image, unit_amount, quantity, name })
        }>
        To Cart
      </PrimaryBtn>
    </>
  );
}
