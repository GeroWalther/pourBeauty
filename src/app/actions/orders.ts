'use server';

import db from '@/db';
import { Product } from '@/hooks/use-cart-hook';
import { SHIPPING, FREE_SHIPPING_THRESHOLD } from '../../../consts';

export async function saveOrder(
  address: string,
  customerName: string,
  email: string,
  items: Product[],
  pricePaidInCents: number,
  discountCode: string
) {
  // Calculate subtotal to determine shipping
  const subTotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  // Apply discount if present in discountCode? We don't have the % here, so shipping is based on subtotal.
  const shippingCost = subTotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING;

  const order = await db.order.create({
    data: {
      address,
      email,
      pricePaidInCents,
      shippingCost,
      customerName,
      discountCode,
    },
  });

  if (!order) {
    throw new Error('Failed to create order');
  }

  // Prepare ordered products data with the created order ID
  const orderedProductsData = items.map((item) => ({
    orderId: order.id,
    product: item.name,
    quantity: item.quantity,
  }));

  // Create ordered products
  await db.orderedProduct.createMany({
    data: orderedProductsData,
  });

  // Get the actual array of all created orderedProducts
  const allOrderedProducts = await db.orderedProduct.findMany({
    where: {
      orderId: order.id,
    },
  });

  return { orderedProducts: allOrderedProducts, order };
}
