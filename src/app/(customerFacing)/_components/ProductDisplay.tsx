import React from 'react';
import { getProducts } from '@/config/products';
import Link from 'next/link';
import { formatCurrency } from '@/lib/formatters';

export default async function ProductDisplay() {
  const products = await getProducts();
  
  return (
    <section className='grid grid-cols-1 md:grid-cols-3 gap-6 pb-10 px-6'>
      {products.slice(0, 3).map((product) => (
        <Link
          key={product.id}
          href={`/products/${product.slug}`}
          className='group flex flex-col overflow-hidden rounded-lg border border-border bg-card hover:shadow-lg transition-all'
        >
          <div className='aspect-square overflow-hidden bg-accent'>
            <img
              src={product.image}
              alt={product.name}
              className='object-cover w-full h-full group-hover:scale-105 transition-transform duration-300'
            />
          </div>
          <div className='p-6 flex flex-col gap-2'>
            <h3 className='text-xl font-semibold text-foreground group-hover:text-primary transition-colors'>
              {product.name}
            </h3>
            <p className='text-2xl font-bold text-primary'>
              {formatCurrency(product.priceInCents / 100)}
            </p>
          </div>
        </Link>
      ))}
    </section>
  );
}
