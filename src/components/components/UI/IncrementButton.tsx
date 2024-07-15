import { useCartStore } from '@/store/useCartStore';
import { ProductType } from '@/types/productTypes';
import React from 'react';
import { BiPlus } from 'react-icons/bi';
interface IncementProps {
  product: ProductType;
}
export default function IncrementButton({ product }: IncementProps) {
  const cartStore = useCartStore();
  return (
    <button
      onClick={() =>
        cartStore.addToCart({
          id: product.id,
          unit_amount: product.unit_amount,
          quantity: product.quantity,
          name: product.name,
          image: product.image,
        })
      }>
      <BiPlus />
    </button>
  );
}
