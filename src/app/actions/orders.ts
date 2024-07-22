'use server';

import db from '@/db';
import { CartItem } from '@/hooks/use-cart-hook';
import { SHIPPING } from '../../../consts';

export async function saveOrder(
  address: string,
  email: string,
  items: CartItem[],
  pricePaidInCents: number
) {
  // Create the order first
  const order = await db.order.create({
    data: {
      address,
      email,
      pricePaidInCents,
      shippingCost: SHIPPING,
    },
  });

  // Prepare ordered products data with the created order ID
  const orderedProductsData = items.map((item) => ({
    orderId: order.id,
    product: item.product.name,
    quantity: item.product.quantity,
  }));

  // Create ordered products
  await db.orderedProduct.createMany({
    data: orderedProductsData,
  });

  return order;
}
